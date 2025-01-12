import React from 'react';
import AboutTech from '@/src/components/about/aboutTech';
import Main from '@/src/components/about/main';
// import AboutTruskill from '@/src/components/about/AboutTruskill';
import PersonalisedDashboard from '@/src/components/about/personalisedDashboard';
import TechLibrary from '@/src/components/about/techLibrary';
import ProgressTracker from '@/src/components/about/ProgressTracker';
import ResumeMaker from '@/src/components/about/ResumeMaker';
import MockInterview from '@/src/components/about/MockInterview';
import CollegeAssistanceModule from '@/src/components/about/collegeAssistance';
import SolutionCard from '@/src/components/about/solutionCard';
import KeyFeatures from '@/src/components/about/keyFeature';
import DashboardStatistics from '@/src/components/about/dashBoardStatistics';
import FAQWithScrollingLogos from '@/src/components/about/faqWithScroll';
import MagicLoop from '@/src/components/about/magicLoop';
import ScrollToTopButton from '@/src/components/ScrollToTopButton';

const TruSkillAcademy = () => {
  return (
    <>
      <Main />
      <AboutTech />
      {/* <AboutTruskill /> */}
      <PersonalisedDashboard />
      <TechLibrary/>
      <ProgressTracker/>
      <ResumeMaker/>
      <MockInterview/> 
     <CollegeAssistanceModule/>
      <MagicLoop/>
      <SolutionCard/>
      <KeyFeatures/>
      <DashboardStatistics/> 
      <FAQWithScrollingLogos/>
      <ScrollToTopButton/>
      
    </>
  );
};

export default TruSkillAcademy;
