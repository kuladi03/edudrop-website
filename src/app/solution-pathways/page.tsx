'use client'
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Tabs Component
// interface TabsProps {
//   children: ReactNode;
//   value: string;
//   onValueChange: (value: string) => void;
//   className?: string;
// }

// export function Tabs({ children, className }: TabsProps) {
//   return <div className={`space-y-4 ${className}`}>{children}</div>;
// }

// // TabsList Component
// interface TabsListProps {
//   children: ReactNode;
// }

// export function TabsList({ children }: TabsListProps) {
//   return <div className="flex space-x-4">{children}</div>;
// }

// // TabsTrigger Component
// interface TabsTriggerProps {
//   children: ReactNode;
//   value: string;
//   className?: string;
//   isSelected: boolean;
//   onClick: () => void;
// }

// export function TabsTrigger({ children, className, onClick, isSelected }: TabsTriggerProps) {
//   return (
//     <button
//       className={`py-2 px-4 text-sm font-medium rounded-t-lg ${
//         isSelected ? "text-blue-600 border-b-2 border-blue-600" : "text-black"
//       } ${className}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

// // TabsContent Component
// interface TabsContentProps {
//   children: ReactNode;
//   value: string;
//   isActive: boolean;
// }

// export function TabsContent({ children, isActive }: TabsContentProps) {
//   return (
//     <div
//       className={`p-4 rounded-lg transition-all duration-300 ${
//         isActive ? "bg-blue-50 border border-blue-200 shadow-lg" : "hidden"
//       }`}
//     >
//       {children}
//     </div>
//   );
// }

// SolutionPathways Component
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, HeartHandshake, Lightbulb } from 'lucide-react';

export default function SolutionPathways() {
  const [selectedTab, setSelectedTab] = useState("government");

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personalized Intervention Strategies</CardTitle>
          <CardDescription>Tailored solutions to reduce dropout risk</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={handleTabChange} className="space-y-4">
            <TabsList>
              <TabsTrigger
                value="government"
                isSelected={selectedTab === "government"}
                onClick={() => handleTabChange("government")}
              >
                Government Schemes
              </TabsTrigger>
              <TabsTrigger
                value="scholarships"
                isSelected={selectedTab === "scholarships"}
                onClick={() => handleTabChange("scholarships")}
              >
                Scholarships
              </TabsTrigger>
              <TabsTrigger
                value="learning"
                isSelected={selectedTab === "learning"}
                onClick={() => handleTabChange("learning")}
              >
                Learning Paths
              </TabsTrigger>
              <TabsTrigger
                value="support"
                isSelected={selectedTab === "support"}
                onClick={() => handleTabChange("support")}
              >
                Support Programs
              </TabsTrigger>
            </TabsList>
            <TabsContent isActive={selectedTab === "government"}>
              <GovernmentSchemes />
            </TabsContent>
            <TabsContent isActive={selectedTab === "scholarships"}>
              <Scholarships />
            </TabsContent>
            <TabsContent isActive={selectedTab === "learning"}>
              <LearningPaths />
            </TabsContent>
            <TabsContent isActive={selectedTab === "support"}>
              <SupportPrograms />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

// Helper components for each tab's content
function GovernmentSchemes() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg text-black font-medium">Government Educational Support Programs</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <GraduationCap className="mr-2 h-5 w-5 mt-0.5 text-black " />
          <div>
            <h4 className="font-medium text-black ">Sarva Shiksha Abhiyan (SSA)</h4>
            <p className="text-black text-sm text-muted-foreground">Comprehensive program for universal elementary education</p>
          </div>
        </li>
        <li className="flex items-start">
          <GraduationCap className="text-black mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="text-black font-medium">Mid-Day Meal Scheme</h4>
            <p className="text-black text-sm text-muted-foreground">Provides nutritious meals to improve attendance and retention</p>
          </div>
        </li>
        <li className="flex items-start">
          <GraduationCap className="text-black mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="text-black font-medium">Rashtriya Madhyamik Shiksha Abhiyan (RMSA)</h4>
            <p className="text-black text-sm text-muted-foreground">Enhances access to secondary education</p>
          </div>
        </li>
      </ul>
      <Button>Explore More Schemes</Button>
    </div>
  );
}

function Scholarships() {
  return (
    <div className="space-y-4">
      <h3 className="text-black text-lg font-medium">Scholarship Opportunities</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <HeartHandshake className="text-black mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="text-black font-medium">National Means-cum-Merit Scholarship</h4>
            <p className="text-black text-sm text-muted-foreground">For economically weaker students with good academic records</p>
          </div>
        </li>
        <li className="flex items-start">
          <HeartHandshake className="text-black mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="text-black font-medium">Pre-Matric Scholarships for SC/ST Students</h4>
            <p className="text-black text-sm text-muted-foreground">Financial assistance for students from scheduled castes and tribes</p>
          </div>
        </li>
        <li className="flex items-start">
          <HeartHandshake className="text-black mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="text-black font-medium">State-Specific Merit Scholarships</h4>
            <p className="text-black text-sm text-muted-foreground">Varies by state, rewards academic excellence</p>
          </div>
        </li>
      </ul>
      <Button>Find Scholarships</Button>
    </div>
  );
}

function LearningPaths() {
  return (
    <div className="space-y-4">
      <h3 className="text-black text-lg font-medium">Personalized Learning Paths</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <BookOpen className="text-black mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="text-black font-medium">Adaptive Learning Modules</h4>
            <p className="text-black text-sm text-muted-foreground">AI-powered lessons that adjust to individual learning speeds</p>
          </div>
        </li>
        <li className="flex items-start">
          <BookOpen className="text-black mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="text-black font-medium">Skill-Based Learning Tracks</h4>
            <p className="text-black text-sm text-muted-foreground">Focus on practical skills aligned with career interests</p>
          </div>
        </li>
        <li className="flex items-start">
          <BookOpen className="text-black mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="text-black font-medium">Peer-Assisted Study Sessions</h4>
            <p className="text-black text-sm text-muted-foreground">Collaborative learning groups for challenging subjects</p>
          </div>
        </li>
      </ul>
      <Button>Customize Learning Path</Button>
    </div>
  );
}

function SupportPrograms() {
  return (
    <div className="space-y-4">
      <h3 className="text-black text-lg font-medium">Additional Support Programs</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <Lightbulb className="text-black mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="text-black font-medium">Mentorship Program</h4>
            <p className="text-black text-sm text-muted-foreground">One-on-one guidance from experienced mentors</p>
          </div>
        </li>
        <li className="flex items-start">
          <Lightbulb className="text-black mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="text-black font-medium">Career Counseling</h4>
            <p className="text-black text-sm text-muted-foreground">Explore future career paths and set goals</p>
          </div>
        </li>
        <li className="flex items-start">
          <Lightbulb className="text-black mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="text-black font-medium">Counseling and Well-being Support</h4>
            <p className="text-black text-sm text-muted-foreground">Mental health resources to reduce stress</p>
          </div>
        </li>
      </ul>
      <Button>Get More Support</Button>
    </div>
  );
}
