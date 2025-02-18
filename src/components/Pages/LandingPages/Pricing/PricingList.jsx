"use client";

import Image from "next/image";
import check from "@/assets/images/check.png";
import cross from "@/assets/images/cross.png";
import useFetchData from "@/utils/hooks/useFetchData";
import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";

const PricingList = () => {
  const { data: featureData, loading: featureLoading } =
    useFetchData("/features");
  const { data: pricingData, loading: pricingLoading } =
    useFetchData("/pricing?depth=3");

  return (
    <section>
      {featureLoading || pricingLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="my-container pt-10">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-primaryLight">
                  <th className="p-4 text-xl text-left border-r-8 border-white">
                    Perfect Package for you
                  </th>
                  {pricingData?.[0]?.package?.map((plan) => (
                    <th
                      key={plan.id}
                      className="p-4 text-center border-r-8 border-white"
                    >
                      <div className="font-bold text-2xl">{plan.name}</div>
                      <div className="text-sm text-gray-600">
                        {plan.descriptions}
                      </div>
                      {plan.offer_price && (
                        <div className="mt-2">
                          <div className="flex items-center justify-center gap-2">
                            <span className="line-through text-red-500 text-lg">
                              {plan.regular_price}
                            </span>
                            <span className="font-normal text-sm">
                              ({plan.time_period})
                            </span>
                          </div>
                          <span className="font-bold text-2xl text-primary">
                            {plan.offer_price}
                          </span>
                        </div>
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
                              width={30}
                              height={30}
                            />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingList;
