# Chocolate-Customizer
**Approach for Chocolate Customizer:**

**Objective:**
Create a chocolate customizer allowing customers to build a custom pack of 8 chocolates with a dynamically calculated price.

**Tools and Frameworks:**
1. **HTML and CSS:** Standard markup for structuring the web page and styling using CSS for a visually appealing layout.
2. **Bootstrap:** Utilized Bootstrap for responsive design and pre-built components like cards and list groups to enhance the user interface and maintain a consistent style.
3. **JavaScript:** Leveraged JavaScript for dynamic interactions and real-time updates based on user selections.

**Key Features:**

1. **Chocolate Options:**
   - Bootstrap cards used for each chocolate option.
   - Each card includes an image, chocolate name, and price.
   - Click event added to each card to trigger the addition of the selected chocolate.

2. **Selected Chocolates:**
   - A Bootstrap list group displays the selected chocolates.
   - Images, names, and prices of selected chocolates dynamically update.
   - Limited to 8 selections with appropriate alerts.

3. **Dynamic Indexing:**
   - The selected chocolates are displayed dynamically with their index based on the order of selection.

4. **Responsive Design:**
   - Bootstrap's responsive grid system used for layout.
   - The design adapts to different screen sizes, providing an optimal user experience.

5. **Image Handling:**
   - Included images for each chocolate, enhancing visual appeal.
   - Adjusted image size for consistency using a custom CSS class.

**Reasoning:**

- **Bootstrap:** Chose Bootstrap for its ease of use, responsiveness, and extensive set of UI components. This speeds up development and ensures a clean and modern look.

- **JavaScript:** Used to add interactivity and dynamic behavior to the customizer. It updates the selected chocolates and calculates the total price on the fly.

- **Image Integration:** Added images to the chocolate options and selected chocolates to enhance the visual experience and provide a better representation of the products.

- **Responsive Design:** Ensured the customizer is accessible and user-friendly across various devices, accommodating both desktop and mobile users.

This approach balances simplicity with functionality, making it easy for users to customize their chocolate pack while maintaining an attractive and responsive design. The use of Bootstrap streamlines development and contributes to a more polished and professional user interface.
