import React from "react";
import "../styles/BlogContent.css";
import { Typography, Avatar, Button } from "antd";
import Comment from "./Comment";
import { ImageData } from "../static/ImagesArray";

import {
  CopyOutlined,
  SaveOutlined,
  CalendarOutlined,
  MessageOutlined,
} from "@ant-design/icons";
const { Text } = Typography;
const BlogContent = () => {
  return (
    <div>
      <div className="blog-main">
        <div className="blog-top">
          <div className="blog-heading-left">
            <div>
              <Text
                style={{
                  fontSize: "50px",
                  fontFamily: "serif",
                  fontWeight: "600",
                }}
              >
                A full guide for a better and a smarter cook
              </Text>
            </div>
            <div>
              <Avatar
                src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                style={{}}
                size="medium"
              >
                user
              </Avatar>
              <Text style={{ marginLeft: "10px" }}>Ankit Mittal</Text>
              <CalendarOutlined style={{ marginLeft: "30px" }} />
              <Text style={{ marginLeft: "10px" }}>Yesterday</Text>
              <MessageOutlined style={{ marginLeft: "30px" }} />
              <Text style={{ marginLeft: "10px" }}>25</Text>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus necessitatibus commodi nesciunt provident incidunt
                aliquam voluptate quae accusamus dolores consequuntur autem sit
                eaque soluta corrupti quia officia, totam quod accusantium
              </Text>
            </div>
          </div>
          <div className="blog-heading-right">
            <div>
              <CopyOutlined style={{ fontSize: "30px" }} />
              <SaveOutlined style={{ fontSize: "30px", marginLeft: "20px" }} />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "30px" }}>
          <iframe
            height="520"
            width="100%"
            src="https://www.youtube.com/embed/a8R8VFD20zg"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </div>
        <div style={{ marginTop: "30px" }}>
          <Text
            style={{
              fontSize: "35px",
              fontFamily: "serif",
              fontWeight: "600",
            }}
          >
            Before you begin
          </Text>
        </div>
        <div>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            incidunt delectus dignissimos maiores autem commodi! Eaque dolor
            obcaecati alias accusamus fuga corrupti velit, atque nobis, nostrum
            similique debitis iste perspiciatis libero saepe! Minima quibusdam
            deleniti culpa exercitationem voluptate, delectus dolorem porro,
            quia eligendi pariatur maxime quos quaerat quasi explicabo aperiam
            ea placeat! Sint totam, magni natus hic eaque in placeat. Minus cum
            temporibus corporis, optio reprehenderit commodi asperiores iusto
            unde.
          </Text>
        </div>
        <div className="blog-top" style={{ marginTop: "30px" }}>
          <div style={{ flex: 1 }}>
            <div>
              <Text
                style={{
                  fontSize: "35px",
                  fontFamily: "serif",
                  fontWeight: "600",
                }}
              >
                Here are the basics
              </Text>
            </div>
            <div style={{ width: "90%" }}>
              <Text style={{ fontSize: "18px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                laboriosam in magnam iure voluptates sint, velit facilis! Eos
                modi maiores molestias laboriosam cum consequuntur molestiae ab,
              </Text>
            </div>
            <br />
            <div style={{ width: "90%" }}>
              <Text style={{ fontSize: "18px" }}>
                ducimus delectus ipsa explicabo doloribus aliquid natus quia
                provident nobis porro veniam id nesciunt excepturi alias ratione
                quod sint. Aliquam fugiat atque totam amet aliquid sapiente non
                necessitatibus dicta nostrum! Corrupti cumque aut nemo
                laboriosam totam magnam, commodi dolores labore iure quod unde
                facere harum est, sapiente architecto, corporis amet tempora nam
                veniam cupiditate explicabo? Ullam voluptates hic sapiente neque
                dignissimos, ex nostrum incidunt voluptate aperiam deserunt vel,
                alias sit debitis harum quisquam rem.
              </Text>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2hlYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt="wheat"
            />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Text
            style={{
              fontSize: "55px",
              fontFamily: "serif",
              fontWeight: "600",
            }}
          >
            "One cannot think well, love well , sleep well if one has not dined
            well"
          </Text>
        </div>
        <div>
          <Text
            style={{
              fontSize: "30px",
              fontFamily: "serif",
            }}
          >
            "--- Ankit Mittal, A room full of people"
          </Text>
        </div>
        <div>
          <Text style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            quas quam placeat ipsum et cum rem accusantium minus at assumenda
            beatae magnam animi itaque cumque reiciendis, minima facilis nulla
            optio possimus hic. Facilis eveniet sit commodi neque doloremque,
            incidunt obcaecati dolorum delectus aliquid saepe dignissimos
            facere, cupiditate eius quam amet ipsum quas, aliquam assumenda?
            Accusantium beatae consectetur voluptatibus, maiores sint accusamus
            totam, eum quibusdam provident incidunt dignissimos. Perferendis,
            reprehenderit! Nulla asperiores assumenda, nostrum tionem, minus
            repellendus doloribus magnam ex recusandae vitae aperiam fugit sint!
            Ut, odit?
          </Text>
        </div>
        <br />
        <br />
        <div>
          <Text style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            quas quam placeat ipsum et cum rem accusantium minus at assumenda
            beatae magnam animi itaque cumque reiciendis, minima facilis nulla
            ulla asperiores assumenda, nostrum autem veritatis modi deserunt
            amet impedit maxime non, nobis enim et dolore, aliquam molestiae.
            Corporis aut minus quos voluptatem deleniti ab commodi amet
            praesentium delectus rerum qui, earum quas magnam nemo cumque ipsum
            error. Quisquam odio minus labore fugiat fugit dicta voluptates
            accusantium tenetur enim exercitationem culpa, dolor hic adipisci
            eius atque numquam id voluptatibus magni veniam repellat error
            cupiditate laudantium saepe quaerat. Nemo exercitationem, minus
            repellendus doloribus magnam ex recusandae vitae aperiam fugit sint!
            Ut, odit?
          </Text>
        </div>
        <br />
        <br />
        <div>
          <Text style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elitam provident
            incidunt dignissimos. Perferendis, reprehenderit! Nulla asperiores
            assumenda, nostrum autem veritatis modi deserunt amet impedit maxime
            non, nobis enim et dolore, aliquam molestiae. Corporis aut minus
            quos voluptatem deleniti ab commodi amet praesentium delectus rerum
            qui, earum quas magnam nemo cumque ipsum error. Quisquam odio minus
            labore fugiat fugit dicta voluptates accusantium tenetur enim
            exercitationem culpa, dolor hic adipisci eius atque numquam id
            voluptatibus magni veniam repellat error cupiditate laudantium saepe
            quaerat. Nemo exercitationem, minus repellendus doloribus magnam ex
            recusandae vitae aperiam fugit sint! Ut, odit?
          </Text>
        </div>
        <br />
        <div>
          <img
            src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="cheaf"
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <br />
        <br />
        <div>
          <Text style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elitam provident
            incidunt dignissimos. Perferendis, reprehenderit! Nulla asperiores
            assumenda, nostrum autem veritatis modi deserunt amet impedit maxime
            non, nobis enim et dolore, aliquam molestiae. Corporis aut minus
            quos voluptatem deleniti ab commodi amet praesentium delectus rerum
            qui, earum quas magnam nemo cumque ipsum error. Quisquam odio minus
            labore fugiat fugit dicta voluptates accusantium tenetur enim
            exercitationem culpa, dolor hic adipisci eius atque numquam id
            voluptatibus magni veniam repellat error cupiditate laudantium saepe
            quaerat. Nemo exercitationem, minus repellendus doloribus magnam ex
            recusandae vitae aperiam fugit sint! Ut, odit?
          </Text>
        </div>
        <br />
        <br />
        <div>
          <Text style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elitam provident
            incidunt dignissimos. Perferendis, reprehenderit! Nulla asperiores
            assumenda, nostrum autem veritatis modi deserunt amet impedit maxime
            non, nobis enim et dolore, aliquam molestiae. Corporis aut minus
            quos voluptatem deleniti ab commodi amet praesentium delectus rerum
            qui, earum quas magnam nemo cumque ipsum error. Quisquam odio minus
            labore fugiat fugit dicta voluptates accusantium tenetur enim
            exercitationem culpa, dolor hic adipisci eius atque numquam id
            voluptatibus magni veniam repellat error cupiditate laudantium saepe
            quaerat. Nemo exercitationem, minus repellendus doloribus magnam ex
            recusandae vitae aperiam fugit sint! Ut, odit?
          </Text>
        </div>
        <div className="blog-highlight">
          <div className="blog-highlight-content">
            <div>
              <div style={{ display: "flex", justifyContent: "start" }}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                    alt="image1"
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div style={{ marginLeft: "30px" }}>
                  <div>
                    <Text style={{ fontWeight: "600" }}>
                      Black Forest Birthday
                    </Text>
                  </div>
                  <div>
                    <Text>Category</Text>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Text style={{ fontSize: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis saepe aspernatur quis nostrum molestiae earum amet
                ab nisi, culpa debitis voluptatum dignissimos eveniet error
                libero deserunt ipsum veniam dolore perspiciatis suscipit
                repellat, ex ipsa magnam animi. Corrupti sit mollitia iste,
                repellendus fugiat, nostrum in pariatur error ullam quis,
                delectus veniam?
              </Text>
            </div>
          </div>
        </div>
        <div>
          <Comment />
          <div style={{ marginLeft: "30px" }}>
            <Comment />
            <Comment />
            <Comment />
          </div>
          <Comment />
          <Comment />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              color: "black",
              background: "none",
              border: "1px solid black",
              borderRadius: "0px",
            }}
          >
            Load 25 More Component
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
          }}
        >
          <div>
            <Text style={{ fontSize: "24px", fontWeight: "600" }}>
              {" "}
              Write a Comment
            </Text>
          </div>
          <div>
            <Text>Login to post a comment</Text>
          </div>
        </div>
        <div className="blog-highlight-comment">
          <div style={{ width: "60%", padding: "25px" }}>
            <Text style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, a
              ut. Obcaecati quidem maxime consectetur quos, cum, odit, ad quod
              eveniet neque ullam rem reiciendis deleniti assumenda tenetur
              quibusdam cumque vero volupta
            </Text>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginTop: "25px",
            }}
          >
            {ImageData.slice(0, 8).map((data, index) => (
              <div>
                <img className="blog-food-image" src={data.src} alt="hello" />
                <div style={{ marginBottom: "15px" }}>
                  <Text className="blog-food-text">{data.content}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
