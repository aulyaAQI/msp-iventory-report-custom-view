/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ml(t, e) {
  const n = new Set(t.split(","));
  return e ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const xe = {}, Tr = [], _t = () => {
}, Av = () => !1, _o = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), kl = (t) => t.startsWith("onUpdate:"), Ze = Object.assign, $l = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Tv = Object.prototype.hasOwnProperty, ve = (t, e) => Tv.call(t, e), ne = Array.isArray, xr = (t) => Ui(t) === "[object Map]", vo = (t) => Ui(t) === "[object Set]", Ou = (t) => Ui(t) === "[object Date]", se = (t) => typeof t == "function", Le = (t) => typeof t == "string", Tn = (t) => typeof t == "symbol", Ae = (t) => t !== null && typeof t == "object", xd = (t) => (Ae(t) || se(t)) && se(t.then) && se(t.catch), Cd = Object.prototype.toString, Ui = (t) => Cd.call(t), xv = (t) => Ui(t).slice(8, -1), Nd = (t) => Ui(t) === "[object Object]", Ll = (t) => Le(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, $s = /* @__PURE__ */ Ml(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), bo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Cv = /-(\w)/g, Mr = bo((t) => t.replace(Cv, (e, n) => n ? n.toUpperCase() : "")), Nv = /\B([A-Z])/g, Gr = bo(
  (t) => t.replace(Nv, "-$1").toLowerCase()
), Pd = bo((t) => t.charAt(0).toUpperCase() + t.slice(1)), ma = bo((t) => t ? `on${Pd(t)}` : ""), xn = (t, e) => !Object.is(t, e), Ls = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, Js = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ii = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Au;
const Id = () => Au || (Au = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Fl(t) {
  if (ne(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = Le(r) ? Rv(r) : Fl(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else if (Le(t) || Ae(t))
    return t;
}
const Pv = /;(?![^(]*\))/g, Iv = /:([^]+)/, Dv = /\/\*[^]*?\*\//g;
function Rv(t) {
  const e = {};
  return t.replace(Dv, "").split(Pv).forEach((n) => {
    if (n) {
      const r = n.split(Iv);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function jl(t) {
  let e = "";
  if (Le(t))
    e = t;
  else if (ne(t))
    for (let n = 0; n < t.length; n++) {
      const r = jl(t[n]);
      r && (e += r + " ");
    }
  else if (Ae(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Mv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", kv = /* @__PURE__ */ Ml(Mv);
function Dd(t) {
  return !!t || t === "";
}
function $v(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = Di(t[r], e[r]);
  return n;
}
function Di(t, e) {
  if (t === e)
    return !0;
  let n = Ou(t), r = Ou(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Tn(t), r = Tn(e), n || r)
    return t === e;
  if (n = ne(t), r = ne(e), n || r)
    return n && r ? $v(t, e) : !1;
  if (n = Ae(t), r = Ae(e), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(t).length, s = Object.keys(e).length;
    if (i !== s)
      return !1;
    for (const o in t) {
      const a = t.hasOwnProperty(o), u = e.hasOwnProperty(o);
      if (a && !u || !a && u || !Di(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function Lv(t, e) {
  return t.findIndex((n) => Di(n, e));
}
const li = (t) => Le(t) ? t : t == null ? "" : ne(t) || Ae(t) && (t.toString === Cd || !se(t.toString)) ? JSON.stringify(t, Rd, 2) : String(t), Rd = (t, e) => e && e.__v_isRef ? Rd(t, e.value) : xr(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, i], s) => (n[ga(r, s) + " =>"] = i, n),
    {}
  )
} : vo(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => ga(n))
} : Tn(e) ? ga(e) : Ae(e) && !ne(e) && !Nd(e) ? String(e) : e, ga = (t, e = "") => {
  var n;
  return Tn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
let yt;
class Md {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = yt, !e && yt && (this.index = (yt.scopes || (yt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = yt;
      try {
        return yt = this, e();
      } finally {
        yt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    yt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    yt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function kd(t) {
  return new Md(t);
}
function Fv(t, e = yt) {
  e && e.active && e.effects.push(t);
}
function $d() {
  return yt;
}
function jv(t) {
  yt && yt.cleanups.push(t);
}
let Yn;
class Wl {
  constructor(e, n, r, i) {
    this.fn = e, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 2, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Fv(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Cn();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (Wv(n.computed), this._dirtyLevel >= 2))
          break;
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), Nn();
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 2 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = An, n = Yn;
    try {
      return An = !0, Yn = this, this._runnings++, Tu(this), this.fn();
    } finally {
      xu(this), this._runnings--, Yn = n, An = e;
    }
  }
  stop() {
    var e;
    this.active && (Tu(this), xu(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function Wv(t) {
  return t.value;
}
function Tu(t) {
  t._trackId++, t._depsLength = 0;
}
function xu(t) {
  if (t.deps && t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      Ld(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function Ld(t, e) {
  const n = t.get(e);
  n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup());
}
let An = !0, Ja = 0;
const Fd = [];
function Cn() {
  Fd.push(An), An = !1;
}
function Nn() {
  const t = Fd.pop();
  An = t === void 0 ? !0 : t;
}
function Vl() {
  Ja++;
}
function Ul() {
  for (Ja--; !Ja && Xa.length; )
    Xa.shift()();
}
function jd(t, e, n) {
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const r = t.deps[t._depsLength];
    r !== e ? (r && Ld(r, t), t.deps[t._depsLength++] = e) : t._depsLength++;
  }
}
const Xa = [];
function Wd(t, e, n) {
  Vl();
  for (const r of t.keys())
    if (r._dirtyLevel < e && t.get(r) === r._trackId) {
      const i = r._dirtyLevel;
      r._dirtyLevel = e, i === 0 && (r._shouldSchedule = !0, r.trigger());
    }
  Vd(t), Ul();
}
function Vd(t) {
  for (const e of t.keys())
    e.scheduler && e._shouldSchedule && (!e._runnings || e.allowRecurse) && t.get(e) === e._trackId && (e._shouldSchedule = !1, Xa.push(e.scheduler));
}
const Ud = (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = t, n.computed = e, n;
}, Xs = /* @__PURE__ */ new WeakMap(), Zn = Symbol(""), Qa = Symbol("");
function ht(t, e, n) {
  if (An && Yn) {
    let r = Xs.get(t);
    r || Xs.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = Ud(() => r.delete(n))), jd(
      Yn,
      i
    );
  }
}
function nn(t, e, n, r, i, s) {
  const o = Xs.get(t);
  if (!o)
    return;
  let a = [];
  if (e === "clear")
    a = [...o.values()];
  else if (n === "length" && ne(t)) {
    const u = Number(r);
    o.forEach((c, f) => {
      (f === "length" || !Tn(f) && f >= u) && a.push(c);
    });
  } else
    switch (n !== void 0 && a.push(o.get(n)), e) {
      case "add":
        ne(t) ? Ll(n) && a.push(o.get("length")) : (a.push(o.get(Zn)), xr(t) && a.push(o.get(Qa)));
        break;
      case "delete":
        ne(t) || (a.push(o.get(Zn)), xr(t) && a.push(o.get(Qa)));
        break;
      case "set":
        xr(t) && a.push(o.get(Zn));
        break;
    }
  Vl();
  for (const u of a)
    u && Wd(
      u,
      2
    );
  Ul();
}
function Vv(t, e) {
  var n;
  return (n = Xs.get(t)) == null ? void 0 : n.get(e);
}
const Uv = /* @__PURE__ */ Ml("__proto__,__v_isRef,__isVue"), Hd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Tn)
), Cu = /* @__PURE__ */ Hv();
function Hv() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = he(this);
      for (let s = 0, o = this.length; s < o; s++)
        ht(r, "get", s + "");
      const i = r[e](...n);
      return i === -1 || i === !1 ? r[e](...n.map(he)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Cn(), Vl();
      const r = he(this)[e].apply(this, n);
      return Ul(), Nn(), r;
    };
  }), t;
}
function Bv(t) {
  const e = he(this);
  return ht(e, "has", t), e.hasOwnProperty(t);
}
class Bd {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._shallow = n;
  }
  get(e, n, r) {
    const i = this._isReadonly, s = this._shallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (i ? s ? rb : zd : s ? Gd : qd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const o = ne(e);
    if (!i) {
      if (o && ve(Cu, n))
        return Reflect.get(Cu, n, r);
      if (n === "hasOwnProperty")
        return Bv;
    }
    const a = Reflect.get(e, n, r);
    return (Tn(n) ? Hd.has(n) : Uv(n)) || (i || ht(e, "get", n), s) ? a : Pe(a) ? o && Ll(n) ? a : a.value : Ae(a) ? i ? Yd(a) : wo(a) : a;
  }
}
class Kd extends Bd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, i) {
    let s = e[n];
    if (!this._shallow) {
      const u = kr(s);
      if (!Qs(r) && !kr(r) && (s = he(s), r = he(r)), !ne(e) && Pe(s) && !Pe(r))
        return u ? !1 : (s.value = r, !0);
    }
    const o = ne(e) && Ll(n) ? Number(n) < e.length : ve(e, n), a = Reflect.set(e, n, r, i);
    return e === he(i) && (o ? xn(r, s) && nn(e, "set", n, r) : nn(e, "add", n, r)), a;
  }
  deleteProperty(e, n) {
    const r = ve(e, n);
    e[n];
    const i = Reflect.deleteProperty(e, n);
    return i && r && nn(e, "delete", n, void 0), i;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Tn(n) || !Hd.has(n)) && ht(e, "has", n), r;
  }
  ownKeys(e) {
    return ht(
      e,
      "iterate",
      ne(e) ? "length" : Zn
    ), Reflect.ownKeys(e);
  }
}
class Kv extends Bd {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const qv = /* @__PURE__ */ new Kd(), Gv = /* @__PURE__ */ new Kv(), zv = /* @__PURE__ */ new Kd(
  !0
), Hl = (t) => t, Eo = (t) => Reflect.getPrototypeOf(t);
function ys(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = he(t), s = he(e);
  n || (xn(e, s) && ht(i, "get", e), ht(i, "get", s));
  const { has: o } = Eo(i), a = r ? Hl : n ? ql : Ri;
  if (o.call(i, e))
    return a(t.get(e));
  if (o.call(i, s))
    return a(t.get(s));
  t !== i && t.get(e);
}
function _s(t, e = !1) {
  const n = this.__v_raw, r = he(n), i = he(t);
  return e || (xn(t, i) && ht(r, "has", t), ht(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function vs(t, e = !1) {
  return t = t.__v_raw, !e && ht(he(t), "iterate", Zn), Reflect.get(t, "size", t);
}
function Nu(t) {
  t = he(t);
  const e = he(this);
  return Eo(e).has.call(e, t) || (e.add(t), nn(e, "add", t, t)), this;
}
function Pu(t, e) {
  e = he(e);
  const n = he(this), { has: r, get: i } = Eo(n);
  let s = r.call(n, t);
  s || (t = he(t), s = r.call(n, t));
  const o = i.call(n, t);
  return n.set(t, e), s ? xn(e, o) && nn(n, "set", t, e) : nn(n, "add", t, e), this;
}
function Iu(t) {
  const e = he(this), { has: n, get: r } = Eo(e);
  let i = n.call(e, t);
  i || (t = he(t), i = n.call(e, t)), r && r.call(e, t);
  const s = e.delete(t);
  return i && nn(e, "delete", t, void 0), s;
}
function Du() {
  const t = he(this), e = t.size !== 0, n = t.clear();
  return e && nn(t, "clear", void 0, void 0), n;
}
function bs(t, e) {
  return function(r, i) {
    const s = this, o = s.__v_raw, a = he(o), u = e ? Hl : t ? ql : Ri;
    return !t && ht(a, "iterate", Zn), o.forEach((c, f) => r.call(i, u(c), u(f), s));
  };
}
function Es(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = he(i), o = xr(s), a = t === "entries" || t === Symbol.iterator && o, u = t === "keys" && o, c = i[t](...r), f = n ? Hl : e ? ql : Ri;
    return !e && ht(
      s,
      "iterate",
      u ? Qa : Zn
    ), {
      // iterator protocol
      next() {
        const { value: p, done: v } = c.next();
        return v ? { value: p, done: v } : {
          value: a ? [f(p[0]), f(p[1])] : f(p),
          done: v
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function pn(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Yv() {
  const t = {
    get(s) {
      return ys(this, s);
    },
    get size() {
      return vs(this);
    },
    has: _s,
    add: Nu,
    set: Pu,
    delete: Iu,
    clear: Du,
    forEach: bs(!1, !1)
  }, e = {
    get(s) {
      return ys(this, s, !1, !0);
    },
    get size() {
      return vs(this);
    },
    has: _s,
    add: Nu,
    set: Pu,
    delete: Iu,
    clear: Du,
    forEach: bs(!1, !0)
  }, n = {
    get(s) {
      return ys(this, s, !0);
    },
    get size() {
      return vs(this, !0);
    },
    has(s) {
      return _s.call(this, s, !0);
    },
    add: pn("add"),
    set: pn("set"),
    delete: pn("delete"),
    clear: pn("clear"),
    forEach: bs(!0, !1)
  }, r = {
    get(s) {
      return ys(this, s, !0, !0);
    },
    get size() {
      return vs(this, !0);
    },
    has(s) {
      return _s.call(this, s, !0);
    },
    add: pn("add"),
    set: pn("set"),
    delete: pn("delete"),
    clear: pn("clear"),
    forEach: bs(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = Es(
      s,
      !1,
      !1
    ), n[s] = Es(
      s,
      !0,
      !1
    ), e[s] = Es(
      s,
      !1,
      !0
    ), r[s] = Es(
      s,
      !0,
      !0
    );
  }), [
    t,
    n,
    e,
    r
  ];
}
const [
  Zv,
  Jv,
  Xv,
  Qv
] = /* @__PURE__ */ Yv();
function Bl(t, e) {
  const n = e ? t ? Qv : Xv : t ? Jv : Zv;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(
    ve(n, i) && i in r ? n : r,
    i,
    s
  );
}
const eb = {
  get: /* @__PURE__ */ Bl(!1, !1)
}, tb = {
  get: /* @__PURE__ */ Bl(!1, !0)
}, nb = {
  get: /* @__PURE__ */ Bl(!0, !1)
}, qd = /* @__PURE__ */ new WeakMap(), Gd = /* @__PURE__ */ new WeakMap(), zd = /* @__PURE__ */ new WeakMap(), rb = /* @__PURE__ */ new WeakMap();
function ib(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function sb(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : ib(xv(t));
}
function wo(t) {
  return kr(t) ? t : Kl(
    t,
    !1,
    qv,
    eb,
    qd
  );
}
function ob(t) {
  return Kl(
    t,
    !1,
    zv,
    tb,
    Gd
  );
}
function Yd(t) {
  return Kl(
    t,
    !0,
    Gv,
    nb,
    zd
  );
}
function Kl(t, e, n, r, i) {
  if (!Ae(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const o = sb(t);
  if (o === 0)
    return t;
  const a = new Proxy(
    t,
    o === 2 ? r : n
  );
  return i.set(t, a), a;
}
function rn(t) {
  return kr(t) ? rn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function kr(t) {
  return !!(t && t.__v_isReadonly);
}
function Qs(t) {
  return !!(t && t.__v_isShallow);
}
function Zd(t) {
  return rn(t) || kr(t);
}
function he(t) {
  const e = t && t.__v_raw;
  return e ? he(e) : t;
}
function So(t) {
  return Js(t, "__v_skip", !0), t;
}
const Ri = (t) => Ae(t) ? wo(t) : t, ql = (t) => Ae(t) ? Yd(t) : t;
class Jd {
  constructor(e, n, r, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Wl(
      () => e(this._value),
      () => Fs(this, 1),
      () => this.dep && Vd(this.dep)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = he(this);
    return (!e._cacheable || e.effect.dirty) && xn(e._value, e._value = e.effect.run()) && Fs(e, 2), Xd(e), e.effect._dirtyLevel >= 1 && Fs(e, 1), e._value;
  }
  set value(e) {
    this._setter(e);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e) {
    this.effect.dirty = e;
  }
  // #endregion
}
function ab(t, e, n = !1) {
  let r, i;
  const s = se(t);
  return s ? (r = t, i = _t) : (r = t.get, i = t.set), new Jd(r, i, s || !i, n);
}
function Xd(t) {
  An && Yn && (t = he(t), jd(
    Yn,
    t.dep || (t.dep = Ud(
      () => t.dep = void 0,
      t instanceof Jd ? t : void 0
    ))
  ));
}
function Fs(t, e = 2, n) {
  t = he(t);
  const r = t.dep;
  r && Wd(
    r,
    e
  );
}
function Pe(t) {
  return !!(t && t.__v_isRef === !0);
}
function Gl(t) {
  return lb(t, !1);
}
function lb(t, e) {
  return Pe(t) ? t : new cb(t, e);
}
class cb {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : he(e), this._value = n ? e : Ri(e);
  }
  get value() {
    return Xd(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || Qs(e) || kr(e);
    e = n ? e : he(e), xn(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : Ri(e), Fs(this, 2));
  }
}
function Mi(t) {
  return Pe(t) ? t.value : t;
}
const ub = {
  get: (t, e, n) => Mi(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return Pe(i) && !Pe(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function Qd(t) {
  return rn(t) ? t : new Proxy(t, ub);
}
function fb(t) {
  const e = ne(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = ep(t, n);
  return e;
}
class db {
  constructor(e, n, r) {
    this._object = e, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return Vv(he(this._object), this._key);
  }
}
class pb {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function hb(t, e, n) {
  return Pe(t) ? t : se(t) ? new pb(t) : Ae(t) && arguments.length > 1 ? ep(t, e, n) : Gl(t);
}
function ep(t, e, n) {
  const r = t[e];
  return Pe(r) ? r : new db(t, e, n);
}
var yi = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\Kuya\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_4484_LGLOMVCHAGXKTGQT", COLOR: "1", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "LAPTOP-N339491Q", ComSpec: "C:\\Windows\\system32\\cmd.exe", CONDA_PROMPT_MODIFIER: "False", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\Windows\\notepad.exe", GIT_ASKPASS: "c:\\Users\\Kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\Kuya", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\Kuya", INIT_CWD: "C:\\Kerja\\kintone custom view\\MSP\\inventory_report_cv_1_2195", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\Kuya\\AppData\\Local", LOGONSERVER: "\\\\LAPTOP-N339491Q", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", NODE_EXE: "C:\\Program Files\\nodejs\\\\node.exe", NPM_CLI_JS: "C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js", npm_command: "run-script", npm_config_cache: "C:\\Users\\Kuya\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Users\\Kuya\\AppData\\Roaming\\npm\\etc\\npmrc", npm_config_global_prefix: "C:\\Users\\Kuya\\AppData\\Roaming\\npm", npm_config_init_module: "C:\\Users\\Kuya\\.npm-init.js", npm_config_local_prefix: "C:\\Kerja\\kintone custom view\\MSP\\inventory_report_cv_1_2195", npm_config_metrics_registry: "https://registry.npmjs.org/", npm_config_node_gyp: "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_npm_version: "9.8.1", npm_config_prefix: "C:\\Users\\Kuya\\AppData\\Roaming\\npm", npm_config_userconfig: "C:\\Users\\Kuya\\.npmrc", npm_config_user_agent: "npm/9.8.1 node/v18.18.2 win32 x64 workspaces/false", npm_execpath: "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "vite build --mode development --watch", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "C:\\Kerja\\kintone custom view\\MSP\\inventory_report_cv_1_2195\\package.json", npm_package_name: "inventory_report_cv_1_2195", npm_package_version: "0.0.0", NPM_PREFIX_NPM_CLI_JS: "C:\\Users\\Kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", NUMBER_OF_PROCESSORS: "20", OneDrive: "C:\\Users\\Kuya\\OneDrive", OneDriveConsumer: "C:\\Users\\Kuya\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "C:\\Kerja\\kintone custom view\\MSP\\inventory_report_cv_1_2195\\node_modules\\.bin;C:\\Kerja\\kintone custom view\\MSP\\node_modules\\.bin;C:\\Kerja\\kintone custom view\\node_modules\\.bin;C:\\Kerja\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd;C:\\Users\\Kuya\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Kuya\\AppData\\Roaming\\npm;C:\\Users\\Kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\ktn-upload;;C:\\Users\\Kuya\\AppData\\Local\\Programs\\oh-my-posh\\bin", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", POSH_AZURE_ENABLED: "False", POSH_CURSOR_COLUMN: "1", POSH_CURSOR_LINE: "1", POSH_GIT_ENABLED: "False", POSH_INSTALLER: "winget", POSH_PID: "24776", POSH_SHELL_VERSION: "5.1.22621.2506", POSH_THEME: "C:\\Users\\Kuya\\AppData\\Local\\Programs\\oh-my-posh\\themes\\night-owl.omp.json", POSH_THEMES_PATH: "C:\\Users\\Kuya\\AppData\\Local\\Programs\\oh-my-posh\\themes", POWERLINE_COMMAND: "oh-my-posh", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 186 Stepping 2, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "ba02", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\Kuya\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\Kuya\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.85.2", TMP: "C:\\Users\\Kuya\\AppData\\Local\\Temp", USERDOMAIN: "LAPTOP-N339491Q", USERDOMAIN_ROAMINGPROFILE: "LAPTOP-N339491Q", USERNAME: "Kuya", USERPROFILE: "C:\\Users\\Kuya", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "--ms-enable-electron-run-as-node", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\Kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\Kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-ba9bc6d341-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", WSLENV: "WT_SESSION:WT_PROFILE_ID:", WT_PROFILE_ID: "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}", WT_SESSION: "f249b711-f941-4b86-8d76-849952bc4771", ZES_ENABLE_SYSMAN: "1" };
const _i = [];
function mb(t, ...e) {
  Cn();
  const n = _i.length ? _i[_i.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = gb();
  if (r)
    sn(
      r,
      n,
      11,
      [
        t + e.join(""),
        n && n.proxy,
        i.map(
          ({ vnode: s }) => `at <${Tp(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...yb(i)), console.warn(...s);
  }
  Nn();
}
function gb() {
  let t = _i[_i.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function yb(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ..._b(n));
  }), e;
}
function _b({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${Tp(
    t.component,
    t.type,
    r
  )}`, s = ">" + n;
  return t.props ? [i, ...vb(t.props), s] : [i + s];
}
function vb(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...tp(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function tp(t, e, n) {
  return Le(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : Pe(e) ? (e = tp(t, he(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : se(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = he(e), n ? e : [`${t}=`, e]);
}
function sn(t, e, n, r) {
  let i;
  try {
    i = r ? t(...r) : t();
  } catch (s) {
    Oo(s, e, n);
  }
  return i;
}
function Ft(t, e, n, r) {
  if (se(t)) {
    const s = sn(t, e, n, r);
    return s && xd(s) && s.catch((o) => {
      Oo(o, e, n);
    }), s;
  }
  const i = [];
  for (let s = 0; s < t.length; s++)
    i.push(Ft(t[s], e, n, r));
  return i;
}
function Oo(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const o = e.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](t, o, a) === !1)
            return;
      }
      s = s.parent;
    }
    const u = e.appContext.config.errorHandler;
    if (u) {
      sn(
        u,
        null,
        10,
        [t, o, a]
      );
      return;
    }
  }
  bb(t, n, i, r);
}
function bb(t, e, n, r = !0) {
  console.error(t);
}
let ki = !1, el = !1;
const ze = [];
let Gt = 0;
const Cr = [];
let _n = null, Bn = 0;
const np = /* @__PURE__ */ Promise.resolve();
let zl = null;
function Yl(t) {
  const e = zl || np;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Eb(t) {
  let e = Gt + 1, n = ze.length;
  for (; e < n; ) {
    const r = e + n >>> 1, i = ze[r], s = $i(i);
    s < t || s === t && i.pre ? e = r + 1 : n = r;
  }
  return e;
}
function Zl(t) {
  (!ze.length || !ze.includes(
    t,
    ki && t.allowRecurse ? Gt + 1 : Gt
  )) && (t.id == null ? ze.push(t) : ze.splice(Eb(t.id), 0, t), rp());
}
function rp() {
  !ki && !el && (el = !0, zl = np.then(sp));
}
function wb(t) {
  const e = ze.indexOf(t);
  e > Gt && ze.splice(e, 1);
}
function Sb(t) {
  ne(t) ? Cr.push(...t) : (!_n || !_n.includes(
    t,
    t.allowRecurse ? Bn + 1 : Bn
  )) && Cr.push(t), rp();
}
function Ru(t, e, n = ki ? Gt + 1 : 0) {
  for (; n < ze.length; n++) {
    const r = ze[n];
    if (r && r.pre) {
      if (t && r.id !== t.uid)
        continue;
      ze.splice(n, 1), n--, r();
    }
  }
}
function ip(t) {
  if (Cr.length) {
    const e = [...new Set(Cr)].sort(
      (n, r) => $i(n) - $i(r)
    );
    if (Cr.length = 0, _n) {
      _n.push(...e);
      return;
    }
    for (_n = e, Bn = 0; Bn < _n.length; Bn++)
      _n[Bn]();
    _n = null, Bn = 0;
  }
}
const $i = (t) => t.id == null ? 1 / 0 : t.id, Ob = (t, e) => {
  const n = $i(t) - $i(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function sp(t) {
  el = !1, ki = !0, ze.sort(Ob);
  const e = _t;
  try {
    for (Gt = 0; Gt < ze.length; Gt++) {
      const n = ze[Gt];
      n && n.active !== !1 && (yi.NODE_ENV !== "production" && e(n), sn(n, null, 14));
    }
  } finally {
    Gt = 0, ze.length = 0, ip(), ki = !1, zl = null, (ze.length || Cr.length) && sp();
  }
}
function Ab(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const r = t.vnode.props || xe;
  let i = n;
  const s = e.startsWith("update:"), o = s && e.slice(7);
  if (o && o in r) {
    const f = `${o === "modelValue" ? "model" : o}Modifiers`, { number: p, trim: v } = r[f] || xe;
    v && (i = n.map((y) => Le(y) ? y.trim() : y)), p && (i = n.map(Ii));
  }
  let a, u = r[a = ma(e)] || // also try camelCase event handler (#2249)
  r[a = ma(Mr(e))];
  !u && s && (u = r[a = ma(Gr(e))]), u && Ft(
    u,
    t,
    6,
    i
  );
  const c = r[a + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[a])
      return;
    t.emitted[a] = !0, Ft(
      c,
      t,
      6,
      i
    );
  }
}
function op(t, e, n = !1) {
  const r = e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let o = {}, a = !1;
  if (!se(t)) {
    const u = (c) => {
      const f = op(c, e, !0);
      f && (a = !0, Ze(o, f));
    };
    !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  return !s && !a ? (Ae(t) && r.set(t, null), null) : (ne(s) ? s.forEach((u) => o[u] = null) : Ze(o, s), Ae(t) && r.set(t, o), o);
}
function Ao(t, e) {
  return !t || !_o(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), ve(t, e[0].toLowerCase() + e.slice(1)) || ve(t, Gr(e)) || ve(t, e));
}
let pt = null, ap = null;
function eo(t) {
  const e = pt;
  return pt = t, ap = t && t.type.__scopeId || null, e;
}
function Tb(t, e = pt, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && Bu(-1);
    const s = eo(e);
    let o;
    try {
      o = t(...i);
    } finally {
      eo(s), r._d && Bu(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ya(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: i,
    props: s,
    propsOptions: [o],
    slots: a,
    attrs: u,
    emit: c,
    render: f,
    renderCache: p,
    data: v,
    setupState: y,
    ctx: b,
    inheritAttrs: E
  } = t;
  let C, T;
  const K = eo(t);
  try {
    if (n.shapeFlag & 4) {
      const j = i || r, G = yi.NODE_ENV !== "production" && y.__isScriptSetup ? new Proxy(j, {
        get(B, X, z) {
          return mb(
            `Property '${String(
              X
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(B, X, z);
        }
      }) : j;
      C = Kt(
        f.call(
          G,
          j,
          p,
          s,
          y,
          v,
          b
        )
      ), T = u;
    } else {
      const j = e;
      yi.NODE_ENV, C = Kt(
        j.length > 1 ? j(
          s,
          yi.NODE_ENV !== "production" ? {
            get attrs() {
              return u;
            },
            slots: a,
            emit: c
          } : { attrs: u, slots: a, emit: c }
        ) : j(
          s,
          null
          /* we know it doesn't need it */
        )
      ), T = e.props ? u : xb(u);
    }
  } catch (j) {
    Ei.length = 0, Oo(j, t, 1), C = Yt(Fi);
  }
  let W = C;
  if (T && E !== !1) {
    const j = Object.keys(T), { shapeFlag: G } = W;
    j.length && G & 7 && (o && j.some(kl) && (T = Cb(
      T,
      o
    )), W = $r(W, T));
  }
  return n.dirs && (W = $r(W), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && (W.transition = n.transition), C = W, eo(K), C;
}
const xb = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || _o(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Cb = (t, e) => {
  const n = {};
  for (const r in t)
    (!kl(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function Nb(t, e, n) {
  const { props: r, children: i, component: s } = t, { props: o, children: a, patchFlag: u } = e, c = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return r ? Mu(r, o, c) : !!o;
    if (u & 8) {
      const f = e.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const v = f[p];
        if (o[v] !== r[v] && !Ao(c, v))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? Mu(r, o, c) : !0 : !!o;
  return !1;
}
function Mu(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !Ao(n, s))
      return !0;
  }
  return !1;
}
function Pb({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
}
const Ib = Symbol.for("v-ndc"), Db = (t) => t.__isSuspense;
function Rb(t, e) {
  e && e.pendingBranch ? ne(t) ? e.effects.push(...t) : e.effects.push(t) : Sb(t);
}
const Mb = Symbol.for("v-scx"), kb = () => bi(Mb), ws = {};
function js(t, e, n) {
  return lp(t, e, n);
}
function lp(t, e, {
  immediate: n,
  deep: r,
  flush: i,
  once: s,
  onTrack: o,
  onTrigger: a
} = xe) {
  if (e && s) {
    const B = e;
    e = (...X) => {
      B(...X), G();
    };
  }
  const u = Be, c = (B) => r === !0 ? B : (
    // for deep: false, only traverse root-level properties
    Gn(B, r === !1 ? 1 : void 0)
  );
  let f, p = !1, v = !1;
  if (Pe(t) ? (f = () => t.value, p = Qs(t)) : rn(t) ? (f = () => c(t), p = !0) : ne(t) ? (v = !0, p = t.some((B) => rn(B) || Qs(B)), f = () => t.map((B) => {
    if (Pe(B))
      return B.value;
    if (rn(B))
      return c(B);
    if (se(B))
      return sn(B, u, 2);
  })) : se(t) ? e ? f = () => sn(t, u, 2) : f = () => (y && y(), Ft(
    t,
    u,
    3,
    [b]
  )) : f = _t, e && r) {
    const B = f;
    f = () => Gn(B());
  }
  let y, b = (B) => {
    y = W.onStop = () => {
      sn(B, u, 4), y = W.onStop = void 0;
    };
  }, E;
  if (No)
    if (b = _t, e ? n && Ft(e, u, 3, [
      f(),
      v ? [] : void 0,
      b
    ]) : f(), i === "sync") {
      const B = kb();
      E = B.__watcherHandles || (B.__watcherHandles = []);
    } else
      return _t;
  let C = v ? new Array(t.length).fill(ws) : ws;
  const T = () => {
    if (!(!W.active || !W.dirty))
      if (e) {
        const B = W.run();
        (r || p || (v ? B.some((X, z) => xn(X, C[z])) : xn(B, C))) && (y && y(), Ft(e, u, 3, [
          B,
          // pass undefined as the old value when it's changed for the first time
          C === ws ? void 0 : v && C[0] === ws ? [] : C,
          b
        ]), C = B);
      } else
        W.run();
  };
  T.allowRecurse = !!e;
  let K;
  i === "sync" ? K = T : i === "post" ? K = () => ut(T, u && u.suspense) : (T.pre = !0, u && (T.id = u.uid), K = () => Zl(T));
  const W = new Wl(f, _t, K), j = $d(), G = () => {
    W.stop(), j && $l(j.effects, W);
  };
  return e ? n ? T() : C = W.run() : i === "post" ? ut(
    W.run.bind(W),
    u && u.suspense
  ) : W.run(), E && E.push(G), G;
}
function $b(t, e, n) {
  const r = this.proxy, i = Le(t) ? t.includes(".") ? cp(r, t) : () => r[t] : t.bind(r, r);
  let s;
  se(e) ? s = e : (s = e.handler, n = e);
  const o = Hi(this), a = lp(i, s.bind(r), n);
  return o(), a;
}
function cp(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function Gn(t, e, n = 0, r) {
  if (!Ae(t) || t.__v_skip)
    return t;
  if (e && e > 0) {
    if (n >= e)
      return t;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(t))
    return t;
  if (r.add(t), Pe(t))
    Gn(t.value, e, n, r);
  else if (ne(t))
    for (let i = 0; i < t.length; i++)
      Gn(t[i], e, n, r);
  else if (vo(t) || xr(t))
    t.forEach((i) => {
      Gn(i, e, n, r);
    });
  else if (Nd(t))
    for (const i in t)
      Gn(t[i], e, n, r);
  return t;
}
function ku(t, e) {
  if (pt === null)
    return t;
  const n = Po(pt) || pt.proxy, r = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, o, a, u = xe] = e[i];
    s && (se(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Gn(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: u
    }));
  }
  return t;
}
function Wn(t, e, n, r) {
  const i = t.dirs, s = e && e.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    s && (a.oldValue = s[o].value);
    let u = a.dir[r];
    u && (Cn(), Ft(u, n, 8, [
      t.el,
      a,
      t,
      e
    ]), Nn());
  }
}
const Ws = (t) => !!t.type.__asyncLoader, up = (t) => t.type.__isKeepAlive;
function Lb(t, e) {
  fp(t, "a", e);
}
function Fb(t, e) {
  fp(t, "da", e);
}
function fp(t, e, n = Be) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (To(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      up(i.parent.vnode) && jb(r, e, n, i), i = i.parent;
  }
}
function jb(t, e, n, r) {
  const i = To(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  dp(() => {
    $l(r[e], i);
  }, n);
}
function To(t, e, n = Be, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      Cn();
      const a = Hi(n), u = Ft(e, n, t, o);
      return a(), Nn(), u;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const cn = (t) => (e, n = Be) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!No || t === "sp") && To(t, (...r) => e(...r), n)
), Wb = cn("bm"), Vb = cn("m"), Ub = cn("bu"), Hb = cn("u"), Bb = cn("bum"), dp = cn("um"), Kb = cn("sp"), qb = cn(
  "rtg"
), Gb = cn(
  "rtc"
);
function zb(t, e = Be) {
  To("ec", t, e);
}
function Ss(t, e, n, r) {
  let i;
  const s = n && n[r];
  if (ne(t) || Le(t)) {
    i = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      i[o] = e(t[o], o, void 0, s && s[o]);
  } else if (typeof t == "number") {
    i = new Array(t);
    for (let o = 0; o < t; o++)
      i[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (Ae(t))
    if (t[Symbol.iterator])
      i = Array.from(
        t,
        (o, a) => e(o, a, void 0, s && s[a])
      );
    else {
      const o = Object.keys(t);
      i = new Array(o.length);
      for (let a = 0, u = o.length; a < u; a++) {
        const c = o[a];
        i[a] = e(t[c], c, a, s && s[a]);
      }
    }
  else
    i = [];
  return n && (n[r] = i), i;
}
const tl = (t) => t ? Op(t) ? Po(t) || t.proxy : tl(t.parent) : null, vi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ze(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => tl(t.parent),
    $root: (t) => tl(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Jl(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      t.effect.dirty = !0, Zl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Yl.bind(t.proxy)),
    $watch: (t) => $b.bind(t)
  })
), _a = (t, e) => t !== xe && !t.__isScriptSetup && ve(t, e), Yb = {
  get({ _: t }, e) {
    const { ctx: n, setupState: r, data: i, props: s, accessCache: o, type: a, appContext: u } = t;
    let c;
    if (e[0] !== "$") {
      const y = o[e];
      if (y !== void 0)
        switch (y) {
          case 1:
            return r[e];
          case 2:
            return i[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (_a(r, e))
          return o[e] = 1, r[e];
        if (i !== xe && ve(i, e))
          return o[e] = 2, i[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = t.propsOptions[0]) && ve(c, e)
        )
          return o[e] = 3, s[e];
        if (n !== xe && ve(n, e))
          return o[e] = 4, n[e];
        nl && (o[e] = 0);
      }
    }
    const f = vi[e];
    let p, v;
    if (f)
      return e === "$attrs" && ht(t, "get", e), f(t);
    if (
      // css module (injected by vue-loader)
      (p = a.__cssModules) && (p = p[e])
    )
      return p;
    if (n !== xe && ve(n, e))
      return o[e] = 4, n[e];
    if (
      // global properties
      v = u.config.globalProperties, ve(v, e)
    )
      return v[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return _a(i, e) ? (i[e] = n, !0) : r !== xe && ve(r, e) ? (r[e] = n, !0) : ve(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: s }
  }, o) {
    let a;
    return !!n[o] || t !== xe && ve(t, o) || _a(e, o) || (a = s[0]) && ve(a, o) || ve(r, o) || ve(vi, o) || ve(i.config.globalProperties, o);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : ve(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function $u(t) {
  return ne(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let nl = !0;
function Zb(t) {
  const e = Jl(t), n = t.proxy, r = t.ctx;
  nl = !1, e.beforeCreate && Lu(e.beforeCreate, t, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: a,
    provide: u,
    inject: c,
    // lifecycle
    created: f,
    beforeMount: p,
    mounted: v,
    beforeUpdate: y,
    updated: b,
    activated: E,
    deactivated: C,
    beforeDestroy: T,
    beforeUnmount: K,
    destroyed: W,
    unmounted: j,
    render: G,
    renderTracked: B,
    renderTriggered: X,
    errorCaptured: z,
    serverPrefetch: F,
    // public API
    expose: Y,
    inheritAttrs: Q,
    // assets
    components: le,
    directives: ce,
    filters: Te
  } = e;
  if (c && Jb(c, r, null), o)
    for (const oe in o) {
      const fe = o[oe];
      se(fe) && (r[oe] = fe.bind(n));
    }
  if (i) {
    const oe = i.call(n, n);
    Ae(oe) && (t.data = wo(oe));
  }
  if (nl = !0, s)
    for (const oe in s) {
      const fe = s[oe], Re = se(fe) ? fe.bind(n, n) : se(fe.get) ? fe.get.bind(n, n) : _t, Xe = !se(fe) && se(fe.set) ? fe.set.bind(n) : _t, Ke = xp({
        get: Re,
        set: Xe
      });
      Object.defineProperty(r, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => Ke.value,
        set: (Ie) => Ke.value = Ie
      });
    }
  if (a)
    for (const oe in a)
      pp(a[oe], r, n, oe);
  if (u) {
    const oe = se(u) ? u.call(n) : u;
    Reflect.ownKeys(oe).forEach((fe) => {
      rE(fe, oe[fe]);
    });
  }
  f && Lu(f, t, "c");
  function ee(oe, fe) {
    ne(fe) ? fe.forEach((Re) => oe(Re.bind(n))) : fe && oe(fe.bind(n));
  }
  if (ee(Wb, p), ee(Vb, v), ee(Ub, y), ee(Hb, b), ee(Lb, E), ee(Fb, C), ee(zb, z), ee(Gb, B), ee(qb, X), ee(Bb, K), ee(dp, j), ee(Kb, F), ne(Y))
    if (Y.length) {
      const oe = t.exposed || (t.exposed = {});
      Y.forEach((fe) => {
        Object.defineProperty(oe, fe, {
          get: () => n[fe],
          set: (Re) => n[fe] = Re
        });
      });
    } else
      t.exposed || (t.exposed = {});
  G && t.render === _t && (t.render = G), Q != null && (t.inheritAttrs = Q), le && (t.components = le), ce && (t.directives = ce);
}
function Jb(t, e, n = _t) {
  ne(t) && (t = rl(t));
  for (const r in t) {
    const i = t[r];
    let s;
    Ae(i) ? "default" in i ? s = bi(
      i.from || r,
      i.default,
      !0
    ) : s = bi(i.from || r) : s = bi(i), Pe(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : e[r] = s;
  }
}
function Lu(t, e, n) {
  Ft(
    ne(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function pp(t, e, n, r) {
  const i = r.includes(".") ? cp(n, r) : () => n[r];
  if (Le(t)) {
    const s = e[t];
    se(s) && js(i, s);
  } else if (se(t))
    js(i, t.bind(n));
  else if (Ae(t))
    if (ne(t))
      t.forEach((s) => pp(s, e, n, r));
    else {
      const s = se(t.handler) ? t.handler.bind(n) : e[t.handler];
      se(s) && js(i, s, t);
    }
}
function Jl(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = t.appContext, a = s.get(e);
  let u;
  return a ? u = a : !i.length && !n && !r ? u = e : (u = {}, i.length && i.forEach(
    (c) => to(u, c, o, !0)
  ), to(u, e, o)), Ae(e) && s.set(e, u), u;
}
function to(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && to(t, s, n, !0), i && i.forEach(
    (o) => to(t, o, n, !0)
  );
  for (const o in e)
    if (!(r && o === "expose")) {
      const a = Xb[o] || n && n[o];
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const Xb = {
  data: Fu,
  props: ju,
  emits: ju,
  // objects
  methods: mi,
  computed: mi,
  // lifecycle
  beforeCreate: rt,
  created: rt,
  beforeMount: rt,
  mounted: rt,
  beforeUpdate: rt,
  updated: rt,
  beforeDestroy: rt,
  beforeUnmount: rt,
  destroyed: rt,
  unmounted: rt,
  activated: rt,
  deactivated: rt,
  errorCaptured: rt,
  serverPrefetch: rt,
  // assets
  components: mi,
  directives: mi,
  // watch
  watch: eE,
  // provide / inject
  provide: Fu,
  inject: Qb
};
function Fu(t, e) {
  return e ? t ? function() {
    return Ze(
      se(t) ? t.call(this, this) : t,
      se(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Qb(t, e) {
  return mi(rl(t), rl(e));
}
function rl(t) {
  if (ne(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function rt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function mi(t, e) {
  return t ? Ze(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function ju(t, e) {
  return t ? ne(t) && ne(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Ze(
    /* @__PURE__ */ Object.create(null),
    $u(t),
    $u(e ?? {})
  ) : e;
}
function eE(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = Ze(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = rt(t[r], e[r]);
  return n;
}
function hp() {
  return {
    app: null,
    config: {
      isNativeTag: Av,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let tE = 0;
function nE(t, e) {
  return function(r, i = null) {
    se(r) || (r = Ze({}, r)), i != null && !Ae(i) && (i = null);
    const s = hp(), o = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const u = s.app = {
      _uid: tE++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: RE,
      get config() {
        return s.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return o.has(c) || (c && se(c.install) ? (o.add(c), c.install(u, ...f)) : se(c) && (o.add(c), c(u, ...f))), u;
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), u;
      },
      component(c, f) {
        return f ? (s.components[c] = f, u) : s.components[c];
      },
      directive(c, f) {
        return f ? (s.directives[c] = f, u) : s.directives[c];
      },
      mount(c, f, p) {
        if (!a) {
          const v = Yt(r, i);
          return v.appContext = s, p === !0 ? p = "svg" : p === !1 && (p = void 0), f && e ? e(v, c) : t(v, c, p), a = !0, u._container = c, c.__vue_app__ = u, Po(v.component) || v.component.proxy;
        }
      },
      unmount() {
        a && (t(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, f) {
        return s.provides[c] = f, u;
      },
      runWithContext(c) {
        Li = u;
        try {
          return c();
        } finally {
          Li = null;
        }
      }
    };
    return u;
  };
}
let Li = null;
function rE(t, e) {
  if (Be) {
    let n = Be.provides;
    const r = Be.parent && Be.parent.provides;
    r === n && (n = Be.provides = Object.create(r)), n[t] = e;
  }
}
function bi(t, e, n = !1) {
  const r = Be || pt;
  if (r || Li) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Li._context.provides;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return n && se(e) ? e.call(r && r.proxy) : e;
  }
}
function iE() {
  return !!(Be || pt || Li);
}
function sE(t, e, n, r = !1) {
  const i = {}, s = {};
  Js(s, Co, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), mp(t, e, i, s);
  for (const o in t.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? t.props = r ? i : ob(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function oE(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: o }
  } = t, a = he(i), [u] = t.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = t.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let v = f[p];
        if (Ao(t.emitsOptions, v))
          continue;
        const y = e[v];
        if (u)
          if (ve(s, v))
            y !== s[v] && (s[v] = y, c = !0);
          else {
            const b = Mr(v);
            i[b] = il(
              u,
              a,
              b,
              y,
              t,
              !1
            );
          }
        else
          y !== s[v] && (s[v] = y, c = !0);
      }
    }
  } else {
    mp(t, e, i, s) && (c = !0);
    let f;
    for (const p in a)
      (!e || // for camelCase
      !ve(e, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Gr(p)) === p || !ve(e, f))) && (u ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[f] !== void 0) && (i[p] = il(
        u,
        a,
        p,
        void 0,
        t,
        !0
      )) : delete i[p]);
    if (s !== a)
      for (const p in s)
        (!e || !ve(e, p)) && (delete s[p], c = !0);
  }
  c && nn(t, "set", "$attrs");
}
function mp(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let o = !1, a;
  if (e)
    for (let u in e) {
      if ($s(u))
        continue;
      const c = e[u];
      let f;
      i && ve(i, f = Mr(u)) ? !s || !s.includes(f) ? n[f] = c : (a || (a = {}))[f] = c : Ao(t.emitsOptions, u) || (!(u in r) || c !== r[u]) && (r[u] = c, o = !0);
    }
  if (s) {
    const u = he(n), c = a || xe;
    for (let f = 0; f < s.length; f++) {
      const p = s[f];
      n[p] = il(
        i,
        u,
        p,
        c[p],
        t,
        !ve(c, p)
      );
    }
  }
  return o;
}
function il(t, e, n, r, i, s) {
  const o = t[n];
  if (o != null) {
    const a = ve(o, "default");
    if (a && r === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && se(u)) {
        const { propsDefaults: c } = i;
        if (n in c)
          r = c[n];
        else {
          const f = Hi(i);
          r = c[n] = u.call(
            null,
            e
          ), f();
        }
      } else
        r = u;
    }
    o[
      0
      /* shouldCast */
    ] && (s && !a ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Gr(n)) && (r = !0));
  }
  return r;
}
function gp(t, e, n = !1) {
  const r = e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, o = {}, a = [];
  let u = !1;
  if (!se(t)) {
    const f = (p) => {
      u = !0;
      const [v, y] = gp(p, e, !0);
      Ze(o, v), y && a.push(...y);
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!s && !u)
    return Ae(t) && r.set(t, Tr), Tr;
  if (ne(s))
    for (let f = 0; f < s.length; f++) {
      const p = Mr(s[f]);
      Wu(p) && (o[p] = xe);
    }
  else if (s)
    for (const f in s) {
      const p = Mr(f);
      if (Wu(p)) {
        const v = s[f], y = o[p] = ne(v) || se(v) ? { type: v } : Ze({}, v);
        if (y) {
          const b = Hu(Boolean, y.type), E = Hu(String, y.type);
          y[
            0
            /* shouldCast */
          ] = b > -1, y[
            1
            /* shouldCastTrue */
          ] = E < 0 || b < E, (b > -1 || ve(y, "default")) && a.push(p);
        }
      }
    }
  const c = [o, a];
  return Ae(t) && r.set(t, c), c;
}
function Wu(t) {
  return t[0] !== "$";
}
function Vu(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function Uu(t, e) {
  return Vu(t) === Vu(e);
}
function Hu(t, e) {
  return ne(e) ? e.findIndex((n) => Uu(n, t)) : se(e) && Uu(e, t) ? 0 : -1;
}
const yp = (t) => t[0] === "_" || t === "$stable", Xl = (t) => ne(t) ? t.map(Kt) : [Kt(t)], aE = (t, e, n) => {
  if (e._n)
    return e;
  const r = Tb((...i) => (yi.NODE_ENV !== "production" && Be && (!n || (n.root, Be.root)), Xl(e(...i))), n);
  return r._c = !1, r;
}, _p = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (yp(i))
      continue;
    const s = t[i];
    if (se(s))
      e[i] = aE(i, s, r);
    else if (s != null) {
      const o = Xl(s);
      e[i] = () => o;
    }
  }
}, vp = (t, e) => {
  const n = Xl(e);
  t.slots.default = () => n;
}, lE = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = he(e), Js(e, "_", n)) : _p(
      e,
      t.slots = {}
    );
  } else
    t.slots = {}, e && vp(t, e);
  Js(t.slots, Co, 1);
}, cE = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, o = xe;
  if (r.shapeFlag & 32) {
    const a = e._;
    a ? n && a === 1 ? s = !1 : (Ze(i, e), !n && a === 1 && delete i._) : (s = !e.$stable, _p(e, i)), o = e;
  } else
    e && (vp(t, e), o = { default: 1 });
  if (s)
    for (const a in i)
      !yp(a) && o[a] == null && delete i[a];
};
function sl(t, e, n, r, i = !1) {
  if (ne(t)) {
    t.forEach(
      (v, y) => sl(
        v,
        e && (ne(e) ? e[y] : e),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Ws(r) && !i)
    return;
  const s = r.shapeFlag & 4 ? Po(r.component) || r.component.proxy : r.el, o = i ? null : s, { i: a, r: u } = t, c = e && e.r, f = a.refs === xe ? a.refs = {} : a.refs, p = a.setupState;
  if (c != null && c !== u && (Le(c) ? (f[c] = null, ve(p, c) && (p[c] = null)) : Pe(c) && (c.value = null)), se(u))
    sn(u, a, 12, [o, f]);
  else {
    const v = Le(u), y = Pe(u), b = t.f;
    if (v || y) {
      const E = () => {
        if (b) {
          const C = v ? ve(p, u) ? p[u] : f[u] : u.value;
          i ? ne(C) && $l(C, s) : ne(C) ? C.includes(s) || C.push(s) : v ? (f[u] = [s], ve(p, u) && (p[u] = f[u])) : (u.value = [s], t.k && (f[t.k] = u.value));
        } else
          v ? (f[u] = o, ve(p, u) && (p[u] = o)) : y && (u.value = o, t.k && (f[t.k] = o));
      };
      i || b ? E() : (E.id = -1, ut(E, n));
    }
  }
}
const ut = Rb;
function uE(t) {
  return fE(t);
}
function fE(t, e) {
  const n = Id();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: a,
    createComment: u,
    setText: c,
    setElementText: f,
    parentNode: p,
    nextSibling: v,
    setScopeId: y = _t,
    insertStaticContent: b
  } = t, E = (m, _, S, P = null, I = null, R = null, V = void 0, w = null, M = !!_.dynamicChildren) => {
    if (m === _)
      return;
    m && !ci(m, _) && (P = O(m), Ie(m, I, R, !0), m = null), _.patchFlag === -2 && (M = !1, _.dynamicChildren = null);
    const { type: D, ref: q, shapeFlag: J } = _;
    switch (D) {
      case xo:
        C(m, _, S, P);
        break;
      case Fi:
        T(m, _, S, P);
        break;
      case Vs:
        m == null && K(_, S, P, V);
        break;
      case ft:
        le(
          m,
          _,
          S,
          P,
          I,
          R,
          V,
          w,
          M
        );
        break;
      default:
        J & 1 ? G(
          m,
          _,
          S,
          P,
          I,
          R,
          V,
          w,
          M
        ) : J & 6 ? ce(
          m,
          _,
          S,
          P,
          I,
          R,
          V,
          w,
          M
        ) : (J & 64 || J & 128) && D.process(
          m,
          _,
          S,
          P,
          I,
          R,
          V,
          w,
          M,
          Ne
        );
    }
    q != null && I && sl(q, m && m.ref, R, _ || m, !_);
  }, C = (m, _, S, P) => {
    if (m == null)
      r(
        _.el = a(_.children),
        S,
        P
      );
    else {
      const I = _.el = m.el;
      _.children !== m.children && c(I, _.children);
    }
  }, T = (m, _, S, P) => {
    m == null ? r(
      _.el = u(_.children || ""),
      S,
      P
    ) : _.el = m.el;
  }, K = (m, _, S, P) => {
    [m.el, m.anchor] = b(
      m.children,
      _,
      S,
      P,
      m.el,
      m.anchor
    );
  }, W = ({ el: m, anchor: _ }, S, P) => {
    let I;
    for (; m && m !== _; )
      I = v(m), r(m, S, P), m = I;
    r(_, S, P);
  }, j = ({ el: m, anchor: _ }) => {
    let S;
    for (; m && m !== _; )
      S = v(m), i(m), m = S;
    i(_);
  }, G = (m, _, S, P, I, R, V, w, M) => {
    _.type === "svg" ? V = "svg" : _.type === "math" && (V = "mathml"), m == null ? B(
      _,
      S,
      P,
      I,
      R,
      V,
      w,
      M
    ) : F(
      m,
      _,
      I,
      R,
      V,
      w,
      M
    );
  }, B = (m, _, S, P, I, R, V, w) => {
    let M, D;
    const { props: q, shapeFlag: J, transition: Z, dirs: te } = m;
    if (M = m.el = o(
      m.type,
      R,
      q && q.is,
      q
    ), J & 8 ? f(M, m.children) : J & 16 && z(
      m.children,
      M,
      null,
      P,
      I,
      va(m, R),
      V,
      w
    ), te && Wn(m, null, P, "created"), X(M, m, m.scopeId, V, P), q) {
      for (const ye in q)
        ye !== "value" && !$s(ye) && s(
          M,
          ye,
          null,
          q[ye],
          R,
          m.children,
          P,
          I,
          Ce
        );
      "value" in q && s(M, "value", null, q.value, R), (D = q.onVnodeBeforeMount) && Vt(D, P, m);
    }
    te && Wn(m, null, P, "beforeMount");
    const ae = dE(I, Z);
    ae && Z.beforeEnter(M), r(M, _, S), ((D = q && q.onVnodeMounted) || ae || te) && ut(() => {
      D && Vt(D, P, m), ae && Z.enter(M), te && Wn(m, null, P, "mounted");
    }, I);
  }, X = (m, _, S, P, I) => {
    if (S && y(m, S), P)
      for (let R = 0; R < P.length; R++)
        y(m, P[R]);
    if (I) {
      let R = I.subTree;
      if (_ === R) {
        const V = I.vnode;
        X(
          m,
          V,
          V.scopeId,
          V.slotScopeIds,
          I.parent
        );
      }
    }
  }, z = (m, _, S, P, I, R, V, w, M = 0) => {
    for (let D = M; D < m.length; D++) {
      const q = m[D] = w ? vn(m[D]) : Kt(m[D]);
      E(
        null,
        q,
        _,
        S,
        P,
        I,
        R,
        V,
        w
      );
    }
  }, F = (m, _, S, P, I, R, V) => {
    const w = _.el = m.el;
    let { patchFlag: M, dynamicChildren: D, dirs: q } = _;
    M |= m.patchFlag & 16;
    const J = m.props || xe, Z = _.props || xe;
    let te;
    if (S && Vn(S, !1), (te = Z.onVnodeBeforeUpdate) && Vt(te, S, _, m), q && Wn(_, m, S, "beforeUpdate"), S && Vn(S, !0), D ? Y(
      m.dynamicChildren,
      D,
      w,
      S,
      P,
      va(_, I),
      R
    ) : V || fe(
      m,
      _,
      w,
      null,
      S,
      P,
      va(_, I),
      R,
      !1
    ), M > 0) {
      if (M & 16)
        Q(
          w,
          _,
          J,
          Z,
          S,
          P,
          I
        );
      else if (M & 2 && J.class !== Z.class && s(w, "class", null, Z.class, I), M & 4 && s(w, "style", J.style, Z.style, I), M & 8) {
        const ae = _.dynamicProps;
        for (let ye = 0; ye < ae.length; ye++) {
          const Ee = ae[ye], ke = J[Ee], Ot = Z[Ee];
          (Ot !== ke || Ee === "value") && s(
            w,
            Ee,
            ke,
            Ot,
            I,
            m.children,
            S,
            P,
            Ce
          );
        }
      }
      M & 1 && m.children !== _.children && f(w, _.children);
    } else
      !V && D == null && Q(
        w,
        _,
        J,
        Z,
        S,
        P,
        I
      );
    ((te = Z.onVnodeUpdated) || q) && ut(() => {
      te && Vt(te, S, _, m), q && Wn(_, m, S, "updated");
    }, P);
  }, Y = (m, _, S, P, I, R, V) => {
    for (let w = 0; w < _.length; w++) {
      const M = m[w], D = _[w], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === ft || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ci(M, D) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 70) ? p(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      E(
        M,
        D,
        q,
        null,
        P,
        I,
        R,
        V,
        !0
      );
    }
  }, Q = (m, _, S, P, I, R, V) => {
    if (S !== P) {
      if (S !== xe)
        for (const w in S)
          !$s(w) && !(w in P) && s(
            m,
            w,
            S[w],
            null,
            V,
            _.children,
            I,
            R,
            Ce
          );
      for (const w in P) {
        if ($s(w))
          continue;
        const M = P[w], D = S[w];
        M !== D && w !== "value" && s(
          m,
          w,
          D,
          M,
          V,
          _.children,
          I,
          R,
          Ce
        );
      }
      "value" in P && s(m, "value", S.value, P.value, V);
    }
  }, le = (m, _, S, P, I, R, V, w, M) => {
    const D = _.el = m ? m.el : a(""), q = _.anchor = m ? m.anchor : a("");
    let { patchFlag: J, dynamicChildren: Z, slotScopeIds: te } = _;
    te && (w = w ? w.concat(te) : te), m == null ? (r(D, S, P), r(q, S, P), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      S,
      q,
      I,
      R,
      V,
      w,
      M
    )) : J > 0 && J & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren ? (Y(
      m.dynamicChildren,
      Z,
      S,
      I,
      R,
      V,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || I && _ === I.subTree) && bp(
      m,
      _,
      !0
      /* shallow */
    )) : fe(
      m,
      _,
      S,
      q,
      I,
      R,
      V,
      w,
      M
    );
  }, ce = (m, _, S, P, I, R, V, w, M) => {
    _.slotScopeIds = w, m == null ? _.shapeFlag & 512 ? I.ctx.activate(
      _,
      S,
      P,
      V,
      M
    ) : Te(
      _,
      S,
      P,
      I,
      R,
      V,
      M
    ) : Se(m, _, M);
  }, Te = (m, _, S, P, I, R, V) => {
    const w = m.component = OE(
      m,
      P,
      I
    );
    if (up(m) && (w.ctx.renderer = Ne), AE(w), w.asyncDep) {
      if (I && I.registerDep(w, ee), !m.el) {
        const M = w.subTree = Yt(Fi);
        T(null, M, _, S);
      }
    } else
      ee(
        w,
        m,
        _,
        S,
        I,
        R,
        V
      );
  }, Se = (m, _, S) => {
    const P = _.component = m.component;
    if (Nb(m, _, S))
      if (P.asyncDep && !P.asyncResolved) {
        oe(P, _, S);
        return;
      } else
        P.next = _, wb(P.update), P.effect.dirty = !0, P.update();
    else
      _.el = m.el, P.vnode = _;
  }, ee = (m, _, S, P, I, R, V) => {
    const w = () => {
      if (m.isMounted) {
        let { next: q, bu: J, u: Z, parent: te, vnode: ae } = m;
        {
          const un = Ep(m);
          if (un) {
            q && (q.el = ae.el, oe(m, q, V)), un.asyncDep.then(() => {
              m.isUnmounted || w();
            });
            return;
          }
        }
        let ye = q, Ee;
        Vn(m, !1), q ? (q.el = ae.el, oe(m, q, V)) : q = ae, J && Ls(J), (Ee = q.props && q.props.onVnodeBeforeUpdate) && Vt(Ee, te, q, ae), Vn(m, !0);
        const ke = ya(m), Ot = m.subTree;
        m.subTree = ke, E(
          Ot,
          ke,
          // parent may have changed if it's in a teleport
          p(Ot.el),
          // anchor may have changed if it's in a fragment
          O(Ot),
          m,
          I,
          R
        ), q.el = ke.el, ye === null && Pb(m, ke.el), Z && ut(Z, I), (Ee = q.props && q.props.onVnodeUpdated) && ut(
          () => Vt(Ee, te, q, ae),
          I
        );
      } else {
        let q;
        const { el: J, props: Z } = _, { bm: te, m: ae, parent: ye } = m, Ee = Ws(_);
        if (Vn(m, !1), te && Ls(te), !Ee && (q = Z && Z.onVnodeBeforeMount) && Vt(q, ye, _), Vn(m, !0), J && je) {
          const ke = () => {
            m.subTree = ya(m), je(
              J,
              m.subTree,
              m,
              I,
              null
            );
          };
          Ee ? _.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !m.isUnmounted && ke()
          ) : ke();
        } else {
          const ke = m.subTree = ya(m);
          E(
            null,
            ke,
            S,
            P,
            m,
            I,
            R
          ), _.el = ke.el;
        }
        if (ae && ut(ae, I), !Ee && (q = Z && Z.onVnodeMounted)) {
          const ke = _;
          ut(
            () => Vt(q, ye, ke),
            I
          );
        }
        (_.shapeFlag & 256 || ye && Ws(ye.vnode) && ye.vnode.shapeFlag & 256) && m.a && ut(m.a, I), m.isMounted = !0, _ = S = P = null;
      }
    }, M = m.effect = new Wl(
      w,
      _t,
      () => Zl(D),
      m.scope
      // track it in component's effect scope
    ), D = m.update = () => {
      M.dirty && M.run();
    };
    D.id = m.uid, Vn(m, !0), D();
  }, oe = (m, _, S) => {
    _.component = m;
    const P = m.vnode.props;
    m.vnode = _, m.next = null, oE(m, _.props, P, S), cE(m, _.children, S), Cn(), Ru(m), Nn();
  }, fe = (m, _, S, P, I, R, V, w, M = !1) => {
    const D = m && m.children, q = m ? m.shapeFlag : 0, J = _.children, { patchFlag: Z, shapeFlag: te } = _;
    if (Z > 0) {
      if (Z & 128) {
        Xe(
          D,
          J,
          S,
          P,
          I,
          R,
          V,
          w,
          M
        );
        return;
      } else if (Z & 256) {
        Re(
          D,
          J,
          S,
          P,
          I,
          R,
          V,
          w,
          M
        );
        return;
      }
    }
    te & 8 ? (q & 16 && Ce(D, I, R), J !== D && f(S, J)) : q & 16 ? te & 16 ? Xe(
      D,
      J,
      S,
      P,
      I,
      R,
      V,
      w,
      M
    ) : Ce(D, I, R, !0) : (q & 8 && f(S, ""), te & 16 && z(
      J,
      S,
      P,
      I,
      R,
      V,
      w,
      M
    ));
  }, Re = (m, _, S, P, I, R, V, w, M) => {
    m = m || Tr, _ = _ || Tr;
    const D = m.length, q = _.length, J = Math.min(D, q);
    let Z;
    for (Z = 0; Z < J; Z++) {
      const te = _[Z] = M ? vn(_[Z]) : Kt(_[Z]);
      E(
        m[Z],
        te,
        S,
        null,
        I,
        R,
        V,
        w,
        M
      );
    }
    D > q ? Ce(
      m,
      I,
      R,
      !0,
      !1,
      J
    ) : z(
      _,
      S,
      P,
      I,
      R,
      V,
      w,
      M,
      J
    );
  }, Xe = (m, _, S, P, I, R, V, w, M) => {
    let D = 0;
    const q = _.length;
    let J = m.length - 1, Z = q - 1;
    for (; D <= J && D <= Z; ) {
      const te = m[D], ae = _[D] = M ? vn(_[D]) : Kt(_[D]);
      if (ci(te, ae))
        E(
          te,
          ae,
          S,
          null,
          I,
          R,
          V,
          w,
          M
        );
      else
        break;
      D++;
    }
    for (; D <= J && D <= Z; ) {
      const te = m[J], ae = _[Z] = M ? vn(_[Z]) : Kt(_[Z]);
      if (ci(te, ae))
        E(
          te,
          ae,
          S,
          null,
          I,
          R,
          V,
          w,
          M
        );
      else
        break;
      J--, Z--;
    }
    if (D > J) {
      if (D <= Z) {
        const te = Z + 1, ae = te < q ? _[te].el : P;
        for (; D <= Z; )
          E(
            null,
            _[D] = M ? vn(_[D]) : Kt(_[D]),
            S,
            ae,
            I,
            R,
            V,
            w,
            M
          ), D++;
      }
    } else if (D > Z)
      for (; D <= J; )
        Ie(m[D], I, R, !0), D++;
    else {
      const te = D, ae = D, ye = /* @__PURE__ */ new Map();
      for (D = ae; D <= Z; D++) {
        const et = _[D] = M ? vn(_[D]) : Kt(_[D]);
        et.key != null && ye.set(et.key, D);
      }
      let Ee, ke = 0;
      const Ot = Z - ae + 1;
      let un = !1, rs = 0;
      const Dn = new Array(Ot);
      for (D = 0; D < Ot; D++)
        Dn[D] = 0;
      for (D = te; D <= J; D++) {
        const et = m[D];
        if (ke >= Ot) {
          Ie(et, I, R, !0);
          continue;
        }
        let qe;
        if (et.key != null)
          qe = ye.get(et.key);
        else
          for (Ee = ae; Ee <= Z; Ee++)
            if (Dn[Ee - ae] === 0 && ci(et, _[Ee])) {
              qe = Ee;
              break;
            }
        qe === void 0 ? Ie(et, I, R, !0) : (Dn[qe - ae] = D + 1, qe >= rs ? rs = qe : un = !0, E(
          et,
          _[qe],
          S,
          null,
          I,
          R,
          V,
          w,
          M
        ), ke++);
      }
      const ni = un ? pE(Dn) : Tr;
      for (Ee = ni.length - 1, D = Ot - 1; D >= 0; D--) {
        const et = ae + D, qe = _[et], is = et + 1 < q ? _[et + 1].el : P;
        Dn[D] === 0 ? E(
          null,
          qe,
          S,
          is,
          I,
          R,
          V,
          w,
          M
        ) : un && (Ee < 0 || D !== ni[Ee] ? Ke(qe, S, is, 2) : Ee--);
      }
    }
  }, Ke = (m, _, S, P, I = null) => {
    const { el: R, type: V, transition: w, children: M, shapeFlag: D } = m;
    if (D & 6) {
      Ke(m.component.subTree, _, S, P);
      return;
    }
    if (D & 128) {
      m.suspense.move(_, S, P);
      return;
    }
    if (D & 64) {
      V.move(m, _, S, Ne);
      return;
    }
    if (V === ft) {
      r(R, _, S);
      for (let J = 0; J < M.length; J++)
        Ke(M[J], _, S, P);
      r(m.anchor, _, S);
      return;
    }
    if (V === Vs) {
      W(m, _, S);
      return;
    }
    if (P !== 2 && D & 1 && w)
      if (P === 0)
        w.beforeEnter(R), r(R, _, S), ut(() => w.enter(R), I);
      else {
        const { leave: J, delayLeave: Z, afterLeave: te } = w, ae = () => r(R, _, S), ye = () => {
          J(R, () => {
            ae(), te && te();
          });
        };
        Z ? Z(R, ae, ye) : ye();
      }
    else
      r(R, _, S);
  }, Ie = (m, _, S, P = !1, I = !1) => {
    const {
      type: R,
      props: V,
      ref: w,
      children: M,
      dynamicChildren: D,
      shapeFlag: q,
      patchFlag: J,
      dirs: Z
    } = m;
    if (w != null && sl(w, null, S, m, !0), q & 256) {
      _.ctx.deactivate(m);
      return;
    }
    const te = q & 1 && Z, ae = !Ws(m);
    let ye;
    if (ae && (ye = V && V.onVnodeBeforeUnmount) && Vt(ye, _, m), q & 6)
      Qe(m.component, S, P);
    else {
      if (q & 128) {
        m.suspense.unmount(S, P);
        return;
      }
      te && Wn(m, null, _, "beforeUnmount"), q & 64 ? m.type.remove(
        m,
        _,
        S,
        I,
        Ne,
        P
      ) : D && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== ft || J > 0 && J & 64) ? Ce(
        D,
        _,
        S,
        !1,
        !0
      ) : (R === ft && J & 384 || !I && q & 16) && Ce(M, _, S), P && St(m);
    }
    (ae && (ye = V && V.onVnodeUnmounted) || te) && ut(() => {
      ye && Vt(ye, _, m), te && Wn(m, null, _, "unmounted");
    }, S);
  }, St = (m) => {
    const { type: _, el: S, anchor: P, transition: I } = m;
    if (_ === ft) {
      mt(S, P);
      return;
    }
    if (_ === Vs) {
      j(m);
      return;
    }
    const R = () => {
      i(S), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (m.shapeFlag & 1 && I && !I.persisted) {
      const { leave: V, delayLeave: w } = I, M = () => V(S, R);
      w ? w(m.el, R, M) : M();
    } else
      R();
  }, mt = (m, _) => {
    let S;
    for (; m !== _; )
      S = v(m), i(m), m = S;
    i(_);
  }, Qe = (m, _, S) => {
    const { bum: P, scope: I, update: R, subTree: V, um: w } = m;
    P && Ls(P), I.stop(), R && (R.active = !1, Ie(V, m, _, S)), w && ut(w, _), ut(() => {
      m.isUnmounted = !0;
    }, _), _ && _.pendingBranch && !_.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve());
  }, Ce = (m, _, S, P = !1, I = !1, R = 0) => {
    for (let V = R; V < m.length; V++)
      Ie(m[V], _, S, P, I);
  }, O = (m) => m.shapeFlag & 6 ? O(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : v(m.anchor || m.el);
  let U = !1;
  const Oe = (m, _, S) => {
    m == null ? _._vnode && Ie(_._vnode, null, null, !0) : E(
      _._vnode || null,
      m,
      _,
      null,
      null,
      null,
      S
    ), U || (U = !0, Ru(), ip(), U = !1), _._vnode = m;
  }, Ne = {
    p: E,
    um: Ie,
    m: Ke,
    r: St,
    mt: Te,
    mc: z,
    pc: fe,
    pbc: Y,
    n: O,
    o: t
  };
  let x, je;
  return e && ([x, je] = e(
    Ne
  )), {
    render: Oe,
    hydrate: x,
    createApp: nE(Oe, x)
  };
}
function va({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Vn({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function dE(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function bp(t, e, n = !1) {
  const r = t.children, i = e.children;
  if (ne(r) && ne(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let a = i[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[s] = vn(i[s]), a.el = o.el), n || bp(o, a)), a.type === xo && (a.el = o.el);
    }
}
function pE(t) {
  const e = t.slice(), n = [0];
  let r, i, s, o, a;
  const u = t.length;
  for (r = 0; r < u; r++) {
    const c = t[r];
    if (c !== 0) {
      if (i = n[n.length - 1], t[i] < c) {
        e[r] = i, n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        a = s + o >> 1, t[n[a]] < c ? s = a + 1 : o = a;
      c < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = e[o];
  return n;
}
function Ep(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Ep(e);
}
const hE = (t) => t.__isTeleport, ft = Symbol.for("v-fgt"), xo = Symbol.for("v-txt"), Fi = Symbol.for("v-cmt"), Vs = Symbol.for("v-stc"), Ei = [];
let $t = null;
function Ht(t = !1) {
  Ei.push($t = t ? null : []);
}
function mE() {
  Ei.pop(), $t = Ei[Ei.length - 1] || null;
}
let ji = 1;
function Bu(t) {
  ji += t;
}
function gE(t) {
  return t.dynamicChildren = ji > 0 ? $t || Tr : null, mE(), ji > 0 && $t && $t.push(t), t;
}
function Bt(t, e, n, r, i, s) {
  return gE(
    pe(
      t,
      e,
      n,
      r,
      i,
      s,
      !0
    )
  );
}
function yE(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function ci(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Co = "__vInternal", wp = ({ key: t }) => t ?? null, Us = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Le(t) || Pe(t) || se(t) ? { i: pt, r: t, k: e, f: !!n } : t : null);
function pe(t, e = null, n = null, r = 0, i = null, s = t === ft ? 0 : 1, o = !1, a = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && wp(e),
    ref: e && Us(e),
    scopeId: ap,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: pt
  };
  return a ? (Ql(u, n), s & 128 && t.normalize(u)) : n && (u.shapeFlag |= Le(n) ? 8 : 16), ji > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  $t && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && $t.push(u), u;
}
const Yt = _E;
function _E(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === Ib) && (t = Fi), yE(t)) {
    const a = $r(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Ql(a, n), ji > 0 && !s && $t && (a.shapeFlag & 6 ? $t[$t.indexOf(t)] = a : $t.push(a)), a.patchFlag |= -2, a;
  }
  if (DE(t) && (t = t.__vccOpts), e) {
    e = vE(e);
    let { class: a, style: u } = e;
    a && !Le(a) && (e.class = jl(a)), Ae(u) && (Zd(u) && !ne(u) && (u = Ze({}, u)), e.style = Fl(u));
  }
  const o = Le(t) ? 1 : Db(t) ? 128 : hE(t) ? 64 : Ae(t) ? 4 : se(t) ? 2 : 0;
  return pe(
    t,
    e,
    n,
    r,
    i,
    o,
    s,
    !0
  );
}
function vE(t) {
  return t ? Zd(t) || Co in t ? Ze({}, t) : t : null;
}
function $r(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: o } = t, a = e ? EE(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && wp(a),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? ne(i) ? i.concat(Us(e)) : [i, Us(e)] : Us(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== ft ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && $r(t.ssContent),
    ssFallback: t.ssFallback && $r(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function bE(t = " ", e = 0) {
  return Yt(xo, null, t, e);
}
function Sp(t, e) {
  const n = Yt(Vs, null, t);
  return n.staticCount = e, n;
}
function Kt(t) {
  return t == null || typeof t == "boolean" ? Yt(Fi) : ne(t) ? Yt(
    ft,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? vn(t) : Yt(xo, null, String(t));
}
function vn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : $r(t);
}
function Ql(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (ne(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Ql(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(Co in e) ? e._ctx = pt : i === 3 && pt && (pt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    se(e) ? (e = { default: e, _ctx: pt }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [bE(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function EE(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = jl([e.class, r.class]));
      else if (i === "style")
        e.style = Fl([e.style, r.style]);
      else if (_o(i)) {
        const s = e[i], o = r[i];
        o && s !== o && !(ne(s) && s.includes(o)) && (e[i] = s ? [].concat(s, o) : o);
      } else
        i !== "" && (e[i] = r[i]);
  }
  return e;
}
function Vt(t, e, n, r = null) {
  Ft(t, e, 7, [
    n,
    r
  ]);
}
const wE = hp();
let SE = 0;
function OE(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || wE, s = {
    uid: SE++,
    vnode: t,
    type: r,
    parent: e,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Md(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: gp(r, i),
    emitsOptions: op(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: xe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: xe,
    data: xe,
    props: xe,
    attrs: xe,
    slots: xe,
    refs: xe,
    setupState: xe,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Ab.bind(null, s), t.ce && t.ce(s), s;
}
let Be = null, no, ol;
{
  const t = Id(), e = (n, r) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  no = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Be = n
  ), ol = e(
    "__VUE_SSR_SETTERS__",
    (n) => No = n
  );
}
const Hi = (t) => {
  const e = Be;
  return no(t), t.scope.on(), () => {
    t.scope.off(), no(e);
  };
}, Ku = () => {
  Be && Be.scope.off(), no(null);
};
function Op(t) {
  return t.vnode.shapeFlag & 4;
}
let No = !1;
function AE(t, e = !1) {
  e && ol(e);
  const { props: n, children: r } = t.vnode, i = Op(t);
  sE(t, n, i, e), lE(t, r);
  const s = i ? TE(t, e) : void 0;
  return e && ol(!1), s;
}
function TE(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = So(new Proxy(t.ctx, Yb));
  const { setup: r } = n;
  if (r) {
    const i = t.setupContext = r.length > 1 ? CE(t) : null, s = Hi(t);
    Cn();
    const o = sn(
      r,
      t,
      0,
      [
        t.props,
        i
      ]
    );
    if (Nn(), s(), xd(o)) {
      if (o.then(Ku, Ku), e)
        return o.then((a) => {
          qu(t, a, e);
        }).catch((a) => {
          Oo(a, t, 0);
        });
      t.asyncDep = o;
    } else
      qu(t, o, e);
  } else
    Ap(t, e);
}
function qu(t, e, n) {
  se(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ae(e) && (t.setupState = Qd(e)), Ap(t, n);
}
let Gu;
function Ap(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && Gu && !r.render) {
      const i = r.template || Jl(t).template;
      if (i) {
        const { isCustomElement: s, compilerOptions: o } = t.appContext.config, { delimiters: a, compilerOptions: u } = r, c = Ze(
          Ze(
            {
              isCustomElement: s,
              delimiters: a
            },
            o
          ),
          u
        );
        r.render = Gu(i, c);
      }
    }
    t.render = r.render || _t;
  }
  {
    const i = Hi(t);
    Cn();
    try {
      Zb(t);
    } finally {
      Nn(), i();
    }
  }
}
function xE(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(
    t.attrs,
    {
      get(e, n) {
        return ht(t, "get", "$attrs"), e[n];
      }
    }
  ));
}
function CE(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return xE(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Po(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(Qd(So(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in vi)
          return vi[n](t);
      },
      has(e, n) {
        return n in e || n in vi;
      }
    }));
}
const NE = /(?:^|[-_])(\w)/g, PE = (t) => t.replace(NE, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function IE(t, e = !0) {
  return se(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Tp(t, e, n = !1) {
  let r = IE(e);
  if (!r && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && t && t.parent) {
    const i = (s) => {
      for (const o in s)
        if (s[o] === e)
          return o;
    };
    r = i(
      t.components || t.parent.type.components
    ) || i(t.appContext.components);
  }
  return r ? PE(r) : n ? "App" : "Anonymous";
}
function DE(t) {
  return se(t) && "__vccOpts" in t;
}
const xp = (t, e) => ab(t, e, No), RE = "3.4.15", ME = "http://www.w3.org/2000/svg", kE = "http://www.w3.org/1998/Math/MathML", bn = typeof document < "u" ? document : null, zu = bn && /* @__PURE__ */ bn.createElement("template"), $E = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e === "svg" ? bn.createElementNS(ME, t) : e === "mathml" ? bn.createElementNS(kE, t) : bn.createElement(t, n ? { is: n } : void 0);
    return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (t) => bn.createTextNode(t),
  createComment: (t) => bn.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => bn.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, r, i, s) {
    const o = n ? n.previousSibling : e.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      zu.innerHTML = r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t;
      const a = zu.content;
      if (r === "svg" || r === "mathml") {
        const u = a.firstChild;
        for (; u.firstChild; )
          a.appendChild(u.firstChild);
        a.removeChild(u);
      }
      e.insertBefore(a, n);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, LE = Symbol("_vtc");
function FE(t, e, n) {
  const r = t[LE];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const jE = Symbol("_vod"), WE = Symbol("");
function VE(t, e, n) {
  const r = t.style, i = r.display, s = Le(n);
  if (n && !s) {
    if (e && !Le(e))
      for (const o in e)
        n[o] == null && al(r, o, "");
    for (const o in n)
      al(r, o, n[o]);
  } else if (s) {
    if (e !== n) {
      const o = r[WE];
      o && (n += ";" + o), r.cssText = n;
    }
  } else
    e && t.removeAttribute("style");
  jE in t && (r.display = i);
}
const Yu = /\s*!important$/;
function al(t, e, n) {
  if (ne(n))
    n.forEach((r) => al(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = UE(t, e);
    Yu.test(n) ? t.setProperty(
      Gr(r),
      n.replace(Yu, ""),
      "important"
    ) : t[r] = n;
  }
}
const Zu = ["Webkit", "Moz", "ms"], ba = {};
function UE(t, e) {
  const n = ba[e];
  if (n)
    return n;
  let r = Mr(e);
  if (r !== "filter" && r in t)
    return ba[e] = r;
  r = Pd(r);
  for (let i = 0; i < Zu.length; i++) {
    const s = Zu[i] + r;
    if (s in t)
      return ba[e] = s;
  }
  return e;
}
const Ju = "http://www.w3.org/1999/xlink";
function HE(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(Ju, e.slice(6, e.length)) : t.setAttributeNS(Ju, e, n);
  else {
    const s = kv(e);
    n == null || s && !Dd(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function BE(t, e, n, r, i, s, o) {
  if (e === "innerHTML" || e === "textContent") {
    r && o(r, i, s), t[e] = n ?? "";
    return;
  }
  const a = t.tagName;
  if (e === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    t._value = n;
    const c = a === "OPTION" ? t.getAttribute("value") : t.value, f = n ?? "";
    c !== f && (t.value = f), n == null && t.removeAttribute(e);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean" ? n = Dd(n) : n == null && c === "string" ? (n = "", u = !0) : c === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(e);
}
function Kn(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function KE(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const Xu = Symbol("_vei");
function qE(t, e, n, r, i = null) {
  const s = t[Xu] || (t[Xu] = {}), o = s[e];
  if (r && o)
    o.value = r;
  else {
    const [a, u] = GE(e);
    if (r) {
      const c = s[e] = ZE(r, i);
      Kn(t, a, c, u);
    } else
      o && (KE(t, a, o, u), s[e] = void 0);
  }
}
const Qu = /(?:Once|Passive|Capture)$/;
function GE(t) {
  let e;
  if (Qu.test(t)) {
    e = {};
    let r;
    for (; r = t.match(Qu); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Gr(t.slice(2)), e];
}
let Ea = 0;
const zE = /* @__PURE__ */ Promise.resolve(), YE = () => Ea || (zE.then(() => Ea = 0), Ea = Date.now());
function ZE(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ft(
      JE(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = YE(), n;
}
function JE(t, e) {
  if (ne(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return e;
}
const ef = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, XE = (t, e, n, r, i, s, o, a, u) => {
  const c = i === "svg";
  e === "class" ? FE(t, r, c) : e === "style" ? VE(t, n, r) : _o(e) ? kl(e) || qE(t, e, n, r, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : QE(t, e, r, c)) ? BE(
    t,
    e,
    r,
    s,
    o,
    a,
    u
  ) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), HE(t, e, r, c));
};
function QE(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && ef(e) && se(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ef(e) && Le(n) ? !1 : e in t;
}
const ro = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return ne(e) ? (n) => Ls(e, n) : e;
};
function ew(t) {
  t.target.composing = !0;
}
function tf(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Nr = Symbol("_assign"), tw = {
  created(t, { modifiers: { lazy: e, trim: n, number: r } }, i) {
    t[Nr] = ro(i);
    const s = r || i.props && i.props.type === "number";
    Kn(t, e ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let a = t.value;
      n && (a = a.trim()), s && (a = Ii(a)), t[Nr](a);
    }), n && Kn(t, "change", () => {
      t.value = t.value.trim();
    }), e || (Kn(t, "compositionstart", ew), Kn(t, "compositionend", tf), Kn(t, "change", tf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: r, number: i } }, s) {
    if (t[Nr] = ro(s), t.composing)
      return;
    const o = i || t.type === "number" ? Ii(t.value) : t.value, a = e ?? "";
    o !== a && (document.activeElement === t && t.type !== "range" && (n || r && t.value.trim() === a) || (t.value = a));
  }
}, nw = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: e, modifiers: { number: n } }, r) {
    const i = vo(e);
    Kn(t, "change", () => {
      const s = Array.prototype.filter.call(t.options, (o) => o.selected).map(
        (o) => n ? Ii(io(o)) : io(o)
      );
      t[Nr](
        t.multiple ? i ? new Set(s) : s : s[0]
      ), t._assigning = !0, Yl(() => {
        t._assigning = !1;
      });
    }), t[Nr] = ro(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: e, oldValue: n, modifiers: { number: r } }) {
    nf(t, e, n, r);
  },
  beforeUpdate(t, e, n) {
    t[Nr] = ro(n);
  },
  updated(t, { value: e, oldValue: n, modifiers: { number: r } }) {
    t._assigning || nf(t, e, n, r);
  }
};
function nf(t, e, n, r) {
  const i = t.multiple, s = ne(e);
  if (!(i && !s && !vo(e)) && !(s && Di(e, n))) {
    for (let o = 0, a = t.options.length; o < a; o++) {
      const u = t.options[o], c = io(u);
      if (i)
        if (s) {
          const f = typeof c;
          f === "string" || f === "number" ? u.selected = e.includes(
            r ? Ii(c) : c
          ) : u.selected = Lv(e, c) > -1;
        } else
          u.selected = e.has(c);
      else if (Di(io(u), e)) {
        t.selectedIndex !== o && (t.selectedIndex = o);
        return;
      }
    }
    !i && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function io(t) {
  return "_value" in t ? t._value : t.value;
}
const rw = /* @__PURE__ */ Ze({ patchProp: XE }, $E);
let rf;
function iw() {
  return rf || (rf = uE(rw));
}
const sw = (...t) => {
  const e = iw().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const i = aw(r);
    if (!i)
      return;
    const s = e._component;
    !se(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const o = n(i, !1, ow(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, e;
};
function ow(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function aw(t) {
  return Le(t) ? document.querySelector(t) : t;
}
var lw = !1, Cp = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\Kuya\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_4484_LGLOMVCHAGXKTGQT", COLOR: "1", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "LAPTOP-N339491Q", ComSpec: "C:\\Windows\\system32\\cmd.exe", CONDA_PROMPT_MODIFIER: "False", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\Windows\\notepad.exe", GIT_ASKPASS: "c:\\Users\\Kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\Kuya", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\Kuya", INIT_CWD: "C:\\Kerja\\kintone custom view\\MSP\\inventory_report_cv_1_2195", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\Kuya\\AppData\\Local", LOGONSERVER: "\\\\LAPTOP-N339491Q", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", NODE_EXE: "C:\\Program Files\\nodejs\\\\node.exe", NPM_CLI_JS: "C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js", npm_command: "run-script", npm_config_cache: "C:\\Users\\Kuya\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Users\\Kuya\\AppData\\Roaming\\npm\\etc\\npmrc", npm_config_global_prefix: "C:\\Users\\Kuya\\AppData\\Roaming\\npm", npm_config_init_module: "C:\\Users\\Kuya\\.npm-init.js", npm_config_local_prefix: "C:\\Kerja\\kintone custom view\\MSP\\inventory_report_cv_1_2195", npm_config_metrics_registry: "https://registry.npmjs.org/", npm_config_node_gyp: "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_npm_version: "9.8.1", npm_config_prefix: "C:\\Users\\Kuya\\AppData\\Roaming\\npm", npm_config_userconfig: "C:\\Users\\Kuya\\.npmrc", npm_config_user_agent: "npm/9.8.1 node/v18.18.2 win32 x64 workspaces/false", npm_execpath: "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "vite build --mode development --watch", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "C:\\Kerja\\kintone custom view\\MSP\\inventory_report_cv_1_2195\\package.json", npm_package_name: "inventory_report_cv_1_2195", npm_package_version: "0.0.0", NPM_PREFIX_NPM_CLI_JS: "C:\\Users\\Kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", NUMBER_OF_PROCESSORS: "20", OneDrive: "C:\\Users\\Kuya\\OneDrive", OneDriveConsumer: "C:\\Users\\Kuya\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "C:\\Kerja\\kintone custom view\\MSP\\inventory_report_cv_1_2195\\node_modules\\.bin;C:\\Kerja\\kintone custom view\\MSP\\node_modules\\.bin;C:\\Kerja\\kintone custom view\\node_modules\\.bin;C:\\Kerja\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd;C:\\Users\\Kuya\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Kuya\\AppData\\Roaming\\npm;C:\\Users\\Kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\ktn-upload;;C:\\Users\\Kuya\\AppData\\Local\\Programs\\oh-my-posh\\bin", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", POSH_AZURE_ENABLED: "False", POSH_CURSOR_COLUMN: "1", POSH_CURSOR_LINE: "1", POSH_GIT_ENABLED: "False", POSH_INSTALLER: "winget", POSH_PID: "24776", POSH_SHELL_VERSION: "5.1.22621.2506", POSH_THEME: "C:\\Users\\Kuya\\AppData\\Local\\Programs\\oh-my-posh\\themes\\night-owl.omp.json", POSH_THEMES_PATH: "C:\\Users\\Kuya\\AppData\\Local\\Programs\\oh-my-posh\\themes", POWERLINE_COMMAND: "oh-my-posh", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 186 Stepping 2, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "ba02", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\Kuya\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\Kuya\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.85.2", TMP: "C:\\Users\\Kuya\\AppData\\Local\\Temp", USERDOMAIN: "LAPTOP-N339491Q", USERDOMAIN_ROAMINGPROFILE: "LAPTOP-N339491Q", USERNAME: "Kuya", USERPROFILE: "C:\\Users\\Kuya", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "--ms-enable-electron-run-as-node", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\Kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\Kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-ba9bc6d341-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", WSLENV: "WT_SESSION:WT_PROFILE_ID:", WT_PROFILE_ID: "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}", WT_SESSION: "f249b711-f941-4b86-8d76-849952bc4771", ZES_ENABLE_SYSMAN: "1" };
let Np;
const Io = (t) => Np = t, Pp = (
  /* istanbul ignore next */
  Symbol()
);
function ll(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var wi;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(wi || (wi = {}));
function cw() {
  const t = kd(!0), e = t.run(() => Gl({}));
  let n = [], r = [];
  const i = So({
    install(s) {
      Io(i), i._a = s, s.provide(Pp, i), s.config.globalProperties.$pinia = i, r.forEach((o) => n.push(o)), r = [];
    },
    use(s) {
      return !this._a && !lw ? r.push(s) : n.push(s), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return i;
}
const Ip = () => {
};
function sf(t, e, n, r = Ip) {
  t.push(e);
  const i = () => {
    const s = t.indexOf(e);
    s > -1 && (t.splice(s, 1), r());
  };
  return !n && $d() && jv(i), i;
}
function gr(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
const uw = (t) => t();
function cl(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((n, r) => t.set(r, n)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const r = e[n], i = t[n];
    ll(i) && ll(r) && t.hasOwnProperty(n) && !Pe(r) && !rn(r) ? t[n] = cl(i, r) : t[n] = r;
  }
  return t;
}
const fw = (
  /* istanbul ignore next */
  Symbol()
);
function dw(t) {
  return !ll(t) || !t.hasOwnProperty(fw);
}
const { assign: yn } = Object;
function pw(t) {
  return !!(Pe(t) && t.effect);
}
function hw(t, e, n, r) {
  const { state: i, actions: s, getters: o } = e, a = n.state.value[t];
  let u;
  function c() {
    !a && Cp.NODE_ENV === "production" && (n.state.value[t] = i ? i() : {});
    const f = fb(n.state.value[t]);
    return yn(f, s, Object.keys(o || {}).reduce((p, v) => (p[v] = So(xp(() => {
      Io(n);
      const y = n._s.get(t);
      return o[v].call(y, y);
    })), p), {}));
  }
  return u = Dp(t, c, e, n, r, !0), u;
}
function Dp(t, e, n = {}, r, i, s) {
  let o;
  const a = yn({ actions: {} }, n), u = {
    deep: !0
    // flush: 'post',
  };
  let c, f, p = [], v = [], y;
  const b = r.state.value[t];
  !s && !b && Cp.NODE_ENV === "production" && (r.state.value[t] = {}), Gl({});
  let E;
  function C(z) {
    let F;
    c = f = !1, typeof z == "function" ? (z(r.state.value[t]), F = {
      type: wi.patchFunction,
      storeId: t,
      events: y
    }) : (cl(r.state.value[t], z), F = {
      type: wi.patchObject,
      payload: z,
      storeId: t,
      events: y
    });
    const Y = E = Symbol();
    Yl().then(() => {
      E === Y && (c = !0);
    }), f = !0, gr(p, F, r.state.value[t]);
  }
  const T = s ? function() {
    const { state: F } = n, Y = F ? F() : {};
    this.$patch((Q) => {
      yn(Q, Y);
    });
  } : (
    /* istanbul ignore next */
    Ip
  );
  function K() {
    o.stop(), p = [], v = [], r._s.delete(t);
  }
  function W(z, F) {
    return function() {
      Io(r);
      const Y = Array.from(arguments), Q = [], le = [];
      function ce(ee) {
        Q.push(ee);
      }
      function Te(ee) {
        le.push(ee);
      }
      gr(v, {
        args: Y,
        name: z,
        store: G,
        after: ce,
        onError: Te
      });
      let Se;
      try {
        Se = F.apply(this && this.$id === t ? this : G, Y);
      } catch (ee) {
        throw gr(le, ee), ee;
      }
      return Se instanceof Promise ? Se.then((ee) => (gr(Q, ee), ee)).catch((ee) => (gr(le, ee), Promise.reject(ee))) : (gr(Q, Se), Se);
    };
  }
  const j = {
    _p: r,
    // _s: scope,
    $id: t,
    $onAction: sf.bind(null, v),
    $patch: C,
    $reset: T,
    $subscribe(z, F = {}) {
      const Y = sf(p, z, F.detached, () => Q()), Q = o.run(() => js(() => r.state.value[t], (le) => {
        (F.flush === "sync" ? f : c) && z({
          storeId: t,
          type: wi.direct,
          events: y
        }, le);
      }, yn({}, u, F)));
      return Y;
    },
    $dispose: K
  }, G = wo(j);
  r._s.set(t, G);
  const X = (r._a && r._a.runWithContext || uw)(() => r._e.run(() => (o = kd()).run(e)));
  for (const z in X) {
    const F = X[z];
    if (Pe(F) && !pw(F) || rn(F))
      s || (b && dw(F) && (Pe(F) ? F.value = b[z] : cl(F, b[z])), r.state.value[t][z] = F);
    else if (typeof F == "function") {
      const Y = W(z, F);
      X[z] = Y, a.actions[z] = F;
    }
  }
  return yn(G, X), yn(he(G), X), Object.defineProperty(G, "$state", {
    get: () => r.state.value[t],
    set: (z) => {
      C((F) => {
        yn(F, z);
      });
    }
  }), r._p.forEach((z) => {
    yn(G, o.run(() => z({
      store: G,
      app: r._a,
      pinia: r,
      options: a
    })));
  }), b && s && n.hydrate && n.hydrate(G.$state, b), c = !0, f = !0, G;
}
function Do(t, e, n) {
  let r, i;
  const s = typeof e == "function";
  typeof t == "string" ? (r = t, i = s ? n : e) : (i = t, r = t.id);
  function o(a, u) {
    const c = iE();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (c ? bi(Pp, null) : null), a && Io(a), a = Np, a._s.has(r) || (s ? Dp(r, e, i, a) : hw(r, i, a)), a._s.get(r);
  }
  return o.$id = r, o;
}
function Pr(t) {
  {
    t = he(t);
    const e = {};
    for (const n in t) {
      const r = t[n];
      (Pe(r) || rn(r)) && (e[n] = // ---
      hb(t, n));
    }
    return e;
  }
}
var $ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rp(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var ec = {}, Bi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.injectPlatformDeps = t.platformDeps = void 0, t.platformDeps = {
    readFileFromPath: function() {
      throw new Error("not implemented");
    },
    getRequestToken: function() {
      throw new Error("not implemented");
    },
    getDefaultAuth: function() {
      throw new Error("not implemented");
    },
    buildPlatformDependentConfig: function() {
      throw new Error("not implemented");
    },
    buildHeaders: function() {
      throw new Error("not implemented");
    },
    buildFormDataValue: function() {
      throw new Error("not implemented");
    },
    buildBaseUrl: function() {
      throw new Error("not implemented");
    },
    getVersion: function() {
      throw new Error("not implemented");
    }
  };
  var e = function(n) {
    n.readFileFromPath && (t.platformDeps.readFileFromPath = n.readFileFromPath), n.getRequestToken && (t.platformDeps.getRequestToken = n.getRequestToken), n.getDefaultAuth && (t.platformDeps.getDefaultAuth = n.getDefaultAuth), n.buildPlatformDependentConfig && (t.platformDeps.buildPlatformDependentConfig = n.buildPlatformDependentConfig), n.buildHeaders && (t.platformDeps.buildHeaders = n.buildHeaders), n.buildFormDataValue && (t.platformDeps.buildFormDataValue = n.buildFormDataValue), n.buildBaseUrl && (t.platformDeps.buildBaseUrl = n.buildBaseUrl), n.getVersion && (t.platformDeps.getVersion = n.getVersion);
  };
  t.injectPlatformDeps = e;
})(Bi);
var He = {}, zr = {}, mw = $ && $.__extends || /* @__PURE__ */ function() {
  var t = function(e, n) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }, t(e, n);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.UnsupportedPlatformError = void 0;
var gw = (
  /** @class */
  function(t) {
    mw(e, t);
    function e(n) {
      var r = this, i = "This function is not supported in ".concat(n, " environment");
      return r = t.call(this, i) || this, Error.captureStackTrace && Error.captureStackTrace(r, e), r.name = "UnsupportedPlatformError", r.platform = n, Object.setPrototypeOf(r, e.prototype), r;
    }
    return e;
  }(Error)
);
zr.UnsupportedPlatformError = gw;
function Ro() {
  this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < arguments.length; t++)
    this.define(arguments[t]);
  this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
}
Ro.prototype.define = function(t, e) {
  for (let n in t) {
    let r = t[n].map(function(i) {
      return i.toLowerCase();
    });
    n = n.toLowerCase();
    for (let i = 0; i < r.length; i++) {
      const s = r[i];
      if (s[0] !== "*") {
        if (!e && s in this._types)
          throw new Error(
            'Attempt to change mapping for "' + s + '" extension from "' + this._types[s] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + s + '" from the list of extensions for "' + n + '".'
          );
        this._types[s] = n;
      }
    }
    if (e || !this._extensions[n]) {
      const i = r[0];
      this._extensions[n] = i[0] !== "*" ? i : i.substr(1);
    }
  }
};
Ro.prototype.getType = function(t) {
  t = String(t);
  let e = t.replace(/^.*[/\\]/, "").toLowerCase(), n = e.replace(/^.*\./, "").toLowerCase(), r = e.length < t.length;
  return (n.length < e.length - 1 || !r) && this._types[n] || null;
};
Ro.prototype.getExtension = function(t) {
  return t = /^\s*([^;\s]*)/.test(t) && RegExp.$1, t && this._extensions[t.toLowerCase()] || null;
};
var yw = Ro, _w = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
let vw = yw;
var bw = new vw(_w);
const Ew = "@kintone/rest-api-client", ww = "5.0.6", Sw = {
  access: "public"
}, Ow = {
  name: "Cybozu, Inc.",
  url: "https://cybozu.co.jp"
}, Aw = "Kintone REST API client for JavaScript", Tw = "lib/src/index.js", xw = "esm/src/index.js", Cw = "lib/src/index.browser.js", Nw = "lib/src/index.d.ts", Pw = {
  prebuild: "pnpm clean",
  build: "tsc --build --force",
  postbuild: "run-p build:*",
  lint: "eslint 'src/**/*.ts' --max-warnings 0",
  prepublishOnly: "run-p build:umd_*",
  test: "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest",
  "test:ci": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand",
  "build:umd_dev": "rollup -c --environment BUILD:development",
  "build:umd_prod": "rollup -c --environment BUILD:production",
  clean: "rimraf lib esm umd",
  fix: "pnpm lint --fix",
  start: "pnpm build --watch"
}, Iw = {
  type: "git",
  url: "git+https://github.com/kintone/js-sdk.git",
  directory: "packages/rest-api-client"
}, Dw = [
  "esm",
  "lib",
  "umd",
  "index.mjs"
], Rw = [
  "kintone",
  "rest",
  "api-client"
], Mw = "MIT", kw = {
  url: "https://github.com/kintone/js-sdk/issues"
}, $w = "https://github.com/kintone/js-sdk/tree/master/packages/rest-api-client#readme", Lw = {
  node: ">=18"
}, Fw = {
  "@rollup/plugin-babel": "^6.0.4",
  "@rollup/plugin-commonjs": "^25.0.7",
  "@rollup/plugin-json": "^6.1.0",
  "@rollup/plugin-node-resolve": "^15.2.3",
  "@rollup/plugin-terser": "^0.4.4",
  "@types/core-js": "^2.5.8",
  "@types/js-base64": "^3.0.0",
  "@types/mime": "^3.0.4",
  "@types/qs": "^6.9.11",
  rollup: "^4.9.5",
  "rollup-plugin-ecma-version-validator": "^0.2.13",
  "rollup-plugin-license": "^3.2.0",
  "rollup-plugin-node-globals": "^1.4.0",
  "rollup-plugin-polyfill-node": "^0.13.0",
  webpack: "^5.89.0",
  "webpack-cli": "^5.1.4",
  "babel-loader": "^9.1.3",
  vite: "^5.0.11",
  rimraf: "^5.0.5",
  "cross-env": "^7.0.3"
}, jw = {
  "core-js": "^3.35.0",
  axios: "^1.6.5",
  "form-data": "^4.0.0",
  "js-base64": "^3.7.5",
  mime: "^3.0.0",
  qs: "^6.11.2"
}, Ww = {
  ".": {
    types: {
      import: "./esm/src/index.d.ts",
      require: "./lib/src/index.d.ts",
      default: "./lib/src/index.d.ts"
    },
    node: {
      import: "./index.mjs",
      require: "./lib/src/index.js",
      default: "./lib/src/index.js"
    },
    browser: "./lib/src/index.browser.js"
  },
  "./package.json": "./package.json"
}, Vw = {
  name: Ew,
  version: ww,
  publishConfig: Sw,
  author: Ow,
  description: Aw,
  main: Tw,
  module: xw,
  browser: Cw,
  types: Nw,
  scripts: Pw,
  repository: Iw,
  files: Dw,
  keywords: Rw,
  license: Mw,
  bugs: kw,
  homepage: $w,
  engines: Lw,
  devDependencies: Fw,
  dependencies: jw,
  exports: Ww
};
var Uw = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, Hw = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, Mp = $ && $.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(He, "__esModule", { value: !0 });
He.getVersion = He.buildBaseUrl = He.buildFormDataValue = He.buildHeaders = He.buildPlatformDependentConfig = He.getDefaultAuth = He.getRequestToken = He.readFileFromPath = void 0;
var Bw = zr, Kw = Mp(bw), qw = Mp(Vw), Gw = function(t) {
  throw new Bw.UnsupportedPlatformError("Browser");
};
He.readFileFromPath = Gw;
var zw = function() {
  return Uw(void 0, void 0, void 0, function() {
    var t, e;
    return Hw(this, function(n) {
      if (typeof kintone == "object" && kintone !== null && typeof kintone.getRequestToken == "function")
        return [2, kintone.getRequestToken()];
      if (typeof garoon == "object" && garoon !== null && typeof ((e = (t = garoon.connect) === null || t === void 0 ? void 0 : t.kintone) === null || e === void 0 ? void 0 : e.getRequestToken) == "function")
        return [2, garoon.connect.kintone.getRequestToken()];
      throw new Error("session authentication must specify a request token");
    });
  });
};
He.getRequestToken = zw;
var Yw = function() {
  return {
    type: "session"
  };
};
He.getDefaultAuth = Yw;
var Zw = function() {
  return {};
};
He.buildPlatformDependentConfig = Zw;
var Jw = function() {
  return {};
};
He.buildHeaders = Jw;
var Xw = function(t, e) {
  var n = {};
  return e && (n.type = Kw.default.getType(e) || void 0), new Blob([t], n);
};
He.buildFormDataValue = Xw;
var Qw = function(t) {
  if (t)
    return t;
  if (location === void 0)
    throw new Error("The baseUrl parameter is required for this environment");
  var e = location.host, n = location.protocol;
  return "".concat(n, "//").concat(e);
};
He.buildBaseUrl = Qw;
var e0 = function() {
  return qw.default.version;
};
He.getVersion = e0;
var Mo = {}, ko = {}, ir = {};
Object.defineProperty(ir, "__esModule", { value: !0 });
ir.buildPath = void 0;
var t0 = function(t) {
  var e = t.endpointName, n = t.guestSpaceId, r = t.preview, i = n !== void 0 ? "/guest/".concat(n) : "", s = r ? "/preview" : "";
  return "/k".concat(i, "/v1").concat(s, "/").concat(e, ".json");
};
ir.buildPath = t0;
var Si = $ && $.__assign || function() {
  return Si = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Si.apply(this, arguments);
}, n0 = $ && $.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
};
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.BulkRequestClient = void 0;
var r0 = ir, i0 = (
  /** @class */
  function() {
    function t(e, n) {
      this.client = e, this.guestSpaceId = n, this.REQUESTS_LENGTH_LIMIT = 20;
    }
    return t.prototype.send = function(e) {
      var n = this, r = e.requests, i = r.map(function(o) {
        if ("endpointName" in o) {
          var a = o.endpointName, u = n0(o, ["endpointName"]);
          return Si({ api: n.buildPathWithGuestSpaceId({ endpointName: a }) }, u);
        }
        return o;
      }), s = this.buildPathWithGuestSpaceId({
        endpointName: "bulkRequest"
      });
      return this.client.post(s, { requests: i });
    }, t.prototype.buildPathWithGuestSpaceId = function(e) {
      return (0, r0.buildPath)(Si(Si({}, e), { guestSpaceId: this.guestSpaceId }));
    }, t;
  }()
);
ko.BulkRequestClient = i0;
var $o = {}, gt = $ && $.__assign || function() {
  return gt = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, gt.apply(this, arguments);
}, s0 = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, o0 = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, lt = $ && $.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
};
Object.defineProperty($o, "__esModule", { value: !0 });
$o.AppClient = void 0;
var a0 = ir, l0 = (
  /** @class */
  function() {
    function t(e, n) {
      this.client = e, this.guestSpaceId = n;
    }
    return t.prototype.getFormFields = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/fields",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.addFormFields = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/fields",
        preview: !0
      });
      return this.client.post(n, e);
    }, t.prototype.updateFormFields = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/fields",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.deleteFormFields = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/fields",
        preview: !0
      });
      return this.client.delete(n, e);
    }, t.prototype.getFormLayout = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/layout",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateFormLayout = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/layout",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getViews = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/views",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateViews = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/views",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getApp = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app"
      });
      return this.client.get(n, e);
    }, t.prototype.getApps = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "apps"
      });
      return this.client.get(n, e);
    }, t.prototype.addApp = function(e) {
      return s0(this, void 0, void 0, function() {
        var n, r, i, s, o;
        return o0(this, function(a) {
          switch (a.label) {
            case 0:
              return n = e.name, r = e.space, i = this.buildPathWithGuestSpaceId({
                endpointName: "app",
                preview: !0
              }), r ? (s = this.buildPathWithGuestSpaceId({
                endpointName: "space"
              }), [4, this.client.get(s, {
                id: r
              })]) : [3, 2];
            case 1:
              return o = a.sent().defaultThread, [2, this.client.post(i, gt(gt({}, e), { thread: o }))];
            case 2:
              return [2, this.client.post(i, { name: n })];
          }
        });
      });
    }, t.prototype.getAppSettings = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/settings",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateAppSettings = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/settings",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getProcessManagement = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/status",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateProcessManagement = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/status",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getDeployStatus = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/deploy",
        preview: !0
      });
      return this.client.get(n, e);
    }, t.prototype.deployApp = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/deploy",
        preview: !0
      });
      return this.client.post(n, e);
    }, t.prototype.getFieldAcl = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "field/acl",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateFieldAcl = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "field/acl",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getAppAcl = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/acl",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateAppAcl = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/acl",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.evaluateRecordsAcl = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records/acl/evaluate"
      });
      return this.client.get(n, e);
    }, t.prototype.getRecordAcl = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "record/acl",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateRecordAcl = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/acl",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getAppCustomize = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/customize",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateAppCustomize = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/customize",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getGeneralNotifications = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/general",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateGeneralNotifications = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/general",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getPerRecordNotifications = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/perRecord",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updatePerRecordNotifications = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/perRecord",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getReminderNotifications = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/reminder",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateReminderNotifications = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/reminder",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getReports = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/reports",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateReports = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/reports",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getAppActions = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/actions",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateAppActions = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/actions",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.buildPathWithGuestSpaceId = function(e) {
      return (0, a0.buildPath)(gt(gt({}, e), { guestSpaceId: this.guestSpaceId }));
    }, t;
  }()
);
$o.AppClient = l0;
var Lo = {}, Ki = {}, c0 = $ && $.__extends || /* @__PURE__ */ function() {
  var t = function(e, n) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }, t(e, n);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.KintoneAllRecordsError = void 0;
var u0 = (
  /** @class */
  function(t) {
    c0(e, t);
    function e(n, r, i, s, o) {
      var a = this, u = i - r.length, c = e.extractErrorIndex(u, s, o), f = e.buildErrorMessage(u, i, c);
      return a = t.call(this, f) || this, a.name = "KintoneAllRecordsError", a.processedRecordsResult = n, a.unprocessedRecords = r, a.error = s, a.errorIndex = c, a.message = f, a.numOfProcessedRecords = u, a.numOfAllRecords = i, Object.setPrototypeOf(a, e.prototype), a;
    }
    return e.parseErrorIndex = function(n) {
      var r = [];
      return Object.keys(n).forEach(function(i) {
        var s = i.match(/records\[(\d+)\]/);
        s && r.push(Number(s[1]));
      }), r.length > 0 ? Math.min.apply(Math, r) : null;
    }, e.extractErrorIndex = function(n, r, i) {
      if (r.bulkRequestIndex !== void 0 && r.errors) {
        var s = e.parseErrorIndex(r.errors);
        if (s !== null)
          return n + r.bulkRequestIndex * i + s;
      }
    }, e.buildErrorMessage = function(n, r, i) {
      var s = "";
      return i !== void 0 && (s = "An error occurred at records[".concat(i, "]. ")), s += "".concat(n, "/").concat(r, " records are processed successfully"), s;
    }, e;
  }(Error)
);
Ki.KintoneAllRecordsError = u0;
var ct = $ && $.__assign || function() {
  return ct = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, ct.apply(this, arguments);
}, tt = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, nt = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, wa = $ && $.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}, Os = $ && $.__spreadArray || function(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, s; r < i; r++)
      (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return t.concat(s || Array.prototype.slice.call(e));
};
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.RecordClient = void 0;
var f0 = ir, Sa = Ki, Oa = 100, Aa = 100, Ta = 100, ui = 500, d0 = (
  /** @class */
  function() {
    function t(e, n, r) {
      this.client = e, this.bulkRequestClient = n, this.guestSpaceId = r, this.didWarnMaximumOffsetValue = !1;
    }
    return t.prototype.getRecord = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record"
      });
      return this.client.get(n, e);
    }, t.prototype.addRecord = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record"
      });
      return this.client.post(n, e);
    }, t.prototype.updateRecord = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record"
      });
      return this.client.put(n, e);
    }, t.prototype.upsertRecord = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s, o, a;
        return nt(this, function(u) {
          switch (u.label) {
            case 0:
              return n = e.app, r = e.updateKey, i = e.record, [4, this.getRecords({
                app: n,
                query: "".concat(r.field, ' = "').concat(r.value, '"')
              })];
            case 1:
              return s = u.sent().records, s.length > 0 ? s[0].$id.type !== "__ID__" ? [3, 3] : [4, this.updateRecord(e)] : [3, 4];
            case 2:
              return o = u.sent().revision, [2, { id: s[0].$id.value, revision: o }];
            case 3:
              throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
            case 4:
              return [2, this.addRecord({
                app: n,
                record: Object.assign({}, i, (a = {}, a[r.field] = { value: r.value }, a))
              })];
          }
        });
      });
    }, t.prototype.getRecords = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r;
        return nt(this, function(i) {
          switch (i.label) {
            case 0:
              return n = this.buildPathWithGuestSpaceId({
                endpointName: "records"
              }), [4, this.client.get(n, e)];
            case 1:
              return r = i.sent(), this.warnMaximumOffsetValueIfNeeded(e.query), [2, r];
          }
        });
      });
    }, t.prototype.warnMaximumOffsetValueIfNeeded = function(e) {
      if (e) {
        var n = /offset\s+(\d+)/i, r = e.match(n);
        !this.didWarnMaximumOffsetValue && r && Number(r[1]) > 1e4 && (this.didWarnMaximumOffsetValue = !0, console.warn("Warning: The maximum offset value will be limited to 10,000 in the future. Please use `createCursor()` and `getRecordsByCursor()` instead."));
      }
    }, t.prototype.addRecords = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s;
        return nt(this, function(o) {
          switch (o.label) {
            case 0:
              return n = this.buildPathWithGuestSpaceId({
                endpointName: "records"
              }), [4, this.client.post(n, e)];
            case 1:
              return r = o.sent(), i = r.ids, s = r.revisions, [2, {
                ids: i,
                revisions: s,
                records: i.map(function(a, u) {
                  return { id: a, revision: s[u] };
                })
              }];
          }
        });
      });
    }, t.prototype.updateRecords = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records"
      });
      return this.client.put(n, e);
    }, t.prototype.deleteRecords = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records"
      });
      return this.client.delete(n, e);
    }, t.prototype.createCursor = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records/cursor"
      });
      return this.client.post(n, e);
    }, t.prototype.getRecordsByCursor = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records/cursor"
      });
      return this.client.get(n, e);
    }, t.prototype.deleteCursor = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records/cursor"
      });
      return this.client.delete(n, e);
    }, t.prototype.getAllRecords = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s, o, a, u;
        return nt(this, function(c) {
          return n = e.condition, r = e.orderBy, i = e.withCursor, s = i === void 0 ? !0 : i, o = wa(e, ["condition", "orderBy", "withCursor"]), r ? s ? (a = n ? "".concat(n, " ") : "", u = "".concat(a).concat(r ? "order by ".concat(r) : ""), [2, this.getAllRecordsWithCursor(ct(ct({}, o), { query: u }))]) : [2, this.getAllRecordsWithOffset(ct(ct({}, o), { orderBy: r, condition: n }))] : [2, this.getAllRecordsWithId(ct(ct({}, o), { condition: n }))];
        });
      });
    }, t.prototype.getAllRecordsWithId = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s, o, a, u, c, f, p;
        return nt(this, function(v) {
          switch (v.label) {
            case 0:
              n = e.fields, r = e.condition, i = wa(e, ["fields", "condition"]), s = n, s && s.length > 0 && s.indexOf("$id") === -1 && (s = Os(Os([], s, !0), ["$id"], !1)), o = r ? "(".concat(r, ") and ") : "", a = [], u = "0", v.label = 1;
            case 1:
              return c = "".concat(o, "$id > ").concat(u, " order by $id asc limit ").concat(ui), [4, this.getRecords(ct(ct({}, i), { fields: s, query: c }))];
            case 2:
              if (f = v.sent(), a = a.concat(f.records), f.records.length < ui)
                return [3, 3];
              if (p = f.records[f.records.length - 1], p.$id.type === "__ID__")
                u = p.$id.value;
              else
                throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
              return [3, 1];
            case 3:
              return [2, a];
          }
        });
      });
    }, t.prototype.getAllRecordsWithOffset = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s, o, a, u, c;
        return nt(this, function(f) {
          switch (f.label) {
            case 0:
              n = e.condition, r = e.orderBy, i = wa(e, ["condition", "orderBy"]), s = n ? "".concat(n, " ") : "", o = [], a = 0, f.label = 1;
            case 1:
              return u = "".concat(s).concat(r ? "order by ".concat(r, " ") : "", "limit ").concat(ui, " offset ").concat(a), [4, this.getRecords(ct(ct({}, i), { query: u }))];
            case 2:
              return c = f.sent(), o = o.concat(c.records), c.records.length < ui ? [3, 3] : (a += ui, [3, 1]);
            case 3:
              return [2, o];
          }
        });
      });
    }, t.prototype.getAllRecordsWithCursor = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s;
        return nt(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.createCursor(e)];
            case 1:
              n = o.sent().id, o.label = 2;
            case 2:
              o.trys.push([2, 6, , 8]), r = [], o.label = 3;
            case 3:
              return [4, this.getRecordsByCursor({ id: n })];
            case 4:
              return i = o.sent(), r = r.concat(i.records), i.next ? [3, 3] : [3, 5];
            case 5:
              return [2, r];
            case 6:
              return s = o.sent(), [4, this.deleteCursor({ id: n })];
            case 7:
              throw o.sent(), s;
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.addAllRecords = function(e) {
      return tt(this, void 0, void 0, function() {
        return nt(this, function(n) {
          if (!e.records.every(function(r) {
            return !Array.isArray(r) && r instanceof Object;
          }))
            throw new Error("the `records` parameter must be an array of object.");
          return [2, this.addAllRecordsRecursive(e, e.records.length, [])];
        });
      });
    }, t.prototype.addAllRecordsRecursive = function(e, n, r) {
      return tt(this, void 0, void 0, function() {
        var i, s, o, a, u, c;
        return nt(this, function(f) {
          switch (f.label) {
            case 0:
              if (i = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * Oa, s = e.app, o = e.records, a = o.slice(0, i), a.length === 0)
                return [2, { records: r }];
              f.label = 1;
            case 1:
              return f.trys.push([1, 3, , 4]), [4, this.addAllRecordsWithBulkRequest({
                app: s,
                records: a
              })];
            case 2:
              return u = f.sent(), [3, 4];
            case 3:
              throw c = f.sent(), new Sa.KintoneAllRecordsError({ records: r }, o, n, c, Oa);
            case 4:
              return [2, this.addAllRecordsRecursive({
                app: s,
                records: o.slice(i)
              }, n, r.concat(u))];
          }
        });
      });
    }, t.prototype.addAllRecordsWithBulkRequest = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i;
        return nt(this, function(s) {
          switch (s.label) {
            case 0:
              return n = this.separateArrayRecursive(Oa, [], e.records), r = n.map(function(o) {
                return {
                  method: "POST",
                  endpointName: "records",
                  payload: {
                    app: e.app,
                    records: o
                  }
                };
              }), [4, this.bulkRequestClient.send({ requests: r })];
            case 1:
              return i = s.sent().results, [2, i.map(function(o) {
                var a = o.ids, u = o.revisions;
                return a.map(function(c, f) {
                  return { id: c, revision: u[f] };
                });
              }).reduce(function(o, a) {
                return o.concat(a);
              }, [])];
          }
        });
      });
    }, t.prototype.updateAllRecords = function(e) {
      return tt(this, void 0, void 0, function() {
        return nt(this, function(n) {
          return [2, this.updateAllRecordsRecursive(e, e.records.length, [])];
        });
      });
    }, t.prototype.updateAllRecordsRecursive = function(e, n, r) {
      return tt(this, void 0, void 0, function() {
        var i, s, o, a, u, c;
        return nt(this, function(f) {
          switch (f.label) {
            case 0:
              if (i = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * Aa, s = e.app, o = e.records, a = o.slice(0, i), a.length === 0)
                return [2, { records: r }];
              f.label = 1;
            case 1:
              return f.trys.push([1, 3, , 4]), [4, this.updateAllRecordsWithBulkRequest({
                app: s,
                records: a
              })];
            case 2:
              return u = f.sent(), [3, 4];
            case 3:
              throw c = f.sent(), new Sa.KintoneAllRecordsError({ records: r }, o, n, c, Aa);
            case 4:
              return [2, this.updateAllRecordsRecursive({
                app: s,
                records: o.slice(i)
              }, n, r.concat(u))];
          }
        });
      });
    }, t.prototype.updateAllRecordsWithBulkRequest = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i;
        return nt(this, function(s) {
          switch (s.label) {
            case 0:
              return n = this.separateArrayRecursive(Aa, [], e.records), r = n.map(function(o) {
                return {
                  method: "PUT",
                  endpointName: "records",
                  payload: {
                    app: e.app,
                    records: o
                  }
                };
              }), [4, this.bulkRequestClient.send({ requests: r })];
            case 1:
              return i = s.sent().results, [2, i.map(function(o) {
                return o.records;
              }).reduce(function(o, a) {
                return o.concat(a);
              }, [])];
          }
        });
      });
    }, t.prototype.deleteAllRecords = function(e) {
      return this.deleteAllRecordsRecursive(e, e.records.length);
    }, t.prototype.deleteAllRecordsRecursive = function(e, n) {
      return tt(this, void 0, void 0, function() {
        var r, i, s, o, a;
        return nt(this, function(u) {
          switch (u.label) {
            case 0:
              if (r = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * Ta, i = e.app, s = e.records, o = s.slice(0, r), o.length === 0)
                return [2, {}];
              u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), [4, this.deleteAllRecordsWithBulkRequest({
                app: i,
                records: o
              })];
            case 2:
              return u.sent(), [3, 4];
            case 3:
              throw a = u.sent(), new Sa.KintoneAllRecordsError({}, s, n, a, Ta);
            case 4:
              return [2, this.deleteAllRecordsRecursive({
                app: i,
                records: s.slice(r)
              }, n)];
          }
        });
      });
    }, t.prototype.deleteAllRecordsWithBulkRequest = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r;
        return nt(this, function(i) {
          switch (i.label) {
            case 0:
              return n = this.separateArrayRecursive(Ta, [], e.records), r = n.map(function(s) {
                return {
                  method: "DELETE",
                  endpointName: "records",
                  payload: {
                    app: e.app,
                    ids: s.map(function(o) {
                      return o.id;
                    }),
                    revisions: s.map(function(o) {
                      return o.revision;
                    })
                  }
                };
              }), [4, this.bulkRequestClient.send({ requests: r })];
            case 1:
              return i.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.separateArrayRecursive = function(e, n, r) {
      var i = r.slice(0, e);
      return i.length === 0 ? n : this.separateArrayRecursive(e, Os(Os([], n, !0), [i], !1), r.slice(e));
    }, t.prototype.addRecordComment = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/comment"
      });
      return this.client.post(n, e);
    }, t.prototype.deleteRecordComment = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/comment"
      });
      return this.client.delete(n, e);
    }, t.prototype.getRecordComments = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/comments"
      });
      return this.client.get(n, e);
    }, t.prototype.updateRecordAssignees = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/assignees"
      });
      return this.client.put(n, e);
    }, t.prototype.updateRecordStatus = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/status"
      });
      return this.client.put(n, e);
    }, t.prototype.updateRecordsStatus = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records/status"
      });
      return this.client.put(n, e);
    }, t.prototype.buildPathWithGuestSpaceId = function(e) {
      return (0, f0.buildPath)(ct(ct({}, e), { guestSpaceId: this.guestSpaceId }));
    }, t;
  }()
);
Lo.RecordClient = d0;
var Fo = {}, kp = typeof self == "object" ? self.FormData : window.FormData, so = $ && $.__assign || function() {
  return so = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, so.apply(this, arguments);
}, p0 = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, h0 = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, m0 = $ && $.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.FileClient = void 0;
var g0 = ir, y0 = m0(kp), of = Bi, _0 = zr, v0 = (
  /** @class */
  function() {
    function t(e, n) {
      this.client = e, this.guestSpaceId = n;
    }
    return t.prototype.uploadFile = function(e) {
      return p0(this, void 0, void 0, function() {
        var n, r, i, s, c, o, a, u, c, f;
        return h0(this, function(p) {
          switch (p.label) {
            case 0:
              if (n = this.buildPathWithGuestSpaceId({
                endpointName: "file"
              }), r = new y0.default(), !("path" in e.file))
                return [3, 5];
              p.label = 1;
            case 1:
              return p.trys.push([1, 3, , 4]), [4, of.platformDeps.readFileFromPath(e.file.path)];
            case 2:
              return i = p.sent(), s = i.name, c = i.data, r.append("file", c, s), [3, 4];
            case 3:
              throw o = p.sent(), o instanceof _0.UnsupportedPlatformError ? new Error("uploadFile doesn't allow to accept a file path in ".concat(o.platform, " environment.")) : o;
            case 4:
              return [3, 6];
            case 5:
              a = e.file, u = a.name, c = a.data, f = of.platformDeps.buildFormDataValue(c, u), r.append("file", f, u), p.label = 6;
            case 6:
              return [2, this.client.postData(n, r)];
          }
        });
      });
    }, t.prototype.downloadFile = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "file"
      });
      return this.client.getData(n, e);
    }, t.prototype.buildPathWithGuestSpaceId = function(e) {
      return (0, g0.buildPath)(so(so({}, e), { guestSpaceId: this.guestSpaceId }));
    }, t;
  }()
);
Fo.FileClient = v0;
var $p = {}, jo = {};
function Lp(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: b0 } = Object.prototype, { getPrototypeOf: tc } = Object, Wo = /* @__PURE__ */ ((t) => (e) => {
  const n = b0.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Xt = (t) => (t = t.toLowerCase(), (e) => Wo(e) === t), Vo = (t) => (e) => typeof e === t, { isArray: Yr } = Array, Wi = Vo("undefined");
function E0(t) {
  return t !== null && !Wi(t) && t.constructor !== null && !Wi(t.constructor) && Pt(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Fp = Xt("ArrayBuffer");
function w0(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Fp(t.buffer), e;
}
const S0 = Vo("string"), Pt = Vo("function"), jp = Vo("number"), Uo = (t) => t !== null && typeof t == "object", O0 = (t) => t === !0 || t === !1, Hs = (t) => {
  if (Wo(t) !== "object")
    return !1;
  const e = tc(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, A0 = Xt("Date"), T0 = Xt("File"), x0 = Xt("Blob"), C0 = Xt("FileList"), N0 = (t) => Uo(t) && Pt(t.pipe), P0 = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Pt(t.append) && ((e = Wo(t)) === "formdata" || // detect form-data instance
  e === "object" && Pt(t.toString) && t.toString() === "[object FormData]"));
}, I0 = Xt("URLSearchParams"), D0 = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qi(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, i;
  if (typeof t != "object" && (t = [t]), Yr(t))
    for (r = 0, i = t.length; r < i; r++)
      e.call(null, t[r], r, t);
  else {
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t), o = s.length;
    let a;
    for (r = 0; r < o; r++)
      a = s[r], e.call(null, t[a], a, t);
  }
}
function Wp(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], e === i.toLowerCase())
      return i;
  return null;
}
const Vp = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : $, Up = (t) => !Wi(t) && t !== Vp;
function ul() {
  const { caseless: t } = Up(this) && this || {}, e = {}, n = (r, i) => {
    const s = t && Wp(e, i) || i;
    Hs(e[s]) && Hs(r) ? e[s] = ul(e[s], r) : Hs(r) ? e[s] = ul({}, r) : Yr(r) ? e[s] = r.slice() : e[s] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && qi(arguments[r], n);
  return e;
}
const R0 = (t, e, n, { allOwnKeys: r } = {}) => (qi(e, (i, s) => {
  n && Pt(i) ? t[s] = Lp(i, n) : t[s] = i;
}, { allOwnKeys: r }), t), M0 = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), k0 = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, $0 = (t, e, n, r) => {
  let i, s, o;
  const a = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
      o = i[s], (!r || r(o, t, e)) && !a[o] && (e[o] = t[o], a[o] = !0);
    t = n !== !1 && tc(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, L0 = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, F0 = (t) => {
  if (!t)
    return null;
  if (Yr(t))
    return t;
  let e = t.length;
  if (!jp(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, j0 = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && tc(Uint8Array)), W0 = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const s = i.value;
    e.call(t, s[0], s[1]);
  }
}, V0 = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, U0 = Xt("HTMLFormElement"), H0 = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), af = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), B0 = Xt("RegExp"), Hp = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  qi(n, (i, s) => {
    let o;
    (o = e(i, s, t)) !== !1 && (r[s] = o || i);
  }), Object.defineProperties(t, r);
}, K0 = (t) => {
  Hp(t, (e, n) => {
    if (Pt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (Pt(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, q0 = (t, e) => {
  const n = {}, r = (i) => {
    i.forEach((s) => {
      n[s] = !0;
    });
  };
  return Yr(t) ? r(t) : r(String(t).split(e)), n;
}, G0 = () => {
}, z0 = (t, e) => (t = +t, Number.isFinite(t) ? t : e), xa = "abcdefghijklmnopqrstuvwxyz", lf = "0123456789", Bp = {
  DIGIT: lf,
  ALPHA: xa,
  ALPHA_DIGIT: xa + xa.toUpperCase() + lf
}, Y0 = (t = 16, e = Bp.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function Z0(t) {
  return !!(t && Pt(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const J0 = (t) => {
  const e = new Array(10), n = (r, i) => {
    if (Uo(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[i] = r;
        const s = Yr(r) ? [] : {};
        return qi(r, (o, a) => {
          const u = n(o, i + 1);
          !Wi(u) && (s[a] = u);
        }), e[i] = void 0, s;
      }
    }
    return r;
  };
  return n(t, 0);
}, X0 = Xt("AsyncFunction"), Q0 = (t) => t && (Uo(t) || Pt(t)) && Pt(t.then) && Pt(t.catch);
var N = {
  isArray: Yr,
  isArrayBuffer: Fp,
  isBuffer: E0,
  isFormData: P0,
  isArrayBufferView: w0,
  isString: S0,
  isNumber: jp,
  isBoolean: O0,
  isObject: Uo,
  isPlainObject: Hs,
  isUndefined: Wi,
  isDate: A0,
  isFile: T0,
  isBlob: x0,
  isRegExp: B0,
  isFunction: Pt,
  isStream: N0,
  isURLSearchParams: I0,
  isTypedArray: j0,
  isFileList: C0,
  forEach: qi,
  merge: ul,
  extend: R0,
  trim: D0,
  stripBOM: M0,
  inherits: k0,
  toFlatObject: $0,
  kindOf: Wo,
  kindOfTest: Xt,
  endsWith: L0,
  toArray: F0,
  forEachEntry: W0,
  matchAll: V0,
  isHTMLForm: U0,
  hasOwnProperty: af,
  hasOwnProp: af,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hp,
  freezeMethods: K0,
  toObjectSet: q0,
  toCamelCase: H0,
  noop: G0,
  toFiniteNumber: z0,
  findKey: Wp,
  global: Vp,
  isContextDefined: Up,
  ALPHABET: Bp,
  generateString: Y0,
  isSpecCompliantForm: Z0,
  toJSONObject: J0,
  isAsyncFn: X0,
  isThenable: Q0
};
function ge(t, e, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
N.inherits(ge, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Kp = ge.prototype, qp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  qp[t] = { value: t };
});
Object.defineProperties(ge, qp);
Object.defineProperty(Kp, "isAxiosError", { value: !0 });
ge.from = (t, e, n, r, i, s) => {
  const o = Object.create(Kp);
  return N.toFlatObject(t, o, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), ge.call(o, t.message, e, n, r, i), o.cause = t, o.name = t.name, s && Object.assign(o, s), o;
};
var eS = null;
function fl(t) {
  return N.isPlainObject(t) || N.isArray(t);
}
function Gp(t) {
  return N.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function cf(t, e, n) {
  return t ? t.concat(e).map(function(i, s) {
    return i = Gp(i), !n && s ? "[" + i + "]" : i;
  }).join(n ? "." : "") : e;
}
function tS(t) {
  return N.isArray(t) && !t.some(fl);
}
const nS = N.toFlatObject(N, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ho(t, e, n) {
  if (!N.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = N.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, C) {
    return !N.isUndefined(C[E]);
  });
  const r = n.metaTokens, i = n.visitor || f, s = n.dots, o = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(e);
  if (!N.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(b) {
    if (b === null)
      return "";
    if (N.isDate(b))
      return b.toISOString();
    if (!u && N.isBlob(b))
      throw new ge("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(b) || N.isTypedArray(b) ? u && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function f(b, E, C) {
    let T = b;
    if (b && !C && typeof b == "object") {
      if (N.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), b = JSON.stringify(b);
      else if (N.isArray(b) && tS(b) || (N.isFileList(b) || N.endsWith(E, "[]")) && (T = N.toArray(b)))
        return E = Gp(E), T.forEach(function(W, j) {
          !(N.isUndefined(W) || W === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? cf([E], j, s) : o === null ? E : E + "[]",
            c(W)
          );
        }), !1;
    }
    return fl(b) ? !0 : (e.append(cf(C, E, s), c(b)), !1);
  }
  const p = [], v = Object.assign(nS, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: fl
  });
  function y(b, E) {
    if (!N.isUndefined(b)) {
      if (p.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      p.push(b), N.forEach(b, function(T, K) {
        (!(N.isUndefined(T) || T === null) && i.call(
          e,
          T,
          N.isString(K) ? K.trim() : K,
          E,
          v
        )) === !0 && y(T, E ? E.concat(K) : [K]);
      }), p.pop();
    }
  }
  if (!N.isObject(t))
    throw new TypeError("data must be an object");
  return y(t), e;
}
function uf(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function nc(t, e) {
  this._pairs = [], t && Ho(t, this, e);
}
const zp = nc.prototype;
zp.append = function(e, n) {
  this._pairs.push([e, n]);
};
zp.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, uf);
  } : uf;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function rS(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Yp(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || rS, i = n && n.serialize;
  let s;
  if (i ? s = i(e, n) : s = N.isURLSearchParams(e) ? e.toString() : new nc(e, n).toString(r), s) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class iS {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    N.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
var ff = iS, Zp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, sS = typeof URLSearchParams < "u" ? URLSearchParams : nc, oS = typeof FormData < "u" ? FormData : null, aS = typeof Blob < "u" ? Blob : null, lS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: sS,
    FormData: oS,
    Blob: aS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const Jp = typeof window < "u" && typeof document < "u", cS = ((t) => Jp && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), uS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function";
var fS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  hasBrowserEnv: Jp,
  hasStandardBrowserWebWorkerEnv: uS,
  hasStandardBrowserEnv: cS
}), zt = {
  ...fS,
  ...lS
};
function dS(t, e) {
  return Ho(t, new zt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, s) {
      return zt.isNode && N.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function pS(t) {
  return N.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function hS(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++)
    s = n[r], e[s] = t[s];
  return e;
}
function Xp(t) {
  function e(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__")
      return !0;
    const a = Number.isFinite(+o), u = s >= n.length;
    return o = !o && N.isArray(i) ? i.length : o, u ? (N.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r, !a) : ((!i[o] || !N.isObject(i[o])) && (i[o] = []), e(n, r, i[o], s) && N.isArray(i[o]) && (i[o] = hS(i[o])), !a);
  }
  if (N.isFormData(t) && N.isFunction(t.entries)) {
    const n = {};
    return N.forEachEntry(t, (r, i) => {
      e(pS(r), i, n, 0);
    }), n;
  }
  return null;
}
function mS(t, e, n) {
  if (N.isString(t))
    try {
      return (e || JSON.parse)(t), N.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const rc = {
  transitional: Zp,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, s = N.isObject(e);
    if (s && N.isHTMLForm(e) && (e = new FormData(e)), N.isFormData(e))
      return i && i ? JSON.stringify(Xp(e)) : e;
    if (N.isArrayBuffer(e) || N.isBuffer(e) || N.isStream(e) || N.isFile(e) || N.isBlob(e))
      return e;
    if (N.isArrayBufferView(e))
      return e.buffer;
    if (N.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return dS(e, this.formSerializer).toString();
      if ((a = N.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Ho(
          a ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return s || i ? (n.setContentType("application/json", !1), mS(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || rc.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (e && N.isString(e) && (r && !this.responseType || i)) {
      const o = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? ge.from(a, ge.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: zt.classes.FormData,
    Blob: zt.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
N.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  rc.headers[t] = {};
});
var ic = rc;
const gS = N.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var yS = (t) => {
  const e = {};
  let n, r, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || e[n] && gS[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
};
const df = Symbol("internals");
function fi(t) {
  return t && String(t).trim().toLowerCase();
}
function Bs(t) {
  return t === !1 || t == null ? t : N.isArray(t) ? t.map(Bs) : String(t);
}
function _S(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const vS = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Ca(t, e, n, r, i) {
  if (N.isFunction(r))
    return r.call(this, e, n);
  if (i && (e = n), !!N.isString(e)) {
    if (N.isString(r))
      return e.indexOf(r) !== -1;
    if (N.isRegExp(r))
      return r.test(e);
  }
}
function bS(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function ES(t, e) {
  const n = N.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(i, s, o) {
        return this[r].call(this, e, i, s, o);
      },
      configurable: !0
    });
  });
}
class Bo {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const i = this;
    function s(a, u, c) {
      const f = fi(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = N.findKey(i, f);
      (!p || i[p] === void 0 || c === !0 || c === void 0 && i[p] !== !1) && (i[p || u] = Bs(a));
    }
    const o = (a, u) => N.forEach(a, (c, f) => s(c, f, u));
    return N.isPlainObject(e) || e instanceof this.constructor ? o(e, n) : N.isString(e) && (e = e.trim()) && !vS(e) ? o(yS(e), n) : e != null && s(n, e, r), this;
  }
  get(e, n) {
    if (e = fi(e), e) {
      const r = N.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return _S(i);
        if (N.isFunction(n))
          return n.call(this, i, r);
        if (N.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = fi(e), e) {
      const r = N.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || Ca(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (o = fi(o), o) {
        const a = N.findKey(r, o);
        a && (!n || Ca(r, r[a], a, n)) && (delete r[a], i = !0);
      }
    }
    return N.isArray(e) ? e.forEach(s) : s(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const s = n[r];
      (!e || Ca(this, this[s], s, e, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(e) {
    const n = this, r = {};
    return N.forEach(this, (i, s) => {
      const o = N.findKey(r, s);
      if (o) {
        n[o] = Bs(i), delete n[s];
        return;
      }
      const a = e ? bS(s) : String(s).trim();
      a !== s && delete n[s], n[a] = Bs(i), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = e && N.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(e) {
    const r = (this[df] = this[df] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(o) {
      const a = fi(o);
      r[a] || (ES(i, o), r[a] = !0);
    }
    return N.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
Bo.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.reduceDescriptors(Bo.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
N.freezeMethods(Bo);
var on = Bo;
function Na(t, e) {
  const n = this || ic, r = e || n, i = on.from(r.headers);
  let s = r.data;
  return N.forEach(t, function(a) {
    s = a.call(n, s, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), s;
}
function Qp(t) {
  return !!(t && t.__CANCEL__);
}
function Gi(t, e, n) {
  ge.call(this, t ?? "canceled", ge.ERR_CANCELED, e, n), this.name = "CanceledError";
}
N.inherits(Gi, ge, {
  __CANCEL__: !0
});
function wS(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new ge(
    "Request failed with status code " + n.status,
    [ge.ERR_BAD_REQUEST, ge.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
var SS = zt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, i, s) {
      const o = [t + "=" + encodeURIComponent(e)];
      N.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), N.isString(r) && o.push("path=" + r), N.isString(i) && o.push("domain=" + i), s === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function OS(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function AS(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function eh(t, e) {
  return t && !OS(e) ? AS(t, e) : e;
}
var TS = zt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function i(s) {
      let o = s;
      return e && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = i(window.location.href), function(o) {
      const a = N.isString(o) ? i(o) : o;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function xS(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function CS(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let i = 0, s = 0, o;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const c = Date.now(), f = r[s];
    o || (o = c), n[i] = u, r[i] = c;
    let p = s, v = 0;
    for (; p !== i; )
      v += n[p++], p = p % t;
    if (i = (i + 1) % t, i === s && (s = (s + 1) % t), c - o < e)
      return;
    const y = f && c - f;
    return y ? Math.round(v * 1e3 / y) : void 0;
  };
}
function pf(t, e) {
  let n = 0;
  const r = CS(50, 250);
  return (i) => {
    const s = i.loaded, o = i.lengthComputable ? i.total : void 0, a = s - n, u = r(a), c = s <= o;
    n = s;
    const f = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && o && c ? (o - s) / u : void 0,
      event: i
    };
    f[e ? "download" : "upload"] = !0, t(f);
  };
}
const NS = typeof XMLHttpRequest < "u";
var PS = NS && function(t) {
  return new Promise(function(n, r) {
    let i = t.data;
    const s = on.from(t.headers).normalize();
    let { responseType: o, withXSRFToken: a } = t, u;
    function c() {
      t.cancelToken && t.cancelToken.unsubscribe(u), t.signal && t.signal.removeEventListener("abort", u);
    }
    let f;
    if (N.isFormData(i)) {
      if (zt.hasStandardBrowserEnv || zt.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((f = s.getContentType()) !== !1) {
        const [E, ...C] = f ? f.split(";").map((T) => T.trim()).filter(Boolean) : [];
        s.setContentType([E || "multipart/form-data", ...C].join("; "));
      }
    }
    let p = new XMLHttpRequest();
    if (t.auth) {
      const E = t.auth.username || "", C = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(E + ":" + C));
    }
    const v = eh(t.baseURL, t.url);
    p.open(t.method.toUpperCase(), Yp(v, t.params, t.paramsSerializer), !0), p.timeout = t.timeout;
    function y() {
      if (!p)
        return;
      const E = on.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), T = {
        data: !o || o === "text" || o === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: E,
        config: t,
        request: p
      };
      wS(function(W) {
        n(W), c();
      }, function(W) {
        r(W), c();
      }, T), p = null;
    }
    if ("onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, p.onabort = function() {
      p && (r(new ge("Request aborted", ge.ECONNABORTED, t, p)), p = null);
    }, p.onerror = function() {
      r(new ge("Network Error", ge.ERR_NETWORK, t, p)), p = null;
    }, p.ontimeout = function() {
      let C = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const T = t.transitional || Zp;
      t.timeoutErrorMessage && (C = t.timeoutErrorMessage), r(new ge(
        C,
        T.clarifyTimeoutError ? ge.ETIMEDOUT : ge.ECONNABORTED,
        t,
        p
      )), p = null;
    }, zt.hasStandardBrowserEnv && (a && N.isFunction(a) && (a = a(t)), a || a !== !1 && TS(v))) {
      const E = t.xsrfHeaderName && t.xsrfCookieName && SS.read(t.xsrfCookieName);
      E && s.set(t.xsrfHeaderName, E);
    }
    i === void 0 && s.setContentType(null), "setRequestHeader" in p && N.forEach(s.toJSON(), function(C, T) {
      p.setRequestHeader(T, C);
    }), N.isUndefined(t.withCredentials) || (p.withCredentials = !!t.withCredentials), o && o !== "json" && (p.responseType = t.responseType), typeof t.onDownloadProgress == "function" && p.addEventListener("progress", pf(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", pf(t.onUploadProgress)), (t.cancelToken || t.signal) && (u = (E) => {
      p && (r(!E || E.type ? new Gi(null, t, p) : E), p.abort(), p = null);
    }, t.cancelToken && t.cancelToken.subscribe(u), t.signal && (t.signal.aborted ? u() : t.signal.addEventListener("abort", u)));
    const b = xS(v);
    if (b && zt.protocols.indexOf(b) === -1) {
      r(new ge("Unsupported protocol " + b + ":", ge.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(i || null);
  });
};
const dl = {
  http: eS,
  xhr: PS
};
N.forEach(dl, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const hf = (t) => `- ${t}`, IS = (t) => N.isFunction(t) || t === null || t === !1;
var th = {
  getAdapter: (t) => {
    t = N.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const i = {};
    for (let s = 0; s < e; s++) {
      n = t[s];
      let o;
      if (r = n, !IS(n) && (r = dl[(o = String(n)).toLowerCase()], r === void 0))
        throw new ge(`Unknown adapter '${o}'`);
      if (r)
        break;
      i[o || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(i).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? s.length > 1 ? `since :
` + s.map(hf).join(`
`) : " " + hf(s[0]) : "as no adapter specified";
      throw new ge(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: dl
};
function Pa(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Gi(null, t);
}
function mf(t) {
  return Pa(t), t.headers = on.from(t.headers), t.data = Na.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), th.getAdapter(t.adapter || ic.adapter)(t).then(function(r) {
    return Pa(t), r.data = Na.call(
      t,
      t.transformResponse,
      r
    ), r.headers = on.from(r.headers), r;
  }, function(r) {
    return Qp(r) || (Pa(t), r && r.response && (r.response.data = Na.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = on.from(r.response.headers))), Promise.reject(r);
  });
}
const gf = (t) => t instanceof on ? t.toJSON() : t;
function Lr(t, e) {
  e = e || {};
  const n = {};
  function r(c, f, p) {
    return N.isPlainObject(c) && N.isPlainObject(f) ? N.merge.call({ caseless: p }, c, f) : N.isPlainObject(f) ? N.merge({}, f) : N.isArray(f) ? f.slice() : f;
  }
  function i(c, f, p) {
    if (N.isUndefined(f)) {
      if (!N.isUndefined(c))
        return r(void 0, c, p);
    } else
      return r(c, f, p);
  }
  function s(c, f) {
    if (!N.isUndefined(f))
      return r(void 0, f);
  }
  function o(c, f) {
    if (N.isUndefined(f)) {
      if (!N.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, f);
  }
  function a(c, f, p) {
    if (p in e)
      return r(c, f);
    if (p in t)
      return r(void 0, c);
  }
  const u = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, f) => i(gf(c), gf(f), !0)
  };
  return N.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const p = u[f] || i, v = p(t[f], e[f], f);
    N.isUndefined(v) && p !== a || (n[f] = v);
  }), n;
}
const nh = "1.6.5", sc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  sc[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const yf = {};
sc.transitional = function(e, n, r) {
  function i(s, o) {
    return "[Axios v" + nh + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, a) => {
    if (e === !1)
      throw new ge(
        i(o, " has been removed" + (n ? " in " + n : "")),
        ge.ERR_DEPRECATED
      );
    return n && !yf[o] && (yf[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(s, o, a) : !0;
  };
};
function DS(t, e, n) {
  if (typeof t != "object")
    throw new ge("options must be an object", ge.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i], o = e[s];
    if (o) {
      const a = t[s], u = a === void 0 || o(a, s, t);
      if (u !== !0)
        throw new ge("option " + s + " must be " + u, ge.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ge("Unknown option " + s, ge.ERR_BAD_OPTION);
  }
}
var pl = {
  assertOptions: DS,
  validators: sc
};
const hn = pl.validators;
class oo {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new ff(),
      response: new ff()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Lr(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 && pl.assertOptions(r, {
      silentJSONParsing: hn.transitional(hn.boolean),
      forcedJSONParsing: hn.transitional(hn.boolean),
      clarifyTimeoutError: hn.transitional(hn.boolean)
    }, !1), i != null && (N.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : pl.assertOptions(i, {
      encode: hn.function,
      serialize: hn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && N.merge(
      s.common,
      s[n.method]
    );
    s && N.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (b) => {
        delete s[b];
      }
    ), n.headers = on.concat(o, s);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (u = u && E.synchronous, a.unshift(E.fulfilled, E.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(E) {
      c.push(E.fulfilled, E.rejected);
    });
    let f, p = 0, v;
    if (!u) {
      const b = [mf.bind(this), void 0];
      for (b.unshift.apply(b, a), b.push.apply(b, c), v = b.length, f = Promise.resolve(n); p < v; )
        f = f.then(b[p++], b[p++]);
      return f;
    }
    v = a.length;
    let y = n;
    for (p = 0; p < v; ) {
      const b = a[p++], E = a[p++];
      try {
        y = b(y);
      } catch (C) {
        E.call(this, C);
        break;
      }
    }
    try {
      f = mf.call(this, y);
    } catch (b) {
      return Promise.reject(b);
    }
    for (p = 0, v = c.length; p < v; )
      f = f.then(c[p++], c[p++]);
    return f;
  }
  getUri(e) {
    e = Lr(this.defaults, e);
    const n = eh(e.baseURL, e.url);
    return Yp(n, e.params, e.paramsSerializer);
  }
}
N.forEach(["delete", "get", "head", "options"], function(e) {
  oo.prototype[e] = function(n, r) {
    return this.request(Lr(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
N.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(s, o, a) {
      return this.request(Lr(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  oo.prototype[e] = n(), oo.prototype[e + "Form"] = n(!0);
});
var Ks = oo;
class oc {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const o = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(i);
      return o.cancel = function() {
        r.unsubscribe(s);
      }, o;
    }, e(function(s, o, a) {
      r.reason || (r.reason = new Gi(s, o, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new oc(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
var RS = oc;
function MS(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function kS(t) {
  return N.isObject(t) && t.isAxiosError === !0;
}
const hl = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(hl).forEach(([t, e]) => {
  hl[e] = t;
});
var $S = hl;
function rh(t) {
  const e = new Ks(t), n = Lp(Ks.prototype.request, e);
  return N.extend(n, Ks.prototype, e, { allOwnKeys: !0 }), N.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(i) {
    return rh(Lr(t, i));
  }, n;
}
const Fe = rh(ic);
Fe.Axios = Ks;
Fe.CanceledError = Gi;
Fe.CancelToken = RS;
Fe.isCancel = Qp;
Fe.VERSION = nh;
Fe.toFormData = Ho;
Fe.AxiosError = ge;
Fe.Cancel = Fe.CanceledError;
Fe.all = function(e) {
  return Promise.all(e);
};
Fe.spread = MS;
Fe.isAxiosError = kS;
Fe.mergeConfig = Lr;
Fe.AxiosHeaders = on;
Fe.formToJSON = (t) => Xp(N.isHTMLForm(t) ? new FormData(t) : t);
Fe.getAdapter = th.getAdapter;
Fe.HttpStatusCode = $S;
Fe.default = Fe;
var LS = Fe, ao = $ && $.__assign || function() {
  return ao = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, ao.apply(this, arguments);
}, yr = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, _r = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, FS = $ && $.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(jo, "__esModule", { value: !0 });
jo.AxiosClient = void 0;
var jS = FS(LS), WS = (
  /** @class */
  function() {
    function t(e) {
      var n = e.responseHandler, r = e.requestConfigBuilder;
      this.responseHandler = n, this.requestConfigBuilder = r;
    }
    return t.prototype.get = function(e, n) {
      return yr(this, void 0, void 0, function() {
        var r;
        return _r(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("get", e, n)];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.getData = function(e, n) {
      return yr(this, void 0, void 0, function() {
        var r;
        return _r(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("get", e, n, {
                responseType: "arraybuffer"
              })];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.post = function(e, n) {
      return yr(this, void 0, void 0, function() {
        var r;
        return _r(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("post", e, n)];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.postData = function(e, n) {
      return yr(this, void 0, void 0, function() {
        var r;
        return _r(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("post", e, n)];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.put = function(e, n) {
      return yr(this, void 0, void 0, function() {
        var r;
        return _r(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("put", e, n)];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.delete = function(e, n) {
      return yr(this, void 0, void 0, function() {
        var r;
        return _r(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("delete", e, n)];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.sendRequest = function(e) {
      return this.responseHandler.handle(
        // eslint-disable-next-line new-cap
        (0, jS.default)(ao(ao({}, e), { maxBodyLength: 1 / 0, maxContentLength: 1 / 0 }))
      );
    }, t;
  }()
);
jo.AxiosClient = WS;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DefaultHttpClient = void 0;
  var e = jo;
  Object.defineProperty(t, "DefaultHttpClient", { enumerable: !0, get: function() {
    return e.AxiosClient;
  } });
})($p);
var Ko = {}, VS = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, n = Symbol("test"), r = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var i = 42;
  e[n] = i;
  for (n in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var s = Object.getOwnPropertySymbols(e);
  if (s.length !== 1 || s[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(e, n);
    if (o.value !== i || o.enumerable !== !0)
      return !1;
  }
  return !0;
}, _f = typeof Symbol < "u" && Symbol, US = VS, HS = function() {
  return typeof _f != "function" || typeof Symbol != "function" || typeof _f("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : US();
}, vf = {
  foo: {}
}, BS = Object, KS = function() {
  return { __proto__: vf }.foo === vf.foo && !({ __proto__: null } instanceof BS);
}, qS = "Function.prototype.bind called on incompatible ", GS = Object.prototype.toString, zS = Math.max, YS = "[object Function]", bf = function(e, n) {
  for (var r = [], i = 0; i < e.length; i += 1)
    r[i] = e[i];
  for (var s = 0; s < n.length; s += 1)
    r[s + e.length] = n[s];
  return r;
}, ZS = function(e, n) {
  for (var r = [], i = n || 0, s = 0; i < e.length; i += 1, s += 1)
    r[s] = e[i];
  return r;
}, JS = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, XS = function(e) {
  var n = this;
  if (typeof n != "function" || GS.apply(n) !== YS)
    throw new TypeError(qS + n);
  for (var r = ZS(arguments, 1), i, s = function() {
    if (this instanceof i) {
      var f = n.apply(
        this,
        bf(r, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return n.apply(
      e,
      bf(r, arguments)
    );
  }, o = zS(0, n.length - r.length), a = [], u = 0; u < o; u++)
    a[u] = "$" + u;
  if (i = Function("binder", "return function (" + JS(a, ",") + "){ return binder.apply(this,arguments); }")(s), n.prototype) {
    var c = function() {
    };
    c.prototype = n.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, QS = XS, ac = Function.prototype.bind || QS, eO = Function.prototype.call, tO = Object.prototype.hasOwnProperty, nO = ac, rO = nO.call(eO, tO), de, Fr = SyntaxError, ih = Function, Ir = TypeError, Ia = function(t) {
  try {
    return ih('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Jn = Object.getOwnPropertyDescriptor;
if (Jn)
  try {
    Jn({}, "");
  } catch {
    Jn = null;
  }
var Da = function() {
  throw new Ir();
}, iO = Jn ? function() {
  try {
    return arguments.callee, Da;
  } catch {
    try {
      return Jn(arguments, "callee").get;
    } catch {
      return Da;
    }
  }
}() : Da, vr = HS(), sO = KS(), Ue = Object.getPrototypeOf || (sO ? function(t) {
  return t.__proto__;
} : null), Sr = {}, oO = typeof Uint8Array > "u" || !Ue ? de : Ue(Uint8Array), Xn = {
  "%AggregateError%": typeof AggregateError > "u" ? de : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? de : ArrayBuffer,
  "%ArrayIteratorPrototype%": vr && Ue ? Ue([][Symbol.iterator]()) : de,
  "%AsyncFromSyncIteratorPrototype%": de,
  "%AsyncFunction%": Sr,
  "%AsyncGenerator%": Sr,
  "%AsyncGeneratorFunction%": Sr,
  "%AsyncIteratorPrototype%": Sr,
  "%Atomics%": typeof Atomics > "u" ? de : Atomics,
  "%BigInt%": typeof BigInt > "u" ? de : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? de : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? de : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? de : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? de : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? de : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? de : FinalizationRegistry,
  "%Function%": ih,
  "%GeneratorFunction%": Sr,
  "%Int8Array%": typeof Int8Array > "u" ? de : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? de : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? de : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": vr && Ue ? Ue(Ue([][Symbol.iterator]())) : de,
  "%JSON%": typeof JSON == "object" ? JSON : de,
  "%Map%": typeof Map > "u" ? de : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !vr || !Ue ? de : Ue((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? de : Promise,
  "%Proxy%": typeof Proxy > "u" ? de : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? de : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? de : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !vr || !Ue ? de : Ue((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? de : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": vr && Ue ? Ue(""[Symbol.iterator]()) : de,
  "%Symbol%": vr ? Symbol : de,
  "%SyntaxError%": Fr,
  "%ThrowTypeError%": iO,
  "%TypedArray%": oO,
  "%TypeError%": Ir,
  "%Uint8Array%": typeof Uint8Array > "u" ? de : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? de : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? de : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? de : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? de : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? de : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? de : WeakSet
};
if (Ue)
  try {
    null.error;
  } catch (t) {
    var aO = Ue(Ue(t));
    Xn["%Error.prototype%"] = aO;
  }
var lO = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = Ia("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = Ia("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = Ia("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t("%AsyncGenerator%");
    i && Ue && (n = Ue(i.prototype));
  }
  return Xn[e] = n, n;
}, Ef = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, zi = ac, lo = rO, cO = zi.call(Function.call, Array.prototype.concat), uO = zi.call(Function.apply, Array.prototype.splice), wf = zi.call(Function.call, String.prototype.replace), co = zi.call(Function.call, String.prototype.slice), fO = zi.call(Function.call, RegExp.prototype.exec), dO = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, pO = /\\(\\)?/g, hO = function(e) {
  var n = co(e, 0, 1), r = co(e, -1);
  if (n === "%" && r !== "%")
    throw new Fr("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new Fr("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return wf(e, dO, function(s, o, a, u) {
    i[i.length] = a ? wf(u, pO, "$1") : o || s;
  }), i;
}, mO = function(e, n) {
  var r = e, i;
  if (lo(Ef, r) && (i = Ef[r], r = "%" + i[0] + "%"), lo(Xn, r)) {
    var s = Xn[r];
    if (s === Sr && (s = lO(r)), typeof s > "u" && !n)
      throw new Ir("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: r,
      value: s
    };
  }
  throw new Fr("intrinsic " + e + " does not exist!");
}, sr = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new Ir("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Ir('"allowMissing" argument must be a boolean');
  if (fO(/^%?[^%]*%?$/, e) === null)
    throw new Fr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = hO(e), i = r.length > 0 ? r[0] : "", s = mO("%" + i + "%", n), o = s.name, a = s.value, u = !1, c = s.alias;
  c && (i = c[0], uO(r, cO([0, 1], c)));
  for (var f = 1, p = !0; f < r.length; f += 1) {
    var v = r[f], y = co(v, 0, 1), b = co(v, -1);
    if ((y === '"' || y === "'" || y === "`" || b === '"' || b === "'" || b === "`") && y !== b)
      throw new Fr("property names with quotes must have matching quotes");
    if ((v === "constructor" || !p) && (u = !0), i += "." + v, o = "%" + i + "%", lo(Xn, o))
      a = Xn[o];
    else if (a != null) {
      if (!(v in a)) {
        if (!n)
          throw new Ir("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Jn && f + 1 >= r.length) {
        var E = Jn(a, v);
        p = !!E, p && "get" in E && !("originalValue" in E.get) ? a = E.get : a = a[v];
      } else
        p = lo(a, v), a = a[v];
      p && !u && (Xn[o] = a);
    }
  }
  return a;
}, sh = { exports: {} }, gO = sr, ml = gO("%Object.defineProperty%", !0), gl = function() {
  if (ml)
    try {
      return ml({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
gl.hasArrayLengthDefineBug = function() {
  if (!gl())
    return null;
  try {
    return ml([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var oh = gl, yO = sr, qs = yO("%Object.getOwnPropertyDescriptor%", !0);
if (qs)
  try {
    qs([], "length");
  } catch {
    qs = null;
  }
var ah = qs, _O = oh(), lc = sr, Oi = _O && lc("%Object.defineProperty%", !0);
if (Oi)
  try {
    Oi({}, "a", { value: 1 });
  } catch {
    Oi = !1;
  }
var vO = lc("%SyntaxError%"), br = lc("%TypeError%"), Sf = ah, bO = function(e, n, r) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new br("`obj` must be an object or a function`");
  if (typeof n != "string" && typeof n != "symbol")
    throw new br("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new br("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new br("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new br("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new br("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, s = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, a = arguments.length > 6 ? arguments[6] : !1, u = !!Sf && Sf(e, n);
  if (Oi)
    Oi(e, n, {
      configurable: o === null && u ? u.configurable : !o,
      enumerable: i === null && u ? u.enumerable : !i,
      value: r,
      writable: s === null && u ? u.writable : !s
    });
  else if (a || !i && !s && !o)
    e[n] = r;
  else
    throw new vO("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, lh = sr, Of = bO, EO = oh(), Af = ah, Tf = lh("%TypeError%"), wO = lh("%Math.floor%"), SO = function(e, n) {
  if (typeof e != "function")
    throw new Tf("`fn` is not a function");
  if (typeof n != "number" || n < 0 || n > 4294967295 || wO(n) !== n)
    throw new Tf("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2], i = !0, s = !0;
  if ("length" in e && Af) {
    var o = Af(e, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (s = !1);
  }
  return (i || s || !r) && (EO ? Of(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n,
    !0,
    !0
  ) : Of(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n
  )), e;
};
(function(t) {
  var e = ac, n = sr, r = SO, i = n("%TypeError%"), s = n("%Function.prototype.apply%"), o = n("%Function.prototype.call%"), a = n("%Reflect.apply%", !0) || e.call(o, s), u = n("%Object.defineProperty%", !0), c = n("%Math.max%");
  if (u)
    try {
      u({}, "a", { value: 1 });
    } catch {
      u = null;
    }
  t.exports = function(v) {
    if (typeof v != "function")
      throw new i("a function is required");
    var y = a(e, o, arguments);
    return r(
      y,
      1 + c(0, v.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return a(e, s, arguments);
  };
  u ? u(t.exports, "apply", { value: f }) : t.exports.apply = f;
})(sh);
var OO = sh.exports, ch = sr, uh = OO, AO = uh(ch("String.prototype.indexOf")), TO = function(e, n) {
  var r = ch(e, !!n);
  return typeof r == "function" && AO(e, ".prototype.") > -1 ? uh(r) : r;
};
const xO = {}, CO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xO
}, Symbol.toStringTag, { value: "Module" })), NO = /* @__PURE__ */ Rp(CO);
var cc = typeof Map == "function" && Map.prototype, Ra = Object.getOwnPropertyDescriptor && cc ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, uo = cc && Ra && typeof Ra.get == "function" ? Ra.get : null, xf = cc && Map.prototype.forEach, uc = typeof Set == "function" && Set.prototype, Ma = Object.getOwnPropertyDescriptor && uc ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, fo = uc && Ma && typeof Ma.get == "function" ? Ma.get : null, Cf = uc && Set.prototype.forEach, PO = typeof WeakMap == "function" && WeakMap.prototype, Ai = PO ? WeakMap.prototype.has : null, IO = typeof WeakSet == "function" && WeakSet.prototype, Ti = IO ? WeakSet.prototype.has : null, DO = typeof WeakRef == "function" && WeakRef.prototype, Nf = DO ? WeakRef.prototype.deref : null, RO = Boolean.prototype.valueOf, MO = Object.prototype.toString, kO = Function.prototype.toString, $O = String.prototype.match, fc = String.prototype.slice, On = String.prototype.replace, LO = String.prototype.toUpperCase, Pf = String.prototype.toLowerCase, fh = RegExp.prototype.test, If = Array.prototype.concat, qt = Array.prototype.join, FO = Array.prototype.slice, Df = Math.floor, yl = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, ka = Object.getOwnPropertySymbols, _l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, jr = typeof Symbol == "function" && typeof Symbol.iterator == "object", Je = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === jr || !0) ? Symbol.toStringTag : null, dh = Object.prototype.propertyIsEnumerable, Rf = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function Mf(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || fh.call(/e/, e))
    return e;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var r = t < 0 ? -Df(-t) : Df(t);
    if (r !== t) {
      var i = String(r), s = fc.call(e, i.length + 1);
      return On.call(i, n, "$&_") + "." + On.call(On.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return On.call(e, n, "$&_");
}
var vl = NO, kf = vl.custom, $f = hh(kf) ? kf : null, jO = function t(e, n, r, i) {
  var s = n || {};
  if (En(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (En(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = En(s, "customInspect") ? s.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (En(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (En(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = s.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return gh(e, s);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var u = String(e);
    return a ? Mf(e, u) : u;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return a ? Mf(e, c) : c;
  }
  var f = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof r > "u" && (r = 0), r >= f && f > 0 && typeof e == "object")
    return bl(e) ? "[Array]" : "[Object]";
  var p = rA(s, r);
  if (typeof i > "u")
    i = [];
  else if (mh(i, e) >= 0)
    return "[Circular]";
  function v(ce, Te, Se) {
    if (Te && (i = FO.call(i), i.push(Te)), Se) {
      var ee = {
        depth: s.depth
      };
      return En(s, "quoteStyle") && (ee.quoteStyle = s.quoteStyle), t(ce, ee, r + 1, i);
    }
    return t(ce, s, r + 1, i);
  }
  if (typeof e == "function" && !Lf(e)) {
    var y = zO(e), b = As(e, v);
    return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (b.length > 0 ? " { " + qt.call(b, ", ") + " }" : "");
  }
  if (hh(e)) {
    var E = jr ? On.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : _l.call(e);
    return typeof e == "object" && !jr ? di(E) : E;
  }
  if (eA(e)) {
    for (var C = "<" + Pf.call(String(e.nodeName)), T = e.attributes || [], K = 0; K < T.length; K++)
      C += " " + T[K].name + "=" + ph(WO(T[K].value), "double", s);
    return C += ">", e.childNodes && e.childNodes.length && (C += "..."), C += "</" + Pf.call(String(e.nodeName)) + ">", C;
  }
  if (bl(e)) {
    if (e.length === 0)
      return "[]";
    var W = As(e, v);
    return p && !nA(W) ? "[" + El(W, p) + "]" : "[ " + qt.call(W, ", ") + " ]";
  }
  if (UO(e)) {
    var j = As(e, v);
    return !("cause" in Error.prototype) && "cause" in e && !dh.call(e, "cause") ? "{ [" + String(e) + "] " + qt.call(If.call("[cause]: " + v(e.cause), j), ", ") + " }" : j.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + qt.call(j, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if ($f && typeof e[$f] == "function" && vl)
      return vl(e, { depth: f - r });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (YO(e)) {
    var G = [];
    return xf && xf.call(e, function(ce, Te) {
      G.push(v(Te, e, !0) + " => " + v(ce, e));
    }), Ff("Map", uo.call(e), G, p);
  }
  if (XO(e)) {
    var B = [];
    return Cf && Cf.call(e, function(ce) {
      B.push(v(ce, e));
    }), Ff("Set", fo.call(e), B, p);
  }
  if (ZO(e))
    return $a("WeakMap");
  if (QO(e))
    return $a("WeakSet");
  if (JO(e))
    return $a("WeakRef");
  if (BO(e))
    return di(v(Number(e)));
  if (qO(e))
    return di(v(yl.call(e)));
  if (KO(e))
    return di(RO.call(e));
  if (HO(e))
    return di(v(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === $)
    return "{ [object globalThis] }";
  if (!VO(e) && !Lf(e)) {
    var X = As(e, v), z = Rf ? Rf(e) === Object.prototype : e instanceof Object || e.constructor === Object, F = e instanceof Object ? "" : "null prototype", Y = !z && Je && Object(e) === e && Je in e ? fc.call(Pn(e), 8, -1) : F ? "Object" : "", Q = z || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", le = Q + (Y || F ? "[" + qt.call(If.call([], Y || [], F || []), ": ") + "] " : "");
    return X.length === 0 ? le + "{}" : p ? le + "{" + El(X, p) + "}" : le + "{ " + qt.call(X, ", ") + " }";
  }
  return String(e);
};
function ph(t, e, n) {
  var r = (n.quoteStyle || e) === "double" ? '"' : "'";
  return r + t + r;
}
function WO(t) {
  return On.call(String(t), /"/g, "&quot;");
}
function bl(t) {
  return Pn(t) === "[object Array]" && (!Je || !(typeof t == "object" && Je in t));
}
function VO(t) {
  return Pn(t) === "[object Date]" && (!Je || !(typeof t == "object" && Je in t));
}
function Lf(t) {
  return Pn(t) === "[object RegExp]" && (!Je || !(typeof t == "object" && Je in t));
}
function UO(t) {
  return Pn(t) === "[object Error]" && (!Je || !(typeof t == "object" && Je in t));
}
function HO(t) {
  return Pn(t) === "[object String]" && (!Je || !(typeof t == "object" && Je in t));
}
function BO(t) {
  return Pn(t) === "[object Number]" && (!Je || !(typeof t == "object" && Je in t));
}
function KO(t) {
  return Pn(t) === "[object Boolean]" && (!Je || !(typeof t == "object" && Je in t));
}
function hh(t) {
  if (jr)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !_l)
    return !1;
  try {
    return _l.call(t), !0;
  } catch {
  }
  return !1;
}
function qO(t) {
  if (!t || typeof t != "object" || !yl)
    return !1;
  try {
    return yl.call(t), !0;
  } catch {
  }
  return !1;
}
var GO = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function En(t, e) {
  return GO.call(t, e);
}
function Pn(t) {
  return MO.call(t);
}
function zO(t) {
  if (t.name)
    return t.name;
  var e = $O.call(kO.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function mh(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var n = 0, r = t.length; n < r; n++)
    if (t[n] === e)
      return n;
  return -1;
}
function YO(t) {
  if (!uo || !t || typeof t != "object")
    return !1;
  try {
    uo.call(t);
    try {
      fo.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function ZO(t) {
  if (!Ai || !t || typeof t != "object")
    return !1;
  try {
    Ai.call(t, Ai);
    try {
      Ti.call(t, Ti);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function JO(t) {
  if (!Nf || !t || typeof t != "object")
    return !1;
  try {
    return Nf.call(t), !0;
  } catch {
  }
  return !1;
}
function XO(t) {
  if (!fo || !t || typeof t != "object")
    return !1;
  try {
    fo.call(t);
    try {
      uo.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function QO(t) {
  if (!Ti || !t || typeof t != "object")
    return !1;
  try {
    Ti.call(t, Ti);
    try {
      Ai.call(t, Ai);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function eA(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function gh(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return gh(fc.call(t, 0, e.maxStringLength), e) + r;
  }
  var i = On.call(On.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, tA);
  return ph(i, "single", e);
}
function tA(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + LO.call(e.toString(16));
}
function di(t) {
  return "Object(" + t + ")";
}
function $a(t) {
  return t + " { ? }";
}
function Ff(t, e, n, r) {
  var i = r ? El(n, r) : qt.call(n, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function nA(t) {
  for (var e = 0; e < t.length; e++)
    if (mh(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function rA(t, e) {
  var n;
  if (t.indent === "	")
    n = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    n = qt.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: qt.call(Array(e + 1), n)
  };
}
function El(t, e) {
  if (t.length === 0)
    return "";
  var n = `
` + e.prev + e.base;
  return n + qt.call(t, "," + n) + `
` + e.prev;
}
function As(t, e) {
  var n = bl(t), r = [];
  if (n) {
    r.length = t.length;
    for (var i = 0; i < t.length; i++)
      r[i] = En(t, i) ? e(t[i], t) : "";
  }
  var s = typeof ka == "function" ? ka(t) : [], o;
  if (jr) {
    o = {};
    for (var a = 0; a < s.length; a++)
      o["$" + s[a]] = s[a];
  }
  for (var u in t)
    En(t, u) && (n && String(Number(u)) === u && u < t.length || jr && o["$" + u] instanceof Symbol || (fh.call(/[^\w$]/, u) ? r.push(e(u, t) + ": " + e(t[u], t)) : r.push(u + ": " + e(t[u], t))));
  if (typeof ka == "function")
    for (var c = 0; c < s.length; c++)
      dh.call(t, s[c]) && r.push("[" + e(s[c]) + "]: " + e(t[s[c]], t));
  return r;
}
var dc = sr, Zr = TO, iA = jO, sA = dc("%TypeError%"), Ts = dc("%WeakMap%", !0), xs = dc("%Map%", !0), oA = Zr("WeakMap.prototype.get", !0), aA = Zr("WeakMap.prototype.set", !0), lA = Zr("WeakMap.prototype.has", !0), cA = Zr("Map.prototype.get", !0), uA = Zr("Map.prototype.set", !0), fA = Zr("Map.prototype.has", !0), pc = function(t, e) {
  for (var n = t, r; (r = n.next) !== null; n = r)
    if (r.key === e)
      return n.next = r.next, r.next = t.next, t.next = r, r;
}, dA = function(t, e) {
  var n = pc(t, e);
  return n && n.value;
}, pA = function(t, e, n) {
  var r = pc(t, e);
  r ? r.value = n : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: n
  };
}, hA = function(t, e) {
  return !!pc(t, e);
}, mA = function() {
  var e, n, r, i = {
    assert: function(s) {
      if (!i.has(s))
        throw new sA("Side channel does not contain " + iA(s));
    },
    get: function(s) {
      if (Ts && s && (typeof s == "object" || typeof s == "function")) {
        if (e)
          return oA(e, s);
      } else if (xs) {
        if (n)
          return cA(n, s);
      } else if (r)
        return dA(r, s);
    },
    has: function(s) {
      if (Ts && s && (typeof s == "object" || typeof s == "function")) {
        if (e)
          return lA(e, s);
      } else if (xs) {
        if (n)
          return fA(n, s);
      } else if (r)
        return hA(r, s);
      return !1;
    },
    set: function(s, o) {
      Ts && s && (typeof s == "object" || typeof s == "function") ? (e || (e = new Ts()), aA(e, s, o)) : xs ? (n || (n = new xs()), uA(n, s, o)) : (r || (r = { key: {}, next: null }), pA(r, s, o));
    }
  };
  return i;
}, gA = String.prototype.replace, yA = /%20/g, La = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, hc = {
  default: La.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return gA.call(t, yA, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: La.RFC1738,
  RFC3986: La.RFC3986
}, _A = hc, Fa = Object.prototype.hasOwnProperty, qn = Array.isArray, Ut = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), vA = function(e) {
  for (; e.length > 1; ) {
    var n = e.pop(), r = n.obj[n.prop];
    if (qn(r)) {
      for (var i = [], s = 0; s < r.length; ++s)
        typeof r[s] < "u" && i.push(r[s]);
      n.obj[n.prop] = i;
    }
  }
}, yh = function(e, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (r[i] = e[i]);
  return r;
}, bA = function t(e, n, r) {
  if (!n)
    return e;
  if (typeof n != "object") {
    if (qn(e))
      e.push(n);
    else if (e && typeof e == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !Fa.call(Object.prototype, n)) && (e[n] = !0);
    else
      return [e, n];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(n);
  var i = e;
  return qn(e) && !qn(n) && (i = yh(e, r)), qn(e) && qn(n) ? (n.forEach(function(s, o) {
    if (Fa.call(e, o)) {
      var a = e[o];
      a && typeof a == "object" && s && typeof s == "object" ? e[o] = t(a, s, r) : e.push(s);
    } else
      e[o] = s;
  }), e) : Object.keys(n).reduce(function(s, o) {
    var a = n[o];
    return Fa.call(s, o) ? s[o] = t(s[o], a, r) : s[o] = a, s;
  }, i);
}, EA = function(e, n) {
  return Object.keys(n).reduce(function(r, i) {
    return r[i] = n[i], r;
  }, e);
}, wA = function(t, e, n) {
  var r = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, SA = function(e, n, r, i, s) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), r === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var a = "", u = 0; u < o.length; ++u) {
    var c = o.charCodeAt(u);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || s === _A.RFC1738 && (c === 40 || c === 41)) {
      a += o.charAt(u);
      continue;
    }
    if (c < 128) {
      a = a + Ut[c];
      continue;
    }
    if (c < 2048) {
      a = a + (Ut[192 | c >> 6] + Ut[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      a = a + (Ut[224 | c >> 12] + Ut[128 | c >> 6 & 63] + Ut[128 | c & 63]);
      continue;
    }
    u += 1, c = 65536 + ((c & 1023) << 10 | o.charCodeAt(u) & 1023), a += Ut[240 | c >> 18] + Ut[128 | c >> 12 & 63] + Ut[128 | c >> 6 & 63] + Ut[128 | c & 63];
  }
  return a;
}, OA = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], r = [], i = 0; i < n.length; ++i)
    for (var s = n[i], o = s.obj[s.prop], a = Object.keys(o), u = 0; u < a.length; ++u) {
      var c = a[u], f = o[c];
      typeof f == "object" && f !== null && r.indexOf(f) === -1 && (n.push({ obj: o, prop: c }), r.push(f));
    }
  return vA(n), e;
}, AA = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, TA = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, xA = function(e, n) {
  return [].concat(e, n);
}, CA = function(e, n) {
  if (qn(e)) {
    for (var r = [], i = 0; i < e.length; i += 1)
      r.push(n(e[i]));
    return r;
  }
  return n(e);
}, _h = {
  arrayToObject: yh,
  assign: EA,
  combine: xA,
  compact: OA,
  decode: wA,
  encode: SA,
  isBuffer: TA,
  isRegExp: AA,
  maybeMap: CA,
  merge: bA
}, vh = mA, Gs = _h, xi = hc, NA = Object.prototype.hasOwnProperty, jf = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, n) {
    return e + "[" + n + "]";
  },
  repeat: function(e) {
    return e;
  }
}, tn = Array.isArray, PA = Array.prototype.push, bh = function(t, e) {
  PA.apply(t, tn(e) ? e : [e]);
}, IA = Date.prototype.toISOString, Wf = xi.default, Ge = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Gs.encode,
  encodeValuesOnly: !1,
  format: Wf,
  formatter: xi.formatters[Wf],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return IA.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, DA = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, ja = {}, RA = function t(e, n, r, i, s, o, a, u, c, f, p, v, y, b, E, C) {
  for (var T = e, K = C, W = 0, j = !1; (K = K.get(ja)) !== void 0 && !j; ) {
    var G = K.get(e);
    if (W += 1, typeof G < "u") {
      if (G === W)
        throw new RangeError("Cyclic object value");
      j = !0;
    }
    typeof K.get(ja) > "u" && (W = 0);
  }
  if (typeof u == "function" ? T = u(n, T) : T instanceof Date ? T = p(T) : r === "comma" && tn(T) && (T = Gs.maybeMap(T, function(ee) {
    return ee instanceof Date ? p(ee) : ee;
  })), T === null) {
    if (s)
      return a && !b ? a(n, Ge.encoder, E, "key", v) : n;
    T = "";
  }
  if (DA(T) || Gs.isBuffer(T)) {
    if (a) {
      var B = b ? n : a(n, Ge.encoder, E, "key", v);
      return [y(B) + "=" + y(a(T, Ge.encoder, E, "value", v))];
    }
    return [y(n) + "=" + y(String(T))];
  }
  var X = [];
  if (typeof T > "u")
    return X;
  var z;
  if (r === "comma" && tn(T))
    b && a && (T = Gs.maybeMap(T, a)), z = [{ value: T.length > 0 ? T.join(",") || null : void 0 }];
  else if (tn(u))
    z = u;
  else {
    var F = Object.keys(T);
    z = c ? F.sort(c) : F;
  }
  for (var Y = i && tn(T) && T.length === 1 ? n + "[]" : n, Q = 0; Q < z.length; ++Q) {
    var le = z[Q], ce = typeof le == "object" && typeof le.value < "u" ? le.value : T[le];
    if (!(o && ce === null)) {
      var Te = tn(T) ? typeof r == "function" ? r(Y, le) : Y : Y + (f ? "." + le : "[" + le + "]");
      C.set(e, W);
      var Se = vh();
      Se.set(ja, C), bh(X, t(
        ce,
        Te,
        r,
        i,
        s,
        o,
        r === "comma" && b && tn(T) ? null : a,
        u,
        c,
        f,
        p,
        v,
        y,
        b,
        E,
        Se
      ));
    }
  }
  return X;
}, MA = function(e) {
  if (!e)
    return Ge;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || Ge.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = xi.default;
  if (typeof e.format < "u") {
    if (!NA.call(xi.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var i = xi.formatters[r], s = Ge.filter;
  return (typeof e.filter == "function" || tn(e.filter)) && (s = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Ge.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? Ge.allowDots : !!e.allowDots,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ge.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? Ge.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : Ge.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : Ge.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Ge.encodeValuesOnly,
    filter: s,
    format: r,
    formatter: i,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Ge.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Ge.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ge.strictNullHandling
  };
}, kA = function(t, e) {
  var n = t, r = MA(e), i, s;
  typeof r.filter == "function" ? (s = r.filter, n = s("", n)) : tn(r.filter) && (s = r.filter, i = s);
  var o = [];
  if (typeof n != "object" || n === null)
    return "";
  var a;
  e && e.arrayFormat in jf ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
  var u = jf[a];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = u === "comma" && e && e.commaRoundTrip;
  i || (i = Object.keys(n)), r.sort && i.sort(r.sort);
  for (var f = vh(), p = 0; p < i.length; ++p) {
    var v = i[p];
    r.skipNulls && n[v] === null || bh(o, RA(
      n[v],
      v,
      u,
      c,
      r.strictNullHandling,
      r.skipNulls,
      r.encode ? r.encoder : null,
      r.filter,
      r.sort,
      r.allowDots,
      r.serializeDate,
      r.format,
      r.formatter,
      r.encodeValuesOnly,
      r.charset,
      f
    ));
  }
  var y = o.join(r.delimiter), b = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? b += "utf8=%26%2310003%3B&" : b += "utf8=%E2%9C%93&"), y.length > 0 ? b + y : "";
}, Wr = _h, wl = Object.prototype.hasOwnProperty, $A = Array.isArray, Ve = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Wr.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, LA = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, Eh = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, FA = "utf8=%26%2310003%3B", jA = "utf8=%E2%9C%93", WA = function(e, n) {
  var r = { __proto__: null }, i = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, s = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, o = i.split(n.delimiter, s), a = -1, u, c = n.charset;
  if (n.charsetSentinel)
    for (u = 0; u < o.length; ++u)
      o[u].indexOf("utf8=") === 0 && (o[u] === jA ? c = "utf-8" : o[u] === FA && (c = "iso-8859-1"), a = u, u = o.length);
  for (u = 0; u < o.length; ++u)
    if (u !== a) {
      var f = o[u], p = f.indexOf("]="), v = p === -1 ? f.indexOf("=") : p + 1, y, b;
      v === -1 ? (y = n.decoder(f, Ve.decoder, c, "key"), b = n.strictNullHandling ? null : "") : (y = n.decoder(f.slice(0, v), Ve.decoder, c, "key"), b = Wr.maybeMap(
        Eh(f.slice(v + 1), n),
        function(E) {
          return n.decoder(E, Ve.decoder, c, "value");
        }
      )), b && n.interpretNumericEntities && c === "iso-8859-1" && (b = LA(b)), f.indexOf("[]=") > -1 && (b = $A(b) ? [b] : b), wl.call(r, y) ? r[y] = Wr.combine(r[y], b) : r[y] = b;
    }
  return r;
}, VA = function(t, e, n, r) {
  for (var i = r ? e : Eh(e, n), s = t.length - 1; s >= 0; --s) {
    var o, a = t[s];
    if (a === "[]" && n.parseArrays)
      o = [].concat(i);
    else {
      o = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var u = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a, c = parseInt(u, 10);
      !n.parseArrays && u === "" ? o = { 0: i } : !isNaN(c) && a !== u && String(c) === u && c >= 0 && n.parseArrays && c <= n.arrayLimit ? (o = [], o[c] = i) : u !== "__proto__" && (o[u] = i);
    }
    i = o;
  }
  return i;
}, UA = function(e, n, r, i) {
  if (e) {
    var s = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, u = r.depth > 0 && o.exec(s), c = u ? s.slice(0, u.index) : s, f = [];
    if (c) {
      if (!r.plainObjects && wl.call(Object.prototype, c) && !r.allowPrototypes)
        return;
      f.push(c);
    }
    for (var p = 0; r.depth > 0 && (u = a.exec(s)) !== null && p < r.depth; ) {
      if (p += 1, !r.plainObjects && wl.call(Object.prototype, u[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      f.push(u[1]);
    }
    return u && f.push("[" + s.slice(u.index) + "]"), VA(f, n, r, i);
  }
}, HA = function(e) {
  if (!e)
    return Ve;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof e.charset > "u" ? Ve.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? Ve.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Ve.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Ve.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Ve.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ve.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : Ve.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : Ve.decoder,
    delimiter: typeof e.delimiter == "string" || Wr.isRegExp(e.delimiter) ? e.delimiter : Ve.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Ve.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Ve.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Ve.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Ve.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ve.strictNullHandling
  };
}, BA = function(t, e) {
  var n = HA(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof t == "string" ? WA(t, n) : t, i = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = Object.keys(r), o = 0; o < s.length; ++o) {
    var a = s[o], u = UA(a, r[a], n, typeof t == "string");
    i = Wr.merge(i, u, n);
  }
  return n.allowSparse === !0 ? i : Wr.compact(i);
}, KA = kA, qA = BA, GA = hc, zA = {
  formats: GA,
  parse: qA,
  stringify: KA
}, wh = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(typeof self < "u" ? self : typeof window < "u" ? window : $, function() {
    var n = "3.7.6", r = n, i = typeof atob == "function", s = typeof btoa == "function", o = typeof Buffer == "function", a = typeof TextDecoder == "function" ? new TextDecoder() : void 0, u = typeof TextEncoder == "function" ? new TextEncoder() : void 0, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", f = Array.prototype.slice.call(c), p = function(O) {
      var U = {};
      return O.forEach(function(Oe, Ne) {
        return U[Oe] = Ne;
      }), U;
    }(f), v = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, y = String.fromCharCode.bind(String), b = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : function(O) {
      return new Uint8Array(Array.prototype.slice.call(O, 0));
    }, E = function(O) {
      return O.replace(/=/g, "").replace(/[+\/]/g, function(U) {
        return U == "+" ? "-" : "_";
      });
    }, C = function(O) {
      return O.replace(/[^A-Za-z0-9\+\/]/g, "");
    }, T = function(O) {
      for (var U, Oe, Ne, x, je = "", m = O.length % 3, _ = 0; _ < O.length; ) {
        if ((Oe = O.charCodeAt(_++)) > 255 || (Ne = O.charCodeAt(_++)) > 255 || (x = O.charCodeAt(_++)) > 255)
          throw new TypeError("invalid character found");
        U = Oe << 16 | Ne << 8 | x, je += f[U >> 18 & 63] + f[U >> 12 & 63] + f[U >> 6 & 63] + f[U & 63];
      }
      return m ? je.slice(0, m - 3) + "===".substring(m) : je;
    }, K = s ? function(O) {
      return btoa(O);
    } : o ? function(O) {
      return Buffer.from(O, "binary").toString("base64");
    } : T, W = o ? function(O) {
      return Buffer.from(O).toString("base64");
    } : function(O) {
      for (var U = 4096, Oe = [], Ne = 0, x = O.length; Ne < x; Ne += U)
        Oe.push(y.apply(null, O.subarray(Ne, Ne + U)));
      return K(Oe.join(""));
    }, j = function(O, U) {
      return U === void 0 && (U = !1), U ? E(W(O)) : W(O);
    }, G = function(O) {
      if (O.length < 2) {
        var U = O.charCodeAt(0);
        return U < 128 ? O : U < 2048 ? y(192 | U >>> 6) + y(128 | U & 63) : y(224 | U >>> 12 & 15) + y(128 | U >>> 6 & 63) + y(128 | U & 63);
      } else {
        var U = 65536 + (O.charCodeAt(0) - 55296) * 1024 + (O.charCodeAt(1) - 56320);
        return y(240 | U >>> 18 & 7) + y(128 | U >>> 12 & 63) + y(128 | U >>> 6 & 63) + y(128 | U & 63);
      }
    }, B = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, X = function(O) {
      return O.replace(B, G);
    }, z = o ? function(O) {
      return Buffer.from(O, "utf8").toString("base64");
    } : u ? function(O) {
      return W(u.encode(O));
    } : function(O) {
      return K(X(O));
    }, F = function(O, U) {
      return U === void 0 && (U = !1), U ? E(z(O)) : z(O);
    }, Y = function(O) {
      return F(O, !0);
    }, Q = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, le = function(O) {
      switch (O.length) {
        case 4:
          var U = (7 & O.charCodeAt(0)) << 18 | (63 & O.charCodeAt(1)) << 12 | (63 & O.charCodeAt(2)) << 6 | 63 & O.charCodeAt(3), Oe = U - 65536;
          return y((Oe >>> 10) + 55296) + y((Oe & 1023) + 56320);
        case 3:
          return y((15 & O.charCodeAt(0)) << 12 | (63 & O.charCodeAt(1)) << 6 | 63 & O.charCodeAt(2));
        default:
          return y((31 & O.charCodeAt(0)) << 6 | 63 & O.charCodeAt(1));
      }
    }, ce = function(O) {
      return O.replace(Q, le);
    }, Te = function(O) {
      if (O = O.replace(/\s+/g, ""), !v.test(O))
        throw new TypeError("malformed base64.");
      O += "==".slice(2 - (O.length & 3));
      for (var U, Oe = "", Ne, x, je = 0; je < O.length; )
        U = p[O.charAt(je++)] << 18 | p[O.charAt(je++)] << 12 | (Ne = p[O.charAt(je++)]) << 6 | (x = p[O.charAt(je++)]), Oe += Ne === 64 ? y(U >> 16 & 255) : x === 64 ? y(U >> 16 & 255, U >> 8 & 255) : y(U >> 16 & 255, U >> 8 & 255, U & 255);
      return Oe;
    }, Se = i ? function(O) {
      return atob(C(O));
    } : o ? function(O) {
      return Buffer.from(O, "base64").toString("binary");
    } : Te, ee = o ? function(O) {
      return b(Buffer.from(O, "base64"));
    } : function(O) {
      return b(Se(O).split("").map(function(U) {
        return U.charCodeAt(0);
      }));
    }, oe = function(O) {
      return ee(Re(O));
    }, fe = o ? function(O) {
      return Buffer.from(O, "base64").toString("utf8");
    } : a ? function(O) {
      return a.decode(ee(O));
    } : function(O) {
      return ce(Se(O));
    }, Re = function(O) {
      return C(O.replace(/[-_]/g, function(U) {
        return U == "-" ? "+" : "/";
      }));
    }, Xe = function(O) {
      return fe(Re(O));
    }, Ke = function(O) {
      if (typeof O != "string")
        return !1;
      var U = O.replace(/\s+/g, "").replace(/={0,2}$/, "");
      return !/[^\s0-9a-zA-Z\+/]/.test(U) || !/[^\s0-9a-zA-Z\-_]/.test(U);
    }, Ie = function(O) {
      return {
        value: O,
        enumerable: !1,
        writable: !0,
        configurable: !0
      };
    }, St = function() {
      var O = function(U, Oe) {
        return Object.defineProperty(String.prototype, U, Ie(Oe));
      };
      O("fromBase64", function() {
        return Xe(this);
      }), O("toBase64", function(U) {
        return F(this, U);
      }), O("toBase64URI", function() {
        return F(this, !0);
      }), O("toBase64URL", function() {
        return F(this, !0);
      }), O("toUint8Array", function() {
        return oe(this);
      });
    }, mt = function() {
      var O = function(U, Oe) {
        return Object.defineProperty(Uint8Array.prototype, U, Ie(Oe));
      };
      O("toBase64", function(U) {
        return j(this, U);
      }), O("toBase64URI", function() {
        return j(this, !0);
      }), O("toBase64URL", function() {
        return j(this, !0);
      });
    }, Qe = function() {
      St(), mt();
    }, Ce = {
      version: n,
      VERSION: r,
      atob: Se,
      atobPolyfill: Te,
      btoa: K,
      btoaPolyfill: T,
      fromBase64: Xe,
      toBase64: F,
      encode: F,
      encodeURI: Y,
      encodeURL: Y,
      utob: X,
      btou: ce,
      decode: Xe,
      isValid: Ke,
      fromUint8Array: j,
      toUint8Array: oe,
      extendString: St,
      extendUint8Array: mt,
      extendBuiltins: Qe
    };
    return Ce.Base64 = {}, Object.keys(Ce).forEach(function(O) {
      return Ce.Base64[O] = Ce[O];
    }), Ce;
  });
})(wh);
var YA = wh.exports, me = $ && $.__assign || function() {
  return me = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, me.apply(this, arguments);
}, Wa = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, Va = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, Sh = $ && $.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ko, "__esModule", { value: !0 });
Ko.KintoneRequestConfigBuilder = void 0;
var Vf = Sh(kp), ZA = Sh(zA), Uf = YA, Ua = Bi, JA = "http", XA = 4096, QA = (
  /** @class */
  function() {
    function t(e) {
      if (this.baseUrl = e.baseUrl, this.auth = e.auth, this.headers = this.buildHeaders({
        basicAuth: e.basicAuth,
        userAgent: e.userAgent
      }), "httpsAgent" in e) {
        if ("clientCertAuth" in e)
          throw new Error("Cannot specify clientCertAuth along with httpsAgent.");
        this.httpsAgent = e.httpsAgent;
      } else
        "clientCertAuth" in e && (this.clientCertAuth = e.clientCertAuth);
      this.proxy = e.proxy, this.requestToken = null, this.socketTimeout = e.socketTimeout;
    }
    return t.prototype.build = function(e, n, r, i) {
      return Wa(this, void 0, void 0, function() {
        var s, o, p, a, u, c, f, p, v, y, b, E, C;
        return Va(this, function(T) {
          switch (T.label) {
            case 0:
              switch (s = me(me(me({ method: e, headers: this.headers, url: "".concat(this.baseUrl).concat(n) }, i || {}), Ua.platformDeps.buildPlatformDependentConfig({
                httpsAgent: this.httpsAgent,
                clientCertAuth: this.clientCertAuth,
                socketTimeout: this.socketTimeout
              })), { proxy: this.buildProxyConfig(this.proxy) }), o = e, o) {
                case "get":
                  return [3, 1];
                case "post":
                  return [3, 4];
                case "put":
                  return [3, 8];
                case "delete":
                  return [3, 10];
              }
              return [3, 12];
            case 1:
              return p = this.buildRequestUrl(n, r), p.length > XA ? (a = [me({}, s)], b = { method: "post", headers: me(me({}, this.headers), { "X-HTTP-Method-Override": "GET" }) }, [4, this.buildData(r)]) : [3, 3];
            case 2:
              return [2, me.apply(void 0, a.concat([(b.data = T.sent(), b)]))];
            case 3:
              return [2, me(me({}, s), { url: p })];
            case 4:
              return r instanceof Vf.default ? [4, this.buildData(r)] : [3, 6];
            case 5:
              return u = T.sent(), [2, me(me({}, s), { headers: (
                // NOTE: formData.getHeaders does not exist in a browser environment.
                typeof u.getHeaders == "function" ? me(me({}, this.headers), u.getHeaders()) : this.headers
              ), data: u })];
            case 6:
              return c = [me({}, s)], E = {}, [4, this.buildData(r)];
            case 7:
              return [2, me.apply(void 0, c.concat([(E.data = T.sent(), E)]))];
            case 8:
              return f = [me({}, s)], C = {}, [4, this.buildData(r)];
            case 9:
              return [2, me.apply(void 0, f.concat([(C.data = T.sent(), C)]))];
            case 10:
              return v = this.buildRequestUrl, y = [n], [4, this.buildData(r)];
            case 11:
              return p = v.apply(this, y.concat([T.sent()])), [2, me(me({}, s), { url: p })];
            case 12:
              throw new Error("".concat(e, " method is not supported"));
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.buildProxyConfig = function(e) {
      var n;
      if (e !== void 0) {
        if (e === !1)
          return !1;
        var r = e;
        return r.auth && (r.auth.username.length === 0 || r.auth.password.length === 0) && (r.auth = void 0), r.protocol = (n = r.protocol) !== null && n !== void 0 ? n : JA, r;
      }
    }, t.prototype.buildRequestUrl = function(e, n) {
      return "".concat(this.baseUrl).concat(e, "?").concat(ZA.default.stringify(n));
    }, t.prototype.buildData = function(e) {
      return Wa(this, void 0, void 0, function() {
        var n;
        return Va(this, function(r) {
          switch (r.label) {
            case 0:
              return this.auth.type !== "session" ? [3, 2] : [4, this.getRequestToken()];
            case 1:
              return n = r.sent(), e instanceof Vf.default ? (e.append("__REQUEST_TOKEN__", n), [2, e]) : [2, me({ __REQUEST_TOKEN__: n }, e)];
            case 2:
              return [2, e];
          }
        });
      });
    }, t.prototype.buildHeaders = function(e) {
      var n = e.basicAuth, r = e.userAgent, i = n ? {
        Authorization: "Basic ".concat(Uf.Base64.encode("".concat(n.username, ":").concat(n.password)))
      } : {}, s = Ua.platformDeps.buildHeaders({ userAgent: r }), o = me(me({}, s), i);
      switch (this.auth.type) {
        case "password":
          return me(me({}, o), { "X-Cybozu-Authorization": Uf.Base64.encode("".concat(this.auth.username, ":").concat(this.auth.password)) });
        case "apiToken": {
          var a = this.auth.apiToken;
          return Array.isArray(a) ? me(me({}, o), { "X-Cybozu-API-Token": a.join(",") }) : me(me({}, o), { "X-Cybozu-API-Token": a });
        }
        case "oAuthToken":
          return me(me({}, o), { Authorization: "Bearer ".concat(this.auth.oAuthToken) });
        default:
          return me(me({}, o), { "X-Requested-With": "XMLHttpRequest" });
      }
    }, t.prototype.getRequestToken = function() {
      return Wa(this, void 0, void 0, function() {
        var e;
        return Va(this, function(n) {
          switch (n.label) {
            case 0:
              return this.requestToken !== null ? [3, 2] : (e = this, [4, Ua.platformDeps.getRequestToken()]);
            case 1:
              e.requestToken = n.sent(), n.label = 2;
            case 2:
              return [2, this.requestToken];
          }
        });
      });
    }, t;
  }()
);
Ko.KintoneRequestConfigBuilder = QA;
var qo = {}, Yi = {}, eT = $ && $.__extends || /* @__PURE__ */ function() {
  var t = function(e, n) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }, t(e, n);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
Object.defineProperty(Yi, "__esModule", { value: !0 });
Yi.KintoneAbortSearchError = void 0;
var tT = (
  /** @class */
  function(t) {
    eT(e, t);
    function e(n) {
      var r = t.call(this, n) || this;
      return r.name = "KintoneAbortSearchError", r.message = n, Object.setPrototypeOf(r, e.prototype), r;
    }
    return e;
  }(Error)
);
Yi.KintoneAbortSearchError = tT;
var Zi = {}, nT = $ && $.__extends || /* @__PURE__ */ function() {
  var t = function(e, n) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }, t(e, n);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.KintoneRestAPIError = void 0;
var rT = (
  /** @class */
  function(t) {
    nT(e, t);
    function e(n) {
      var r = this, i = e.buildErrorResponseDateWithIndex(n), s = i.data, o = i.bulkRequestIndex;
      return r = t.call(this, s.message) || this, r.name = "KintoneRestAPIError", r.id = s.id, r.code = s.code, r.errors = s.errors, r.status = n.status, r.bulkRequestIndex = o, r.headers = n.headers, r.message = "[".concat(n.status, "] [").concat(r.code, "] ").concat(r.message, " (").concat(r.id, ")"), Error.captureStackTrace && Error.captureStackTrace(r, e), Object.setPrototypeOf(r, e.prototype), r;
    }
    return e.findErrorResponseDataWithIndex = function(n) {
      for (var r = 0; r < n.length; r++)
        if (Object.keys(n[r]).length !== 0) {
          var i = n[r];
          return { data: i, bulkRequestIndex: r };
        }
      throw Error("Missing response data in `results`. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
    }, e.buildErrorResponseDateWithIndex = function(n) {
      return "results" in n.data ? e.findErrorResponseDataWithIndex(n.data.results) : { data: n.data };
    }, e;
  }(Error)
);
Zi.KintoneRestAPIError = rT;
var Sl = $ && $.__assign || function() {
  return Sl = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Sl.apply(this, arguments);
}, iT = $ && $.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
};
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.KintoneResponseHandler = void 0;
var sT = Yi, oT = Zi, aT = (
  /** @class */
  function() {
    function t(e) {
      var n = e.enableAbortSearchError;
      this.enableAbortSearchError = n;
    }
    return t.prototype.handle = function(e) {
      var n = this;
      return e.then(function(r) {
        return n.handleSuccessResponse(r);
      }, function(r) {
        return n.handleErrorResponse(r);
      });
    }, t.prototype.handleSuccessResponse = function(e) {
      if (this.enableAbortSearchError && /Filter aborted because of too many search results/.test(e.headers["x-cybozu-warning"]))
        throw new sT.KintoneAbortSearchError(e.headers["x-cybozu-warning"]);
      return e.data;
    }, t.prototype.handleErrorResponse = function(e) {
      if (!e.response)
        throw /mac verify failure/.test(e.toString()) ? new Error("invalid clientCertAuth setting") : e;
      var n = e.response, r = n.data, i = iT(n, ["data"]);
      throw typeof r == "string" ? new Error("".concat(i.status, ": ").concat(i.statusText)) : new oT.KintoneRestAPIError(Sl({ data: r }, i));
    }, t;
  }()
);
qo.KintoneResponseHandler = aT;
var Qn = $ && $.__assign || function() {
  return Qn = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Qn.apply(this, arguments);
};
Object.defineProperty(Mo, "__esModule", { value: !0 });
Mo.KintoneRestAPIClient = void 0;
var lT = ko, cT = $o, uT = Lo, fT = Fo, dT = $p, pT = Ko, hT = qo, Ol = Bi, mT = zr, gT = function(t) {
  if ("username" in t)
    return Qn({ type: "password" }, t);
  if ("apiToken" in t)
    return Qn({ type: "apiToken" }, t);
  if ("oAuthToken" in t)
    return Qn({ type: "oAuthToken" }, t);
  try {
    return Ol.platformDeps.getDefaultAuth();
  } catch (e) {
    throw e instanceof mT.UnsupportedPlatformError ? new Error("session authentication is not supported in ".concat(e.platform, " environment.")) : e;
  }
}, yT = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {});
      var n, r, i;
      _T(e), this.baseUrl = Ol.platformDeps.buildBaseUrl(e.baseUrl).replace(/\/+$/, "");
      var s = gT((n = e.auth) !== null && n !== void 0 ? n : {}), o = new pT.KintoneRequestConfigBuilder(Qn(Qn({}, e), { baseUrl: this.baseUrl, auth: s })), a = new hT.KintoneResponseHandler({
        enableAbortSearchError: (i = (r = e.featureFlags) === null || r === void 0 ? void 0 : r.enableAbortSearchError) !== null && i !== void 0 ? i : !1
      }), u = new dT.DefaultHttpClient({
        responseHandler: a,
        requestConfigBuilder: o
      }), c = e.guestSpaceId;
      this.bulkRequest_ = new lT.BulkRequestClient(u, c), this.record = new uT.RecordClient(u, this.bulkRequest_, c), this.app = new cT.AppClient(u, c), this.file = new fT.FileClient(u, c);
    }
    return Object.defineProperty(t, "version", {
      get: function() {
        return Ol.platformDeps.getVersion();
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.getBaseUrl = function() {
      return this.baseUrl;
    }, t.prototype.bulkRequest = function(e) {
      return this.bulkRequest_.send(e);
    }, t;
  }()
);
Mo.KintoneRestAPIClient = yT;
var _T = function(t) {
  vT(t.baseUrl), bT(t.guestSpaceId), ET(t.socketTimeout);
}, vT = function(t) {
  if (t !== void 0) {
    var e = new URL(t);
    if (e.hostname !== "localhost" && e.protocol !== "https:")
      throw new Error('The protocol of baseUrl must be "https".');
  }
}, bT = function(t) {
  if (t === "" || t === null)
    throw new Error("invalid guestSpaceId: got [".concat(t, "]"));
}, ET = function(t) {
  if (t !== void 0) {
    var e = parseFloat(t.toString());
    if (isNaN(e) || e < 0)
      throw new Error("Invalid socketTimeout. Must be a positive number.");
  }
}, Oh = {};
(function(t) {
  var e = $ && $.__createBinding || (Object.create ? function(r, i, s, o) {
    o === void 0 && (o = s);
    var a = Object.getOwnPropertyDescriptor(i, s);
    (!a || ("get" in a ? !i.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
      return i[s];
    } }), Object.defineProperty(r, o, a);
  } : function(r, i, s, o) {
    o === void 0 && (o = s), r[o] = i[s];
  }), n = $ && $.__exportStar || function(r, i) {
    for (var s in r)
      s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && e(i, r, s);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), n(Yi, t), n(Ki, t), n(Zi, t);
})(Oh);
(function(t) {
  var e = $ && $.__createBinding || (Object.create ? function(u, c, f, p) {
    p === void 0 && (p = f);
    var v = Object.getOwnPropertyDescriptor(c, f);
    (!v || ("get" in v ? !c.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
      return c[f];
    } }), Object.defineProperty(u, p, v);
  } : function(u, c, f, p) {
    p === void 0 && (p = f), u[p] = c[f];
  }), n = $ && $.__setModuleDefault || (Object.create ? function(u, c) {
    Object.defineProperty(u, "default", { enumerable: !0, value: c });
  } : function(u, c) {
    u.default = c;
  }), r = $ && $.__importStar || function(u) {
    if (u && u.__esModule)
      return u;
    var c = {};
    if (u != null)
      for (var f in u)
        f !== "default" && Object.prototype.hasOwnProperty.call(u, f) && e(c, u, f);
    return n(c, u), c;
  }, i = $ && $.__exportStar || function(u, c) {
    for (var f in u)
      f !== "default" && !Object.prototype.hasOwnProperty.call(c, f) && e(c, u, f);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.KintoneRestAPIClient = void 0;
  var s = Bi, o = r(He);
  (0, s.injectPlatformDeps)(o);
  var a = Mo;
  Object.defineProperty(t, "KintoneRestAPIClient", { enumerable: !0, get: function() {
    return a.KintoneRestAPIClient;
  } }), i(Oh, t);
})(ec);
class or extends Error {
}
class wT extends or {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class ST extends or {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class OT extends or {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class Ar extends or {
}
class Ah extends or {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class dt extends or {
}
class mn extends or {
  constructor() {
    super("Zone is an abstract class");
  }
}
const H = "numeric", jt = "short", vt = "long", po = {
  year: H,
  month: H,
  day: H
}, Th = {
  year: H,
  month: jt,
  day: H
}, AT = {
  year: H,
  month: jt,
  day: H,
  weekday: jt
}, xh = {
  year: H,
  month: vt,
  day: H
}, Ch = {
  year: H,
  month: vt,
  day: H,
  weekday: vt
}, Nh = {
  hour: H,
  minute: H
}, Ph = {
  hour: H,
  minute: H,
  second: H
}, Ih = {
  hour: H,
  minute: H,
  second: H,
  timeZoneName: jt
}, Dh = {
  hour: H,
  minute: H,
  second: H,
  timeZoneName: vt
}, Rh = {
  hour: H,
  minute: H,
  hourCycle: "h23"
}, Mh = {
  hour: H,
  minute: H,
  second: H,
  hourCycle: "h23"
}, kh = {
  hour: H,
  minute: H,
  second: H,
  hourCycle: "h23",
  timeZoneName: jt
}, $h = {
  hour: H,
  minute: H,
  second: H,
  hourCycle: "h23",
  timeZoneName: vt
}, Lh = {
  year: H,
  month: H,
  day: H,
  hour: H,
  minute: H
}, Fh = {
  year: H,
  month: H,
  day: H,
  hour: H,
  minute: H,
  second: H
}, jh = {
  year: H,
  month: jt,
  day: H,
  hour: H,
  minute: H
}, Wh = {
  year: H,
  month: jt,
  day: H,
  hour: H,
  minute: H,
  second: H
}, TT = {
  year: H,
  month: jt,
  day: H,
  weekday: jt,
  hour: H,
  minute: H
}, Vh = {
  year: H,
  month: vt,
  day: H,
  hour: H,
  minute: H,
  timeZoneName: jt
}, Uh = {
  year: H,
  month: vt,
  day: H,
  hour: H,
  minute: H,
  second: H,
  timeZoneName: jt
}, Hh = {
  year: H,
  month: vt,
  day: H,
  weekday: vt,
  hour: H,
  minute: H,
  timeZoneName: vt
}, Bh = {
  year: H,
  month: vt,
  day: H,
  weekday: vt,
  hour: H,
  minute: H,
  second: H,
  timeZoneName: vt
};
class Ji {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new mn();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new mn();
  }
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new mn();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, n) {
    throw new mn();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, n) {
    throw new mn();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new mn();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new mn();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new mn();
  }
}
let Ha = null;
class Go extends Ji {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return Ha === null && (Ha = new Go()), Ha;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: n, locale: r }) {
    return Qh(e, n, r);
  }
  /** @override **/
  formatOffset(e, n) {
    return Ci(this.offset(e), n);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
let zs = {};
function xT(t) {
  return zs[t] || (zs[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), zs[t];
}
const CT = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function NT(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, s, o, a, u, c, f] = r;
  return [o, i, s, a, u, c, f];
}
function PT(t, e) {
  const n = t.formatToParts(e), r = [];
  for (let i = 0; i < n.length; i++) {
    const { type: s, value: o } = n[i], a = CT[s];
    s === "era" ? r[a] = o : ie(a) || (r[a] = parseInt(o, 10));
  }
  return r;
}
let Cs = {};
class an extends Ji {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    return Cs[e] || (Cs[e] = new an(e)), Cs[e];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Cs = {}, zs = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = an.isValidZone(e);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: n, locale: r }) {
    return Qh(e, n, r, this.name);
  }
  /** @override **/
  formatOffset(e, n) {
    return Ci(this.offset(e), n);
  }
  /** @override **/
  offset(e) {
    const n = new Date(e);
    if (isNaN(n))
      return NaN;
    const r = xT(this.name);
    let [i, s, o, a, u, c, f] = r.formatToParts ? PT(r, n) : NT(r, n);
    a === "BC" && (i = -Math.abs(i) + 1);
    const v = Yo({
      year: i,
      month: s,
      day: o,
      hour: u === 24 ? 0 : u,
      minute: c,
      second: f,
      millisecond: 0
    });
    let y = +n;
    const b = y % 1e3;
    return y -= b >= 0 ? b : 1e3 + b, (v - y) / (60 * 1e3);
  }
  /** @override **/
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this.valid;
  }
}
let Hf = {};
function IT(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Hf[n];
  return r || (r = new Intl.ListFormat(t, e), Hf[n] = r), r;
}
let Al = {};
function Tl(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Al[n];
  return r || (r = new Intl.DateTimeFormat(t, e), Al[n] = r), r;
}
let xl = {};
function DT(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = xl[n];
  return r || (r = new Intl.NumberFormat(t, e), xl[n] = r), r;
}
let Cl = {};
function RT(t, e = {}) {
  const { base: n, ...r } = e, i = JSON.stringify([t, r]);
  let s = Cl[i];
  return s || (s = new Intl.RelativeTimeFormat(t, e), Cl[i] = s), s;
}
let gi = null;
function MT() {
  return gi || (gi = new Intl.DateTimeFormat().resolvedOptions().locale, gi);
}
let Bf = {};
function kT(t) {
  let e = Bf[t];
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, Bf[t] = e;
  }
  return e;
}
function $T(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let r, i;
    try {
      r = Tl(t).resolvedOptions(), i = t;
    } catch {
      const u = t.substring(0, n);
      r = Tl(u).resolvedOptions(), i = u;
    }
    const { numberingSystem: s, calendar: o } = r;
    return [i, s, o];
  }
}
function LT(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function FT(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const r = re.utc(2009, n, 1);
    e.push(t(r));
  }
  return e;
}
function jT(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const r = re.utc(2016, 11, 13 + n);
    e.push(t(r));
  }
  return e;
}
function Ns(t, e, n, r) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : r(e);
}
function WT(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class VT {
  constructor(e, n, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: i, floor: s, ...o } = r;
    if (!n || Object.keys(o).length > 0) {
      const a = { useGrouping: !1, ...r };
      r.padTo > 0 && (a.minimumIntegerDigits = r.padTo), this.inf = DT(e, a);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : _c(e, 3);
      return $e(n, this.padTo);
    }
  }
}
class UT {
  constructor(e, n, r) {
    this.opts = r, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const o = -1 * (e.offset / 60), a = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
      e.offset !== 0 && an.create(a).valid ? (i = a, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const s = { ...this.opts };
    s.timeZone = s.timeZone || i, this.dtf = Tl(n, s);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((n) => {
      if (n.type === "timeZoneName") {
        const r = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...n,
          value: r
        };
      } else
        return n;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class HT {
  constructor(e, n, r) {
    this.opts = { style: "long", ...r }, !n && Jh() && (this.rtf = RT(e, r));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : cx(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const BT = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class we {
  static fromOpts(e) {
    return we.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, n, r, i, s = !1) {
    const o = e || Me.defaultLocale, a = o || (s ? "en-US" : MT()), u = n || Me.defaultNumberingSystem, c = r || Me.defaultOutputCalendar, f = Nl(i) || Me.defaultWeekSettings;
    return new we(a, u, c, f, o);
  }
  static resetCache() {
    gi = null, Al = {}, xl = {}, Cl = {};
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: r, weekSettings: i } = {}) {
    return we.create(e, n, r, i);
  }
  constructor(e, n, r, i, s) {
    const [o, a, u] = $T(e);
    this.locale = o, this.numberingSystem = n || a || null, this.outputCalendar = r || u || null, this.weekSettings = i, this.intl = LT(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = WT(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : we.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      Nl(e.weekSettings) || this.weekSettings,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, n = !1) {
    return Ns(this, e, nm, () => {
      const r = n ? { month: e, day: "numeric" } : { month: e }, i = n ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = FT((s) => this.extract(s, r, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, n = !1) {
    return Ns(this, e, sm, () => {
      const r = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = jT(
        (s) => this.extract(s, r, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Ns(
      this,
      void 0,
      () => om,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [re.utc(2016, 11, 13, 9), re.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Ns(this, e, am, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [re.utc(-40, 1, 1), re.utc(2017, 1, 1)].map(
        (r) => this.extract(r, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, r) {
    const i = this.dtFormatter(e, n), s = i.formatToParts(), o = s.find((a) => a.type.toLowerCase() === r);
    return o ? o.value : null;
  }
  numberFormatter(e = {}) {
    return new VT(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new UT(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new HT(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return IT(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : Xh() ? kT(this.locale) : BT;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
}
let Ba = null;
class it extends Ji {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Ba === null && (Ba = new it(0)), Ba;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? it.utcInstance : new it(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new it(Zo(n[1], n[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /** @override **/
  get type() {
    return "fixed";
  }
  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${Ci(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Ci(-this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(e, n) {
    return Ci(this.fixed, n);
  }
  /** @override **/
  get isUniversal() {
    return !0;
  }
  /** @override **/
  offset() {
    return this.fixed;
  }
  /** @override **/
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
class KT extends Ji {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function Sn(t, e) {
  if (ie(t) || t === null)
    return e;
  if (t instanceof Ji)
    return t;
  if (zT(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? Go.instance : n === "utc" || n === "gmt" ? it.utcInstance : it.parseSpecifier(n) || an.create(t);
  } else
    return er(t) ? it.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new KT(t);
}
let Kf = () => Date.now(), qf = "system", Gf = null, zf = null, Yf = null, Zf = 60, Jf, Xf = null;
class Me {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Kf;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Kf = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    qf = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return Sn(qf, Go.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Gf;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Gf = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return zf;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    zf = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Yf;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    Yf = e;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return Xf;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    Xf = Nl(e);
  }
  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return Zf;
  }
  /**
   * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpreted as current century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(e) {
    Zf = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Jf;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Jf = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    we.resetCache(), an.resetCache();
  }
}
class Lt {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Kh = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], qh = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Ct(t, e) {
  return new Lt(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function mc(t, e, n) {
  const r = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const i = r.getUTCDay();
  return i === 0 ? 7 : i;
}
function Gh(t, e, n) {
  return n + (Xi(t) ? qh : Kh)[e - 1];
}
function zh(t, e) {
  const n = Xi(t) ? qh : Kh, r = n.findIndex((s) => s < e), i = e - n[r];
  return { month: r + 1, day: i };
}
function gc(t, e) {
  return (t - e + 7) % 7 + 1;
}
function ho(t, e = 4, n = 1) {
  const { year: r, month: i, day: s } = t, o = Gh(r, i, s), a = gc(mc(r, i, s), n);
  let u = Math.floor((o - a + 14 - e) / 7), c;
  return u < 1 ? (c = r - 1, u = Vi(c, e, n)) : u > Vi(r, e, n) ? (c = r + 1, u = 1) : c = r, { weekYear: c, weekNumber: u, weekday: a, ...Jo(t) };
}
function Qf(t, e = 4, n = 1) {
  const { weekYear: r, weekNumber: i, weekday: s } = t, o = gc(mc(r, 1, e), n), a = Dr(r);
  let u = i * 7 + s - o - 7 + e, c;
  u < 1 ? (c = r - 1, u += Dr(c)) : u > a ? (c = r + 1, u -= Dr(r)) : c = r;
  const { month: f, day: p } = zh(c, u);
  return { year: c, month: f, day: p, ...Jo(t) };
}
function Ka(t) {
  const { year: e, month: n, day: r } = t, i = Gh(e, n, r);
  return { year: e, ordinal: i, ...Jo(t) };
}
function ed(t) {
  const { year: e, ordinal: n } = t, { month: r, day: i } = zh(e, n);
  return { year: e, month: r, day: i, ...Jo(t) };
}
function td(t, e) {
  if (!ie(t.localWeekday) || !ie(t.localWeekNumber) || !ie(t.localWeekYear)) {
    if (!ie(t.weekday) || !ie(t.weekNumber) || !ie(t.weekYear))
      throw new Ar(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return ie(t.localWeekday) || (t.weekday = t.localWeekday), ie(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), ie(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function qT(t, e = 4, n = 1) {
  const r = zo(t.weekYear), i = Nt(
    t.weekNumber,
    1,
    Vi(t.weekYear, e, n)
  ), s = Nt(t.weekday, 1, 7);
  return r ? i ? s ? !1 : Ct("weekday", t.weekday) : Ct("week", t.weekNumber) : Ct("weekYear", t.weekYear);
}
function GT(t) {
  const e = zo(t.year), n = Nt(t.ordinal, 1, Dr(t.year));
  return e ? n ? !1 : Ct("ordinal", t.ordinal) : Ct("year", t.year);
}
function Yh(t) {
  const e = zo(t.year), n = Nt(t.month, 1, 12), r = Nt(t.day, 1, mo(t.year, t.month));
  return e ? n ? r ? !1 : Ct("day", t.day) : Ct("month", t.month) : Ct("year", t.year);
}
function Zh(t) {
  const { hour: e, minute: n, second: r, millisecond: i } = t, s = Nt(e, 0, 23) || e === 24 && n === 0 && r === 0 && i === 0, o = Nt(n, 0, 59), a = Nt(r, 0, 59), u = Nt(i, 0, 999);
  return s ? o ? a ? u ? !1 : Ct("millisecond", i) : Ct("second", r) : Ct("minute", n) : Ct("hour", e);
}
function ie(t) {
  return typeof t > "u";
}
function er(t) {
  return typeof t == "number";
}
function zo(t) {
  return typeof t == "number" && t % 1 === 0;
}
function zT(t) {
  return typeof t == "string";
}
function YT(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Jh() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function Xh() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function ZT(t) {
  return Array.isArray(t) ? t : [t];
}
function nd(t, e, n) {
  if (t.length !== 0)
    return t.reduce((r, i) => {
      const s = [e(i), i];
      return r && n(r[0], s[0]) === r[0] ? r : s;
    }, null)[1];
}
function JT(t, e) {
  return e.reduce((n, r) => (n[r] = t[r], n), {});
}
function Vr(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Nl(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new dt("Week settings must be an object");
  if (!Nt(t.firstDay, 1, 7) || !Nt(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !Nt(e, 1, 7)))
    throw new dt("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function Nt(t, e, n) {
  return zo(t) && t >= e && t <= n;
}
function XT(t, e) {
  return t - e * Math.floor(t / e);
}
function $e(t, e = 2) {
  const n = t < 0;
  let r;
  return n ? r = "-" + ("" + -t).padStart(e, "0") : r = ("" + t).padStart(e, "0"), r;
}
function wn(t) {
  if (!(ie(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function Un(t) {
  if (!(ie(t) || t === null || t === ""))
    return parseFloat(t);
}
function yc(t) {
  if (!(ie(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function _c(t, e, n = !1) {
  const r = 10 ** e;
  return (n ? Math.trunc : Math.round)(t * r) / r;
}
function Xi(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Dr(t) {
  return Xi(t) ? 366 : 365;
}
function mo(t, e) {
  const n = XT(e - 1, 12) + 1, r = t + (e - n) / 12;
  return n === 2 ? Xi(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Yo(t) {
  let e = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
  return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(t.year, t.month - 1, t.day)), +e;
}
function rd(t, e, n) {
  return -gc(mc(t, 1, e), n) + e - 1;
}
function Vi(t, e = 4, n = 1) {
  const r = rd(t, e, n), i = rd(t + 1, e, n);
  return (Dr(t) - r + i) / 7;
}
function Pl(t) {
  return t > 99 ? t : t > Me.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function Qh(t, e, n, r = null) {
  const i = new Date(t), s = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  r && (s.timeZone = r);
  const o = { timeZoneName: e, ...s }, a = new Intl.DateTimeFormat(n, o).formatToParts(i).find((u) => u.type.toLowerCase() === "timezonename");
  return a ? a.value : null;
}
function Zo(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const r = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + i;
}
function em(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new dt(`Invalid unit value ${t}`);
  return e;
}
function go(t, e) {
  const n = {};
  for (const r in t)
    if (Vr(t, r)) {
      const i = t[r];
      if (i == null)
        continue;
      n[e(r)] = em(i);
    }
  return n;
}
function Ci(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), r = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${$e(n, 2)}:${$e(r, 2)}`;
    case "narrow":
      return `${i}${n}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${i}${$e(n, 2)}${$e(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Jo(t) {
  return JT(t, ["hour", "minute", "second", "millisecond"]);
}
const QT = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], tm = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], ex = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function nm(t) {
  switch (t) {
    case "narrow":
      return [...ex];
    case "short":
      return [...tm];
    case "long":
      return [...QT];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const rm = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], im = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], tx = ["M", "T", "W", "T", "F", "S", "S"];
function sm(t) {
  switch (t) {
    case "narrow":
      return [...tx];
    case "short":
      return [...im];
    case "long":
      return [...rm];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const om = ["AM", "PM"], nx = ["Before Christ", "Anno Domini"], rx = ["BC", "AD"], ix = ["B", "A"];
function am(t) {
  switch (t) {
    case "narrow":
      return [...ix];
    case "short":
      return [...rx];
    case "long":
      return [...nx];
    default:
      return null;
  }
}
function sx(t) {
  return om[t.hour < 12 ? 0 : 1];
}
function ox(t, e) {
  return sm(e)[t.weekday - 1];
}
function ax(t, e) {
  return nm(e)[t.month - 1];
}
function lx(t, e) {
  return am(e)[t.year < 0 ? 0 : 1];
}
function cx(t, e, n = "always", r = !1) {
  const i = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, s = ["hours", "minutes", "seconds"].indexOf(t) === -1;
  if (n === "auto" && s) {
    const p = t === "days";
    switch (e) {
      case 1:
        return p ? "tomorrow" : `next ${i[t][0]}`;
      case -1:
        return p ? "yesterday" : `last ${i[t][0]}`;
      case 0:
        return p ? "today" : `this ${i[t][0]}`;
    }
  }
  const o = Object.is(e, -0) || e < 0, a = Math.abs(e), u = a === 1, c = i[t], f = r ? u ? c[1] : c[2] || c[1] : u ? i[t][0] : t;
  return o ? `${a} ${f} ago` : `in ${a} ${f}`;
}
function id(t, e) {
  let n = "";
  for (const r of t)
    r.literal ? n += r.val : n += e(r.val);
  return n;
}
const ux = {
  D: po,
  DD: Th,
  DDD: xh,
  DDDD: Ch,
  t: Nh,
  tt: Ph,
  ttt: Ih,
  tttt: Dh,
  T: Rh,
  TT: Mh,
  TTT: kh,
  TTTT: $h,
  f: Lh,
  ff: jh,
  fff: Vh,
  ffff: Hh,
  F: Fh,
  FF: Wh,
  FFF: Uh,
  FFFF: Bh
};
class Ye {
  static create(e, n = {}) {
    return new Ye(e, n);
  }
  static parseFormat(e) {
    let n = null, r = "", i = !1;
    const s = [];
    for (let o = 0; o < e.length; o++) {
      const a = e.charAt(o);
      a === "'" ? (r.length > 0 && s.push({ literal: i || /^\s+$/.test(r), val: r }), n = null, r = "", i = !i) : i || a === n ? r += a : (r.length > 0 && s.push({ literal: /^\s+$/.test(r), val: r }), r = a, n = a);
    }
    return r.length > 0 && s.push({ literal: i || /^\s+$/.test(r), val: r }), s;
  }
  static macroTokenToFormatOpts(e) {
    return ux[e];
  }
  constructor(e, n) {
    this.opts = n, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, n) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...n }).format();
  }
  dtFormatter(e, n = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...n });
  }
  formatDateTime(e, n) {
    return this.dtFormatter(e, n).format();
  }
  formatDateTimeParts(e, n) {
    return this.dtFormatter(e, n).formatToParts();
  }
  formatInterval(e, n) {
    return this.dtFormatter(e.start, n).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, n) {
    return this.dtFormatter(e, n).resolvedOptions();
  }
  num(e, n = 0) {
    if (this.opts.forceSimple)
      return $e(e, n);
    const r = { ...this.opts };
    return n > 0 && (r.padTo = n), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(e, n) {
    const r = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", s = (y, b) => this.loc.extract(e, y, b), o = (y) => e.isOffsetFixed && e.offset === 0 && y.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, y.format) : "", a = () => r ? sx(e) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), u = (y, b) => r ? ax(e, y) : s(b ? { month: y } : { month: y, day: "numeric" }, "month"), c = (y, b) => r ? ox(e, y) : s(
      b ? { weekday: y } : { weekday: y, month: "long", day: "numeric" },
      "weekday"
    ), f = (y) => {
      const b = Ye.macroTokenToFormatOpts(y);
      return b ? this.formatWithSystemDefault(e, b) : y;
    }, p = (y) => r ? lx(e, y) : s({ era: y }, "era"), v = (y) => {
      switch (y) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return o({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return o({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return o({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return e.zoneName;
        case "a":
          return a();
        case "d":
          return i ? s({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return i ? s({ day: "2-digit" }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return c("short", !0);
        case "cccc":
          return c("long", !0);
        case "ccccc":
          return c("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return c("short", !1);
        case "EEEE":
          return c("long", !1);
        case "EEEEE":
          return c("narrow", !1);
        case "L":
          return i ? s({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return i ? s({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return u("short", !0);
        case "LLLL":
          return u("long", !0);
        case "LLLLL":
          return u("narrow", !0);
        case "M":
          return i ? s({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return i ? s({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return u("short", !1);
        case "MMMM":
          return u("long", !1);
        case "MMMMM":
          return u("narrow", !1);
        case "y":
          return i ? s({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return i ? s({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return i ? s({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return i ? s({ year: "numeric" }, "year") : this.num(e.year, 6);
        case "G":
          return p("short");
        case "GG":
          return p("long");
        case "GGGGG":
          return p("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "n":
          return this.num(e.localWeekNumber);
        case "nn":
          return this.num(e.localWeekNumber, 2);
        case "ii":
          return this.num(e.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(e.localWeekYear, 4);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return f(y);
      }
    };
    return id(Ye.parseFormat(n), v);
  }
  formatDurationFromString(e, n) {
    const r = (u) => {
      switch (u[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, i = (u) => (c) => {
      const f = r(c);
      return f ? this.num(u.get(f), c.length) : c;
    }, s = Ye.parseFormat(n), o = s.reduce(
      (u, { literal: c, val: f }) => c ? u : u.concat(f),
      []
    ), a = e.shiftTo(...o.map(r).filter((u) => u));
    return id(s, i(a));
  }
}
const lm = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Jr(...t) {
  const e = t.reduce((n, r) => n + r.source, "");
  return RegExp(`^${e}$`);
}
function Xr(...t) {
  return (e) => t.reduce(
    ([n, r, i], s) => {
      const [o, a, u] = s(e, i);
      return [{ ...n, ...o }, a || r, u];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Qr(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, r] of e) {
    const i = n.exec(t);
    if (i)
      return r(i);
  }
  return [null, null];
}
function cm(...t) {
  return (e, n) => {
    const r = {};
    let i;
    for (i = 0; i < t.length; i++)
      r[t[i]] = wn(e[n + i]);
    return [r, null, n + i];
  };
}
const um = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, fx = `(?:${um.source}?(?:\\[(${lm.source})\\])?)?`, vc = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, fm = RegExp(`${vc.source}${fx}`), bc = RegExp(`(?:T${fm.source})?`), dx = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, px = /(\d{4})-?W(\d\d)(?:-?(\d))?/, hx = /(\d{4})-?(\d{3})/, mx = cm("weekYear", "weekNumber", "weekDay"), gx = cm("year", "ordinal"), yx = /(\d{4})-(\d\d)-(\d\d)/, dm = RegExp(
  `${vc.source} ?(?:${um.source}|(${lm.source}))?`
), _x = RegExp(`(?: ${dm.source})?`);
function Rr(t, e, n) {
  const r = t[e];
  return ie(r) ? n : wn(r);
}
function vx(t, e) {
  return [{
    year: Rr(t, e),
    month: Rr(t, e + 1, 1),
    day: Rr(t, e + 2, 1)
  }, null, e + 3];
}
function ei(t, e) {
  return [{
    hours: Rr(t, e, 0),
    minutes: Rr(t, e + 1, 0),
    seconds: Rr(t, e + 2, 0),
    milliseconds: yc(t[e + 3])
  }, null, e + 4];
}
function Qi(t, e) {
  const n = !t[e] && !t[e + 1], r = Zo(t[e + 1], t[e + 2]), i = n ? null : it.instance(r);
  return [{}, i, e + 3];
}
function es(t, e) {
  const n = t[e] ? an.create(t[e]) : null;
  return [{}, n, e + 1];
}
const bx = RegExp(`^T?${vc.source}$`), Ex = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function wx(t) {
  const [e, n, r, i, s, o, a, u, c] = t, f = e[0] === "-", p = u && u[0] === "-", v = (y, b = !1) => y !== void 0 && (b || y && f) ? -y : y;
  return [
    {
      years: v(Un(n)),
      months: v(Un(r)),
      weeks: v(Un(i)),
      days: v(Un(s)),
      hours: v(Un(o)),
      minutes: v(Un(a)),
      seconds: v(Un(u), u === "-0"),
      milliseconds: v(yc(c), p)
    }
  ];
}
const Sx = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Ec(t, e, n, r, i, s, o) {
  const a = {
    year: e.length === 2 ? Pl(wn(e)) : wn(e),
    month: tm.indexOf(n) + 1,
    day: wn(r),
    hour: wn(i),
    minute: wn(s)
  };
  return o && (a.second = wn(o)), t && (a.weekday = t.length > 3 ? rm.indexOf(t) + 1 : im.indexOf(t) + 1), a;
}
const Ox = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Ax(t) {
  const [
    ,
    e,
    n,
    r,
    i,
    s,
    o,
    a,
    u,
    c,
    f,
    p
  ] = t, v = Ec(e, i, r, n, s, o, a);
  let y;
  return u ? y = Sx[u] : c ? y = 0 : y = Zo(f, p), [v, new it(y)];
}
function Tx(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const xx = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Cx = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Nx = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function sd(t) {
  const [, e, n, r, i, s, o, a] = t;
  return [Ec(e, i, r, n, s, o, a), it.utcInstance];
}
function Px(t) {
  const [, e, n, r, i, s, o, a] = t;
  return [Ec(e, a, n, r, i, s, o), it.utcInstance];
}
const Ix = Jr(dx, bc), Dx = Jr(px, bc), Rx = Jr(hx, bc), Mx = Jr(fm), pm = Xr(
  vx,
  ei,
  Qi,
  es
), kx = Xr(
  mx,
  ei,
  Qi,
  es
), $x = Xr(
  gx,
  ei,
  Qi,
  es
), Lx = Xr(
  ei,
  Qi,
  es
);
function Fx(t) {
  return Qr(
    t,
    [Ix, pm],
    [Dx, kx],
    [Rx, $x],
    [Mx, Lx]
  );
}
function jx(t) {
  return Qr(Tx(t), [Ox, Ax]);
}
function Wx(t) {
  return Qr(
    t,
    [xx, sd],
    [Cx, sd],
    [Nx, Px]
  );
}
function Vx(t) {
  return Qr(t, [Ex, wx]);
}
const Ux = Xr(ei);
function Hx(t) {
  return Qr(t, [bx, Ux]);
}
const Bx = Jr(yx, _x), Kx = Jr(dm), qx = Xr(
  ei,
  Qi,
  es
);
function Gx(t) {
  return Qr(
    t,
    [Bx, pm],
    [Kx, qx]
  );
}
const od = "Invalid Duration", hm = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, zx = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...hm
}, xt = 146097 / 400, Er = 146097 / 4800, Yx = {
  years: {
    quarters: 4,
    months: 12,
    weeks: xt / 7,
    days: xt,
    hours: xt * 24,
    minutes: xt * 24 * 60,
    seconds: xt * 24 * 60 * 60,
    milliseconds: xt * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: xt / 28,
    days: xt / 4,
    hours: xt * 24 / 4,
    minutes: xt * 24 * 60 / 4,
    seconds: xt * 24 * 60 * 60 / 4,
    milliseconds: xt * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Er / 7,
    days: Er,
    hours: Er * 24,
    minutes: Er * 24 * 60,
    seconds: Er * 24 * 60 * 60,
    milliseconds: Er * 24 * 60 * 60 * 1e3
  },
  ...hm
}, zn = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], Zx = zn.slice(0).reverse();
function gn(t, e, n = !1) {
  const r = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new _e(r);
}
function mm(t, e) {
  let n = e.milliseconds ?? 0;
  for (const r of Zx.slice(1))
    e[r] && (n += e[r] * t[r].milliseconds);
  return n;
}
function ad(t, e) {
  const n = mm(t, e) < 0 ? -1 : 1;
  zn.reduceRight((r, i) => {
    if (ie(e[i]))
      return r;
    if (r) {
      const s = e[r] * n, o = t[i][r], a = Math.floor(s / o);
      e[i] += a * n, e[r] -= a * o * n;
    }
    return i;
  }, null), zn.reduce((r, i) => {
    if (ie(e[i]))
      return r;
    if (r) {
      const s = e[r] % 1;
      e[r] -= s, e[i] += s * t[r][i];
    }
    return i;
  }, null);
}
function Jx(t) {
  const e = {};
  for (const [n, r] of Object.entries(t))
    r !== 0 && (e[n] = r);
  return e;
}
class _e {
  /**
   * @private
   */
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let r = n ? Yx : zx;
    e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || we.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, n) {
    return _e.fromObject({ milliseconds: e }, n);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, n = {}) {
    if (e == null || typeof e != "object")
      throw new dt(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new _e({
      values: go(e, _e.normalizeUnit),
      loc: we.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
      matrix: n.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (er(e))
      return _e.fromMillis(e);
    if (_e.isDuration(e))
      return e;
    if (typeof e == "object")
      return _e.fromObject(e);
    throw new dt(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, n) {
    const [r] = Vx(e);
    return r ? _e.fromObject(r, n) : _e.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, n) {
    const [r] = Hx(e);
    return r ? _e.fromObject(r, n) : _e.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new dt("need to specify a reason the Duration is invalid");
    const r = e instanceof Lt ? e : new Lt(e, n);
    if (Me.throwOnInvalid)
      throw new OT(r);
    return new _e({ invalid: r });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const n = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!n)
      throw new Ah(e);
    return n;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(e, n = {}) {
    const r = {
      ...n,
      floor: n.round !== !1 && n.floor !== !1
    };
    return this.isValid ? Ye.create(this.loc, r).formatDurationFromString(this, e) : od;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(e = {}) {
    if (!this.isValid)
      return od;
    const n = zn.map((r) => {
      const i = this.values[r];
      return ie(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: r.slice(0, -1) }).format(i);
    }).filter((r) => r);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(n);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid)
      return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += _c(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid)
      return null;
    const n = this.toMillis();
    return n < 0 || n >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, re.fromMillis(n, { zone: "UTC" }).toISOTime(e));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? mm(this.matrix, this.values) : NaN;
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const n = _e.fromDurationLike(e), r = {};
    for (const i of zn)
      (Vr(n.values, i) || Vr(this.values, i)) && (r[i] = n.get(i) + this.get(i));
    return gn(this, { values: r }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const n = _e.fromDurationLike(e);
    return this.plus(n.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const n = {};
    for (const r of Object.keys(this.values))
      n[r] = em(e(this.values[r], r));
    return gn(this, { values: n }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[_e.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const n = { ...this.values, ...go(e, _e.normalizeUnit) };
    return gn(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: r, matrix: i } = {}) {
    const o = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: i, conversionAccuracy: r };
    return gn(this, o);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return ad(this.matrix, e), gn(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid)
      return this;
    const e = Jx(this.normalize().shiftToAll().toObject());
    return gn(this, { values: e }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((o) => _e.normalizeUnit(o));
    const n = {}, r = {}, i = this.toObject();
    let s;
    for (const o of zn)
      if (e.indexOf(o) >= 0) {
        s = o;
        let a = 0;
        for (const c in r)
          a += this.matrix[c][o] * r[c], r[c] = 0;
        er(i[o]) && (a += i[o]);
        const u = Math.trunc(a);
        n[o] = u, r[o] = (a * 1e3 - u * 1e3) / 1e3;
      } else
        er(i[o]) && (r[o] = i[o]);
    for (const o in r)
      r[o] !== 0 && (n[s] += o === s ? r[o] : r[o] / this.matrix[s][o]);
    return ad(this.matrix, n), gn(this, { values: n }, !0);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid)
      return this;
    const e = {};
    for (const n of Object.keys(this.values))
      e[n] = this.values[n] === 0 ? 0 : -this.values[n];
    return gn(this, { values: e }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function n(r, i) {
      return r === void 0 || r === 0 ? i === void 0 || i === 0 : r === i;
    }
    for (const r of zn)
      if (!n(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const wr = "Invalid Interval";
function Xx(t, e) {
  return !t || !t.isValid ? De.invalid("missing or invalid start") : !e || !e.isValid ? De.invalid("missing or invalid end") : e < t ? De.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class De {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new dt("need to specify a reason the Interval is invalid");
    const r = e instanceof Lt ? e : new Lt(e, n);
    if (Me.throwOnInvalid)
      throw new ST(r);
    return new De({ invalid: r });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, n) {
    const r = hi(e), i = hi(n), s = Xx(r, i);
    return s ?? new De({
      start: r,
      end: i
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, n) {
    const r = _e.fromDurationLike(n), i = hi(e);
    return De.fromDateTimes(i, i.plus(r));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, n) {
    const r = _e.fromDurationLike(n), i = hi(e);
    return De.fromDateTimes(i.minus(r), i);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, n) {
    const [r, i] = (e || "").split("/", 2);
    if (r && i) {
      let s, o;
      try {
        s = re.fromISO(r, n), o = s.isValid;
      } catch {
        o = !1;
      }
      let a, u;
      try {
        a = re.fromISO(i, n), u = a.isValid;
      } catch {
        u = !1;
      }
      if (o && u)
        return De.fromDateTimes(s, a);
      if (o) {
        const c = _e.fromISO(i, n);
        if (c.isValid)
          return De.after(s, c);
      } else if (u) {
        const c = _e.fromISO(r, n);
        if (c.isValid)
          return De.before(a, c);
      }
    }
    return De.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(e = "milliseconds", n) {
    if (!this.isValid)
      return NaN;
    const r = this.start.startOf(e, n);
    let i;
    return n != null && n.useLocaleWeeks ? i = this.end.reconfigure({ locale: r.locale }) : i = this.end, i = i.startOf(e, n), Math.floor(i.diff(r, e).get(e)) + (i.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: n } = {}) {
    return this.isValid ? De.fromDateTimes(e || this.s, n || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const n = e.map(hi).filter((o) => this.contains(o)).sort((o, a) => o.toMillis() - a.toMillis()), r = [];
    let { s: i } = this, s = 0;
    for (; i < this.e; ) {
      const o = n[s] || this.e, a = +o > +this.e ? this.e : o;
      r.push(De.fromDateTimes(i, a)), i = a, s += 1;
    }
    return r;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const n = _e.fromDurationLike(e);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s: r } = this, i = 1, s;
    const o = [];
    for (; r < this.e; ) {
      const a = this.start.plus(n.mapUnits((u) => u * i));
      s = +a > +this.e ? this.e : a, o.push(De.fromDateTimes(r, s)), r = s, i += 1;
    }
    return o;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid)
      return this;
    const n = this.s > e.s ? this.s : e.s, r = this.e < e.e ? this.e : e.e;
    return n >= r ? null : De.fromDateTimes(n, r);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid)
      return this;
    const n = this.s < e.s ? this.s : e.s, r = this.e > e.e ? this.e : e.e;
    return De.fromDateTimes(n, r);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [n, r] = e.sort((i, s) => i.s - s.s).reduce(
      ([i, s], o) => s ? s.overlaps(o) || s.abutsStart(o) ? [i, s.union(o)] : [i.concat([s]), o] : [i, o],
      [[], null]
    );
    return r && n.push(r), n;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let n = null, r = 0;
    const i = [], s = e.map((u) => [
      { time: u.s, type: "s" },
      { time: u.e, type: "e" }
    ]), o = Array.prototype.concat(...s), a = o.sort((u, c) => u.time - c.time);
    for (const u of a)
      r += u.type === "s" ? 1 : -1, r === 1 ? n = u.time : (n && +n != +u.time && i.push(De.fromDateTimes(n, u.time)), n = null);
    return De.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return De.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : wr;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = po, n = {}) {
    return this.isValid ? Ye.create(this.s.loc.clone(n), e).formatInterval(this) : wr;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : wr;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : wr;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : wr;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : wr;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, n) {
    return this.isValid ? this.e.diff(this.s, e, n) : _e.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return De.fromDateTimes(e(this.s), e(this.e));
  }
}
class Ps {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = Me.defaultZone) {
    const n = re.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return an.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return Sn(e, Me.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || we.create(e)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || we.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: n = null } = {}) {
    return (n || we.create(e)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || we.create(n, r, s)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || we.create(n, r, s)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || we.create(n, r, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || we.create(n, r, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: e = null } = {}) {
    return we.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", { locale: n = null } = {}) {
    return we.create(n, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: Jh(), localeWeek: Xh() };
  }
}
function ld(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = n(e) - n(t);
  return Math.floor(_e.fromMillis(r).as("days"));
}
function Qx(t, e, n) {
  const r = [
    ["years", (u, c) => c.year - u.year],
    ["quarters", (u, c) => c.quarter - u.quarter + (c.year - u.year) * 4],
    ["months", (u, c) => c.month - u.month + (c.year - u.year) * 12],
    [
      "weeks",
      (u, c) => {
        const f = ld(u, c);
        return (f - f % 7) / 7;
      }
    ],
    ["days", ld]
  ], i = {}, s = t;
  let o, a;
  for (const [u, c] of r)
    n.indexOf(u) >= 0 && (o = u, i[u] = c(t, e), a = s.plus(i), a > e ? (i[u]--, t = s.plus(i), t > e && (a = t, i[u]--, t = s.plus(i))) : t = a);
  return [t, i, a, o];
}
function eC(t, e, n, r) {
  let [i, s, o, a] = Qx(t, e, n);
  const u = e - i, c = n.filter(
    (p) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(p) >= 0
  );
  c.length === 0 && (o < e && (o = i.plus({ [a]: 1 })), o !== i && (s[a] = (s[a] || 0) + u / (o - i)));
  const f = _e.fromObject(s, r);
  return c.length > 0 ? _e.fromMillis(u, r).shiftTo(...c).plus(f) : f;
}
const wc = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, cd = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, tC = wc.hanidec.replace(/[\[|\]]/g, "").split("");
function nC(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      if (t[n].search(wc.hanidec) !== -1)
        e += tC.indexOf(t[n]);
      else
        for (const i in cd) {
          const [s, o] = cd[i];
          r >= s && r <= o && (e += r - s);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function Mt({ numberingSystem: t }, e = "") {
  return new RegExp(`${wc[t || "latn"]}${e}`);
}
const rC = "missing Intl.DateTimeFormat.formatToParts support";
function be(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(nC(n)) };
}
const iC = " ", gm = `[ ${iC}]`, ym = new RegExp(gm, "g");
function sC(t) {
  return t.replace(/\./g, "\\.?").replace(ym, gm);
}
function ud(t) {
  return t.replace(/\./g, "").replace(ym, " ").toLowerCase();
}
function kt(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(sC).join("|")),
    deser: ([n]) => t.findIndex((r) => ud(n) === ud(r)) + e
  };
}
function fd(t, e) {
  return { regex: t, deser: ([, n, r]) => Zo(n, r), groups: e };
}
function Is(t) {
  return { regex: t, deser: ([e]) => e };
}
function oC(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function aC(t, e) {
  const n = Mt(e), r = Mt(e, "{2}"), i = Mt(e, "{3}"), s = Mt(e, "{4}"), o = Mt(e, "{6}"), a = Mt(e, "{1,2}"), u = Mt(e, "{1,3}"), c = Mt(e, "{1,6}"), f = Mt(e, "{1,9}"), p = Mt(e, "{2,4}"), v = Mt(e, "{4,6}"), y = (C) => ({ regex: RegExp(oC(C.val)), deser: ([T]) => T, literal: !0 }), E = ((C) => {
    if (t.literal)
      return y(C);
    switch (C.val) {
      case "G":
        return kt(e.eras("short"), 0);
      case "GG":
        return kt(e.eras("long"), 0);
      case "y":
        return be(c);
      case "yy":
        return be(p, Pl);
      case "yyyy":
        return be(s);
      case "yyyyy":
        return be(v);
      case "yyyyyy":
        return be(o);
      case "M":
        return be(a);
      case "MM":
        return be(r);
      case "MMM":
        return kt(e.months("short", !0), 1);
      case "MMMM":
        return kt(e.months("long", !0), 1);
      case "L":
        return be(a);
      case "LL":
        return be(r);
      case "LLL":
        return kt(e.months("short", !1), 1);
      case "LLLL":
        return kt(e.months("long", !1), 1);
      case "d":
        return be(a);
      case "dd":
        return be(r);
      case "o":
        return be(u);
      case "ooo":
        return be(i);
      case "HH":
        return be(r);
      case "H":
        return be(a);
      case "hh":
        return be(r);
      case "h":
        return be(a);
      case "mm":
        return be(r);
      case "m":
        return be(a);
      case "q":
        return be(a);
      case "qq":
        return be(r);
      case "s":
        return be(a);
      case "ss":
        return be(r);
      case "S":
        return be(u);
      case "SSS":
        return be(i);
      case "u":
        return Is(f);
      case "uu":
        return Is(a);
      case "uuu":
        return be(n);
      case "a":
        return kt(e.meridiems(), 0);
      case "kkkk":
        return be(s);
      case "kk":
        return be(p, Pl);
      case "W":
        return be(a);
      case "WW":
        return be(r);
      case "E":
      case "c":
        return be(n);
      case "EEE":
        return kt(e.weekdays("short", !1), 1);
      case "EEEE":
        return kt(e.weekdays("long", !1), 1);
      case "ccc":
        return kt(e.weekdays("short", !0), 1);
      case "cccc":
        return kt(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return fd(new RegExp(`([+-]${a.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return fd(new RegExp(`([+-]${a.source})(${r.source})?`), 2);
      case "z":
        return Is(/[a-z_+-/]{1,256}?/i);
      case " ":
        return Is(/[^\S\n\r]/);
      default:
        return y(C);
    }
  })(t) || {
    invalidReason: rC
  };
  return E.token = t, E;
}
const lC = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function cC(t, e, n) {
  const { type: r, value: i } = t;
  if (r === "literal") {
    const u = /^\s+$/.test(i);
    return {
      literal: !u,
      val: u ? " " : i
    };
  }
  const s = e[r];
  let o = r;
  r === "hour" && (e.hour12 != null ? o = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? o = "hour12" : o = "hour24" : o = n.hour12 ? "hour12" : "hour24");
  let a = lC[o];
  if (typeof a == "object" && (a = a[s]), a)
    return {
      literal: !1,
      val: a
    };
}
function uC(t) {
  return [`^${t.map((n) => n.regex).reduce((n, r) => `${n}(${r.source})`, "")}$`, t];
}
function fC(t, e, n) {
  const r = t.match(e);
  if (r) {
    const i = {};
    let s = 1;
    for (const o in n)
      if (Vr(n, o)) {
        const a = n[o], u = a.groups ? a.groups + 1 : 1;
        !a.literal && a.token && (i[a.token.val[0]] = a.deser(r.slice(s, s + u))), s += u;
      }
    return [r, i];
  } else
    return [r, {}];
}
function dC(t) {
  const e = (s) => {
    switch (s) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let n = null, r;
  return ie(t.z) || (n = an.create(t.z)), ie(t.Z) || (n || (n = new it(t.Z)), r = t.Z), ie(t.q) || (t.M = (t.q - 1) * 3 + 1), ie(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), ie(t.u) || (t.S = yc(t.u)), [Object.keys(t).reduce((s, o) => {
    const a = e(o);
    return a && (s[a] = t[o]), s;
  }, {}), n, r];
}
let qa = null;
function pC() {
  return qa || (qa = re.fromMillis(1555555555555)), qa;
}
function hC(t, e) {
  if (t.literal)
    return t;
  const n = Ye.macroTokenToFormatOpts(t.val), r = bm(n, e);
  return r == null || r.includes(void 0) ? t : r;
}
function _m(t, e) {
  return Array.prototype.concat(...t.map((n) => hC(n, e)));
}
function vm(t, e, n) {
  const r = _m(Ye.parseFormat(n), t), i = r.map((o) => aC(o, t)), s = i.find((o) => o.invalidReason);
  if (s)
    return { input: e, tokens: r, invalidReason: s.invalidReason };
  {
    const [o, a] = uC(i), u = RegExp(o, "i"), [c, f] = fC(e, u, a), [p, v, y] = f ? dC(f) : [null, null, void 0];
    if (Vr(f, "a") && Vr(f, "H"))
      throw new Ar(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: u, rawMatches: c, matches: f, result: p, zone: v, specificOffset: y };
  }
}
function mC(t, e, n) {
  const { result: r, zone: i, specificOffset: s, invalidReason: o } = vm(t, e, n);
  return [r, i, s, o];
}
function bm(t, e) {
  if (!t)
    return null;
  const r = Ye.create(e, t).dtFormatter(pC()), i = r.formatToParts(), s = r.resolvedOptions();
  return i.map((o) => cC(o, t, s));
}
const Ga = "Invalid DateTime", dd = 864e13;
function Ds(t) {
  return new Lt("unsupported zone", `the zone "${t.name}" is not supported`);
}
function za(t) {
  return t.weekData === null && (t.weekData = ho(t.c)), t.weekData;
}
function Ya(t) {
  return t.localWeekData === null && (t.localWeekData = ho(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function Hn(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new re({ ...n, ...e, old: n });
}
function Em(t, e, n) {
  let r = t - e * 60 * 1e3;
  const i = n.offset(r);
  if (e === i)
    return [r, e];
  r -= (i - e) * 60 * 1e3;
  const s = n.offset(r);
  return i === s ? [r, i] : [t - Math.min(i, s) * 60 * 1e3, Math.max(i, s)];
}
function Rs(t, e) {
  t += e * 60 * 1e3;
  const n = new Date(t);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds()
  };
}
function Ys(t, e, n) {
  return Em(Yo(t), e, n);
}
function pd(t, e) {
  const n = t.o, r = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, s = {
    ...t.c,
    year: r,
    month: i,
    day: Math.min(t.c.day, mo(r, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, o = _e.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), a = Yo(s);
  let [u, c] = Em(a, n, t.zone);
  return o !== 0 && (u += o, c = t.zone.offset(u)), { ts: u, o: c };
}
function pi(t, e, n, r, i, s) {
  const { setZone: o, zone: a } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const u = e || a, c = re.fromObject(t, {
      ...n,
      zone: u,
      specificOffset: s
    });
    return o ? c : c.setZone(a);
  } else
    return re.invalid(
      new Lt("unparsable", `the input "${i}" can't be parsed as ${r}`)
    );
}
function Ms(t, e, n = !0) {
  return t.isValid ? Ye.create(we.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Za(t, e) {
  const n = t.c.year > 9999 || t.c.year < 0;
  let r = "";
  return n && t.c.year >= 0 && (r += "+"), r += $e(t.c.year, n ? 6 : 4), e ? (r += "-", r += $e(t.c.month), r += "-", r += $e(t.c.day)) : (r += $e(t.c.month), r += $e(t.c.day)), r;
}
function hd(t, e, n, r, i, s) {
  let o = $e(t.c.hour);
  return e ? (o += ":", o += $e(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (o += ":")) : o += $e(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (o += $e(t.c.second), (t.c.millisecond !== 0 || !r) && (o += ".", o += $e(t.c.millisecond, 3))), i && (t.isOffsetFixed && t.offset === 0 && !s ? o += "Z" : t.o < 0 ? (o += "-", o += $e(Math.trunc(-t.o / 60)), o += ":", o += $e(Math.trunc(-t.o % 60))) : (o += "+", o += $e(Math.trunc(t.o / 60)), o += ":", o += $e(Math.trunc(t.o % 60)))), s && (o += "[" + t.zone.ianaName + "]"), o;
}
const wm = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, gC = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, yC = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Sm = ["year", "month", "day", "hour", "minute", "second", "millisecond"], _C = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], vC = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function bC(t) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[t.toLowerCase()];
  if (!e)
    throw new Ah(t);
  return e;
}
function md(t) {
  switch (t.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return bC(t);
  }
}
function gd(t, e) {
  const n = Sn(e.zone, Me.defaultZone), r = we.fromObject(e), i = Me.now();
  let s, o;
  if (ie(t.year))
    s = i;
  else {
    for (const c of Sm)
      ie(t[c]) && (t[c] = wm[c]);
    const a = Yh(t) || Zh(t);
    if (a)
      return re.invalid(a);
    const u = n.offset(i);
    [s, o] = Ys(t, u, n);
  }
  return new re({ ts: s, zone: n, loc: r, o });
}
function yd(t, e, n) {
  const r = ie(n.round) ? !0 : n.round, i = (o, a) => (o = _c(o, r || n.calendary ? 0 : 2, !0), e.loc.clone(n).relFormatter(n).format(o, a)), s = (o) => n.calendary ? e.hasSame(t, o) ? 0 : e.startOf(o).diff(t.startOf(o), o).get(o) : e.diff(t, o).get(o);
  if (n.unit)
    return i(s(n.unit), n.unit);
  for (const o of n.units) {
    const a = s(o);
    if (Math.abs(a) >= 1)
      return i(a, o);
  }
  return i(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function _d(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
class re {
  /**
   * @access private
   */
  constructor(e) {
    const n = e.zone || Me.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new Lt("invalid input") : null) || (n.isValid ? null : Ds(n));
    this.ts = ie(e.ts) ? Me.now() : e.ts;
    let i = null, s = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, s] = [e.old.c, e.old.o];
      else {
        const a = n.offset(this.ts);
        i = Rs(this.ts, a), r = Number.isNaN(i.year) ? new Lt("invalid input") : null, i = r ? null : i, s = r ? null : a;
      }
    this._zone = n, this.loc = e.loc || we.create(), this.invalid = r, this.weekData = null, this.localWeekData = null, this.c = i, this.o = s, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new re({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, n] = _d(arguments), [r, i, s, o, a, u, c] = n;
    return gd({ year: r, month: i, day: s, hour: o, minute: a, second: u, millisecond: c }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, n] = _d(arguments), [r, i, s, o, a, u, c] = n;
    return e.zone = it.utcInstance, gd({ year: r, month: i, day: s, hour: o, minute: a, second: u, millisecond: c }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, n = {}) {
    const r = YT(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return re.invalid("invalid input");
    const i = Sn(n.zone, Me.defaultZone);
    return i.isValid ? new re({
      ts: r,
      zone: i,
      loc: we.fromObject(n)
    }) : re.invalid(Ds(i));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, n = {}) {
    if (er(e))
      return e < -dd || e > dd ? re.invalid("Timestamp out of range") : new re({
        ts: e,
        zone: Sn(n.zone, Me.defaultZone),
        loc: we.fromObject(n)
      });
    throw new dt(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, n = {}) {
    if (er(e))
      return new re({
        ts: e * 1e3,
        zone: Sn(n.zone, Me.defaultZone),
        loc: we.fromObject(n)
      });
    throw new dt("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(e, n = {}) {
    e = e || {};
    const r = Sn(n.zone, Me.defaultZone);
    if (!r.isValid)
      return re.invalid(Ds(r));
    const i = we.fromObject(n), s = go(e, md), { minDaysInFirstWeek: o, startOfWeek: a } = td(s, i), u = Me.now(), c = ie(n.specificOffset) ? r.offset(u) : n.specificOffset, f = !ie(s.ordinal), p = !ie(s.year), v = !ie(s.month) || !ie(s.day), y = p || v, b = s.weekYear || s.weekNumber;
    if ((y || f) && b)
      throw new Ar(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (v && f)
      throw new Ar("Can't mix ordinal dates with month/day");
    const E = b || s.weekday && !y;
    let C, T, K = Rs(u, c);
    E ? (C = _C, T = gC, K = ho(K, o, a)) : f ? (C = vC, T = yC, K = Ka(K)) : (C = Sm, T = wm);
    let W = !1;
    for (const Y of C) {
      const Q = s[Y];
      ie(Q) ? W ? s[Y] = T[Y] : s[Y] = K[Y] : W = !0;
    }
    const j = E ? qT(s, o, a) : f ? GT(s) : Yh(s), G = j || Zh(s);
    if (G)
      return re.invalid(G);
    const B = E ? Qf(s, o, a) : f ? ed(s) : s, [X, z] = Ys(B, c, r), F = new re({
      ts: X,
      zone: r,
      o: z,
      loc: i
    });
    return s.weekday && y && e.weekday !== F.weekday ? re.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${s.weekday} and a date of ${F.toISO()}`
    ) : F;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, n = {}) {
    const [r, i] = Fx(e);
    return pi(r, i, n, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, n = {}) {
    const [r, i] = jx(e);
    return pi(r, i, n, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, n = {}) {
    const [r, i] = Wx(e);
    return pi(r, i, n, "HTTP", n);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, n, r = {}) {
    if (ie(e) || ie(n))
      throw new dt("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: s = null } = r, o = we.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    }), [a, u, c, f] = mC(o, e, n);
    return f ? re.invalid(f) : pi(a, u, r, `format ${n}`, e, c);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, n, r = {}) {
    return re.fromFormat(e, n, r);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, n = {}) {
    const [r, i] = Gx(e);
    return pi(r, i, n, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new dt("need to specify a reason the DateTime is invalid");
    const r = e instanceof Lt ? e : new Lt(e, n);
    if (Me.throwOnInvalid)
      throw new wT(r);
    return new re({ invalid: r });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, n = {}) {
    const r = bm(e, we.fromObject(n));
    return r ? r.map((i) => i ? i.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, n = {}) {
    return _m(Ye.parseFormat(e), we.fromObject(n)).map((i) => i.val).join("");
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? za(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? za(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? za(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? Ya(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? Ya(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? Ya(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Ka(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Ps.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Ps.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Ps.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Ps.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, n = 6e4, r = Yo(this.c), i = this.zone.offset(r - e), s = this.zone.offset(r + e), o = this.zone.offset(r - i * n), a = this.zone.offset(r - s * n);
    if (o === a)
      return [this];
    const u = r - o * n, c = r - a * n, f = Rs(u, o), p = Rs(c, a);
    return f.hour === p.hour && f.minute === p.minute && f.second === p.second && f.millisecond === p.millisecond ? [Hn(this, { ts: u }), Hn(this, { ts: c })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return Xi(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return mo(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Dr(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Vi(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? Vi(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: n, numberingSystem: r, calendar: i } = Ye.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: r, outputCalendar: i };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, n = {}) {
    return this.setZone(it.instance(e), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Me.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: n = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = Sn(e, Me.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || r) {
        const s = e.offset(this.ts), o = this.toObject();
        [i] = Ys(o, s, e);
      }
      return Hn(this, { ts: i, zone: e });
    } else
      return re.invalid(Ds(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: r } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: r });
    return Hn(this, { loc: i });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const n = go(e, md), { minDaysInFirstWeek: r, startOfWeek: i } = td(n, this.loc), s = !ie(n.weekYear) || !ie(n.weekNumber) || !ie(n.weekday), o = !ie(n.ordinal), a = !ie(n.year), u = !ie(n.month) || !ie(n.day), c = a || u, f = n.weekYear || n.weekNumber;
    if ((c || o) && f)
      throw new Ar(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && o)
      throw new Ar("Can't mix ordinal dates with month/day");
    let p;
    s ? p = Qf(
      { ...ho(this.c, r, i), ...n },
      r,
      i
    ) : ie(n.ordinal) ? (p = { ...this.toObject(), ...n }, ie(n.day) && (p.day = Math.min(mo(p.year, p.month), p.day))) : p = ed({ ...Ka(this.c), ...n });
    const [v, y] = Ys(p, this.o, this.zone);
    return Hn(this, { ts: v, o: y });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const n = _e.fromDurationLike(e);
    return Hn(this, pd(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const n = _e.fromDurationLike(e).negate();
    return Hn(this, pd(this, n));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e, { useLocaleWeeks: n = !1 } = {}) {
    if (!this.isValid)
      return this;
    const r = {}, i = _e.normalizeUnit(e);
    switch (i) {
      case "years":
        r.month = 1;
      case "quarters":
      case "months":
        r.day = 1;
      case "weeks":
      case "days":
        r.hour = 0;
      case "hours":
        r.minute = 0;
      case "minutes":
        r.second = 0;
      case "seconds":
        r.millisecond = 0;
        break;
    }
    if (i === "weeks")
      if (n) {
        const s = this.loc.getStartOfWeek(), { weekday: o } = this;
        o < s && (r.weekNumber = this.weekNumber - 1), r.weekday = s;
      } else
        r.weekday = 1;
    if (i === "quarters") {
      const s = Math.ceil(this.month / 3);
      r.month = (s - 1) * 3 + 1;
    }
    return this.set(r);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e, n) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e, n).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, n = {}) {
    return this.isValid ? Ye.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Ga;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = po, n = {}) {
    return this.isValid ? Ye.create(this.loc.clone(n), e).formatDateTime(this) : Ga;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? Ye.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: n = !1,
    suppressMilliseconds: r = !1,
    includeOffset: i = !0,
    extendedZone: s = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const o = e === "extended";
    let a = Za(this, o);
    return a += "T", a += hd(this, o, n, r, i, s), a;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? Za(this, e === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Ms(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: n = !1,
    includeOffset: r = !0,
    includePrefix: i = !1,
    extendedZone: s = !1,
    format: o = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + hd(
      this,
      o === "extended",
      n,
      e,
      r,
      s
    ) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return Ms(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return Ms(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? Za(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: n = !1, includeOffsetSpace: r = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (n || e) && (r && (i += " "), n ? i += "z" : e && (i += "ZZ")), Ms(this, i, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : Ga;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid)
      return {};
    const n = { ...this.c };
    return e.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, n = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return _e.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, s = ZT(n).map(_e.normalizeUnit), o = e.valueOf() > this.valueOf(), a = o ? this : e, u = o ? e : this, c = eC(a, u, s, i);
    return o ? c.negate() : c;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", n = {}) {
    return this.diff(re.now(), e, n);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(e) {
    return this.isValid ? De.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, n, r) {
    if (!this.isValid)
      return !1;
    const i = e.valueOf(), s = this.setZone(e.zone, { keepLocalTime: !0 });
    return s.startOf(n, r) <= i && i <= s.endOf(n, r);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const n = e.base || re.fromObject({}, { zone: this.zone }), r = e.padding ? this < n ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], s = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, s = void 0), yd(n, this.plus(r), {
      ...e,
      numeric: "always",
      units: i,
      unit: s
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? yd(e.base || re.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(re.isDateTime))
      throw new dt("min requires all arguments be DateTimes");
    return nd(e, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(re.isDateTime))
      throw new dt("max requires all arguments be DateTimes");
    return nd(e, (n) => n.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, n, r = {}) {
    const { locale: i = null, numberingSystem: s = null } = r, o = we.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    });
    return vm(o, e, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, n, r = {}) {
    return re.fromFormatExplain(e, n, r);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return po;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return Th;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return AT;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return xh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Ch;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Nh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Ph;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Ih;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Dh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Rh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Mh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return kh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return $h;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return Lh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Fh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return jh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Wh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return TT;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return Vh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return Uh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Hh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Bh;
  }
}
function hi(t) {
  if (re.isDateTime(t))
    return t;
  if (t && t.valueOf && er(t.valueOf()))
    return re.fromJSDate(t);
  if (t && typeof t == "object")
    return re.fromObject(t);
  throw new dt(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const Sc = Do({
  id: "filter",
  state: () => ({
    month: null,
    year: null
  }),
  actions: {
    setFilterPeriod(t, e, n) {
      this.month = t, this.year = e;
    }
  }
}), ts = Do({
  id: "product",
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      try {
        const e = await new ec.KintoneRestAPIClient({
          auth: { apiToken: "y60ItXXtrvmzw1jbXMoakjb33EEhtwDyuEwczwau" }
        }).record.getAllRecords({
          app: 1905
        });
        this.products = e;
      } catch (t) {
        console.error("Error fetching products:", t);
      }
    }
  },
  getters: {
    getProducts() {
      return this.products;
    }
  }
}), EC = new ec.KintoneRestAPIClient({
  auth: {
    apiToken: "vuRejYyE1NH8ejX0hl7te182wxNsxS1OBP4qI4Lb"
  }
}), Oc = Do({
  id: "receiving",
  state: () => ({
    records: []
  }),
  actions: {
    async fetchReceiving() {
      const t = Sc(), e = ts(), n = t.month, r = t.year, i = e.products.map((u) => `"${u.Part_No.value}"`).join(","), s = re.fromObject({
        year: r,
        month: n,
        day: 1
      }).toISODate(), o = re.fromObject({
        year: r,
        month: n,
        day: 1
      }).endOf("month").toISODate(), a = `Receive_Date >= "${s}" and Receive_Date <= "${o}" and Part_No in (${i})`;
      console.log({ condition: a });
      try {
        const u = await EC.record.getAllRecords({
          app: 1913,
          condition: a
        });
        console.log("Fetched receiving:", u), this.records = u, console.log(this.records, "receiving");
      } catch (u) {
        console.error("Error fetching receiving:", u);
      }
    }
  }
}), Om = Do({
  id: "report",
  state: () => ({
    reportList: []
  }),
  actions: {
    generateReport() {
      const t = ts(), e = Oc(), { products: n } = Pr(t), { records: r } = Pr(e);
      console.log(n.value, "productStore"), console.log(r.value, "receivingStore");
    }
  },
  getters: {}
}), wC = { class: "border rounded p-3 bg-white table-responsive" }, SC = { key: 0 }, OC = { class: "table table-striped" }, AC = /* @__PURE__ */ pe("tr", null, [
  /* @__PURE__ */ pe("th", {
    colspan: "38",
    class: "text-center"
  }, "Month")
], -1), TC = /* @__PURE__ */ pe("th", null, "Part No", -1), xC = /* @__PURE__ */ pe("th", null, "Part Name", -1), CC = /* @__PURE__ */ pe("th", null, "Beginning Stock", -1), NC = /* @__PURE__ */ pe("th", null, "In/Out", -1), PC = /* @__PURE__ */ pe("th", null, "Total In", -1), IC = /* @__PURE__ */ pe("th", null, "Total Out", -1), DC = /* @__PURE__ */ pe("th", null, "Ending Stock", -1), RC = { class: "table-hover" }, MC = { rowspan: "2" }, kC = { rowspan: "2" }, $C = /* @__PURE__ */ pe("td", { rowspan: "2" }, "0", -1), LC = /* @__PURE__ */ pe("td", null, "In", -1), FC = /* @__PURE__ */ pe("td", { rowspan: "2" }, "0", -1), jC = /* @__PURE__ */ pe("td", { rowspan: "2" }, "0", -1), WC = /* @__PURE__ */ pe("td", { rowspan: "2" }, "0", -1), VC = { class: "table-hover" }, UC = /* @__PURE__ */ pe("td", null, "Out", -1), HC = { key: 1 }, BC = {
  __name: "DataTable",
  setup(t) {
    const e = ts(), n = Oc(), r = Om(), { products: i } = Pr(e), { records: s } = Pr(n), { reportList: o } = Pr(r);
    return console.log(i.value, "products ref"), console.log(s.value, "receivingData"), console.log(o.value, "reportList"), (a, u) => (Ht(), Bt("div", wC, [
      Mi(i).length ? (Ht(), Bt("div", SC, [
        pe("table", OC, [
          pe("thead", null, [
            AC,
            pe("tr", null, [
              TC,
              xC,
              CC,
              NC,
              (Ht(), Bt(ft, null, Ss(31, (c, f) => pe("th", { key: c }, li(c), 1)), 64)),
              PC,
              IC,
              DC
            ])
          ]),
          pe("tbody", null, [
            (Ht(!0), Bt(ft, null, Ss(Mi(i), (c) => (Ht(), Bt(ft, {
              key: c.$id.value
            }, [
              pe("tr", RC, [
                pe("td", MC, li(c.Part_No.value), 1),
                pe("td", kC, li(c.Part_Name.value), 1),
                $C,
                LC,
                (Ht(), Bt(ft, null, Ss(31, (f, p) => pe("td", { key: f }, li("-"))), 64)),
                FC,
                jC,
                WC
              ]),
              pe("tr", VC, [
                UC,
                (Ht(), Bt(ft, null, Ss(31, (f, p) => pe("td", { key: f }, li("-"))), 64))
              ])
            ], 64))), 128))
          ])
        ])
      ])) : (Ht(), Bt("div", HC, "Loading..."))
    ]));
  }
}, KC = { class: "card mb-3" }, qC = { class: "card-body" }, GC = { class: "row" }, zC = { class: "col-xs-6" }, YC = /* @__PURE__ */ Sp('<div class="row"><div class="col-xs-12 col-sm-6"><label class="col-xs-12">Month</label></div><div class="col-xs-12 col-sm-6"><label class="col-xs-12">Year</label></div></div>', 1), ZC = { class: "row" }, JC = { class: "col-xs-12 col-sm-6" }, XC = /* @__PURE__ */ Sp('<option value="1">January</option><option value="2">February</option><option value="3">March</option><option value="4">April</option><option value="5">May</option><option value="6">June</option><option value="7">July</option><option value="8">August</option><option value="9">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option>', 12), QC = [
  XC
], e1 = { class: "col-xs-12 col-sm-6" }, t1 = {
  __name: "FilterTable",
  setup(t) {
    const e = Sc();
    ts(), Oc(), Om();
    const { month: n, year: r } = Pr(e);
    return console.log(n.value, "selectedMonth"), console.log(r.value, "selectedYear"), (i, s) => (Ht(), Bt("div", KC, [
      pe("div", qC, [
        pe("div", GC, [
          pe("div", zC, [
            YC,
            pe("div", ZC, [
              pe("div", JC, [
                ku(pe("select", {
                  class: "form-select",
                  "onUpdate:modelValue": s[0] || (s[0] = (o) => Pe(n) ? n.value = o : null)
                }, QC, 512), [
                  [nw, Mi(n)]
                ])
              ]),
              pe("div", e1, [
                ku(pe("input", {
                  class: "form-control",
                  type: "number",
                  min: "2000",
                  max: "3000",
                  "onUpdate:modelValue": s[1] || (s[1] = (o) => Pe(r) ? r.value = o : null)
                }, null, 512), [
                  [tw, Mi(r)]
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}, n1 = { class: "p-3 bg-light" }, r1 = {
  __name: "App",
  setup(t) {
    const e = ts(), n = Sc(), r = re.now().month, i = re.now().year;
    return n.setFilterPeriod(r, i), n.month = r, n.year = i, e.fetchProducts(), (s, o) => (Ht(), Bt("div", n1, [
      Yt(t1),
      Yt(BC)
    ]));
  }
};
var i1 = { exports: {} }, st = "top", bt = "bottom", Et = "right", ot = "left", Xo = "auto", ti = [st, bt, Et, ot], nr = "start", Ur = "end", Am = "clippingParents", Ac = "viewport", Or = "popper", Tm = "reference", Il = /* @__PURE__ */ ti.reduce(function(t, e) {
  return t.concat([e + "-" + nr, e + "-" + Ur]);
}, []), Tc = /* @__PURE__ */ [].concat(ti, [Xo]).reduce(function(t, e) {
  return t.concat([e, e + "-" + nr, e + "-" + Ur]);
}, []), xm = "beforeRead", Cm = "read", Nm = "afterRead", Pm = "beforeMain", Im = "main", Dm = "afterMain", Rm = "beforeWrite", Mm = "write", km = "afterWrite", $m = [xm, Cm, Nm, Pm, Im, Dm, Rm, Mm, km];
function Jt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function wt(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function rr(t) {
  var e = wt(t).Element;
  return t instanceof e || t instanceof Element;
}
function It(t) {
  var e = wt(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function xc(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = wt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function s1(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, i = e.attributes[n] || {}, s = e.elements[n];
    !It(s) || !Jt(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(o) {
      var a = i[o];
      a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? "" : a);
    }));
  });
}
function o1(t) {
  var e = t.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], s = e.attributes[r] || {}, o = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), a = o.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !It(i) || !Jt(i) || (Object.assign(i.style, a), Object.keys(s).forEach(function(u) {
        i.removeAttribute(u);
      }));
    });
  };
}
const Cc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: s1,
  effect: o1,
  requires: ["computeStyles"]
};
function Zt(t) {
  return t.split("-")[0];
}
var tr = Math.max, yo = Math.min, Hr = Math.round;
function Dl() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Lm() {
  return !/^((?!chrome|android).)*safari/i.test(Dl());
}
function Br(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(), i = 1, s = 1;
  e && It(t) && (i = t.offsetWidth > 0 && Hr(r.width) / t.offsetWidth || 1, s = t.offsetHeight > 0 && Hr(r.height) / t.offsetHeight || 1);
  var o = rr(t) ? wt(t) : window, a = o.visualViewport, u = !Lm() && n, c = (r.left + (u && a ? a.offsetLeft : 0)) / i, f = (r.top + (u && a ? a.offsetTop : 0)) / s, p = r.width / i, v = r.height / s;
  return {
    width: p,
    height: v,
    top: f,
    right: c + p,
    bottom: f + v,
    left: c,
    x: c,
    y: f
  };
}
function Nc(t) {
  var e = Br(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
function Fm(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && xc(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ln(t) {
  return wt(t).getComputedStyle(t);
}
function a1(t) {
  return ["table", "td", "th"].indexOf(Jt(t)) >= 0;
}
function In(t) {
  return ((rr(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function Qo(t) {
  return Jt(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (xc(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    In(t)
  );
}
function vd(t) {
  return !It(t) || // https://github.com/popperjs/popper-core/issues/837
  ln(t).position === "fixed" ? null : t.offsetParent;
}
function l1(t) {
  var e = /firefox/i.test(Dl()), n = /Trident/i.test(Dl());
  if (n && It(t)) {
    var r = ln(t);
    if (r.position === "fixed")
      return null;
  }
  var i = Qo(t);
  for (xc(i) && (i = i.host); It(i) && ["html", "body"].indexOf(Jt(i)) < 0; ) {
    var s = ln(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || e && s.willChange === "filter" || e && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ns(t) {
  for (var e = wt(t), n = vd(t); n && a1(n) && ln(n).position === "static"; )
    n = vd(n);
  return n && (Jt(n) === "html" || Jt(n) === "body" && ln(n).position === "static") ? e : n || l1(t) || e;
}
function Pc(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Ni(t, e, n) {
  return tr(t, yo(e, n));
}
function c1(t, e, n) {
  var r = Ni(t, e, n);
  return r > n ? n : r;
}
function jm() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Wm(t) {
  return Object.assign({}, jm(), t);
}
function Vm(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
var u1 = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, Wm(typeof e != "number" ? e : Vm(e, ti));
};
function f1(t) {
  var e, n = t.state, r = t.name, i = t.options, s = n.elements.arrow, o = n.modifiersData.popperOffsets, a = Zt(n.placement), u = Pc(a), c = [ot, Et].indexOf(a) >= 0, f = c ? "height" : "width";
  if (!(!s || !o)) {
    var p = u1(i.padding, n), v = Nc(s), y = u === "y" ? st : ot, b = u === "y" ? bt : Et, E = n.rects.reference[f] + n.rects.reference[u] - o[u] - n.rects.popper[f], C = o[u] - n.rects.reference[u], T = ns(s), K = T ? u === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, W = E / 2 - C / 2, j = p[y], G = K - v[f] - p[b], B = K / 2 - v[f] / 2 + W, X = Ni(j, B, G), z = u;
    n.modifiersData[r] = (e = {}, e[z] = X, e.centerOffset = X - B, e);
  }
}
function d1(t) {
  var e = t.state, n = t.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || Fm(e.elements.popper, i) && (e.elements.arrow = i));
}
const Um = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: f1,
  effect: d1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Kr(t) {
  return t.split("-")[1];
}
var p1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function h1(t, e) {
  var n = t.x, r = t.y, i = e.devicePixelRatio || 1;
  return {
    x: Hr(n * i) / i || 0,
    y: Hr(r * i) / i || 0
  };
}
function bd(t) {
  var e, n = t.popper, r = t.popperRect, i = t.placement, s = t.variation, o = t.offsets, a = t.position, u = t.gpuAcceleration, c = t.adaptive, f = t.roundOffsets, p = t.isFixed, v = o.x, y = v === void 0 ? 0 : v, b = o.y, E = b === void 0 ? 0 : b, C = typeof f == "function" ? f({
    x: y,
    y: E
  }) : {
    x: y,
    y: E
  };
  y = C.x, E = C.y;
  var T = o.hasOwnProperty("x"), K = o.hasOwnProperty("y"), W = ot, j = st, G = window;
  if (c) {
    var B = ns(n), X = "clientHeight", z = "clientWidth";
    if (B === wt(n) && (B = In(n), ln(B).position !== "static" && a === "absolute" && (X = "scrollHeight", z = "scrollWidth")), B = B, i === st || (i === ot || i === Et) && s === Ur) {
      j = bt;
      var F = p && B === G && G.visualViewport ? G.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        B[X]
      );
      E -= F - r.height, E *= u ? 1 : -1;
    }
    if (i === ot || (i === st || i === bt) && s === Ur) {
      W = Et;
      var Y = p && B === G && G.visualViewport ? G.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        B[z]
      );
      y -= Y - r.width, y *= u ? 1 : -1;
    }
  }
  var Q = Object.assign({
    position: a
  }, c && p1), le = f === !0 ? h1({
    x: y,
    y: E
  }, wt(n)) : {
    x: y,
    y: E
  };
  if (y = le.x, E = le.y, u) {
    var ce;
    return Object.assign({}, Q, (ce = {}, ce[j] = K ? "0" : "", ce[W] = T ? "0" : "", ce.transform = (G.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + E + "px)" : "translate3d(" + y + "px, " + E + "px, 0)", ce));
  }
  return Object.assign({}, Q, (e = {}, e[j] = K ? E + "px" : "", e[W] = T ? y + "px" : "", e.transform = "", e));
}
function m1(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, o = s === void 0 ? !0 : s, a = n.roundOffsets, u = a === void 0 ? !0 : a, c = {
    placement: Zt(e.placement),
    variation: Kr(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, bd(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: o,
    roundOffsets: u
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, bd(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const Ic = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: m1,
  data: {}
};
var ks = {
  passive: !0
};
function g1(t) {
  var e = t.state, n = t.instance, r = t.options, i = r.scroll, s = i === void 0 ? !0 : i, o = r.resize, a = o === void 0 ? !0 : o, u = wt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return s && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, ks);
  }), a && u.addEventListener("resize", n.update, ks), function() {
    s && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, ks);
    }), a && u.removeEventListener("resize", n.update, ks);
  };
}
const Dc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: g1,
  data: {}
};
var y1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zs(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return y1[e];
  });
}
var _1 = {
  start: "end",
  end: "start"
};
function Ed(t) {
  return t.replace(/start|end/g, function(e) {
    return _1[e];
  });
}
function Rc(t) {
  var e = wt(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Mc(t) {
  return Br(In(t)).left + Rc(t).scrollLeft;
}
function v1(t, e) {
  var n = wt(t), r = In(t), i = n.visualViewport, s = r.clientWidth, o = r.clientHeight, a = 0, u = 0;
  if (i) {
    s = i.width, o = i.height;
    var c = Lm();
    (c || !c && e === "fixed") && (a = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: a + Mc(t),
    y: u
  };
}
function b1(t) {
  var e, n = In(t), r = Rc(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, s = tr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = tr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -r.scrollLeft + Mc(t), u = -r.scrollTop;
  return ln(i || n).direction === "rtl" && (a += tr(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: o,
    x: a,
    y: u
  };
}
function kc(t) {
  var e = ln(t), n = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Hm(t) {
  return ["html", "body", "#document"].indexOf(Jt(t)) >= 0 ? t.ownerDocument.body : It(t) && kc(t) ? t : Hm(Qo(t));
}
function Pi(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = Hm(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), s = wt(r), o = i ? [s].concat(s.visualViewport || [], kc(r) ? r : []) : r, a = e.concat(o);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Pi(Qo(o)))
  );
}
function Rl(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function E1(t, e) {
  var n = Br(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function wd(t, e, n) {
  return e === Ac ? Rl(v1(t, n)) : rr(e) ? E1(e, n) : Rl(b1(In(t)));
}
function w1(t) {
  var e = Pi(Qo(t)), n = ["absolute", "fixed"].indexOf(ln(t).position) >= 0, r = n && It(t) ? ns(t) : t;
  return rr(r) ? e.filter(function(i) {
    return rr(i) && Fm(i, r) && Jt(i) !== "body";
  }) : [];
}
function S1(t, e, n, r) {
  var i = e === "clippingParents" ? w1(t) : [].concat(e), s = [].concat(i, [n]), o = s[0], a = s.reduce(function(u, c) {
    var f = wd(t, c, r);
    return u.top = tr(f.top, u.top), u.right = yo(f.right, u.right), u.bottom = yo(f.bottom, u.bottom), u.left = tr(f.left, u.left), u;
  }, wd(t, o, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Bm(t) {
  var e = t.reference, n = t.element, r = t.placement, i = r ? Zt(r) : null, s = r ? Kr(r) : null, o = e.x + e.width / 2 - n.width / 2, a = e.y + e.height / 2 - n.height / 2, u;
  switch (i) {
    case st:
      u = {
        x: o,
        y: e.y - n.height
      };
      break;
    case bt:
      u = {
        x: o,
        y: e.y + e.height
      };
      break;
    case Et:
      u = {
        x: e.x + e.width,
        y: a
      };
      break;
    case ot:
      u = {
        x: e.x - n.width,
        y: a
      };
      break;
    default:
      u = {
        x: e.x,
        y: e.y
      };
  }
  var c = i ? Pc(i) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (s) {
      case nr:
        u[c] = u[c] - (e[f] / 2 - n[f] / 2);
        break;
      case Ur:
        u[c] = u[c] + (e[f] / 2 - n[f] / 2);
        break;
    }
  }
  return u;
}
function qr(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = r === void 0 ? t.placement : r, s = n.strategy, o = s === void 0 ? t.strategy : s, a = n.boundary, u = a === void 0 ? Am : a, c = n.rootBoundary, f = c === void 0 ? Ac : c, p = n.elementContext, v = p === void 0 ? Or : p, y = n.altBoundary, b = y === void 0 ? !1 : y, E = n.padding, C = E === void 0 ? 0 : E, T = Wm(typeof C != "number" ? C : Vm(C, ti)), K = v === Or ? Tm : Or, W = t.rects.popper, j = t.elements[b ? K : v], G = S1(rr(j) ? j : j.contextElement || In(t.elements.popper), u, f, o), B = Br(t.elements.reference), X = Bm({
    reference: B,
    element: W,
    strategy: "absolute",
    placement: i
  }), z = Rl(Object.assign({}, W, X)), F = v === Or ? z : B, Y = {
    top: G.top - F.top + T.top,
    bottom: F.bottom - G.bottom + T.bottom,
    left: G.left - F.left + T.left,
    right: F.right - G.right + T.right
  }, Q = t.modifiersData.offset;
  if (v === Or && Q) {
    var le = Q[i];
    Object.keys(Y).forEach(function(ce) {
      var Te = [Et, bt].indexOf(ce) >= 0 ? 1 : -1, Se = [st, bt].indexOf(ce) >= 0 ? "y" : "x";
      Y[ce] += le[Se] * Te;
    });
  }
  return Y;
}
function O1(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = n.boundary, s = n.rootBoundary, o = n.padding, a = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? Tc : u, f = Kr(r), p = f ? a ? Il : Il.filter(function(b) {
    return Kr(b) === f;
  }) : ti, v = p.filter(function(b) {
    return c.indexOf(b) >= 0;
  });
  v.length === 0 && (v = p);
  var y = v.reduce(function(b, E) {
    return b[E] = qr(t, {
      placement: E,
      boundary: i,
      rootBoundary: s,
      padding: o
    })[Zt(E)], b;
  }, {});
  return Object.keys(y).sort(function(b, E) {
    return y[b] - y[E];
  });
}
function A1(t) {
  if (Zt(t) === Xo)
    return [];
  var e = Zs(t);
  return [Ed(t), e, Ed(e)];
}
function T1(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, o = n.altAxis, a = o === void 0 ? !0 : o, u = n.fallbackPlacements, c = n.padding, f = n.boundary, p = n.rootBoundary, v = n.altBoundary, y = n.flipVariations, b = y === void 0 ? !0 : y, E = n.allowedAutoPlacements, C = e.options.placement, T = Zt(C), K = T === C, W = u || (K || !b ? [Zs(C)] : A1(C)), j = [C].concat(W).reduce(function(mt, Qe) {
      return mt.concat(Zt(Qe) === Xo ? O1(e, {
        placement: Qe,
        boundary: f,
        rootBoundary: p,
        padding: c,
        flipVariations: b,
        allowedAutoPlacements: E
      }) : Qe);
    }, []), G = e.rects.reference, B = e.rects.popper, X = /* @__PURE__ */ new Map(), z = !0, F = j[0], Y = 0; Y < j.length; Y++) {
      var Q = j[Y], le = Zt(Q), ce = Kr(Q) === nr, Te = [st, bt].indexOf(le) >= 0, Se = Te ? "width" : "height", ee = qr(e, {
        placement: Q,
        boundary: f,
        rootBoundary: p,
        altBoundary: v,
        padding: c
      }), oe = Te ? ce ? Et : ot : ce ? bt : st;
      G[Se] > B[Se] && (oe = Zs(oe));
      var fe = Zs(oe), Re = [];
      if (s && Re.push(ee[le] <= 0), a && Re.push(ee[oe] <= 0, ee[fe] <= 0), Re.every(function(mt) {
        return mt;
      })) {
        F = Q, z = !1;
        break;
      }
      X.set(Q, Re);
    }
    if (z)
      for (var Xe = b ? 3 : 1, Ke = function(Qe) {
        var Ce = j.find(function(O) {
          var U = X.get(O);
          if (U)
            return U.slice(0, Qe).every(function(Oe) {
              return Oe;
            });
        });
        if (Ce)
          return F = Ce, "break";
      }, Ie = Xe; Ie > 0; Ie--) {
        var St = Ke(Ie);
        if (St === "break")
          break;
      }
    e.placement !== F && (e.modifiersData[r]._skip = !0, e.placement = F, e.reset = !0);
  }
}
const Km = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: T1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Sd(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}
function Od(t) {
  return [st, Et, bt, ot].some(function(e) {
    return t[e] >= 0;
  });
}
function x1(t) {
  var e = t.state, n = t.name, r = e.rects.reference, i = e.rects.popper, s = e.modifiersData.preventOverflow, o = qr(e, {
    elementContext: "reference"
  }), a = qr(e, {
    altBoundary: !0
  }), u = Sd(o, r), c = Sd(a, i, s), f = Od(u), p = Od(c);
  e.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: c,
    isReferenceHidden: f,
    hasPopperEscaped: p
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": p
  });
}
const qm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: x1
};
function C1(t, e, n) {
  var r = Zt(t), i = [ot, st].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n, o = s[0], a = s[1];
  return o = o || 0, a = (a || 0) * i, [ot, Et].indexOf(r) >= 0 ? {
    x: a,
    y: o
  } : {
    x: o,
    y: a
  };
}
function N1(t) {
  var e = t.state, n = t.options, r = t.name, i = n.offset, s = i === void 0 ? [0, 0] : i, o = Tc.reduce(function(f, p) {
    return f[p] = C1(p, e.rects, s), f;
  }, {}), a = o[e.placement], u = a.x, c = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = o;
}
const Gm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: N1
};
function P1(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = Bm({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const $c = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: P1,
  data: {}
};
function I1(t) {
  return t === "x" ? "y" : "x";
}
function D1(t) {
  var e = t.state, n = t.options, r = t.name, i = n.mainAxis, s = i === void 0 ? !0 : i, o = n.altAxis, a = o === void 0 ? !1 : o, u = n.boundary, c = n.rootBoundary, f = n.altBoundary, p = n.padding, v = n.tether, y = v === void 0 ? !0 : v, b = n.tetherOffset, E = b === void 0 ? 0 : b, C = qr(e, {
    boundary: u,
    rootBoundary: c,
    padding: p,
    altBoundary: f
  }), T = Zt(e.placement), K = Kr(e.placement), W = !K, j = Pc(T), G = I1(j), B = e.modifiersData.popperOffsets, X = e.rects.reference, z = e.rects.popper, F = typeof E == "function" ? E(Object.assign({}, e.rects, {
    placement: e.placement
  })) : E, Y = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), Q = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, le = {
    x: 0,
    y: 0
  };
  if (B) {
    if (s) {
      var ce, Te = j === "y" ? st : ot, Se = j === "y" ? bt : Et, ee = j === "y" ? "height" : "width", oe = B[j], fe = oe + C[Te], Re = oe - C[Se], Xe = y ? -z[ee] / 2 : 0, Ke = K === nr ? X[ee] : z[ee], Ie = K === nr ? -z[ee] : -X[ee], St = e.elements.arrow, mt = y && St ? Nc(St) : {
        width: 0,
        height: 0
      }, Qe = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : jm(), Ce = Qe[Te], O = Qe[Se], U = Ni(0, X[ee], mt[ee]), Oe = W ? X[ee] / 2 - Xe - U - Ce - Y.mainAxis : Ke - U - Ce - Y.mainAxis, Ne = W ? -X[ee] / 2 + Xe + U + O + Y.mainAxis : Ie + U + O + Y.mainAxis, x = e.elements.arrow && ns(e.elements.arrow), je = x ? j === "y" ? x.clientTop || 0 : x.clientLeft || 0 : 0, m = (ce = Q == null ? void 0 : Q[j]) != null ? ce : 0, _ = oe + Oe - m - je, S = oe + Ne - m, P = Ni(y ? yo(fe, _) : fe, oe, y ? tr(Re, S) : Re);
      B[j] = P, le[j] = P - oe;
    }
    if (a) {
      var I, R = j === "x" ? st : ot, V = j === "x" ? bt : Et, w = B[G], M = G === "y" ? "height" : "width", D = w + C[R], q = w - C[V], J = [st, ot].indexOf(T) !== -1, Z = (I = Q == null ? void 0 : Q[G]) != null ? I : 0, te = J ? D : w - X[M] - z[M] - Z + Y.altAxis, ae = J ? w + X[M] + z[M] - Z - Y.altAxis : q, ye = y && J ? c1(te, w, ae) : Ni(y ? te : D, w, y ? ae : q);
      B[G] = ye, le[G] = ye - w;
    }
    e.modifiersData[r] = le;
  }
}
const zm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: D1,
  requiresIfExists: ["offset"]
};
function R1(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function M1(t) {
  return t === wt(t) || !It(t) ? Rc(t) : R1(t);
}
function k1(t) {
  var e = t.getBoundingClientRect(), n = Hr(e.width) / t.offsetWidth || 1, r = Hr(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function $1(t, e, n) {
  n === void 0 && (n = !1);
  var r = It(e), i = It(e) && k1(e), s = In(e), o = Br(t, i, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Jt(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  kc(s)) && (a = M1(e)), It(e) ? (u = Br(e, !0), u.x += e.clientLeft, u.y += e.clientTop) : s && (u.x = Mc(s))), {
    x: o.left + a.scrollLeft - u.x,
    y: o.top + a.scrollTop - u.y,
    width: o.width,
    height: o.height
  };
}
function L1(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(s) {
    e.set(s.name, s);
  });
  function i(s) {
    n.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function(a) {
      if (!n.has(a)) {
        var u = e.get(a);
        u && i(u);
      }
    }), r.push(s);
  }
  return t.forEach(function(s) {
    n.has(s.name) || i(s);
  }), r;
}
function F1(t) {
  var e = L1(t);
  return $m.reduce(function(n, r) {
    return n.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function j1(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function W1(t) {
  var e = t.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var Ad = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Td() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ea(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, i = e.defaultOptions, s = i === void 0 ? Ad : i;
  return function(a, u, c) {
    c === void 0 && (c = s);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ad, s),
      modifiersData: {},
      elements: {
        reference: a,
        popper: u
      },
      attributes: {},
      styles: {}
    }, p = [], v = !1, y = {
      state: f,
      setOptions: function(T) {
        var K = typeof T == "function" ? T(f.options) : T;
        E(), f.options = Object.assign({}, s, f.options, K), f.scrollParents = {
          reference: rr(a) ? Pi(a) : a.contextElement ? Pi(a.contextElement) : [],
          popper: Pi(u)
        };
        var W = F1(W1([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = W.filter(function(j) {
          return j.enabled;
        }), b(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var T = f.elements, K = T.reference, W = T.popper;
          if (Td(K, W)) {
            f.rects = {
              reference: $1(K, ns(W), f.options.strategy === "fixed"),
              popper: Nc(W)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(Y) {
              return f.modifiersData[Y.name] = Object.assign({}, Y.data);
            });
            for (var j = 0; j < f.orderedModifiers.length; j++) {
              if (f.reset === !0) {
                f.reset = !1, j = -1;
                continue;
              }
              var G = f.orderedModifiers[j], B = G.fn, X = G.options, z = X === void 0 ? {} : X, F = G.name;
              typeof B == "function" && (f = B({
                state: f,
                options: z,
                name: F,
                instance: y
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: j1(function() {
        return new Promise(function(C) {
          y.forceUpdate(), C(f);
        });
      }),
      destroy: function() {
        E(), v = !0;
      }
    };
    if (!Td(a, u))
      return y;
    y.setOptions(c).then(function(C) {
      !v && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function b() {
      f.orderedModifiers.forEach(function(C) {
        var T = C.name, K = C.options, W = K === void 0 ? {} : K, j = C.effect;
        if (typeof j == "function") {
          var G = j({
            state: f,
            name: T,
            instance: y,
            options: W
          }), B = function() {
          };
          p.push(G || B);
        }
      });
    }
    function E() {
      p.forEach(function(C) {
        return C();
      }), p = [];
    }
    return y;
  };
}
var V1 = /* @__PURE__ */ ea(), U1 = [Dc, $c, Ic, Cc], H1 = /* @__PURE__ */ ea({
  defaultModifiers: U1
}), B1 = [Dc, $c, Ic, Cc, Gm, Km, zm, Um, qm], K1 = /* @__PURE__ */ ea({
  defaultModifiers: B1
});
const q1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: Dm,
  afterRead: Nm,
  afterWrite: km,
  applyStyles: Cc,
  arrow: Um,
  auto: Xo,
  basePlacements: ti,
  beforeMain: Pm,
  beforeRead: xm,
  beforeWrite: Rm,
  bottom: bt,
  clippingParents: Am,
  computeStyles: Ic,
  createPopper: K1,
  createPopperBase: V1,
  createPopperLite: H1,
  detectOverflow: qr,
  end: Ur,
  eventListeners: Dc,
  flip: Km,
  hide: qm,
  left: ot,
  main: Im,
  modifierPhases: $m,
  offset: Gm,
  placements: Tc,
  popper: Or,
  popperGenerator: ea,
  popperOffsets: $c,
  preventOverflow: zm,
  read: Cm,
  reference: Tm,
  right: Et,
  start: nr,
  top: st,
  variationPlacements: Il,
  viewport: Ac,
  write: Mm
}, Symbol.toStringTag, { value: "Module" })), G1 = /* @__PURE__ */ Rp(q1);
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t, e) {
  (function(n, r) {
    t.exports = r(G1);
  })($, function(n) {
    function r(h) {
      const l = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
      if (h) {
        for (const d in h)
          if (d !== "default") {
            const g = Object.getOwnPropertyDescriptor(h, d);
            Object.defineProperty(l, d, g.get ? g : {
              enumerable: !0,
              get: () => h[d]
            });
          }
      }
      return l.default = h, Object.freeze(l);
    }
    const i = /* @__PURE__ */ r(n), s = /* @__PURE__ */ new Map(), o = {
      set(h, l, d) {
        s.has(h) || s.set(h, /* @__PURE__ */ new Map());
        const g = s.get(h);
        if (!g.has(l) && g.size !== 0) {
          console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`);
          return;
        }
        g.set(l, d);
      },
      get(h, l) {
        return s.has(h) && s.get(h).get(l) || null;
      },
      remove(h, l) {
        if (!s.has(h))
          return;
        const d = s.get(h);
        d.delete(l), d.size === 0 && s.delete(h);
      }
    }, a = 1e6, u = 1e3, c = "transitionend", f = (h) => (h && window.CSS && window.CSS.escape && (h = h.replace(/#([^\s"#']+)/g, (l, d) => `#${CSS.escape(d)}`)), h), p = (h) => h == null ? `${h}` : Object.prototype.toString.call(h).match(/\s([a-z]+)/i)[1].toLowerCase(), v = (h) => {
      do
        h += Math.floor(Math.random() * a);
      while (document.getElementById(h));
      return h;
    }, y = (h) => {
      if (!h)
        return 0;
      let {
        transitionDuration: l,
        transitionDelay: d
      } = window.getComputedStyle(h);
      const g = Number.parseFloat(l), A = Number.parseFloat(d);
      return !g && !A ? 0 : (l = l.split(",")[0], d = d.split(",")[0], (Number.parseFloat(l) + Number.parseFloat(d)) * u);
    }, b = (h) => {
      h.dispatchEvent(new Event(c));
    }, E = (h) => !h || typeof h != "object" ? !1 : (typeof h.jquery < "u" && (h = h[0]), typeof h.nodeType < "u"), C = (h) => E(h) ? h.jquery ? h[0] : h : typeof h == "string" && h.length > 0 ? document.querySelector(f(h)) : null, T = (h) => {
      if (!E(h) || h.getClientRects().length === 0)
        return !1;
      const l = getComputedStyle(h).getPropertyValue("visibility") === "visible", d = h.closest("details:not([open])");
      if (!d)
        return l;
      if (d !== h) {
        const g = h.closest("summary");
        if (g && g.parentNode !== d || g === null)
          return !1;
      }
      return l;
    }, K = (h) => !h || h.nodeType !== Node.ELEMENT_NODE || h.classList.contains("disabled") ? !0 : typeof h.disabled < "u" ? h.disabled : h.hasAttribute("disabled") && h.getAttribute("disabled") !== "false", W = (h) => {
      if (!document.documentElement.attachShadow)
        return null;
      if (typeof h.getRootNode == "function") {
        const l = h.getRootNode();
        return l instanceof ShadowRoot ? l : null;
      }
      return h instanceof ShadowRoot ? h : h.parentNode ? W(h.parentNode) : null;
    }, j = () => {
    }, G = (h) => {
      h.offsetHeight;
    }, B = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, X = [], z = (h) => {
      document.readyState === "loading" ? (X.length || document.addEventListener("DOMContentLoaded", () => {
        for (const l of X)
          l();
      }), X.push(h)) : h();
    }, F = () => document.documentElement.dir === "rtl", Y = (h) => {
      z(() => {
        const l = B();
        if (l) {
          const d = h.NAME, g = l.fn[d];
          l.fn[d] = h.jQueryInterface, l.fn[d].Constructor = h, l.fn[d].noConflict = () => (l.fn[d] = g, h.jQueryInterface);
        }
      });
    }, Q = (h, l = [], d = h) => typeof h == "function" ? h(...l) : d, le = (h, l, d = !0) => {
      if (!d) {
        Q(h);
        return;
      }
      const A = y(l) + 5;
      let L = !1;
      const k = ({
        target: ue
      }) => {
        ue === l && (L = !0, l.removeEventListener(c, k), Q(h));
      };
      l.addEventListener(c, k), setTimeout(() => {
        L || b(l);
      }, A);
    }, ce = (h, l, d, g) => {
      const A = h.length;
      let L = h.indexOf(l);
      return L === -1 ? !d && g ? h[A - 1] : h[0] : (L += d ? 1 : -1, g && (L = (L + A) % A), h[Math.max(0, Math.min(L, A - 1))]);
    }, Te = /[^.]*(?=\..*)\.|.*/, Se = /\..*/, ee = /::\d+$/, oe = {};
    let fe = 1;
    const Re = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, Xe = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function Ke(h, l) {
      return l && `${l}::${fe++}` || h.uidEvent || fe++;
    }
    function Ie(h) {
      const l = Ke(h);
      return h.uidEvent = l, oe[l] = oe[l] || {}, oe[l];
    }
    function St(h, l) {
      return function d(g) {
        return je(g, {
          delegateTarget: h
        }), d.oneOff && x.off(h, g.type, l), l.apply(h, [g]);
      };
    }
    function mt(h, l, d) {
      return function g(A) {
        const L = h.querySelectorAll(l);
        for (let {
          target: k
        } = A; k && k !== this; k = k.parentNode)
          for (const ue of L)
            if (ue === k)
              return je(A, {
                delegateTarget: k
              }), g.oneOff && x.off(h, A.type, l, d), d.apply(k, [A]);
      };
    }
    function Qe(h, l, d = null) {
      return Object.values(h).find((g) => g.callable === l && g.delegationSelector === d);
    }
    function Ce(h, l, d) {
      const g = typeof l == "string", A = g ? d : l || d;
      let L = Ne(h);
      return Xe.has(L) || (L = h), [g, A, L];
    }
    function O(h, l, d, g, A) {
      if (typeof l != "string" || !h)
        return;
      let [L, k, ue] = Ce(l, d, g);
      l in Re && (k = ((Ov) => function(mr) {
        if (!mr.relatedTarget || mr.relatedTarget !== mr.delegateTarget && !mr.delegateTarget.contains(mr.relatedTarget))
          return Ov.call(this, mr);
      })(k));
      const at = Ie(h), Tt = at[ue] || (at[ue] = {}), We = Qe(Tt, k, L ? d : null);
      if (We) {
        We.oneOff = We.oneOff && A;
        return;
      }
      const Wt = Ke(k, l.replace(Te, "")), Rt = L ? mt(h, d, k) : St(h, k);
      Rt.delegationSelector = L ? d : null, Rt.callable = k, Rt.oneOff = A, Rt.uidEvent = Wt, Tt[Wt] = Rt, h.addEventListener(ue, Rt, L);
    }
    function U(h, l, d, g, A) {
      const L = Qe(l[d], g, A);
      L && (h.removeEventListener(d, L, !!A), delete l[d][L.uidEvent]);
    }
    function Oe(h, l, d, g) {
      const A = l[d] || {};
      for (const [L, k] of Object.entries(A))
        L.includes(g) && U(h, l, d, k.callable, k.delegationSelector);
    }
    function Ne(h) {
      return h = h.replace(Se, ""), Re[h] || h;
    }
    const x = {
      on(h, l, d, g) {
        O(h, l, d, g, !1);
      },
      one(h, l, d, g) {
        O(h, l, d, g, !0);
      },
      off(h, l, d, g) {
        if (typeof l != "string" || !h)
          return;
        const [A, L, k] = Ce(l, d, g), ue = k !== l, at = Ie(h), Tt = at[k] || {}, We = l.startsWith(".");
        if (typeof L < "u") {
          if (!Object.keys(Tt).length)
            return;
          U(h, at, k, L, A ? d : null);
          return;
        }
        if (We)
          for (const Wt of Object.keys(at))
            Oe(h, at, Wt, l.slice(1));
        for (const [Wt, Rt] of Object.entries(Tt)) {
          const gs = Wt.replace(ee, "");
          (!ue || l.includes(gs)) && U(h, at, k, Rt.callable, Rt.delegationSelector);
        }
      },
      trigger(h, l, d) {
        if (typeof l != "string" || !h)
          return null;
        const g = B(), A = Ne(l), L = l !== A;
        let k = null, ue = !0, at = !0, Tt = !1;
        L && g && (k = g.Event(l, d), g(h).trigger(k), ue = !k.isPropagationStopped(), at = !k.isImmediatePropagationStopped(), Tt = k.isDefaultPrevented());
        const We = je(new Event(l, {
          bubbles: ue,
          cancelable: !0
        }), d);
        return Tt && We.preventDefault(), at && h.dispatchEvent(We), We.defaultPrevented && k && k.preventDefault(), We;
      }
    };
    function je(h, l = {}) {
      for (const [d, g] of Object.entries(l))
        try {
          h[d] = g;
        } catch {
          Object.defineProperty(h, d, {
            configurable: !0,
            get() {
              return g;
            }
          });
        }
      return h;
    }
    function m(h) {
      if (h === "true")
        return !0;
      if (h === "false")
        return !1;
      if (h === Number(h).toString())
        return Number(h);
      if (h === "" || h === "null")
        return null;
      if (typeof h != "string")
        return h;
      try {
        return JSON.parse(decodeURIComponent(h));
      } catch {
        return h;
      }
    }
    function _(h) {
      return h.replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`);
    }
    const S = {
      setDataAttribute(h, l, d) {
        h.setAttribute(`data-bs-${_(l)}`, d);
      },
      removeDataAttribute(h, l) {
        h.removeAttribute(`data-bs-${_(l)}`);
      },
      getDataAttributes(h) {
        if (!h)
          return {};
        const l = {}, d = Object.keys(h.dataset).filter((g) => g.startsWith("bs") && !g.startsWith("bsConfig"));
        for (const g of d) {
          let A = g.replace(/^bs/, "");
          A = A.charAt(0).toLowerCase() + A.slice(1, A.length), l[A] = m(h.dataset[g]);
        }
        return l;
      },
      getDataAttribute(h, l) {
        return m(h.getAttribute(`data-bs-${_(l)}`));
      }
    };
    class P {
      // Getters
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
      _getConfig(l) {
        return l = this._mergeConfigObj(l), l = this._configAfterMerge(l), this._typeCheckConfig(l), l;
      }
      _configAfterMerge(l) {
        return l;
      }
      _mergeConfigObj(l, d) {
        const g = E(d) ? S.getDataAttribute(d, "config") : {};
        return {
          ...this.constructor.Default,
          ...typeof g == "object" ? g : {},
          ...E(d) ? S.getDataAttributes(d) : {},
          ...typeof l == "object" ? l : {}
        };
      }
      _typeCheckConfig(l, d = this.constructor.DefaultType) {
        for (const [g, A] of Object.entries(d)) {
          const L = l[g], k = E(L) ? "element" : p(L);
          if (!new RegExp(A).test(k))
            throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${g}" provided type "${k}" but expected type "${A}".`);
        }
      }
    }
    const I = "5.3.2";
    class R extends P {
      constructor(l, d) {
        super(), l = C(l), l && (this._element = l, this._config = this._getConfig(d), o.set(this._element, this.constructor.DATA_KEY, this));
      }
      // Public
      dispose() {
        o.remove(this._element, this.constructor.DATA_KEY), x.off(this._element, this.constructor.EVENT_KEY);
        for (const l of Object.getOwnPropertyNames(this))
          this[l] = null;
      }
      _queueCallback(l, d, g = !0) {
        le(l, d, g);
      }
      _getConfig(l) {
        return l = this._mergeConfigObj(l, this._element), l = this._configAfterMerge(l), this._typeCheckConfig(l), l;
      }
      // Static
      static getInstance(l) {
        return o.get(C(l), this.DATA_KEY);
      }
      static getOrCreateInstance(l, d = {}) {
        return this.getInstance(l) || new this(l, typeof d == "object" ? d : null);
      }
      static get VERSION() {
        return I;
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(l) {
        return `${l}${this.EVENT_KEY}`;
      }
    }
    const V = (h) => {
      let l = h.getAttribute("data-bs-target");
      if (!l || l === "#") {
        let d = h.getAttribute("href");
        if (!d || !d.includes("#") && !d.startsWith("."))
          return null;
        d.includes("#") && !d.startsWith("#") && (d = `#${d.split("#")[1]}`), l = d && d !== "#" ? f(d.trim()) : null;
      }
      return l;
    }, w = {
      find(h, l = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(l, h));
      },
      findOne(h, l = document.documentElement) {
        return Element.prototype.querySelector.call(l, h);
      },
      children(h, l) {
        return [].concat(...h.children).filter((d) => d.matches(l));
      },
      parents(h, l) {
        const d = [];
        let g = h.parentNode.closest(l);
        for (; g; )
          d.push(g), g = g.parentNode.closest(l);
        return d;
      },
      prev(h, l) {
        let d = h.previousElementSibling;
        for (; d; ) {
          if (d.matches(l))
            return [d];
          d = d.previousElementSibling;
        }
        return [];
      },
      // TODO: this is now unused; remove later along with prev()
      next(h, l) {
        let d = h.nextElementSibling;
        for (; d; ) {
          if (d.matches(l))
            return [d];
          d = d.nextElementSibling;
        }
        return [];
      },
      focusableChildren(h) {
        const l = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((d) => `${d}:not([tabindex^="-"])`).join(",");
        return this.find(l, h).filter((d) => !K(d) && T(d));
      },
      getSelectorFromElement(h) {
        const l = V(h);
        return l && w.findOne(l) ? l : null;
      },
      getElementFromSelector(h) {
        const l = V(h);
        return l ? w.findOne(l) : null;
      },
      getMultipleElementsFromSelector(h) {
        const l = V(h);
        return l ? w.find(l) : [];
      }
    }, M = (h, l = "hide") => {
      const d = `click.dismiss${h.EVENT_KEY}`, g = h.NAME;
      x.on(document, d, `[data-bs-dismiss="${g}"]`, function(A) {
        if (["A", "AREA"].includes(this.tagName) && A.preventDefault(), K(this))
          return;
        const L = w.getElementFromSelector(this) || this.closest(`.${g}`);
        h.getOrCreateInstance(L)[l]();
      });
    }, D = "alert", J = ".bs.alert", Z = `close${J}`, te = `closed${J}`, ae = "fade", ye = "show";
    class Ee extends R {
      // Getters
      static get NAME() {
        return D;
      }
      // Public
      close() {
        if (x.trigger(this._element, Z).defaultPrevented)
          return;
        this._element.classList.remove(ye);
        const d = this._element.classList.contains(ae);
        this._queueCallback(() => this._destroyElement(), this._element, d);
      }
      // Private
      _destroyElement() {
        this._element.remove(), x.trigger(this._element, te), this.dispose();
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = Ee.getOrCreateInstance(this);
          if (typeof l == "string") {
            if (d[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            d[l](this);
          }
        });
      }
    }
    M(Ee, "close"), Y(Ee);
    const ke = "button", un = ".bs.button", rs = ".data-api", Dn = "active", ni = '[data-bs-toggle="button"]', et = `click${un}${rs}`;
    class qe extends R {
      // Getters
      static get NAME() {
        return ke;
      }
      // Public
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(Dn));
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = qe.getOrCreateInstance(this);
          l === "toggle" && d[l]();
        });
      }
    }
    x.on(document, et, ni, (h) => {
      h.preventDefault();
      const l = h.target.closest(ni);
      qe.getOrCreateInstance(l).toggle();
    }), Y(qe);
    const is = "swipe", ar = ".bs.swipe", Ym = `touchstart${ar}`, Zm = `touchmove${ar}`, Jm = `touchend${ar}`, Xm = `pointerdown${ar}`, Qm = `pointerup${ar}`, eg = "touch", tg = "pen", ng = "pointer-event", rg = 40, ig = {
      endCallback: null,
      leftCallback: null,
      rightCallback: null
    }, sg = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)"
    };
    class ss extends P {
      constructor(l, d) {
        super(), this._element = l, !(!l || !ss.isSupported()) && (this._config = this._getConfig(d), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
      }
      // Getters
      static get Default() {
        return ig;
      }
      static get DefaultType() {
        return sg;
      }
      static get NAME() {
        return is;
      }
      // Public
      dispose() {
        x.off(this._element, ar);
      }
      // Private
      _start(l) {
        if (!this._supportPointerEvents) {
          this._deltaX = l.touches[0].clientX;
          return;
        }
        this._eventIsPointerPenTouch(l) && (this._deltaX = l.clientX);
      }
      _end(l) {
        this._eventIsPointerPenTouch(l) && (this._deltaX = l.clientX - this._deltaX), this._handleSwipe(), Q(this._config.endCallback);
      }
      _move(l) {
        this._deltaX = l.touches && l.touches.length > 1 ? 0 : l.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const l = Math.abs(this._deltaX);
        if (l <= rg)
          return;
        const d = l / this._deltaX;
        this._deltaX = 0, d && Q(d > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents ? (x.on(this._element, Xm, (l) => this._start(l)), x.on(this._element, Qm, (l) => this._end(l)), this._element.classList.add(ng)) : (x.on(this._element, Ym, (l) => this._start(l)), x.on(this._element, Zm, (l) => this._move(l)), x.on(this._element, Jm, (l) => this._end(l)));
      }
      _eventIsPointerPenTouch(l) {
        return this._supportPointerEvents && (l.pointerType === tg || l.pointerType === eg);
      }
      // Static
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }
    const og = "carousel", fn = ".bs.carousel", Lc = ".data-api", ag = "ArrowLeft", lg = "ArrowRight", cg = 500, ri = "next", lr = "prev", cr = "left", os = "right", ug = `slide${fn}`, ta = `slid${fn}`, fg = `keydown${fn}`, dg = `mouseenter${fn}`, pg = `mouseleave${fn}`, hg = `dragstart${fn}`, mg = `load${fn}${Lc}`, gg = `click${fn}${Lc}`, Fc = "carousel", as = "active", yg = "slide", _g = "carousel-item-end", vg = "carousel-item-start", bg = "carousel-item-next", Eg = "carousel-item-prev", jc = ".active", Wc = ".carousel-item", wg = jc + Wc, Sg = ".carousel-item img", Og = ".carousel-indicators", Ag = "[data-bs-slide], [data-bs-slide-to]", Tg = '[data-bs-ride="carousel"]', xg = {
      [ag]: os,
      [lg]: cr
    }, Cg = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0
    }, Ng = {
      interval: "(number|boolean)",
      // TODO:v6 remove boolean support
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean"
    };
    class ur extends R {
      constructor(l, d) {
        super(l, d), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = w.findOne(Og, this._element), this._addEventListeners(), this._config.ride === Fc && this.cycle();
      }
      // Getters
      static get Default() {
        return Cg;
      }
      static get DefaultType() {
        return Ng;
      }
      static get NAME() {
        return og;
      }
      // Public
      next() {
        this._slide(ri);
      }
      nextWhenVisible() {
        !document.hidden && T(this._element) && this.next();
      }
      prev() {
        this._slide(lr);
      }
      pause() {
        this._isSliding && b(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
      }
      _maybeEnableCycle() {
        if (this._config.ride) {
          if (this._isSliding) {
            x.one(this._element, ta, () => this.cycle());
            return;
          }
          this.cycle();
        }
      }
      to(l) {
        const d = this._getItems();
        if (l > d.length - 1 || l < 0)
          return;
        if (this._isSliding) {
          x.one(this._element, ta, () => this.to(l));
          return;
        }
        const g = this._getItemIndex(this._getActive());
        if (g === l)
          return;
        const A = l > g ? ri : lr;
        this._slide(A, d[l]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      // Private
      _configAfterMerge(l) {
        return l.defaultInterval = l.interval, l;
      }
      _addEventListeners() {
        this._config.keyboard && x.on(this._element, fg, (l) => this._keydown(l)), this._config.pause === "hover" && (x.on(this._element, dg, () => this.pause()), x.on(this._element, pg, () => this._maybeEnableCycle())), this._config.touch && ss.isSupported() && this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const g of w.find(Sg, this._element))
          x.on(g, hg, (A) => A.preventDefault());
        const d = {
          leftCallback: () => this._slide(this._directionToOrder(cr)),
          rightCallback: () => this._slide(this._directionToOrder(os)),
          endCallback: () => {
            this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), cg + this._config.interval));
          }
        };
        this._swipeHelper = new ss(this._element, d);
      }
      _keydown(l) {
        if (/input|textarea/i.test(l.target.tagName))
          return;
        const d = xg[l.key];
        d && (l.preventDefault(), this._slide(this._directionToOrder(d)));
      }
      _getItemIndex(l) {
        return this._getItems().indexOf(l);
      }
      _setActiveIndicatorElement(l) {
        if (!this._indicatorsElement)
          return;
        const d = w.findOne(jc, this._indicatorsElement);
        d.classList.remove(as), d.removeAttribute("aria-current");
        const g = w.findOne(`[data-bs-slide-to="${l}"]`, this._indicatorsElement);
        g && (g.classList.add(as), g.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const l = this._activeElement || this._getActive();
        if (!l)
          return;
        const d = Number.parseInt(l.getAttribute("data-bs-interval"), 10);
        this._config.interval = d || this._config.defaultInterval;
      }
      _slide(l, d = null) {
        if (this._isSliding)
          return;
        const g = this._getActive(), A = l === ri, L = d || ce(this._getItems(), g, A, this._config.wrap);
        if (L === g)
          return;
        const k = this._getItemIndex(L), ue = (gs) => x.trigger(this._element, gs, {
          relatedTarget: L,
          direction: this._orderToDirection(l),
          from: this._getItemIndex(g),
          to: k
        });
        if (ue(ug).defaultPrevented || !g || !L)
          return;
        const Tt = !!this._interval;
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(k), this._activeElement = L;
        const We = A ? vg : _g, Wt = A ? bg : Eg;
        L.classList.add(Wt), G(L), g.classList.add(We), L.classList.add(We);
        const Rt = () => {
          L.classList.remove(We, Wt), L.classList.add(as), g.classList.remove(as, Wt, We), this._isSliding = !1, ue(ta);
        };
        this._queueCallback(Rt, g, this._isAnimated()), Tt && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains(yg);
      }
      _getActive() {
        return w.findOne(wg, this._element);
      }
      _getItems() {
        return w.find(Wc, this._element);
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
      _directionToOrder(l) {
        return F() ? l === cr ? lr : ri : l === cr ? ri : lr;
      }
      _orderToDirection(l) {
        return F() ? l === lr ? cr : os : l === lr ? os : cr;
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = ur.getOrCreateInstance(this, l);
          if (typeof l == "number") {
            d.to(l);
            return;
          }
          if (typeof l == "string") {
            if (d[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
    }
    x.on(document, gg, Ag, function(h) {
      const l = w.getElementFromSelector(this);
      if (!l || !l.classList.contains(Fc))
        return;
      h.preventDefault();
      const d = ur.getOrCreateInstance(l), g = this.getAttribute("data-bs-slide-to");
      if (g) {
        d.to(g), d._maybeEnableCycle();
        return;
      }
      if (S.getDataAttribute(this, "slide") === "next") {
        d.next(), d._maybeEnableCycle();
        return;
      }
      d.prev(), d._maybeEnableCycle();
    }), x.on(window, mg, () => {
      const h = w.find(Tg);
      for (const l of h)
        ur.getOrCreateInstance(l);
    }), Y(ur);
    const Pg = "collapse", ii = ".bs.collapse", Ig = ".data-api", Dg = `show${ii}`, Rg = `shown${ii}`, Mg = `hide${ii}`, kg = `hidden${ii}`, $g = `click${ii}${Ig}`, na = "show", fr = "collapse", ls = "collapsing", Lg = "collapsed", Fg = `:scope .${fr} .${fr}`, jg = "collapse-horizontal", Wg = "width", Vg = "height", Ug = ".collapse.show, .collapse.collapsing", ra = '[data-bs-toggle="collapse"]', Hg = {
      parent: null,
      toggle: !0
    }, Bg = {
      parent: "(null|element)",
      toggle: "boolean"
    };
    class dr extends R {
      constructor(l, d) {
        super(l, d), this._isTransitioning = !1, this._triggerArray = [];
        const g = w.find(ra);
        for (const A of g) {
          const L = w.getSelectorFromElement(A), k = w.find(L).filter((ue) => ue === this._element);
          L !== null && k.length && this._triggerArray.push(A);
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
      }
      // Getters
      static get Default() {
        return Hg;
      }
      static get DefaultType() {
        return Bg;
      }
      static get NAME() {
        return Pg;
      }
      // Public
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown())
          return;
        let l = [];
        if (this._config.parent && (l = this._getFirstLevelChildren(Ug).filter((ue) => ue !== this._element).map((ue) => dr.getOrCreateInstance(ue, {
          toggle: !1
        }))), l.length && l[0]._isTransitioning || x.trigger(this._element, Dg).defaultPrevented)
          return;
        for (const ue of l)
          ue.hide();
        const g = this._getDimension();
        this._element.classList.remove(fr), this._element.classList.add(ls), this._element.style[g] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        const A = () => {
          this._isTransitioning = !1, this._element.classList.remove(ls), this._element.classList.add(fr, na), this._element.style[g] = "", x.trigger(this._element, Rg);
        }, k = `scroll${g[0].toUpperCase() + g.slice(1)}`;
        this._queueCallback(A, this._element, !0), this._element.style[g] = `${this._element[k]}px`;
      }
      hide() {
        if (this._isTransitioning || !this._isShown() || x.trigger(this._element, Mg).defaultPrevented)
          return;
        const d = this._getDimension();
        this._element.style[d] = `${this._element.getBoundingClientRect()[d]}px`, G(this._element), this._element.classList.add(ls), this._element.classList.remove(fr, na);
        for (const A of this._triggerArray) {
          const L = w.getElementFromSelector(A);
          L && !this._isShown(L) && this._addAriaAndCollapsedClass([A], !1);
        }
        this._isTransitioning = !0;
        const g = () => {
          this._isTransitioning = !1, this._element.classList.remove(ls), this._element.classList.add(fr), x.trigger(this._element, kg);
        };
        this._element.style[d] = "", this._queueCallback(g, this._element, !0);
      }
      _isShown(l = this._element) {
        return l.classList.contains(na);
      }
      // Private
      _configAfterMerge(l) {
        return l.toggle = !!l.toggle, l.parent = C(l.parent), l;
      }
      _getDimension() {
        return this._element.classList.contains(jg) ? Wg : Vg;
      }
      _initializeChildren() {
        if (!this._config.parent)
          return;
        const l = this._getFirstLevelChildren(ra);
        for (const d of l) {
          const g = w.getElementFromSelector(d);
          g && this._addAriaAndCollapsedClass([d], this._isShown(g));
        }
      }
      _getFirstLevelChildren(l) {
        const d = w.find(Fg, this._config.parent);
        return w.find(l, this._config.parent).filter((g) => !d.includes(g));
      }
      _addAriaAndCollapsedClass(l, d) {
        if (l.length)
          for (const g of l)
            g.classList.toggle(Lg, !d), g.setAttribute("aria-expanded", d);
      }
      // Static
      static jQueryInterface(l) {
        const d = {};
        return typeof l == "string" && /show|hide/.test(l) && (d.toggle = !1), this.each(function() {
          const g = dr.getOrCreateInstance(this, d);
          if (typeof l == "string") {
            if (typeof g[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            g[l]();
          }
        });
      }
    }
    x.on(document, $g, ra, function(h) {
      (h.target.tagName === "A" || h.delegateTarget && h.delegateTarget.tagName === "A") && h.preventDefault();
      for (const l of w.getMultipleElementsFromSelector(this))
        dr.getOrCreateInstance(l, {
          toggle: !1
        }).toggle();
    }), Y(dr);
    const Vc = "dropdown", Rn = ".bs.dropdown", ia = ".data-api", Kg = "Escape", Uc = "Tab", qg = "ArrowUp", Hc = "ArrowDown", Gg = 2, zg = `hide${Rn}`, Yg = `hidden${Rn}`, Zg = `show${Rn}`, Jg = `shown${Rn}`, Bc = `click${Rn}${ia}`, Kc = `keydown${Rn}${ia}`, Xg = `keyup${Rn}${ia}`, pr = "show", Qg = "dropup", ey = "dropend", ty = "dropstart", ny = "dropup-center", ry = "dropdown-center", Mn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', iy = `${Mn}.${pr}`, cs = ".dropdown-menu", sy = ".navbar", oy = ".navbar-nav", ay = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", ly = F() ? "top-end" : "top-start", cy = F() ? "top-start" : "top-end", uy = F() ? "bottom-end" : "bottom-start", fy = F() ? "bottom-start" : "bottom-end", dy = F() ? "left-start" : "right-start", py = F() ? "right-start" : "left-start", hy = "top", my = "bottom", gy = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    }, yy = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };
    class Dt extends R {
      constructor(l, d) {
        super(l, d), this._popper = null, this._parent = this._element.parentNode, this._menu = w.next(this._element, cs)[0] || w.prev(this._element, cs)[0] || w.findOne(cs, this._parent), this._inNavbar = this._detectNavbar();
      }
      // Getters
      static get Default() {
        return gy;
      }
      static get DefaultType() {
        return yy;
      }
      static get NAME() {
        return Vc;
      }
      // Public
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (K(this._element) || this._isShown())
          return;
        const l = {
          relatedTarget: this._element
        };
        if (!x.trigger(this._element, Zg, l).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(oy))
            for (const g of [].concat(...document.body.children))
              x.on(g, "mouseover", j);
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(pr), this._element.classList.add(pr), x.trigger(this._element, Jg, l);
        }
      }
      hide() {
        if (K(this._element) || !this._isShown())
          return;
        const l = {
          relatedTarget: this._element
        };
        this._completeHide(l);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
      // Private
      _completeHide(l) {
        if (!x.trigger(this._element, zg, l).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const g of [].concat(...document.body.children))
              x.off(g, "mouseover", j);
          this._popper && this._popper.destroy(), this._menu.classList.remove(pr), this._element.classList.remove(pr), this._element.setAttribute("aria-expanded", "false"), S.removeDataAttribute(this._menu, "popper"), x.trigger(this._element, Yg, l);
        }
      }
      _getConfig(l) {
        if (l = super._getConfig(l), typeof l.reference == "object" && !E(l.reference) && typeof l.reference.getBoundingClientRect != "function")
          throw new TypeError(`${Vc.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return l;
      }
      _createPopper() {
        if (typeof i > "u")
          throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let l = this._element;
        this._config.reference === "parent" ? l = this._parent : E(this._config.reference) ? l = C(this._config.reference) : typeof this._config.reference == "object" && (l = this._config.reference);
        const d = this._getPopperConfig();
        this._popper = i.createPopper(l, this._menu, d);
      }
      _isShown() {
        return this._menu.classList.contains(pr);
      }
      _getPlacement() {
        const l = this._parent;
        if (l.classList.contains(ey))
          return dy;
        if (l.classList.contains(ty))
          return py;
        if (l.classList.contains(ny))
          return hy;
        if (l.classList.contains(ry))
          return my;
        const d = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return l.classList.contains(Qg) ? d ? cy : ly : d ? fy : uy;
      }
      _detectNavbar() {
        return this._element.closest(sy) !== null;
      }
      _getOffset() {
        const {
          offset: l
        } = this._config;
        return typeof l == "string" ? l.split(",").map((d) => Number.parseInt(d, 10)) : typeof l == "function" ? (d) => l(d, this._element) : l;
      }
      _getPopperConfig() {
        const l = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || this._config.display === "static") && (S.setDataAttribute(this._menu, "popper", "static"), l.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), {
          ...l,
          ...Q(this._config.popperConfig, [l])
        };
      }
      _selectMenuItem({
        key: l,
        target: d
      }) {
        const g = w.find(ay, this._menu).filter((A) => T(A));
        g.length && ce(g, d, l === Hc, !g.includes(d)).focus();
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = Dt.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (typeof d[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
      static clearMenus(l) {
        if (l.button === Gg || l.type === "keyup" && l.key !== Uc)
          return;
        const d = w.find(iy);
        for (const g of d) {
          const A = Dt.getInstance(g);
          if (!A || A._config.autoClose === !1)
            continue;
          const L = l.composedPath(), k = L.includes(A._menu);
          if (L.includes(A._element) || A._config.autoClose === "inside" && !k || A._config.autoClose === "outside" && k || A._menu.contains(l.target) && (l.type === "keyup" && l.key === Uc || /input|select|option|textarea|form/i.test(l.target.tagName)))
            continue;
          const ue = {
            relatedTarget: A._element
          };
          l.type === "click" && (ue.clickEvent = l), A._completeHide(ue);
        }
      }
      static dataApiKeydownHandler(l) {
        const d = /input|textarea/i.test(l.target.tagName), g = l.key === Kg, A = [qg, Hc].includes(l.key);
        if (!A && !g || d && !g)
          return;
        l.preventDefault();
        const L = this.matches(Mn) ? this : w.prev(this, Mn)[0] || w.next(this, Mn)[0] || w.findOne(Mn, l.delegateTarget.parentNode), k = Dt.getOrCreateInstance(L);
        if (A) {
          l.stopPropagation(), k.show(), k._selectMenuItem(l);
          return;
        }
        k._isShown() && (l.stopPropagation(), k.hide(), L.focus());
      }
    }
    x.on(document, Kc, Mn, Dt.dataApiKeydownHandler), x.on(document, Kc, cs, Dt.dataApiKeydownHandler), x.on(document, Bc, Dt.clearMenus), x.on(document, Xg, Dt.clearMenus), x.on(document, Bc, Mn, function(h) {
      h.preventDefault(), Dt.getOrCreateInstance(this).toggle();
    }), Y(Dt);
    const qc = "backdrop", _y = "fade", Gc = "show", zc = `mousedown.bs.${qc}`, vy = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      // if false, we use the backdrop helper without adding any element to the dom
      rootElement: "body"
      // give the choice to place backdrop under different elements
    }, by = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)"
    };
    class Yc extends P {
      constructor(l) {
        super(), this._config = this._getConfig(l), this._isAppended = !1, this._element = null;
      }
      // Getters
      static get Default() {
        return vy;
      }
      static get DefaultType() {
        return by;
      }
      static get NAME() {
        return qc;
      }
      // Public
      show(l) {
        if (!this._config.isVisible) {
          Q(l);
          return;
        }
        this._append();
        const d = this._getElement();
        this._config.isAnimated && G(d), d.classList.add(Gc), this._emulateAnimation(() => {
          Q(l);
        });
      }
      hide(l) {
        if (!this._config.isVisible) {
          Q(l);
          return;
        }
        this._getElement().classList.remove(Gc), this._emulateAnimation(() => {
          this.dispose(), Q(l);
        });
      }
      dispose() {
        this._isAppended && (x.off(this._element, zc), this._element.remove(), this._isAppended = !1);
      }
      // Private
      _getElement() {
        if (!this._element) {
          const l = document.createElement("div");
          l.className = this._config.className, this._config.isAnimated && l.classList.add(_y), this._element = l;
        }
        return this._element;
      }
      _configAfterMerge(l) {
        return l.rootElement = C(l.rootElement), l;
      }
      _append() {
        if (this._isAppended)
          return;
        const l = this._getElement();
        this._config.rootElement.append(l), x.on(l, zc, () => {
          Q(this._config.clickCallback);
        }), this._isAppended = !0;
      }
      _emulateAnimation(l) {
        le(l, this._getElement(), this._config.isAnimated);
      }
    }
    const Ey = "focustrap", us = ".bs.focustrap", wy = `focusin${us}`, Sy = `keydown.tab${us}`, Oy = "Tab", Ay = "forward", Zc = "backward", Ty = {
      autofocus: !0,
      trapElement: null
      // The element to trap focus inside of
    }, xy = {
      autofocus: "boolean",
      trapElement: "element"
    };
    class Jc extends P {
      constructor(l) {
        super(), this._config = this._getConfig(l), this._isActive = !1, this._lastTabNavDirection = null;
      }
      // Getters
      static get Default() {
        return Ty;
      }
      static get DefaultType() {
        return xy;
      }
      static get NAME() {
        return Ey;
      }
      // Public
      activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), x.off(document, us), x.on(document, wy, (l) => this._handleFocusin(l)), x.on(document, Sy, (l) => this._handleKeydown(l)), this._isActive = !0);
      }
      deactivate() {
        this._isActive && (this._isActive = !1, x.off(document, us));
      }
      // Private
      _handleFocusin(l) {
        const {
          trapElement: d
        } = this._config;
        if (l.target === document || l.target === d || d.contains(l.target))
          return;
        const g = w.focusableChildren(d);
        g.length === 0 ? d.focus() : this._lastTabNavDirection === Zc ? g[g.length - 1].focus() : g[0].focus();
      }
      _handleKeydown(l) {
        l.key === Oy && (this._lastTabNavDirection = l.shiftKey ? Zc : Ay);
      }
    }
    const Xc = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Qc = ".sticky-top", fs = "padding-right", eu = "margin-right";
    class sa {
      constructor() {
        this._element = document.body;
      }
      // Public
      getWidth() {
        const l = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - l);
      }
      hide() {
        const l = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, fs, (d) => d + l), this._setElementAttributes(Xc, fs, (d) => d + l), this._setElementAttributes(Qc, eu, (d) => d - l);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, fs), this._resetElementAttributes(Xc, fs), this._resetElementAttributes(Qc, eu);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      // Private
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
      _setElementAttributes(l, d, g) {
        const A = this.getWidth(), L = (k) => {
          if (k !== this._element && window.innerWidth > k.clientWidth + A)
            return;
          this._saveInitialAttribute(k, d);
          const ue = window.getComputedStyle(k).getPropertyValue(d);
          k.style.setProperty(d, `${g(Number.parseFloat(ue))}px`);
        };
        this._applyManipulationCallback(l, L);
      }
      _saveInitialAttribute(l, d) {
        const g = l.style.getPropertyValue(d);
        g && S.setDataAttribute(l, d, g);
      }
      _resetElementAttributes(l, d) {
        const g = (A) => {
          const L = S.getDataAttribute(A, d);
          if (L === null) {
            A.style.removeProperty(d);
            return;
          }
          S.removeDataAttribute(A, d), A.style.setProperty(d, L);
        };
        this._applyManipulationCallback(l, g);
      }
      _applyManipulationCallback(l, d) {
        if (E(l)) {
          d(l);
          return;
        }
        for (const g of w.find(l, this._element))
          d(g);
      }
    }
    const Cy = "modal", At = ".bs.modal", Ny = ".data-api", Py = "Escape", Iy = `hide${At}`, Dy = `hidePrevented${At}`, tu = `hidden${At}`, nu = `show${At}`, Ry = `shown${At}`, My = `resize${At}`, ky = `click.dismiss${At}`, $y = `mousedown.dismiss${At}`, Ly = `keydown.dismiss${At}`, Fy = `click${At}${Ny}`, ru = "modal-open", jy = "fade", iu = "show", oa = "modal-static", Wy = ".modal.show", Vy = ".modal-dialog", Uy = ".modal-body", Hy = '[data-bs-toggle="modal"]', By = {
      backdrop: !0,
      focus: !0,
      keyboard: !0
    }, Ky = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
    class kn extends R {
      constructor(l, d) {
        super(l, d), this._dialog = w.findOne(Vy, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new sa(), this._addEventListeners();
      }
      // Getters
      static get Default() {
        return By;
      }
      static get DefaultType() {
        return Ky;
      }
      static get NAME() {
        return Cy;
      }
      // Public
      toggle(l) {
        return this._isShown ? this.hide() : this.show(l);
      }
      show(l) {
        this._isShown || this._isTransitioning || x.trigger(this._element, nu, {
          relatedTarget: l
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(ru), this._adjustDialog(), this._backdrop.show(() => this._showElement(l)));
      }
      hide() {
        !this._isShown || this._isTransitioning || x.trigger(this._element, Iy).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(iu), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
      }
      dispose() {
        x.off(window, At), x.off(this._dialog, At), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      // Private
      _initializeBackDrop() {
        return new Yc({
          isVisible: !!this._config.backdrop,
          // 'static' option will be translated to true, and booleans will keep their value,
          isAnimated: this._isAnimated()
        });
      }
      _initializeFocusTrap() {
        return new Jc({
          trapElement: this._element
        });
      }
      _showElement(l) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const d = w.findOne(Uy, this._dialog);
        d && (d.scrollTop = 0), G(this._element), this._element.classList.add(iu);
        const g = () => {
          this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, x.trigger(this._element, Ry, {
            relatedTarget: l
          });
        };
        this._queueCallback(g, this._dialog, this._isAnimated());
      }
      _addEventListeners() {
        x.on(this._element, Ly, (l) => {
          if (l.key === Py) {
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            this._triggerBackdropTransition();
          }
        }), x.on(window, My, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }), x.on(this._element, $y, (l) => {
          x.one(this._element, ky, (d) => {
            if (!(this._element !== l.target || this._element !== d.target)) {
              if (this._config.backdrop === "static") {
                this._triggerBackdropTransition();
                return;
              }
              this._config.backdrop && this.hide();
            }
          });
        });
      }
      _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
          document.body.classList.remove(ru), this._resetAdjustments(), this._scrollBar.reset(), x.trigger(this._element, tu);
        });
      }
      _isAnimated() {
        return this._element.classList.contains(jy);
      }
      _triggerBackdropTransition() {
        if (x.trigger(this._element, Dy).defaultPrevented)
          return;
        const d = this._element.scrollHeight > document.documentElement.clientHeight, g = this._element.style.overflowY;
        g === "hidden" || this._element.classList.contains(oa) || (d || (this._element.style.overflowY = "hidden"), this._element.classList.add(oa), this._queueCallback(() => {
          this._element.classList.remove(oa), this._queueCallback(() => {
            this._element.style.overflowY = g;
          }, this._dialog);
        }, this._dialog), this._element.focus());
      }
      /**
       * The following methods are used to handle overflowing modals
       */
      _adjustDialog() {
        const l = this._element.scrollHeight > document.documentElement.clientHeight, d = this._scrollBar.getWidth(), g = d > 0;
        if (g && !l) {
          const A = F() ? "paddingLeft" : "paddingRight";
          this._element.style[A] = `${d}px`;
        }
        if (!g && l) {
          const A = F() ? "paddingRight" : "paddingLeft";
          this._element.style[A] = `${d}px`;
        }
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
      // Static
      static jQueryInterface(l, d) {
        return this.each(function() {
          const g = kn.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (typeof g[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            g[l](d);
          }
        });
      }
    }
    x.on(document, Fy, Hy, function(h) {
      const l = w.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && h.preventDefault(), x.one(l, nu, (A) => {
        A.defaultPrevented || x.one(l, tu, () => {
          T(this) && this.focus();
        });
      });
      const d = w.findOne(Wy);
      d && kn.getInstance(d).hide(), kn.getOrCreateInstance(l).toggle(this);
    }), M(kn), Y(kn);
    const qy = "offcanvas", Qt = ".bs.offcanvas", su = ".data-api", Gy = `load${Qt}${su}`, zy = "Escape", ou = "show", au = "showing", lu = "hiding", Yy = "offcanvas-backdrop", cu = ".offcanvas.show", Zy = `show${Qt}`, Jy = `shown${Qt}`, Xy = `hide${Qt}`, uu = `hidePrevented${Qt}`, fu = `hidden${Qt}`, Qy = `resize${Qt}`, e_ = `click${Qt}${su}`, t_ = `keydown.dismiss${Qt}`, n_ = '[data-bs-toggle="offcanvas"]', r_ = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    }, i_ = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean"
    };
    class en extends R {
      constructor(l, d) {
        super(l, d), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
      }
      // Getters
      static get Default() {
        return r_;
      }
      static get DefaultType() {
        return i_;
      }
      static get NAME() {
        return qy;
      }
      // Public
      toggle(l) {
        return this._isShown ? this.hide() : this.show(l);
      }
      show(l) {
        if (this._isShown || x.trigger(this._element, Zy, {
          relatedTarget: l
        }).defaultPrevented)
          return;
        this._isShown = !0, this._backdrop.show(), this._config.scroll || new sa().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(au);
        const g = () => {
          (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(ou), this._element.classList.remove(au), x.trigger(this._element, Jy, {
            relatedTarget: l
          });
        };
        this._queueCallback(g, this._element, !0);
      }
      hide() {
        if (!this._isShown || x.trigger(this._element, Xy).defaultPrevented)
          return;
        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(lu), this._backdrop.hide();
        const d = () => {
          this._element.classList.remove(ou, lu), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new sa().reset(), x.trigger(this._element, fu);
        };
        this._queueCallback(d, this._element, !0);
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      // Private
      _initializeBackDrop() {
        const l = () => {
          if (this._config.backdrop === "static") {
            x.trigger(this._element, uu);
            return;
          }
          this.hide();
        }, d = !!this._config.backdrop;
        return new Yc({
          className: Yy,
          isVisible: d,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: d ? l : null
        });
      }
      _initializeFocusTrap() {
        return new Jc({
          trapElement: this._element
        });
      }
      _addEventListeners() {
        x.on(this._element, t_, (l) => {
          if (l.key === zy) {
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            x.trigger(this._element, uu);
          }
        });
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = en.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (d[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            d[l](this);
          }
        });
      }
    }
    x.on(document, e_, n_, function(h) {
      const l = w.getElementFromSelector(this);
      if (["A", "AREA"].includes(this.tagName) && h.preventDefault(), K(this))
        return;
      x.one(l, fu, () => {
        T(this) && this.focus();
      });
      const d = w.findOne(cu);
      d && d !== l && en.getInstance(d).hide(), en.getOrCreateInstance(l).toggle(this);
    }), x.on(window, Gy, () => {
      for (const h of w.find(cu))
        en.getOrCreateInstance(h).show();
    }), x.on(window, Qy, () => {
      for (const h of w.find("[aria-modal][class*=show][class*=offcanvas-]"))
        getComputedStyle(h).position !== "fixed" && en.getOrCreateInstance(h).hide();
    }), M(en), Y(en);
    const du = {
      // Global attributes allowed on any supplied element below.
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    }, s_ = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), o_ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, a_ = (h, l) => {
      const d = h.nodeName.toLowerCase();
      return l.includes(d) ? s_.has(d) ? !!o_.test(h.nodeValue) : !0 : l.filter((g) => g instanceof RegExp).some((g) => g.test(d));
    };
    function l_(h, l, d) {
      if (!h.length)
        return h;
      if (d && typeof d == "function")
        return d(h);
      const A = new window.DOMParser().parseFromString(h, "text/html"), L = [].concat(...A.body.querySelectorAll("*"));
      for (const k of L) {
        const ue = k.nodeName.toLowerCase();
        if (!Object.keys(l).includes(ue)) {
          k.remove();
          continue;
        }
        const at = [].concat(...k.attributes), Tt = [].concat(l["*"] || [], l[ue] || []);
        for (const We of at)
          a_(We, Tt) || k.removeAttribute(We.nodeName);
      }
      return A.body.innerHTML;
    }
    const c_ = "TemplateFactory", u_ = {
      allowList: du,
      content: {},
      // { selector : text ,  selector2 : text2 , }
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>"
    }, f_ = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string"
    }, d_ = {
      entry: "(string|element|function|null)",
      selector: "(string|element)"
    };
    class p_ extends P {
      constructor(l) {
        super(), this._config = this._getConfig(l);
      }
      // Getters
      static get Default() {
        return u_;
      }
      static get DefaultType() {
        return f_;
      }
      static get NAME() {
        return c_;
      }
      // Public
      getContent() {
        return Object.values(this._config.content).map((l) => this._resolvePossibleFunction(l)).filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(l) {
        return this._checkContent(l), this._config.content = {
          ...this._config.content,
          ...l
        }, this;
      }
      toHtml() {
        const l = document.createElement("div");
        l.innerHTML = this._maybeSanitize(this._config.template);
        for (const [A, L] of Object.entries(this._config.content))
          this._setContent(l, L, A);
        const d = l.children[0], g = this._resolvePossibleFunction(this._config.extraClass);
        return g && d.classList.add(...g.split(" ")), d;
      }
      // Private
      _typeCheckConfig(l) {
        super._typeCheckConfig(l), this._checkContent(l.content);
      }
      _checkContent(l) {
        for (const [d, g] of Object.entries(l))
          super._typeCheckConfig({
            selector: d,
            entry: g
          }, d_);
      }
      _setContent(l, d, g) {
        const A = w.findOne(g, l);
        if (A) {
          if (d = this._resolvePossibleFunction(d), !d) {
            A.remove();
            return;
          }
          if (E(d)) {
            this._putElementInTemplate(C(d), A);
            return;
          }
          if (this._config.html) {
            A.innerHTML = this._maybeSanitize(d);
            return;
          }
          A.textContent = d;
        }
      }
      _maybeSanitize(l) {
        return this._config.sanitize ? l_(l, this._config.allowList, this._config.sanitizeFn) : l;
      }
      _resolvePossibleFunction(l) {
        return Q(l, [this]);
      }
      _putElementInTemplate(l, d) {
        if (this._config.html) {
          d.innerHTML = "", d.append(l);
          return;
        }
        d.textContent = l.textContent;
      }
    }
    const h_ = "tooltip", m_ = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), aa = "fade", g_ = "modal", ds = "show", y_ = ".tooltip-inner", pu = `.${g_}`, hu = "hide.bs.modal", si = "hover", la = "focus", __ = "click", v_ = "manual", b_ = "hide", E_ = "hidden", w_ = "show", S_ = "shown", O_ = "inserted", A_ = "click", T_ = "focusin", x_ = "focusout", C_ = "mouseenter", N_ = "mouseleave", P_ = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: F() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: F() ? "right" : "left"
    }, I_ = {
      allowList: du,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus"
    }, D_ = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string"
    };
    class $n extends R {
      constructor(l, d) {
        if (typeof i > "u")
          throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(l, d), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
      }
      // Getters
      static get Default() {
        return I_;
      }
      static get DefaultType() {
        return D_;
      }
      static get NAME() {
        return h_;
      }
      // Public
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        if (this._isEnabled) {
          if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
            this._leave();
            return;
          }
          this._enter();
        }
      }
      dispose() {
        clearTimeout(this._timeout), x.off(this._element.closest(pu), hu, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled))
          return;
        const l = x.trigger(this._element, this.constructor.eventName(w_)), g = (W(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (l.defaultPrevented || !g)
          return;
        this._disposePopper();
        const A = this._getTipElement();
        this._element.setAttribute("aria-describedby", A.getAttribute("id"));
        const {
          container: L
        } = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (L.append(A), x.trigger(this._element, this.constructor.eventName(O_))), this._popper = this._createPopper(A), A.classList.add(ds), "ontouchstart" in document.documentElement)
          for (const ue of [].concat(...document.body.children))
            x.on(ue, "mouseover", j);
        const k = () => {
          x.trigger(this._element, this.constructor.eventName(S_)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
        };
        this._queueCallback(k, this.tip, this._isAnimated());
      }
      hide() {
        if (!this._isShown() || x.trigger(this._element, this.constructor.eventName(b_)).defaultPrevented)
          return;
        if (this._getTipElement().classList.remove(ds), "ontouchstart" in document.documentElement)
          for (const A of [].concat(...document.body.children))
            x.off(A, "mouseover", j);
        this._activeTrigger[__] = !1, this._activeTrigger[la] = !1, this._activeTrigger[si] = !1, this._isHovered = null;
        const g = () => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), x.trigger(this._element, this.constructor.eventName(E_)));
        };
        this._queueCallback(g, this.tip, this._isAnimated());
      }
      update() {
        this._popper && this._popper.update();
      }
      // Protected
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
      _createTipElement(l) {
        const d = this._getTemplateFactory(l).toHtml();
        if (!d)
          return null;
        d.classList.remove(aa, ds), d.classList.add(`bs-${this.constructor.NAME}-auto`);
        const g = v(this.constructor.NAME).toString();
        return d.setAttribute("id", g), this._isAnimated() && d.classList.add(aa), d;
      }
      setContent(l) {
        this._newContent = l, this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(l) {
        return this._templateFactory ? this._templateFactory.changeContent(l) : this._templateFactory = new p_({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content: l,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        }), this._templateFactory;
      }
      _getContentForTemplate() {
        return {
          [y_]: this._getTitle()
        };
      }
      _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
      // Private
      _initializeOnDelegatedTarget(l) {
        return this.constructor.getOrCreateInstance(l.delegateTarget, this._getDelegateConfig());
      }
      _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(aa);
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(ds);
      }
      _createPopper(l) {
        const d = Q(this._config.placement, [this, l, this._element]), g = P_[d.toUpperCase()];
        return i.createPopper(this._element, l, this._getPopperConfig(g));
      }
      _getOffset() {
        const {
          offset: l
        } = this._config;
        return typeof l == "string" ? l.split(",").map((d) => Number.parseInt(d, 10)) : typeof l == "function" ? (d) => l(d, this._element) : l;
      }
      _resolvePossibleFunction(l) {
        return Q(l, [this._element]);
      }
      _getPopperConfig(l) {
        const d = {
          placement: l,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: `.${this.constructor.NAME}-arrow`
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (g) => {
              this._getTipElement().setAttribute("data-popper-placement", g.state.placement);
            }
          }]
        };
        return {
          ...d,
          ...Q(this._config.popperConfig, [d])
        };
      }
      _setListeners() {
        const l = this._config.trigger.split(" ");
        for (const d of l)
          if (d === "click")
            x.on(this._element, this.constructor.eventName(A_), this._config.selector, (g) => {
              this._initializeOnDelegatedTarget(g).toggle();
            });
          else if (d !== v_) {
            const g = d === si ? this.constructor.eventName(C_) : this.constructor.eventName(T_), A = d === si ? this.constructor.eventName(N_) : this.constructor.eventName(x_);
            x.on(this._element, g, this._config.selector, (L) => {
              const k = this._initializeOnDelegatedTarget(L);
              k._activeTrigger[L.type === "focusin" ? la : si] = !0, k._enter();
            }), x.on(this._element, A, this._config.selector, (L) => {
              const k = this._initializeOnDelegatedTarget(L);
              k._activeTrigger[L.type === "focusout" ? la : si] = k._element.contains(L.relatedTarget), k._leave();
            });
          }
        this._hideModalHandler = () => {
          this._element && this.hide();
        }, x.on(this._element.closest(pu), hu, this._hideModalHandler);
      }
      _fixTitle() {
        const l = this._element.getAttribute("title");
        l && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", l), this._element.setAttribute("data-bs-original-title", l), this._element.removeAttribute("title"));
      }
      _enter() {
        if (this._isShown() || this._isHovered) {
          this._isHovered = !0;
          return;
        }
        this._isHovered = !0, this._setTimeout(() => {
          this._isHovered && this.show();
        }, this._config.delay.show);
      }
      _leave() {
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
      }
      _setTimeout(l, d) {
        clearTimeout(this._timeout), this._timeout = setTimeout(l, d);
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(l) {
        const d = S.getDataAttributes(this._element);
        for (const g of Object.keys(d))
          m_.has(g) && delete d[g];
        return l = {
          ...d,
          ...typeof l == "object" && l ? l : {}
        }, l = this._mergeConfigObj(l), l = this._configAfterMerge(l), this._typeCheckConfig(l), l;
      }
      _configAfterMerge(l) {
        return l.container = l.container === !1 ? document.body : C(l.container), typeof l.delay == "number" && (l.delay = {
          show: l.delay,
          hide: l.delay
        }), typeof l.title == "number" && (l.title = l.title.toString()), typeof l.content == "number" && (l.content = l.content.toString()), l;
      }
      _getDelegateConfig() {
        const l = {};
        for (const [d, g] of Object.entries(this._config))
          this.constructor.Default[d] !== g && (l[d] = g);
        return l.selector = !1, l.trigger = "manual", l;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = $n.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (typeof d[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
    }
    Y($n);
    const R_ = "popover", M_ = ".popover-header", k_ = ".popover-body", $_ = {
      ...$n.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    }, L_ = {
      ...$n.DefaultType,
      content: "(null|string|element|function)"
    };
    class ps extends $n {
      // Getters
      static get Default() {
        return $_;
      }
      static get DefaultType() {
        return L_;
      }
      static get NAME() {
        return R_;
      }
      // Overrides
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      // Private
      _getContentForTemplate() {
        return {
          [M_]: this._getTitle(),
          [k_]: this._getContent()
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = ps.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (typeof d[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
    }
    Y(ps);
    const F_ = "scrollspy", ca = ".bs.scrollspy", j_ = ".data-api", W_ = `activate${ca}`, mu = `click${ca}`, V_ = `load${ca}${j_}`, U_ = "dropdown-item", hr = "active", H_ = '[data-bs-spy="scroll"]', ua = "[href]", B_ = ".nav, .list-group", gu = ".nav-link", K_ = `${gu}, .nav-item > ${gu}, .list-group-item`, q_ = ".dropdown", G_ = ".dropdown-toggle", z_ = {
      offset: null,
      // TODO: v6 @deprecated, keep it for backwards compatibility reasons
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1]
    }, Y_ = {
      offset: "(number|null)",
      // TODO v6 @deprecated, keep it for backwards compatibility reasons
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array"
    };
    class oi extends R {
      constructor(l, d) {
        super(l, d), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
          visibleEntryTop: 0,
          parentScrollTop: 0
        }, this.refresh();
      }
      // Getters
      static get Default() {
        return z_;
      }
      static get DefaultType() {
        return Y_;
      }
      static get NAME() {
        return F_;
      }
      // Public
      refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const l of this._observableSections.values())
          this._observer.observe(l);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      // Private
      _configAfterMerge(l) {
        return l.target = C(l.target) || document.body, l.rootMargin = l.offset ? `${l.offset}px 0px -30%` : l.rootMargin, typeof l.threshold == "string" && (l.threshold = l.threshold.split(",").map((d) => Number.parseFloat(d))), l;
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll && (x.off(this._config.target, mu), x.on(this._config.target, mu, ua, (l) => {
          const d = this._observableSections.get(l.target.hash);
          if (d) {
            l.preventDefault();
            const g = this._rootElement || window, A = d.offsetTop - this._element.offsetTop;
            if (g.scrollTo) {
              g.scrollTo({
                top: A,
                behavior: "smooth"
              });
              return;
            }
            g.scrollTop = A;
          }
        }));
      }
      _getNewObserver() {
        const l = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver((d) => this._observerCallback(d), l);
      }
      // The logic of selection
      _observerCallback(l) {
        const d = (k) => this._targetLinks.get(`#${k.target.id}`), g = (k) => {
          this._previousScrollData.visibleEntryTop = k.target.offsetTop, this._process(d(k));
        }, A = (this._rootElement || document.documentElement).scrollTop, L = A >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = A;
        for (const k of l) {
          if (!k.isIntersecting) {
            this._activeTarget = null, this._clearActiveClass(d(k));
            continue;
          }
          const ue = k.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (L && ue) {
            if (g(k), !A)
              return;
            continue;
          }
          !L && !ue && g(k);
        }
      }
      _initializeTargetsAndObservables() {
        this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
        const l = w.find(ua, this._config.target);
        for (const d of l) {
          if (!d.hash || K(d))
            continue;
          const g = w.findOne(decodeURI(d.hash), this._element);
          T(g) && (this._targetLinks.set(decodeURI(d.hash), d), this._observableSections.set(d.hash, g));
        }
      }
      _process(l) {
        this._activeTarget !== l && (this._clearActiveClass(this._config.target), this._activeTarget = l, l.classList.add(hr), this._activateParents(l), x.trigger(this._element, W_, {
          relatedTarget: l
        }));
      }
      _activateParents(l) {
        if (l.classList.contains(U_)) {
          w.findOne(G_, l.closest(q_)).classList.add(hr);
          return;
        }
        for (const d of w.parents(l, B_))
          for (const g of w.prev(d, K_))
            g.classList.add(hr);
      }
      _clearActiveClass(l) {
        l.classList.remove(hr);
        const d = w.find(`${ua}.${hr}`, l);
        for (const g of d)
          g.classList.remove(hr);
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = oi.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (d[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
    }
    x.on(window, V_, () => {
      for (const h of w.find(H_))
        oi.getOrCreateInstance(h);
    }), Y(oi);
    const Z_ = "tab", Ln = ".bs.tab", J_ = `hide${Ln}`, X_ = `hidden${Ln}`, Q_ = `show${Ln}`, ev = `shown${Ln}`, tv = `click${Ln}`, nv = `keydown${Ln}`, rv = `load${Ln}`, iv = "ArrowLeft", yu = "ArrowRight", sv = "ArrowUp", _u = "ArrowDown", fa = "Home", vu = "End", Fn = "active", bu = "fade", da = "show", ov = "dropdown", Eu = ".dropdown-toggle", av = ".dropdown-menu", pa = `:not(${Eu})`, lv = '.list-group, .nav, [role="tablist"]', cv = ".nav-item, .list-group-item", uv = `.nav-link${pa}, .list-group-item${pa}, [role="tab"]${pa}`, wu = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', ha = `${uv}, ${wu}`, fv = `.${Fn}[data-bs-toggle="tab"], .${Fn}[data-bs-toggle="pill"], .${Fn}[data-bs-toggle="list"]`;
    class jn extends R {
      constructor(l) {
        super(l), this._parent = this._element.closest(lv), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), x.on(this._element, nv, (d) => this._keydown(d)));
      }
      // Getters
      static get NAME() {
        return Z_;
      }
      // Public
      show() {
        const l = this._element;
        if (this._elemIsActive(l))
          return;
        const d = this._getActiveElem(), g = d ? x.trigger(d, J_, {
          relatedTarget: l
        }) : null;
        x.trigger(l, Q_, {
          relatedTarget: d
        }).defaultPrevented || g && g.defaultPrevented || (this._deactivate(d, l), this._activate(l, d));
      }
      // Private
      _activate(l, d) {
        if (!l)
          return;
        l.classList.add(Fn), this._activate(w.getElementFromSelector(l));
        const g = () => {
          if (l.getAttribute("role") !== "tab") {
            l.classList.add(da);
            return;
          }
          l.removeAttribute("tabindex"), l.setAttribute("aria-selected", !0), this._toggleDropDown(l, !0), x.trigger(l, ev, {
            relatedTarget: d
          });
        };
        this._queueCallback(g, l, l.classList.contains(bu));
      }
      _deactivate(l, d) {
        if (!l)
          return;
        l.classList.remove(Fn), l.blur(), this._deactivate(w.getElementFromSelector(l));
        const g = () => {
          if (l.getAttribute("role") !== "tab") {
            l.classList.remove(da);
            return;
          }
          l.setAttribute("aria-selected", !1), l.setAttribute("tabindex", "-1"), this._toggleDropDown(l, !1), x.trigger(l, X_, {
            relatedTarget: d
          });
        };
        this._queueCallback(g, l, l.classList.contains(bu));
      }
      _keydown(l) {
        if (![iv, yu, sv, _u, fa, vu].includes(l.key))
          return;
        l.stopPropagation(), l.preventDefault();
        const d = this._getChildren().filter((A) => !K(A));
        let g;
        if ([fa, vu].includes(l.key))
          g = d[l.key === fa ? 0 : d.length - 1];
        else {
          const A = [yu, _u].includes(l.key);
          g = ce(d, l.target, A, !0);
        }
        g && (g.focus({
          preventScroll: !0
        }), jn.getOrCreateInstance(g).show());
      }
      _getChildren() {
        return w.find(ha, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((l) => this._elemIsActive(l)) || null;
      }
      _setInitialAttributes(l, d) {
        this._setAttributeIfNotExists(l, "role", "tablist");
        for (const g of d)
          this._setInitialAttributesOnChild(g);
      }
      _setInitialAttributesOnChild(l) {
        l = this._getInnerElement(l);
        const d = this._elemIsActive(l), g = this._getOuterElement(l);
        l.setAttribute("aria-selected", d), g !== l && this._setAttributeIfNotExists(g, "role", "presentation"), d || l.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(l, "role", "tab"), this._setInitialAttributesOnTargetPanel(l);
      }
      _setInitialAttributesOnTargetPanel(l) {
        const d = w.getElementFromSelector(l);
        d && (this._setAttributeIfNotExists(d, "role", "tabpanel"), l.id && this._setAttributeIfNotExists(d, "aria-labelledby", `${l.id}`));
      }
      _toggleDropDown(l, d) {
        const g = this._getOuterElement(l);
        if (!g.classList.contains(ov))
          return;
        const A = (L, k) => {
          const ue = w.findOne(L, g);
          ue && ue.classList.toggle(k, d);
        };
        A(Eu, Fn), A(av, da), g.setAttribute("aria-expanded", d);
      }
      _setAttributeIfNotExists(l, d, g) {
        l.hasAttribute(d) || l.setAttribute(d, g);
      }
      _elemIsActive(l) {
        return l.classList.contains(Fn);
      }
      // Try to get the inner element (usually the .nav-link)
      _getInnerElement(l) {
        return l.matches(ha) ? l : w.findOne(ha, l);
      }
      // Try to get the outer element (usually the .nav-item)
      _getOuterElement(l) {
        return l.closest(cv) || l;
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = jn.getOrCreateInstance(this);
          if (typeof l == "string") {
            if (d[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
    }
    x.on(document, tv, wu, function(h) {
      ["A", "AREA"].includes(this.tagName) && h.preventDefault(), !K(this) && jn.getOrCreateInstance(this).show();
    }), x.on(window, rv, () => {
      for (const h of w.find(fv))
        jn.getOrCreateInstance(h);
    }), Y(jn);
    const dv = "toast", dn = ".bs.toast", pv = `mouseover${dn}`, hv = `mouseout${dn}`, mv = `focusin${dn}`, gv = `focusout${dn}`, yv = `hide${dn}`, _v = `hidden${dn}`, vv = `show${dn}`, bv = `shown${dn}`, Ev = "fade", Su = "hide", hs = "show", ms = "showing", wv = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    }, Sv = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
    class ai extends R {
      constructor(l, d) {
        super(l, d), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
      }
      // Getters
      static get Default() {
        return Sv;
      }
      static get DefaultType() {
        return wv;
      }
      static get NAME() {
        return dv;
      }
      // Public
      show() {
        if (x.trigger(this._element, vv).defaultPrevented)
          return;
        this._clearTimeout(), this._config.animation && this._element.classList.add(Ev);
        const d = () => {
          this._element.classList.remove(ms), x.trigger(this._element, bv), this._maybeScheduleHide();
        };
        this._element.classList.remove(Su), G(this._element), this._element.classList.add(hs, ms), this._queueCallback(d, this._element, this._config.animation);
      }
      hide() {
        if (!this.isShown() || x.trigger(this._element, yv).defaultPrevented)
          return;
        const d = () => {
          this._element.classList.add(Su), this._element.classList.remove(ms, hs), x.trigger(this._element, _v);
        };
        this._element.classList.add(ms), this._queueCallback(d, this._element, this._config.animation);
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(hs), super.dispose();
      }
      isShown() {
        return this._element.classList.contains(hs);
      }
      // Private
      _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
      }
      _onInteraction(l, d) {
        switch (l.type) {
          case "mouseover":
          case "mouseout": {
            this._hasMouseInteraction = d;
            break;
          }
          case "focusin":
          case "focusout": {
            this._hasKeyboardInteraction = d;
            break;
          }
        }
        if (d) {
          this._clearTimeout();
          return;
        }
        const g = l.relatedTarget;
        this._element === g || this._element.contains(g) || this._maybeScheduleHide();
      }
      _setListeners() {
        x.on(this._element, pv, (l) => this._onInteraction(l, !0)), x.on(this._element, hv, (l) => this._onInteraction(l, !1)), x.on(this._element, mv, (l) => this._onInteraction(l, !0)), x.on(this._element, gv, (l) => this._onInteraction(l, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = ai.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (typeof d[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            d[l](this);
          }
        });
      }
    }
    return M(ai), Y(ai), {
      Alert: Ee,
      Button: qe,
      Carousel: ur,
      Collapse: dr,
      Dropdown: Dt,
      Modal: kn,
      Offcanvas: en,
      Popover: ps,
      ScrollSpy: oi,
      Tab: jn,
      Toast: ai,
      Tooltip: $n
    };
  });
})(i1);
try {
  const t = () => {
    const n = sw(r1), r = cw();
    n.use(r), n.mount("#app");
  }, e = [6480610];
  typeof kintone < "u" ? kintone.events.on("app.record.index.show", (n) => (!n.viewId || !e.includes(Number(n.viewId)) || t(), n)) : (t(), console.log("kintone view not run"));
} catch {
}
