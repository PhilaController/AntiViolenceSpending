<template>
  <div id="app">
    <!-- Intro + Charts -->
    <div class="intro-section">
      <div class="intro-subsection">
        <p>
          In July 2017, the Kenney Administration established the Office of
          Violence Prevention to coordinate and evaluate the City of
          Philadelphia’s spending on anti-violence programs. The Office of
          Violence Prevention released
          <a
            href="https://www.phila.gov/documents/the-philadelphia-roadmap-to-safer-communities/"
            target="blank_"
          >“The Philadelphia Roadmap to Safer Communities,”</a>
          its strategy to prevent gun violence and reduce rising gun violence
          rates, in January 2019. To date, the strategy’s progress has been
          limited, with violence continuing at the highest level in more than a
          decade.
        </p>
        <p>
          In an effort to better understand the City’s approach to addressing
          gun violence and rising homicide rates, the Controller’s Office is
          releasing the City’s budgeted spending on violence reduction programs
          for the current fiscal year (fiscal year 2020), ranging from July 1,
          2019 to June 30, 2020. It summarizes the allocated spending by
          program and provides descriptions of the currently funded strategies,
          as well as their funding levels.
        </p>
        <p>
          Currently, the City has budgeted about $15 million for violence
          reduction programs in fiscal year 2020 (FY20), with $5.4 million of
          this funding allocated during a
          <a
            href="https://www.phila.gov/2019-11-06-mayor-announces-expanded-initiatives-to-combat-gun-violence/"
            target="blank_"
          >mid-year transfer</a> ordinance that expanded its
          existing violence reduction programs and introduced additional funding
          for new programs. The funding is spread across four
          departments/offices: the Office of Violence Prevention in the Managing
          Director's Office, Licenses and Inspections, the Police department,
          and the Streets department. Spending is budgeted in three main areas:
          payroll for department personnel, contracts with outside firms, and
          equipment and supplies. The funding levels for these programs, as well
          as the types of spending, are summarized in the chart below.
        </p>
      </div>

      <!-- Charts -->
      <div class="chart-section">
        <div>
          <h3 class="text-center">Office of Violence Prevention (OVP)</h3>
          <SpendingChart
            :data="allData['Office of Violence Prevention']"
            height="440"
            :showLegend="true"
          />
        </div>
        <div>
          <h3 class="text-center">Licenses and Inspections</h3>
          <SpendingChart
            :data="allData['Licenses and Inspections']"
            height="70"
            :showLegend="false"
          />
        </div>
        <div>
          <h3 class="text-center">Police Department</h3>
          <SpendingChart :data="allData['Police']" height="140" :showLegend="false" />
        </div>
        <div>
          <h3 class="text-center">Streets Department</h3>
          <SpendingChart :data="allData['Streets']" height="70" :showLegend="false" />
        </div>
      </div>

      <p>
        The majority of the Administration’s funding to date has not been on
        evidence-based programs that target the small group of individuals
        responsible for the majority of violence. While initiatives like blight
        remediation and workforce development are certainly important for
        long-term, transformational change in the community, national experts on
        urban violence believe the strategies that work best to reduce homicides
        focus specifically on those most likely to shoot or be shot. Programs with
        this kind of strategic focus have been deployed successfully in other
        cities across the country. Several such programs were detailed in the
        Office of the City Controller
        <a
          href="https://controller.phila.gov/philadelphia-audits/economic-impact-of-homicides/"
          target="blank_"
        >report</a> on the economic impact of gun
        violence and homicides in Philadelphia. Released in October 2019, the goal
        of the report was to use the potential economic benefit of reducing
        homicides as a leverage point for the City to consider alternative or more
        concerted investment in proven violence reduction strategies, and
        ultimately, save lives. The Controller’s Office continues to believe that
        investing in evidence-based strategies that target those most likely to
        shoot or be shot in neighborhoods most impacted by violence will be most
        successful in reducing gun violence immediately.
      </p>
    </div>

    <!-- Details section -->
    <div class="details-section">
      <h2>Detailed Violence Reduction Budget by Program</h2>

      <p>
        This section includes funding amounts and detailed descriptions of the City’s
        currently funded violence reduction initiatives. Descriptions are based on
        information provided by the Office of Violence Prevention or sourced directly
        from the City’s budget documents. The total FY20 allocation listed for each
        program includes any additional funding received as part of the mid-year budget
        transfer.
      </p>

      <h4>Youth Violence Reduction Partnership (YVRP)</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$3,100,975
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$236,964
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>
          Operating since 1999, the Youth Violence Reduction Partnership (YVRP)
          works to reduce youth homicides by providing intensive supervision and
          support for youth and young adults, under 25 years of age, on juvenile
          or adult probation who are most at risk to kill or be killed. The
          program is a multi-agency effort and includes the
          <a
            href="https://www.paan1989.org/programs"
            target="blank_"
          >Philadelphia Anti-Violence Anti-Drug Network</a>
          (PAAN) and the
          <a href="https://www.courts.phila.gov/" target="blank_">
            First
            Judicial District’s
          </a> Adult Probation & Parole Department (APPD). In
          FY20, APPD required a mid-year transfer of $236,964 in order to fully
          fund the salaries of 26 APPD staff members who provide YVRP services.
        </li>
      </ul>

      <h4>Blight Remediation</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$2,963,952
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$1,213,952
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>The Licenses and
          Inspections department is responsible for reducing blight and
          improving environmental factors in high risk neighborhoods, as well as
          cleaning, sealing, and/or demolishing vacant properties. The mid-year
          transfer funds 27 new positions, including one new building inspector,
          two additional Clean & Seal crews (and their work materials), and two
          additional
          <a
            href="https://www.phila.gov/departments/community-life-improvement-program/"
            target="blank_"
          >
            Community Life Improvement
            Program
          </a> crews.
        </li>
      </ul>

      <h4>Payroll for OVP and Related Staff</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$2,675,509
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$0
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>Allocated funding
          supports 10 total positions in the Office of Violence Prevention,
          including 2 Deputy Managing Directors and 8 Assistant Managing
          Directors. The funding also supports positions in the District
          Attorney’s Office and the First Judicial District.
        </li>
      </ul>

      <h4>Community Crisis Intervention Program (CCIP)</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$1,827,792
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$1,327,792
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>
          The Community Crisis Intervention Program (CCIP) is based on the nationally
          recognized
          <a
            href="https://www.ncjrs.gov/App/Publications/abstract.aspx?ID=123137"
            target="blank_"
          >Crisis Intervention Network</a> (Network), which was
          initiated in Philadelphia in the mid 1970s to address gang violence.
          Similar to the Network and the
          <a
            href="https://cvg.org/"
            target="blank_"
          >Cure Violence</a> model, CCIP uses credible messengers
          who are from Philadelphia's most violent neighborhoods as crisis
          workers to:
          <ul>
            <li>
              Foster meaningful relationships in the most violent
              communities;
            </li>
            <li>
              Steer those involved in gun violence and other criminal
              activities into positive alternatives;
            </li>
            <li>Mediate neighborhood conflicts; and</li>
            <li>
              Respond rapidly to neighborhood crises to de-escalate
              situations and prevent retaliation.
            </li>
          </ul>The additional funding included in the mid-year transfer supports
          the expansion of CCIP, providing funding to increase the number of
          street outreach positions from 28 to 64 by the end of FY20.
        </li>
      </ul>

      <h4>Additional Civilian Police Positions</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$1,266,085
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$0
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>This FY20 funding
          supports the addition of 22 civilian positions in the Police
          Department who are focused on the city’s Violence Reduction
          initiative.
        </li>
      </ul>

      <h4>Targeted Community Investment Grants</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$1,000,000
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$750,000
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>These grants
          support community-based programs and activities in Philadelphia that
          focus on violence prevention and intervention services with a special
          emphasis on supporting programs that strive to reduce and prevent gun
          violence among young men between the ages of 16 and 34. With $250,000
          originally allocated in the FY20 budget, this additional funding
          brings the total funding up to $1 million, which will support the
          <a
            href="https://www.phila.gov/2020-01-06-city-awards-1m-to-grassroots-programs-to-reduce-gun-violence/"
            target="blank_"
          >second round of grant awards</a>. Earlier in 2019,
          the Administration
          <a
            href="https://www.phila.gov/2019-06-20-city-awards-over-700000-to-grassroots-efforts-to-stem-gun-violence/"
            target="blank_"
          >awarded $700,000</a> to community organizations.
        </li>
      </ul>

      <h4>Group Violence Intervention</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$750,000
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$750,000
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>Group Violence
          Intervention (GVI), also known as focused deterrence, is an
          evidence-based violence reduction strategy, targeting the small group
          of people typically responsible for the majority of violence. It
          requires law enforcement, community organizers, and social service
          providers to work together to produce a balanced approach to reduce
          violence. This funding, along with $500,000 appropriated by the PA
          House of Representatives, will support a pilot implementation of the
          GVI program in West Philadelphia, expected to launch in spring 2020.
        </li>
      </ul>

      <h4>Gunshot Detection Sensory/Cameras</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$368,000
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$0
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>The FY20
          allocation provides funding to upgrade the Acoustic Gun Shot Detection
          system, which uses computer technology to assist in the location of
          gunshots and can provide this information to responding law
          enforcement.
        </li>
      </ul>

      <h4>Street Lighting Upgrades</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$300,000
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$300,000
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>The mid-year
          transfer will fund the costs of materials and equipment for street
          lighting upgrades in the neighborhoods where the Police Department’s
          Operation Pinpoint is focused.
        </li>
      </ul>

      <h4>Rapid Response Team</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$282,500
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$282,500
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>The Rapid
          Response team, part of the
          <a
            href="https://dbhids.org/networkofneighbors"
            target="blank_"
          >
            Network of Neighbors Responding to
            Violence
          </a>, will provide crisis response services to Philadelphians
          affected by violence. The mid-year transfer provides funding for six
          additional response team members, as well as salary for two positions
          in the Office of Violence Prevention who are responsible for
          coordinating the response team’s efforts.
        </li>
      </ul>

      <h4>Mentorship Program</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$250,000
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$250,000
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>The Mentorship
          Program will provide single and group mentoring services to youth and
          young adults who are at a high risk of killing or being killed. The
          mid-year transfer will fund the estimated costs required to implement
          the program, which may include stipends for participating mentors and
          mentees.
        </li>
      </ul>

      <h4>Program Evaluation</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$150,000
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$150,000
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>The mid-year
          transfer will fund program evaluations of the city’s various violence
          reduction programs.
        </li>
      </ul>

      <h4>Operation Pinpoint Upgrades</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$97,000
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$0
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>The FY20
          allocation provides additional funding for the Police Department to
          procure outside contracts related to
          <a
            href="https://drive.google.com/file/d/1kTZ_7FVc-Z4lorb4eehHLyCqk3vimD2Y/view#_ga=2.5886583.515757694.1578685998-938512139.1577721771"
            target="blank_"
          >Operation Pinpoint</a>, the Police
          Department’s violence reduction strategy that focuses on
          intelligence-based and community-oriented policing.
        </li>
      </ul>

      <h4>Police Assisted Diversion Pilot</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$83,200
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$83,200
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>The
          <a href="https://www.phillypolice.com/programs-services/pad/" target="blank_">
            Police
            Assisted Diversion
          </a> (PAD) program diverts low-level, non-violent
          offenders away from the criminal justice system and gives them access
          to social services. The additional allocation for PAD in the mid-year
          transfer will fund an additional response team of behavioral health
          professionals, who work with the Philadelphia Police Department’s East
          Division to offer health and social services as part of the
          <a
            href="https://www.phila.gov/programs/philadelphia-resilience-project/"
            target="blank_"
          >
            Resilience
            Project
          </a>.
        </li>
      </ul>

      <h4>Workforce Development</h4>
      <ul>
        <li>
          <span class="details-label">Total FY20 funding:&nbsp;</span>$50,000
        </li>
        <li>
          <span class="details-label">Mid-year transfer:&nbsp;</span>$50,000
        </li>
        <li>
          <span class="details-label">Description:&nbsp;</span>The funding
          provided in the mid-year transfer supports the addition of a
          Coordinator position in the
          <a
            href="https://www.phila.gov/departments/department-of-commerce/about-us/divisions/office-of-workforce-development/"
            target="blank_"
          >Office of Workforce Development</a> dedicated
          to the Violence Reduction initiative.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SpendingChart from "./components/SpendingChart.vue";

export default {
  name: "app",
  components: {
    SpendingChart
  },
  data() {
    return { allData: require("@/data.json") };
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.details-label {
  font-weight: bold;
}

a,
a:visited {
  color: #2176d2;
}
a:hover {
  color: #0f4d90;
}
</style>
