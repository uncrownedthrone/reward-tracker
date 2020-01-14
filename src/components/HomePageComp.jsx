import React from 'react'

const HomePage = () => {
  return (
    <>
      <section>
        <h2>Welcome Professor McGonagall!</h2>
        <p>
          At some point in the tenth century, four of the greatest witches and
          wizards that ever lived founded Hogwarts School of Witchcraft and
          Wizardry. Their names were Godric Gryffindor, Rowena Ravenclaw, Helga
          Hufflepuff and Salazar Slytherin. As The Sorting Hat told us, their
          reason for doing so was because they had the ‘selfsame yearning, to
          make the world’s best magic school’, and once they did, each created
          their own house to represent a personality and skill that they wanted
          to nurture. Gryffindor students embodied bravery and chivalry;
          Ravenclaw, intelligence and wit; Hufflepuff, loyalty and fair play;
          and Slytherin, the values of being sly and cunning.
        </p>
        <h2>How to Use</h2>
        <ul className="homePageUl">
          <li className="homePageLi">Create a Classroom</li>
          <li className="homePageLi">Add Students</li>
          <li className="homePageLi">Add/Redeem Currency</li>
        </ul>
      </section>
    </>
  )
}

export default HomePage
