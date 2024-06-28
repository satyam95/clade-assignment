import InfoCard from "@/components/InfoCard";
import SkillPill from "@/components/SkillPill";
import StatsCard from "@/components/StatsCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="border border-[#E7E7E7]">
        <div className="px-6 md:px-10 xl:px-[60px] 2xl:px-[100px]">
          <div className="flex items-center gap-4 md:gap-[72px] overflow-x-auto">
            <div className="text-[#DC4A2D] min-w-24 textLg font-semibold h-[50px] xl:h-[65px] flex items-center relative">
              Job preview
              <div className="h-0.5 bg-[#DC4A2D] w-[65px] absolute bottom-0 left-0 right-0 mx-auto"></div>
            </div>
            <div className="suvaGrey textLg font-medium h-[50px] xl:h-[65px] flex items-center">
              Applicants
            </div>
            <div className="suvaGrey textLg font-medium h-[50px] xl:h-[65px] flex items-center">
              Match
            </div>
            <div className="suvaGrey textLg font-medium h-[50px] xl:h-[65px] flex items-center">
              Messages
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="grow">
          <div className="border-b border-[#E7E7E7]">
            <div className="px-6 md:px-10 xl:px-[60px] 2xl:px-[100px] pt-9 pb-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-3">
                  <h2 className="heading1 font-semibold gray24">
                    Senior Product Designer
                  </h2>
                  <div className="hidden xl:block w-1 h-1 rounded-full bg-[#D1D1D1]"></div>
                  <div className="font-medium suvaGrey textS">
                    posted 2 days ago
                  </div>
                  <div className="py-px pl-1.5 pr-2 border border-[#ABEFC6] rounded-full bg-[#ECFDF3] w-fit xl:inline-block">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#17B26A]"></div>
                      <div className="greenDark textXs font-medium interFont">
                        Open
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
                  <div className="gap-2 flex items-center 2xl:min-w-[168px]">
                    <Image
                      src="/marker.svg"
                      alt="location icon"
                      height={24}
                      width={24}
                    />
                    <h3 className="font-medium textLg text-[#5D5D5D]">
                      Delaware, USA
                    </h3>
                  </div>
                  <div className="hidden md:block w-1 h-1 rounded-full bg-[#D1D1D1] mx-4"></div>
                  <div className="gap-3 flex items-center 2xl:min-w-[159px]">
                    <Image
                      src="/coins-stacked.svg"
                      alt="salary icon"
                      height={24}
                      width={24}
                    />
                    <h3 className="font-medium textLg text-[#5D5D5D]">
                      $300k-$400k
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-[#E7E7E7]">
            <div className="px-6 md:px-10 xl:px-[60px] 2xl:px-[100px] py-8">
              <div className="flex gap-6 2xl:gap-16 items-start flex-wrap">
                <div className="flex flex-col gap-2 min-w-[170px]">
                  <h4 className="font-medium grayDark textS">
                    Skills Required
                  </h4>
                  <SkillPill
                    icon="/figma.png"
                    iconAlt="figma icon"
                    text="Figma"
                  />
                  <SkillPill
                    icon="/illustrator.png"
                    iconAlt="illustrator icon"
                    text="Adobe Illustrator"
                  />
                  <SkillPill icon="/xd.png" iconAlt="xd icon" text="Adobe XD" />
                </div>
                <div className="flex flex-col gap-2 min-w-[170px]">
                  <h4 className="font-medium grayDark textS">
                    Preferred Language
                  </h4>
                  <h5 className="font-semibold textBase gray24">English</h5>
                </div>
                <div className="flex flex-col gap-2 min-w-[170px]">
                  <h4 className="font-medium grayDark textS">Type</h4>
                  <h5 className="font-semibold textBase gray24">Full time</h5>
                </div>
                <div className="flex flex-col gap-2 min-w-[170px]">
                  <h4 className="font-medium grayDark textS">
                    Years of Experience
                  </h4>
                  <h5 className="font-semibold textBase gray24">
                    3+ Years of Experience
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-[#E7E7E7]">
            <div className="px-6 md:px-10 xl:px-[60px] 2xl:px-[100px] py-8">
              <div className="md:min-w-[526px]">
                <h4 className="font-medium grayDark textS">About the job</h4>
                <div className="pt-2 pb-2.5">
                  <ul className="flex flex-col">
                    <li className="gray24 textBaseL font-medium">
                      1. Handle the UI/UX research design
                    </li>
                    <li className="gray24 textBaseL font-medium">
                      2. Work on researching on latest web applications designs
                      & trends
                    </li>
                    <li className="gray24 textBaseL font-medium">
                      3. Work on conceptualizing and visualizing
                    </li>
                    <li className="gray24 textBaseL font-medium">
                      4. Work on creating graphics content and other graphic
                      related works
                    </li>
                  </ul>
                  <div>
                    <div className="gray24 textBaseL font-medium">
                      Benefits:
                    </div>
                    <ul className="flex flex-col">
                      <li className="flex items-center gray24 textBaseL font-medium">
                        <span className="inline-block w-[5px] h-[5px] bg-[#3d3d3d] rounded-full mx-[9px]" />
                        Health insurance
                      </li>
                      <li className="flex items-center gray24 textBaseL font-medium">
                        <span className="inline-block w-[5px] h-[5px] bg-[#3d3d3d] rounded-full mx-[9px]" />
                        Provident Fund
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="gray24 textBaseL font-medium">
                      Schedule:
                    </div>
                    <ul className="flex flex-col">
                      <li className="flex items-center gray24 textBaseL font-medium">
                        <span className="inline-block w-[5px] h-[5px] bg-[#3d3d3d] rounded-full mx-[9px]" />
                        Day shift
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="gray24 textBaseL font-medium">
                      Supplemental pay types:
                    </div>
                    <ul className="flex flex-col">
                      <li className="flex items-center gray24 textBaseL font-medium">
                        <span className="inline-block w-[5px] h-[5px] bg-[#3d3d3d] rounded-full mx-[9px]" />
                        Performance bonus
                      </li>
                      <li className="flex items-center gray24 textBaseL font-medium">
                        <span className="inline-block w-[5px] h-[5px] bg-[#3d3d3d] rounded-full mx-[9px]" />
                        Yearly bonus
                      </li>
                    </ul>
                  </div>
                  <div className="gray24 textBaseL font-medium">
                    Work Location: In person
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="px-6 md:px-10 xl:px-[60px] 2xl:px-[100px] pt-8 pb-9">
              <div className="flex items-center gap-3 py-2.5">
                <Image
                  src="/alt.png"
                  alt="company logo"
                  width={40}
                  height={40}
                />
                <h3 className="font-medium textLg text-[#4F4F4F]">Atlassian</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 pt-4 gap-y-6 gap-x-12 max-w-[736px]">
                <StatsCard title="Company size" descp="1k - 2k Employees" />
                <StatsCard title="Type" descp="Private" />
                <StatsCard
                  title="Sector"
                  descp="Information Technology, Infrastructure"
                />
                <StatsCard title="Funding" descp="Bootstrapped" />
                <StatsCard title="Founded In" descp="2019" />
                <StatsCard
                  title="Founded By"
                  descp="Scott Farquhar, Mike Cannon-Brookes"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[335px] xl:max-w-[350px] 2xl:min-w-[409px] w-full bg-[#FCFCFC] border-l border-[#E7E7E7]">
          <div className="pt-[35px] px-6 md:px-16 lg:px-6">
            <div className="flex justify-between items-center">
              <button className="border-[0.8px] border-[#DC4A2D] bg-[#FEF4F2] rounded-lg flex items-center justify-center gap-2.5 py-3 2xl:px-8 min-w-[144px] 2xl:min-w-[174px]">
                <Image
                  src="/trash.svg"
                  alt="trash icon"
                  height={20}
                  width={20}
                />
                <div className="text-[#DC4A2D] font-medium textBase">
                  Delete job
                </div>
              </button>
              <button className="border-2 border-[#FED3CA] bg-[#DC4A2D] rounded-lg flex items-center justify-center gap-2.5 py-3 2xl:px-8 min-w-[146px] 2xl:min-w-[176px]">
                <Image src="/edit.svg" alt="edit icon" height={16} width={16} />
                <div className="text-white font-medium textBase">Edit job</div>
              </button>
            </div>
            <div className="flex flex-col gap-4 p-3 mt-[23px]">
              <InfoCard
                icon="/users.svg"
                iconAlt="user icon"
                text="Applicants"
                value={400}
                space="large"
              />
              <div className="bg-[#E7E7E7] h-px w-full" />
              <InfoCard
                icon="user-check.svg"
                iconAlt="user check icon"
                text="Matches"
                value={100}
                space="large"
              />
              <div className="bg-[#E7E7E7] h-px w-full" />
              <InfoCard
                icon="/message-square.svg"
                iconAlt="message icon"
                text="Messages"
                value={147}
                space="small"
              />
              <div className="bg-[#E7E7E7] h-px w-full" />
              <InfoCard
                icon="/eye.svg"
                iconAlt="view icon"
                text="Views"
                value={800}
                space="large"
              />
            </div>
            <div className="pb-20 md:p-0"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
