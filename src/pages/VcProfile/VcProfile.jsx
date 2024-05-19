import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import vcImg from "../../utils/images/vc.jpg";
import { Link, useLocation } from "react-router-dom";
import './VcProfile.css';

const VcProfile = (props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { variant, ...rest } = props;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const description = `I am delighted to welcome you to Islamic University of Science and
            Technology (IUST). IUST is committed to shoulder the responsibility
            of quality education, pursue research in important areas, and engage
            in activities that advance the good of society in order to find
            solutions to societal issues. We are guided by the 2021-26 strategic
            plan to make IUST a leading university in the country. Our mission
            is to foster a capable human resource that can make the University a
            place of intellectual curiosity and inquisitiveness and bring
            together bright minds to address the issues of today while taking
            their rightful place in shaping the future. By firmly linking the
            University's past achievements to its future, we will continue to
            make the utmost efforts to contribute to society through the
            creation of new and innovative programs and the cultivation of
            outstanding human resource in order to provide a vibrant, diverse
            and supportive campus environment. Currently, multiple issues
            threaten the lives of all people locally and globally which include
            climate change, natural disasters, environmental degradation,
            employment, conflicts, widening disparity, and infectious diseases
            such as the COVID-19. We reaffirm our commitment to seeking
            solutions to these complex issues faced by the society. Development
            and promotion of solar and biodiversity parks on campus will be a
            significant step towards reducing carbon footprint and transforming
            the University’s campus into an energy efficient and environmentally
            sustainable place of learning. We aim to foster a high degree of
            expertise, creativity and diversity in our students, so that they
            will become the next generation of creative researchers, leaders,
            nation-builders, artists, policy- and decision-makers. Ours is a
            university centered on our students’ success, providing them with
            right experiences, putting them on right career paths and fostering
            their skills and mind-set to make them ready for successful careers
            and professional advancement. Once the students graduate from here,
            they would have the career direction and the confidence required for
            success in their chosen fields. Career counselling and effective job
            placements are an important part of the University’s outreach
            policy. When you enrol here as an IUSTian, it would mean that you
            are part of a close-knit community that will support you from day
            one and would help you to achieve your vision of success so that you
            can make a mark on society. Our mission is to guide and help you
            grow, discover, and realize your aspirations. IUST supports gender
            equality and the elimination of unfair discrimination on the basis
            of religion, belief, caste, language or economic status. Whether you
            want to develop your leadership skills, explore your passion for
            engineering, science or arts, incubate to innovate your ideas or
            conduct research in frontier areas of science and technology, you
            will find mentors in our faculty and staff. I see ingenuity and
            curiosity among faculty, staff and students across the various
            schools of the University. However, to succeed in making the
            University a centre for excellence, we must be collaborative,
            engaged, open to new ways of working and thinking, and ready to walk
            the talk as we look to the future of IUST. As Vice-chancellor, I
            have the privilege and responsibility of leading IUST towards that
            purpose. I invite you all to become a part of IUST history and be a
            change maker. With gratitude to you all, Professor Shakil Ahmad
            Romshoo ABOUT VICE CHANCELLOR Prof. Shakil Ahmad Romshoo,
            Vice-Chancellor, IUST has a multidisciplinary academic and research
            background having obtained his Ph.D. in water resources engineering
            from the University of Tokyo, Japan and M.S. in Remote Sensing and
            GIS from the Asian Institute of Technology, Bangkok Thailand. He has
            ~34 years’ research and academic experience having worked in the
            past, as a Scientist, at the Japan Aerospace Exploration Agency
            (JAXA), Tokyo and Fellow at the Energy and Research Institute
            (TERI), New Delhi, India. He was, till recently, Dean for Research
            at the University of Kashmir and has headed several Departments at
            the University of Kashmir. The Vice-Chancellor has guided 25
            Ph.D./M.Phil students till date and published more than 225
            publications in the peer reviewed national/international journals
            and book/book chapters with the total citation score of 4000,
            h-index of 35 and cumulative impact factor score of ~300 till June,
            2022. He is engaged in research on hydrology, glaciology and climate
            change with the geographical focus on the Himalaya. Professor
            Romshoo is member of a score of policymaking committees and working
            groups on environment, water, climate change and disaster management
            at the state, national and international level. The Vice-chancellor
            is the elected fellow of the Indian Academy of Sciences (FASc),
            Indian Society of Remote Sensing (FISRS) and Indian Society of
            Geomatics (FISG). He has won more than a dozen of national and
            international awards for his academic achievements and notable among
            these are the Satish Dhawan Award from ISRS-ISRO in 2019, National
            Geoscience Award conferred by the President of India in 2013, ISG
            President’s Appreciation Medal for the promotion of Geomatics in
            India in 2015, Best Research Award (ISG-ISRO) conferred by Shri
            Narendra Modi, CM of Gujarat in 2010, KU Best Performer of the
            institution award conferred by the Governor of J&K in 2010 and
            Kasumigaura International Prize from the Govt. of Japan in 2009. The
            Vice-chancellor was born in Kashmir on 13 April, 1964 and is married
            to Shaheena Kausar who has an interest in plants and cookery. They
            have two children; a daughter Baseerat who is doing her Ph.D in
            Atmospheric Physics at the TROPOS, Germany and a son Faisal, who is
            an undergraduate student at the University of Waterloo, Canada
            studying Pure Mathematics.`;

  const truncatedDescription = showFullDescription
    ? description
    : description.slice(0, 200) + "...";


  return (
    <div className="vc-card-container">
      <Card className="shado  ">
        <Card.Img  src={vcImg}  {...rest} className="img-fluid mx-auto custom-card-img" style={{ height: '300px', minWidth: '40%', margin: 'auto' ,width: '4gi0%' ,marginTop:'20px', }}   />
        <Card.Body className="p-md-2">
          <Card.Title className="text-center mb-4">
            Prof Shakeel Ahmed Ramshoo
          </Card.Title>
          <Card.Text className="text-justify vc-desc">
            {truncatedDescription}
            {!showFullDescription && (
              <Link to="/vcprofile">
                <Button variant="link" onClick={toggleDescription}>
                  Read More
                </Button>
              </Link>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default VcProfile;
