import React, { useState } from "react";

export default function Careerpath() {

 const career_path = { Engineering : `https://www.sharda.ac.in/blog/wp-content/uploads/2020/10/Career-pathways-for-engineering-students.jpg`,
  Medical : `https://corp.nhg.com.sg/Careers/PublishingImages/Medical%20Track%2020190401.jpg`,
  Law : `https://passle-net.s3.amazonaws.com/Passle/5d821b6b989b6e0f9c0ed82d/MediaLibrary/Images/5d946593342a4d08547f5e46/2019-10-23-17-23-40-219-5db08c9c989b6e16545c808d.jpg`,
  }
  const [career, setCareer] = useState("Engineering");
  const handleChange = (event) => {
    setCareer(event.target.value);
  };

  return (
    <div>
    <div>
      <h4>Select Career Options : </h4>
      <select
        class="dropdown btn btn-secondary dropdown-toggle"
        value={career}
        onChange={handleChange}
      >
        <option value="Engineering" class="dropdown-item">
          Engineering
        </option>
        <option value="Medical" class="dropdown-item">
          Medical
        </option>
        <option value="Law" class="dropdown-item">
          Law
        </option>
      </select>
    </div>

    <div className="mt-4">
      <h4>Currently selected : {career}</h4>
      <img src={`${career_path[career]}`} alt={`Image could not be loaded. Currently selected ${career}`} />
    </div>
    </div>
  );
}
