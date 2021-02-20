document.addEventListener("DOMContentLoaded", (event) => {
	if (event) {
		console.info("DOM loaded");
    }   
});

const addBtn = document.getElementById("add-form");
const eatBtn = document.querySelectorAll(".eatBtn")
const delBtn = document.querySelectorAll(".delBtn");


 if(eatBtn){
        eatBtn.forEach((button) => {
            console.log (button)
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const id = e.target.getAttribute("burgId");
                const devBurg = {devoured: true};

                fetch(`/api/burgers/${id}`, {
                    method: "PUT",
                    headers: {
                        Accept: 'application.json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(devBurg),
                })
                .then((res) => {
                    if (res.ok) {
                        location.reload('/')
                    } else {
                        alert("Sorry Can't Eat Burger!")
                    }
                })
            })
        })
    };

if (addBtn) {
	addBtn.addEventListener("submit", (e) => {
		e.preventDefault();
		const burgerName = document.getElementById("burgName").value.trim();
		const addNewBurger = {burger_name: burgerName};

        fetch("/api/burgers", {
			method: "POST",
			headers: {
				Accept: "application/json",
                "Content-Type": "application/json",
            },
			body: JSON.stringify(addNewBurger),
		}).then((response) => {
			if (response.ok) {
				console.log("Burger added!");
				location.reload();
			} else {
				alert("Try Again Technical Difficulties!");
            }
		});
	});
};

delBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const id = e.target.getAttribute("burgerId");

        fetch(`/api/burgers/${id}`, {
            method: 'DELETE',
        }).then((res) => {
            location.reload()
        })
    })
});
