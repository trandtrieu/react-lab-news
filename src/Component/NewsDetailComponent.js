import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ news }) {
  if (news == null) {
    return <div></div>;
  }
  return (
    <div className="col-12 col-md-3">
      <Card>
        <CardImg width="100%" src={news.image} alt={news.name} />
        <CardBody>
          <CardTitle>{news.name}</CardTitle>
          <CardText>{news.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments == null) {
    return <div></div>;
  }
  const showcmnts = comments.map((cmnt) => {
    return (
      <li key={cmnt.id}>
        <p>{cmnt.comment}</p>
        <p>
          --{cmnt.author}, &nbsp;
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(cmnt.date))}
        </p>
      </li>
    );
  });

  return (
    <div className="col-12 col-md-5 m-1">
      <h4> Comments </h4>
      <ul className="list-unstyled">{showcmnts}</ul>
    </div>
  );
}

const NewsDetail = (props) => {
  if (props.news != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.news.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.news.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 m-1">
            <RenderDish news={props.news} />
          </div>
        </div>
      </div>
    );
};

export default NewsDetail;
