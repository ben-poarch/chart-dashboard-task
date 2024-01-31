import { InformationCircleIcon } from "@heroicons/react/solid";
import {
  LineChart,
  Color,
  Flex,
  Icon,
  Tab,
  TabGroup,
  TabList,
  Title,
  Card,
  Select,
  SelectItem,
  Subtitle,
} from "@tremor/react";
import { useState } from "react";
import { valueFormatter } from "./helpers";
import { performance } from "../data/database";
import { Kpi } from "../data/types";

type LineProps = {
  kpis: Kpi;
  startDate: string;
  endDate: string;
};

const Line = (props: LineProps) => {
  const [value, setValue] = useState("All");
  const kpiList = Object.values(props.kpis);
  const selectedKpi = kpiList[parseInt(value)];

  const areaChartArgsAll = {
    minValue: -10,
    maxValue: 110,
    showGridLines: false,
    showAnimation: true,
    className: "mt-5 h-72",
    data: performance,
    index: "date",
    categories: kpiList,
    colors: ["cyan", "gray", "gray"],
    showLegend: true,
    enableLegendSlider: true,
    valueFormatter: valueFormatter,
    yAxisWidth: 50,
  };
  const areaChartArgsSelected = {
    minValue: -10,
    maxValue: 110,
    showGridLines: false,
    showAnimation: true,
    className: "mt-5 h-72",
    data: performance,
    index: "date",
    categories: [selectedKpi],
    colors: ["cyan"] as Color[],
    showLegend: false,
    enableLegendSlider: true,
    valueFormatter: valueFormatter,
    yAxisWidth: 50,
  };
  const areaChartArgs =
    value === "All" ? areaChartArgsAll : areaChartArgsSelected;

  return (
    <Card>
      <div className="md:flex justify-between">
        <div>
          <Flex
            className="space-x-0.5"
            justifyContent="start"
            alignItems="center"
          >
            <Title>Performance</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Data randomly generated via faker (fakerjs.dev)."
            />
          </Flex>
          <Subtitle>
            An overview from {props.startDate} - {props.endDate}
          </Subtitle>
        </div>
        <div>
          <Select
            defaultValue="All"
            enableClear={false}
            value={value}
            onValueChange={setValue}
          >
            <SelectItem value="All">Show All</SelectItem>
            <SelectItem value="0">{props.kpis.kpi1}</SelectItem>
            <SelectItem value="1">{props.kpis.kpi2}</SelectItem>
            <SelectItem value="2">{props.kpis.kpi3}</SelectItem>
            {/* <SelectItem value="3">{props.kpis.kpi4}</SelectItem> */}
          </Select>
        </div>
      </div>
      {/* web */}
      <div className="mt-8 hidden sm:block">
        <LineChart {...areaChartArgs} />
      </div>
      {/* mobile */}
      <div className="mt-8 sm:hidden">
        <LineChart {...areaChartArgs} startEndOnly={true} showYAxis={false} />
      </div>
    </Card>
  );
};

export default Line;
