"use client";

import Image from "next/image";
import check from "@/assets/images/check.png";
import cross from "@/assets/images/cross.png";
import useFetchData from "@/utils/hooks/useFetchData";
import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";
import Link from "next/link";

const PricingList = () => {
  const { data: featureData, loading: featureLoading } =
    useFetchData("/features");
  const { data: pricingData, loading: pricingLoading } =
    useFetchData("/pricing?depth=3");

  return (
    <section className="my-container mb-10 lg:mb-0">
      <h1 className="text-center text-3xl lg:text-6xl font-medium my-5 lg:my-10 font-hind">
        Kretaa-এর মাধ্যমে ব্যবসা হোক সম্পূর্ণ <br className="hidden lg:block" />
        <span className="font-semibold text-primary">অটোমেটেড ও সহজ!</span>
      </h1>

      {featureLoading || pricingLoading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <div className="overflow-x-auto font-hind">
            <table className="min-w-full price-table">
              <thead>
                <tr className="bg-primaryLight">
                  <th className="p-4 lg:text-xl text-left border-r-8 border-white">
                    স্মার্ট প্যাকেজ, স্মার্ট ব্যবসা
                  </th>
                  {pricingData?.[0]?.package?.map((plan) => (
                    <th
                      key={plan.id}
                      className="p-4 text-center border-r-8 border-white"
                    >
                      <div className="font-bold text-xl lg:text-2xl">
                        {plan.name}
                      </div>
                      <div className="text-sm text-gray-600 font-normal">
                        {plan.descriptions}
                      </div>
                      {plan.offer_price &&
                        plan?.name?.toLowerCase() !== "custom" && (
                          <div className="mt-1">
                            <div className="flex items-center justify-center">
                              <span className="line-through text-red-500 text-lg">
                                ৳{plan.regular_price}
                              </span>
                            </div>
                            <span className="font-semibold text-2xl text-primary">
                              ৳{plan.offer_price}
                            </span>
                          </div>
                        )}
                      {(!plan.offer_price || plan.offer_price === 0) &&
                        plan?.name?.toLowerCase() !== "custom" && (
                          <div className="mt-1">
                            <span className="font-semibold text-2xl text-primary">
                              ৳{plan.offer_price}
                            </span>
                          </div>
                        )}

                      {plan?.name?.toLowerCase() !== "custom" && (
                        <span className="font-normal text-sm">
                          ({plan.time_period})
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureData?.map((feature) => (
                  <tr
                    key={feature.id}
                    className="border-8 border-white bg-primaryLight"
                  >
                    <td className="p-4 font-medium border-r-8 border-white">
                      {feature.name}
                    </td>
                    {pricingData?.[0]?.package?.map((plan) => (
                      <td key={plan.id} className="p-4 border-r-8 border-white">
                        {plan.available_feature.some(
                          (f) => f.id === feature.id
                        ) ? (
                          <div className="flex justify-center">
                            <Image
                              src={check}
                              alt="check"
                              width={30}
                              height={30}
                            />
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <Image
                              src={cross}
                              alt="cross"
                              width={20}
                              height={30}
                            />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}

                <tr>
                  <td className="p-4 font-medium border-r-8 border-white"></td>
                  {pricingData?.[0]?.package?.map((plan) => (
                    <td
                      key={plan.id}
                      className="py-4 xl:p-4 border-r-8 border-white text-center"
                    >
                      <Link
                        href={"/contact"}
                        className="text-primary bg-primaryLight font-hind border border-primary hover:bg-primary hover:text-white duration-300 px-0.5 xl:px-10 py-2 rounded-lg font-medium"
                      >
                        {plan?.name === "Custom"
                          ? "যোগাযোগ করুন"
                          : "অর্ডার করুন"}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingList;
