#include <ros/ros.h>

int main(int argc, char* argv[]){
  ros::init(argc, argv, "my_node");
  ros::NodeHandle nh;
  ROS_INFO("It's starting!");

  
  ros::spin();
}
