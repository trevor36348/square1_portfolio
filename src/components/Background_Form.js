import React from "react";

const Background_Form = () => {
    return (
   <div class="fsection">
        <h2>Enter Our Mailing List!</h2>
        <p>You may provide some details about yourself to help us get to know you better.</p>

        <form method="post">
          <label for="email">Email: *</label>
          <input type="text" id="email" name="email" />
          <label for="fname">First Name: *</label>
          <input type="text" id="fname" name="fname" />
          <label for="lname">Last Name:</label>
          <input type="text" id="lname" name="lname" />
          <label for="occupation">Occupation:</label>
          <input type="text" id="occupation" name="occupation" />

          <label for="confirm">Recieve Confirmation Email:</label>
          <input type="checkbox" id="confirm" name="confirm" value="confirm" />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
}

export default Background_Form;