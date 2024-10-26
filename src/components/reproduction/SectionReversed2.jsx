import SubsectionWrapper from "../SubsectionWrapper";

function SectionReversed2() {
  return (
    <div className="flex justify-center items-center  px-10">
      <SubsectionWrapper>
        <div className="flex gap-8 lg:gap-12 xl:gap-20 justify-between items-center flex-col md:flex-row-reverse">
          <div className="w-[85%] md:w-[50%] aspect-[4/5] lg:max-w-[31.25rem] lg:max-h-[37.5rem] flex-shrink-0 flex items-center md:mb-8">
            <iframe
              src="https://www.youtube.com/embed/XEfnq4Q4bfk?si=bLK48QLgJ85C9db0"
              title="YouTube video player"
              className="rounded-[0.625rem] w-full h-full md:h-[350px] lg:h-[400px] object-cover object-center"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="max-w-[48rem] px-4">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center lg:text-left">
              PREGNANCY
            </h1>
            <p className="text-sm md:text-base lg:text-base text-justify lg:text-left my-6 md:my-10 sm:leading-relaxed md:leading-8 lg:leading-9 xl:leading-[2.875rem]">
              Pregnancy is a complex physiological process in which the mother
              and developing fetus constantly communicate to ensure the proper
              progression of gestation. Lasting about 40 weeks, pregnancy is
              divided into three trimesters, each lasting around 13 weeks.
              During this time, the fetus undergoes significant development,
              while the mother’s body adapts to support the growing life. The
              first trimester focuses on organ formation, the second on rapid
              growth, and the third on preparing for birth. Regular prenatal
              care is essential throughout pregnancy to monitor the health of
              both the mother and baby, ensuring any potential issues are
              addressed early for the best possible outcome.
            </p>
          </div>
        </div>
      </SubsectionWrapper>
    </div>
  );
}

export default SectionReversed2;
