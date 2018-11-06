# MQTT--WebSocket
Vue 使用 mqttws31.js 实现消息实时推送功能（WebSocket）



 1，在 .vue 文件中引入 mqttws31.js 文件（mqttws31.js 文件代码在本页底部）
 
               import '@/utils/mqttws31'
 
 2，在 .vue 文件中添加代码
 
                export default {
                      data() {
                        return {
                          client: new Paho.MQTT.Client('192.168.11.248', 9001, ''), // 第三个参数是clientID可以为空
                          topic: 'mqtt' // 订阅的主题
                        };
                      },
                      methods: {
                        onConnectionLost: function (responseObject) {
                          if (responseObject.errorCode !== 0) {
                            console.log('onConnectionLost:' + responseObject.errorMessage);
                            console.log('连接已断开');
                          }
                        },
                        onMessageArrived: function(message) {
                          console.log("收到消息:"+message.payloadString);
                        },
                        onConnect: function() {
                          console.log('onConnected');
                          this.client.subscribe(this.topic); // 订阅主题
                        }
                      },
                      created: function() {
                        this.client.connect({onSuccess: this.onConnect}); // 连接服务器并注册连接成功处理事件
                        this.client.onConnectionLost = this.onConnectionLost; // 注册连接断开处理事件
                        this.client.onMessageArrived = this.onMessageArrived; // 注册消息接收处理事件
                        // this.client.disconnect(); // 断开连接
                      }
                    };
