import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

const DashboardCard = ({ title, value, icon: Icon, change = null }) => {
  const isPositive = change && change.value >= 0;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
        {Icon && <Icon className="text-gray-800 size-6 dark:text-white/90" />}
      </div>

      <div className="flex items-end justify-between mt-5">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{title}</span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">{value}</h4>
        </div>

        {change && (
          <span className={isPositive ? "text-green-400" : "text-red-600"}>
            {isPositive ? <ArrowUpIcon className="inline size-4" /> : <ArrowDownIcon className="inline size-4" />}
            {Math.abs(change.value)}%
          </span>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
