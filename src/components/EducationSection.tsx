import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import MotionWrapper from "./MotionWrapper";

export default function EducationSection() {
  return (
    <section
      id="教育经历"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🎓 教育经历
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={`🏛️ ${edu.institution}`}
              subtitle={`🎓 ${edu.degree}`}
              date={`📅 ${edu.period}`}
              isLast={index === education.length - 1}
              index={index}
            >
              <p className="text-sm text-muted-foreground mb-3">
                📍 {edu.location}
              </p>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
