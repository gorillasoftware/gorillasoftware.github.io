(function(){$(document).ready(function(){var t,e,r,n,i,o,a,s,l,u,c,h,f,p,d,g,v,m,y,x,b,w,_,k,C,T,E,A,N,S,B,M,q,R,P,j,O,I,z,F,L,D,G,W,Y;for(f=80,N=$("#paper").width(),s=$("#paper").height(),B=N/2,q=s/2,o=7,g={},m=[],_=[],E=[],$("#paper").mousemove(function(t){var e,r,o,a,s,l,u,c,h,p,d,v,y,x,b,w,k,C,T,A,N,S,M;for(v=t.pageX-B-$("#paper").offset().left,y=t.pageY-q-$("#paper").offset().top,i.attr({fill:"none",stroke:"black"}),A=to_uvw(f,v,y),o=A[0],l=A[1],h=A[2],a=m[o],null!=a&&a.attr({fill:"darkred"}),u=_[l],null!=u&&u.attr({fill:"darkblue"}),p=E[h],null!=p&&p.attr({fill:"darkgreen"}),r=((g[o]||{})[l]||{})[h],N=[-1,0,1],x=0,k=N.length;k>x;x++)for(s=N[x],S=[-1,0,1],b=0,C=S.length;C>b;b++)for(c=S[b],M=[-1,0,1],w=0,T=M.length;T>w;w++)d=M[w],e=((g[o+s]||{})[l+c]||{})[h+d],null!=e&&(e.attr({fill:"blue"}),e.toFront);return null!=r&&(r.attr({fill:"red"}),r.toFront()),n.toFront(),$("#xy").html(""+v+", "+y),$("#uvw").html(""+o+" , "+l+", "+h)}),u=Raphael("paper","100%","100%"),h=Math.sqrt(3)*f/6,t=Math.sqrt(3)*f/3,a=Math.sqrt(3)*f/2,p=0,C=0,n=u.set(),i=u.set(),w=O=-o;o>=O?o>=w:w>=o;o>=O?w++:w--)for(T=I=-o;o>=I?o>=T:T>=o;o>=I?T++:T--)for(z=[1-w-T,-w-T],P=0,j=z.length;j>P;P++)v=z[P],p++,C++,F=to_xy(f,v,w,T),S=F[0],M=F[1],S+=B,M+=q,r=u.circle(S,M,1),r.attr({fill:"red",stroke:"none"}),x=(v+w+T)%2===0,x?(c=["M",S,M-t,"L",S+f/2,M+h,"L",S-f/2,M+h,"Z"],e=Math.round(S)+"/"+Math.round(M+w*h)):(c=["M",S,M+t,"L",S+f/2,M-h,"L",S-f/2,M-h,"Z"],e=Math.round(S)+"/"+Math.round(M+w*h+h)),y=null!=(L=m[v])?L:m[v]=u.set(),k=null!=(D=_[w])?D:_[w]=u.set(),A=null!=(G=E[T])?G:E[T]=u.set(),d=u.path(c),null!=(W=g[v])||(g[v]={}),null!=(Y=(R=g[v])[w])||(R[w]={}),g[v][w][T]=d,y.push(d),k.push(d),A.push(d),i.push(d),l=x?f/6:-f/6,b=u.text(S,M+l,""+v+"/"+w+"/"+T),n.push(b),b.attr({fill:"white","font-size":f/6,"text-anchor":"middle"});return i.attr({"stroke-width":1}),i.toBack})}).call(this);