import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MemberCard({ title, caption, imgsrc, description }) {
  return (
    <>
      <article
        className="card bg-base-100 w-80  shadow-sm"
        aria-labelledby="card-title"
      >
        <figure className="px-10 pt-10">
          <img src={imgsrc} alt={title + " Image"} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title">{title}</h3>
          <p style={{ fontSize: "20px", color: "darkslategrey" }}>{caption}</p>
          {description && (
            <p style={{ fontSize: "16px", color: "gray", marginTop: "10px" }}>
              {description}
            </p>
          )}
          <div className="card-actions">
            <button
              type="button"
              className="btn btn-dark"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={faX}
                aria-label="Twitter
              "
              />
            </button>
            <button
              type="button"
              className="btn btn-dark"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faFacebook} aria-label="Facebook" />
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default MemberCard;
