import React from "react";
import { Link } from "react-router-dom";

function MegaMenu() {
  return (
    <div class="mega-menu">
      <div className=" container-fluid">
        <div class="mega-menu-grid">
          <div class="menu-col">
            <h4>Trainers & Coaches</h4>
            <ul>
              <li>
                <Link>Cricket Coaches</Link>
              </li>
              <li>Football Coaches</li>
              <li>Badminton Coaches</li>
              <li>Tennis Coaches</li>
              <li>Table Tennis Coaches</li>
              <li>Martial Arts / MMA / Boxing Coaches</li>
              <li>Swimming Instructors</li>
              <li>Athletics / Running Coaches</li>
              <li>Yoga Teachers</li>
              <li>Personal Fitness Trainers</li>
              <li>Strength & Conditioning Coaches</li>
            </ul>
          </div>

          <div class="menu-col">
            <h4>Sports Venues (with Booking)</h4>
            <ul>
              <li>Turfs (Football / Cricket)</li>
              <li>Badminton Courts</li>
              <li>Tennis Courts</li>
              <li>Table Tennis Centers</li>
              <li>Indoor Sports Arenas</li>
              <li>Swimming Pools</li>
              <li>Squash Courts</li>
              <li>Skating Rinks</li>
              <li>Multi-Sport Stadiums</li>
              <li>Golf Courses / Driving Ranges</li>
            </ul>
          </div>

          <div class="menu-col">
            <h4>Sports Infra & Tech</h4>
            <ul>
              <li>Turf Installers</li>
              <li>Court Builders</li>
              <li>Sports Flooring</li>
              <li>Lighting / Nets</li>
              <li>Fitness Apps</li>
              <li>Training Software</li>
              <li>Wearables</li>
              <li>Performance Analytics</li>
            </ul>
          </div>

          <div class="menu-col">
            <h4>Gyms & Fitness Studios</h4>
            <ul>
              <li>Gyms</li>
              <li>CrossFit Boxes</li>
              <li>Pilates Studios</li>
              <li>Yoga Studios</li>
              <li>Zumba / Dance Fitness</li>
              <li>Functional Training Studios</li>
            </ul>
          </div>

          <div class="menu-col">
            <h4>Sports Academies</h4>
            <ul>
              <li>Cricket Academies</li>
              <li>Football Academies</li>
              <li>Tennis Academies</li>
              <li>Badminton Academies</li>
              <li>Multi-sport Academies</li>
            </ul>
          </div>

          <div class="menu-col">
            <h4>Physiotherapy & Recovery</h4>
            <ul>
              <li>Sports Physiotherapists</li>
              <li>Chiropractors</li>
              <li>Injury Rehab Centers</li>
              <li>Sports Massages</li>
            </ul>
          </div>

          <div class="menu-col">
            <h4>Event Services</h4>
            <ul>
              <li>Marathon Organisers</li>
              <li>Tournament Organisers</li>
              <li>Referees / Umpires</li>
              <li>Sports Event Companies</li>
            </ul>
          </div>

          <div class="menu-col">
            <h4>Nutritionist & Dieticians</h4>
            <ul>
              <li>Sports Nutritionists</li>
              <li>Clinical Dieticians</li>
              <li>Weight-loss Specialists</li>
              <li>Athletic Performance Dieticians</li>
            </ul>
          </div>

          <div class="menu-col">
            <h4>Naturopathy Experts</h4>
            <ul>
              <li>Naturopathic Clinics</li>
              <li>Holistic Wellness Coaches</li>
              <li>Alternative Therapy Specialists</li>
            </ul>
          </div>

          <div class="menu-col">
            <h4>Health Coaches</h4>
            <ul>
              <li>General Health Coaches</li>
              <li>Lifestyle & Wellness Coaches</li>
              <li>Habit & Motivation Coaches</li>
            </ul>
          </div>

          <div class="menu-col">
            <h4>Yoga Instructors & Trainers</h4>
            <ul>
              <li>Personal Yoga Trainers</li>
              <li>Group Yoga Classes</li>
              <li>Corporate Yoga Providers</li>
            </ul>
          </div>

          <div class="menu-col">
            <h4>Kids Activities</h4>
            <ul>
              <li>Skating Classes</li>
              <li>Swimming Classes</li>
              <li>Multi-sport Kids Programs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
