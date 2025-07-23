import Section from "@/components/Section";
import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";

// 本地工作经历数据
const workExperienceData = {
  title: "工作经历", // 或者 "Work Experience"
  items: [
    {
      title: "前端开发工程师",
      company: "某科技公司",
      descriptions: [
        "负责 React 项目的开发和维护",
        "参与产品需求分析和技术方案设计",
        "优化前端性能，提升用户体验"
      ]
    },
    {
      title: "软件开发实习生",
      company: "另一家公司",
      descriptions: [
        "学习并使用 TypeScript 进行开发",
        "参与团队代码评审和技术分享",
        "协助解决线上问题和bug修复"
      ]
    }
    // 可以继续添加更多工作经历
  ]
};

const Work: React.FC = () => {
  return (
    <Section title={workExperienceData.title}>
      {workExperienceData.items.map((props) => (
        <WorkExperienceCard
          {...props}
          key={`${props.title}-${props.company}`}
        />
      ))}
    </Section>
  );
};

export default Work;