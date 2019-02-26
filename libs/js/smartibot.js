exports.setMotor = function(M,S) {
  if (M == 1) {
    if (S <= 0) {
      digitalWrite(D6, 0);
      analogWrite(D4, S * -0.009);
    } else {
      digitalWrite(D4, 0);
      analogWrite(D6, S * 0.009);
    }
  }
  if (M == 2) {
    if (S >= 0) {
      digitalWrite(D11, 0);
      analogWrite(D10, S * 0.009);
    } else {
      digitalWrite(D10, 0);
      analogWrite(D11, S * -0.009);
    }
  }
}
exports.aiReset = function() {
  var sendByte = function(B) {
  for (var i = 7; i >= 0; i--) {
  D7.reset();
  digitalWrite(D8,(B >> i) & 1);
  D7.set();
  }
  };
  sendByte(0x00);
  sendByte(0x00);
  sendByte(0x00);
  sendByte(0x00);
  sendByte(0xFF);
  sendByte(100*0.9);
  sendByte(27*0.9);
  sendByte(86*0.9);
  sendByte(0xFF);
  sendByte(100*0.9);
  sendByte(27*0.9);
  sendByte(86*0.9);
  sendByte(0xFF);
  sendByte(0xFF);
  sendByte(0xFF);
  sendByte(0xFF);
}
exports.aiDetect = function(a,x,y) {
  var sendByte = function(B) {
  for (var i = 7; i >= 0; i--) {
  D7.reset();
  digitalWrite(D8,(B >> i) & 1);
  D7.set();
  }
  };
  sendByte(0x00);
  sendByte(0x00);
  sendByte(0x00);
  sendByte(0x00);
  sendByte(0xFF);
  sendByte(13*0.9);
  sendByte(92*0.9);
  sendByte(47*0.9);
  sendByte(0xFF);
  sendByte(13*0.9);
  sendByte(92*0.9);
  sendByte(47*0.9);
  sendByte(0xFF);
  sendByte(0xFF);
  sendByte(0xFF);
  sendByte(0xFF);
  if (x < -5) {
    digitalWrite(D4, 0);
    analogWrite(D6, 0.7);
    digitalWrite(D10, 0);
    analogWrite(D11, 0.7);
    setTimeout(function() {
      digitalWrite(D6, 0);
    analogWrite(D4, 0);
    digitalWrite(D11, 0);
    analogWrite(D10, 0);
    }, 1000*0.05);
  } else if (x > 5) {
    digitalWrite(D6, 0);
    analogWrite(D4, 0.7);
    digitalWrite(D11, 0);
    analogWrite(D10, 0.7);
    setTimeout(function() {
      digitalWrite(D6, 0);
    analogWrite(D4, 0);
    digitalWrite(D11, 0);
    analogWrite(D10, 0);
    }, 1000*0.05);
  } else {
    digitalWrite(D4, 0);
    analogWrite(D6, 0.7);
    digitalWrite(D11, 0);
    analogWrite(D10, 0.7);
    setTimeout(function() {
      digitalWrite(D6, 0);
    analogWrite(D4, 0);
    digitalWrite(D11, 0);
    analogWrite(D10, 0);
    }, 1000*0.1);
  }
}
exports.load = function() {
  var sendByte = function(B) {
  for (var i = 7; i >= 0; i--) {
  D7.reset();
  digitalWrite(D8,(B >> i) & 1);
  D7.set();
  }
  };
  sendByte(0x00);
  sendByte(0x00);
  sendByte(0x00);
  sendByte(0x00);
  sendByte(0xFF);
  sendByte(100*0.9);
  sendByte(27*0.9);
  sendByte(86*0.9);
  sendByte(0xFF);
  sendByte(100*0.9);
  sendByte(27*0.9);
  sendByte(86*0.9);
  sendByte(0xFF);
  sendByte(0xFF);
  sendByte(0xFF);
  sendByte(0xFF);
}
