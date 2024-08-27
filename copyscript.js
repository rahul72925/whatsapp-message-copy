function isDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

const blackIcon =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAwLjQ1IDAuNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0uMDMuMjg1QS4wNDUuMDQ1IDAgMCAwIC4wNzUuMzNILjEyVi4zSC4wNzVBLjAxNS4wMTUgMCAwIDEgLjA2LjI4NXYtLjIxQS4wMTUuMDE1IDAgMCAxIC4wNzUuMDZoLjIxQS4wMTUuMDE1IDAgMCAxIC4zLjA3NVYuMTJILjE2NUEuMDQ1LjA0NSAwIDAgMCAuMTIuMTY1di4yMUEuMDQ1LjA0NSAwIDAgMCAuMTY1LjQyaC4yMUEuMDQ1LjA0NSAwIDAgMCAuNDIuMzc1di0uMjFBLjA0NS4wNDUgMCAwIDAgLjM3NS4xMkguMzNWLjA3NUEuMDQ1LjA0NSAwIDAgMCAuMjg1LjAzaC0uMjFBLjA0NS4wNDUgMCAwIDAgLjAzLjA3NXptLjEyLS4xMkEuMDE1LjAxNSAwIDAgMSAuMTY1LjE1aC4yMUEuMDE1LjAxNSAwIDAgMSAuMzkuMTY1di4yMUEuMDE1LjAxNSAwIDAgMSAuMzc1LjM5aC0uMjFBLjAxNS4wMTUgMCAwIDEgLjE1LjM3NXoiIGZpbGw9IiMwMDAiLz48L3N2Zz4=";

const whiteIcon =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAwLjQ1IDAuNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0uMDMuMjg1QS4wNDUuMDQ1IDAgMCAwIC4wNzUuMzNILjEyVi4zSC4wNzVBLjAxNS4wMTUgMCAwIDEgLjA2LjI4NXYtLjIxQS4wMTUuMDE1IDAgMCAxIC4wNzUuMDZoLjIxQS4wMTUuMDE1IDAgMCAxIC4zLjA3NVYuMTJILjE2NUEuMDQ1LjA0NSAwIDAgMCAuMTIuMTY1di4yMUEuMDQ1LjA0NSAwIDAgMCAuMTY1LjQyaC4yMUEuMDQ1LjA0NSAwIDAgMCAuNDIuMzc1di0uMjFBLjA0NS4wNDUgMCAwIDAgLjM3NS4xMkguMzNWLjA3NUEuMDQ1LjA0NSAwIDAgMCAuMjg1LjAzaC0uMjFBLjA0NS4wNDUgMCAwIDAgLjAzLjA3NXptLjEyLS4xMkEuMDE1LjAxNSAwIDAgMSAuMTY1LjE1aC4yMUEuMDE1LjAxNSAwIDAgMSAuMzkuMTY1di4yMUEuMDE1LjAxNSAwIDAgMSAuMzc1LjM5aC0uMjFBLjAxNS4wMTUgMCAwIDEgLjE1LjM3NXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";

function createCopyButton(row) {
  const copyButton = document.createElement("div");
  copyButton.setAttribute("id", "copy-button");
  copyButton.setAttribute("title", "Copy");

  copyButton.addEventListener("click", () => {
    const copyableText = row.querySelector(".copyable-text");
    navigator.clipboard
      .writeText(copyableText.lastChild.innerText)
      .then(function () {
        showToaster();
      })
      .catch(function (error) {
        showToaster("FAILED");
        console.error("Failed to copy text to clipboard:", error);
      });
  });

  copyButton.setAttribute("role", "button");

  const image = document.createElement("img");
  image.setAttribute("src", isDarkMode() ? whiteIcon : blackIcon);

  image.setAttribute("id", "copy-message");
  image.style.width = "22px";
  image.style.height = "22px";
  copyButton.appendChild(image);
  return copyButton;
}

document.addEventListener("mouseover", function (event) {
  try {
    const rows = document.querySelectorAll('[role="row"]');

    for (let row of rows) {
      const isCopyAlreadyExist = row.querySelector("#copy-message");
      if (isCopyAlreadyExist) {
        return null;
      }

      //
      const copyButton = createCopyButton(row);

      const messageOut = row.getElementsByClassName("message-out");

      /* 
      
          below logic could be change in future
      
          */

      // start
      const firstDiv = row.firstChild.firstChild.getElementsByTagName("div")[0];

      if (!firstDiv) return null;

      const firstDivLastChild = firstDiv.lastChild;

      if (!firstDivLastChild.firstChild)
        firstDivLastChild.firstChild.style.display = "flex";

      if (messageOut.length > 0) {
        firstDivLastChild.firstChild.appendChild(copyButton);
      } else {
        firstDivLastChild.firstChild.insertBefore(
          copyButton,
          firstDivLastChild.firstChild.firstChild
        );
      }

      // end
    }
  } catch (err) {
    console.error(err);
  }
});

// Function to create and add the toaster element to the body

const toaster = document.createElement("div");
toaster.id = "toaster";
toaster.style.position = "fixed";
toaster.style.top = "20px";
toaster.style.right = "20px";
toaster.style.backgroundColor = "#333";
toaster.style.color = "#fff";
toaster.style.padding = "10px 20px";
toaster.style.borderRadius = "5px";
toaster.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
toaster.style.opacity = "0";
toaster.style.visibility = "hidden";
toaster.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
toaster.style.zIndex = "1000";

// Append toaster to body
document.body.appendChild(toaster);

function showToaster(status = "SUCCESS") {
  toaster.style.opacity = "1";
  toaster.style.visibility = "visible";
  toaster.textContent =
    status === "SUCCESS"
      ? "Text copied to clipboard!"
      : "Failed to copy text to clipboard!";

  // Hide the toaster after 3 seconds
  setTimeout(() => {
    toaster.style.opacity = "0";
    toaster.style.visibility = "hidden";
  }, 3000);
}
