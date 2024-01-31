import { InformationCircleIcon } from "@heroicons/react/solid";
import { Card, DonutChart, Title, Icon, Flex, Legend } from "@tremor/react";
import * as helpers from "./helpers";
import { allocationsThisYear, allocationsLastYear } from "../data/database";

var title;
var color;
var allocations;

type PieProps = {
  period: "current" | "past";
};

const Pie = (props: PieProps) => {
  props.period === "current"
    ? ((title = "Current"),
      (color = "cyan"),
      (allocations = allocationsThisYear))
    : ((title = "Last Year's"),
      (color = "indigo"),
      (allocations = allocationsLastYear));

  const categories = allocations.map((item) => item.name);

  const colors = [
    color + "-900",
    color + "-800",
    color + "-700",
    color + "-600",
    color + "-500",
    color + "-400",
  ];

  return (
    <Card>
      <div className="md:flex">
        <Title>{title} Allocations</Title>
        <Icon
          icon={InformationCircleIcon}
          variant="simple"
          tooltip="Data hardcoded to match test specification pdf."
        />
      </div>
      <Flex>
        <DonutChart
          className="mt-6 w-2/3"
          data={allocations}
          category="amount"
          index="name"
          valueFormatter={helpers.valueFormatter}
          colors={colors}
          variant="pie"
          showAnimation={true}
          animationDuration={750}
        />
        <Legend
          className="mt-3 w-1/3"
          categories={categories}
          colors={colors}
        />
      </Flex>
    </Card>
  );
};

export default Pie;
