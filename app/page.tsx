"use client";

import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Title,
  Grid,
  Metric,
} from "@tremor/react";
import Line from "./charts/Line";
import Pie from "./charts/Pie";
import { Kpi } from "./data/types";

const kpis: Kpi = {
  kpi1: "This Fund",
  kpi2: "Some benchmark",
  kpi3: "Some other benchmark",
};

export default function Dashboard() {
  return (
    <main className="p-12">
      <Metric>Poarch Capital</Metric>
      <Title color="cyan" className="mt-3">
        Funds Performance Details
      </Title>
      <TabGroup className="mt-6">
        <TabList color="cyan">
          <Tab>Performance</Tab>
          <Tab>Current Allocations</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="mt-6">
              <Line kpis={kpis} startDate="2019" endDate="2023" />
            </div>
          </TabPanel>
          <TabPanel>
            <Grid numItems={2} className="mt-6 gap-5">
              <Pie period="current" />
              <Pie period="past" />
            </Grid>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
