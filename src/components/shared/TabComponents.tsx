import { constHomePage } from "@/constants/cs_main";
import { LinkPreview } from "../ui/link-preview";
import { Tab } from "@/types";

function TabCard({ tab, idx }: { tab: Tab; idx: number }) {
  return (
    <LinkPreview
      imageSrc={tab.previewImg}
      url={tab.link}
      key={idx}
      className="py-16 px-8 flex flex-wrap md:flex-nowrap"
    >
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="mt-1 text-gray-500 text-sm">
          {new Date(tab.added).toLocaleDateString()}
        </span>
      </div>
      <div className="md:flex-grow">
        <h3 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {tab.title}
        </h3>
        <p className="leading-relaxed">{tab.para}</p>
      </div>
    </LinkPreview>
  );
}

function TabContainer({ tabs }: { tabs: Tab[] }) {
  return (
    <div className="text-gray-600 min-h-[700px] h-full overflow-auto bg-main-background-200 w-full">
      <div className="min-h-full">
        <div className="divide-y-2 min-h-full divide-gray-100">
          {tabs.map((tab, idx) => (
            <TabCard key={idx} tab={tab} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const tabs = [
  {
    title: "Webové stránka",
    value: "web",
    content: <TabContainer tabs={constHomePage.designs.tabs.web} />,
  },
  {
    title: "Plakáty",
    value: "plakat",
    content: <TabContainer tabs={constHomePage.designs.tabs.plakat} />,
  },
  {
    title: "Loga",
    value: "logo",
    content: <TabContainer tabs={constHomePage.designs.tabs.logo} />,
  },
];
