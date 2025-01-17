import { Button } from "@repo/ui/button";
import { Check, X, Zap } from "lucide-react";

interface PricingProps {
  name: string;
  description: string;
  price: string;
  isPopular: boolean;
  features: string[];
}

export default function PricingCard({
  name,
  description,
  price,
  isPopular,
  features,
}: PricingProps): React.JSX.Element {
  const ConditionclassNames = (): string => {
    if (isPopular) {
      return "bg-primary z-10 transform text-white shadow-xl md:scale-105";
    } else if (price === "$15") {
      return "border border-gray-200 bg-gray-50 text-primary shadow-sm md:rotate-6 md:transform";
    } else if (price === "$5") {
      return "border border-gray-200 bg-gray-50 text-primary shadow-sm md:-rotate-6 md:transform";
    }
    return "";
  };
  return (
    <div className={`relative rounded-2xl p-8 ${ConditionclassNames()}`}>
      {isPopular ? (
        <div className="-right-4 -top-4 hidden -rotate-12 transform rounded-xl bg-yellow-50 p-2 shadow-lg md:absolute">
          <Zap className="h-10 w-10 text-yellow-400" />
        </div>
      ) : null}

      <h3 className="mb-4 text-xl font-bold">{name}</h3>
      <p
        className={`text-sm ${
          isPopular ? "text-blue-100" : "text-gray-500"
        } mb-6`}
      >
        {description}
      </p>

      <div className="mb-6 flex items-end gap-2">
        <h3 className="text-4xl font-bold">{price}</h3>
        <p className={`isPopular ? 'text-blue-100' : 'text-gray-500'`}>
          /month
        </p>
      </div>

      <Button
        className={`mb-8 w-full rounded-full px-4 py-2 ${
          isPopular
            ? "text-primary bg-background hover:bg-background/45"
            : "bg-primary hover:bg-accent text-white"
        }`}
        text="Get started"
      />

      {isPopular ? (
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li className="flex items-center gap-3" key={index}>
              <Check className="h-5 w-5 text-red-100" />
              <span className="text-md font-semibold">{feature}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-4">
          {features.slice(0, 2).map((feature, index) => (
            <li className="flex items-center gap-3" key={index}>
              <Check className="text-primary h-5 w-5" />
              <span className="text-md font-semibold">{feature}</span>
            </li>
          ))}
          {features.slice(2, 7).map((feature, index) => (
            <li className="flex items-center gap-3" key={index}>
              <X className="h-5 w-5 text-red-500" />
              <span className="text-md font-semibold">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
