document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("wf-form-Welcome-Form-Test");
  const successMessage = document.querySelector(".w-form-done");
  const freeLaunchPlan = successMessage.querySelector(".free-launch");
  const paidManagePlan = successMessage.querySelector(".paid-manage");
  const paidGrowthPlan = successMessage.querySelector(".paid-growth");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedPlan = document.querySelector('input[name="Practice-Type"][data-plan]:checked');
    const selectedTaxEntity = document.querySelector('input[name="Practice-Type"][data-tax-ent]:checked');

    if (selectedPlan) {
      const planType = selectedPlan.getAttribute("data-plan");
      const taxEntity = selectedTaxEntity ? selectedTaxEntity.getAttribute("data-tax-ent") : null;

      // Hide all plan messages initially
      freeLaunchPlan.style.display = "none";
      paidManagePlan.style.display = "none";
      paidGrowthPlan.style.display = "none";

      if (planType === "free-launch") {
        if (taxEntity === "sole-prop" || taxEntity === "lcc-plcc") {
          paidManagePlan.style.display = "block";
        } else {
          freeLaunchPlan.style.display = "block";
        }
      } else if (planType === "paid-manage" || planType === "paid-growth") {
        if (taxEntity === "s-corp") {
          if (planType === "paid-manage") {
            paidManagePlan.style.display = "block";
          } else {
            paidGrowthPlan.style.display = "block";
          }
        }
      }

      // Show the success message
      successMessage.style.display = "block";
    }
  });
});
