import PricingCard from "./pricing-card";

const plans = [
  {
    name: "Basic plan",
    description: "Perfect for individuals.",
    price: "$5",
    isPopular: false,
    features: [
      "All product features",
      "Unlimited lists & tasks",
      "Priority support",
      "Unlimited tasks",
      "Unlimited file storage",
      "Unlimited projects",
    ],
  },
  {
    name: "Pro plan",
    description: "Ideal for small teams.",
    price: "$9",
    isPopular: true,
    features: [
      "All product features",
      "Unlimited lists & tasks",
      "Priority support",
      "Unlimited tasks",
      "Unlimited file storage",
      "Unlimited projects",
    ],
  },
  {
    name: "Advanced plan",
    description: "Best for large organizations.",
    price: "$15",
    isPopular: false,
    features: [
      "All product features",
      "Unlimited lists & tasks",
      "Priority support",
      "Unlimited tasks",
      "Unlimited file storage",
      "Unlimited projects",
    ],
  },
];

export default function Pricing(): React.JSX.Element {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-16 text-center">
          <h3 className="text-md shadow-secondary/45 mx-auto w-48 rounded-full bg-transparent px-4 py-2 font-medium tracking-widest text-gray-500 shadow-md ">
            PRICING
          </h3>
          <h1 className="my-6 text-4xl font-bold tracking-wide text-gray-900">
            Simple pricing plans
          </h1>
        </div>

        <div className="relative grid grid-cols-1 gap-8 -space-x-2 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
