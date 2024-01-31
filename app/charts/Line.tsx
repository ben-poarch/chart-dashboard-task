import { InformationCircleIcon } from "@heroicons/react/solid";
import {
  LineChart,
  Color,
  Flex,
  Icon,
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
  const [selectedKpi, setSelectedKpi] = useState("All");
  const kpiList = Object.values(props.kpis);

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
    selectedKpi === "All" ? areaChartArgsAll : areaChartArgsSelected;

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
            value={selectedKpi}
            onValueChange={setSelectedKpi}
          >
            <SelectItem value="All">Show All</SelectItem>
            <SelectItem value={props.kpis.kpi1}>{props.kpis.kpi1}</SelectItem>
            <SelectItem value={props.kpis.kpi2}>{props.kpis.kpi2}</SelectItem>
            <SelectItem value={props.kpis.kpi3}>{props.kpis.kpi3}</SelectItem>
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
