// ==== Selections ====
const container = document.querySelector(".container");

// avatar_url - profile photo
// html_url - user
// login - name of the user

const display = (followers) => {
    const newFollowers = followers
        .map((follower) => {
            const { avatar_url, login, html_url } = follower;
            return `
        <article class="card">
            <img src="${avatar_url} alt="${login}"/>
            <h4>${login}</h4>
            <a href="${html_url}" target="_blank" class="btn">View Profile</a>
        </article>`;
        })
        .join("");

    container.innerHTML = newFollowers;
};

export default display;
