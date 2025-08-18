// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 2172:
case 1727:
case 399:
case 2215:
case 1851:
case 164:
case 3335:
case 3246:
case 466:
case 1209:
case 3377:
case 1195:
case 178:
case 1704:
case 3915:
case 1016:
case 2871:
case 229:
case 1152:
case 2946:
case 2853:
case 1629:
case 1546:
case 3894:
case 705:
case 1150:
case 1619:
case 1341:
case 915:
case 112:
case 2018:
case 838:
case 1149:
case 419:
case 3106:
case 2343:
case 2031:
case 1948:
case 606:
case 300:
case 3698:
case 3084:
case 1187:
case 1901:
case 971:
case 2135:
case 3261:
case 3372:
case 1963:
case 3879:
case 708:
case 842:
case 3203:
case 3636:
case 4038:
case 1308:
case 1157:
case 1881:
case 1366:
case 277:
case 2093:
case 3039:
case 3613:
case 2306:
case 3143:
case 1182:
case 175:
case 972:
case 2563:
case 884:
case 841:
case 2883:
case 632:
case 70:
case 3069:
case 3196:
case 410:
case 1245:
case 1518:
case 91:
case 2652:
case 1336:
case 2473:
case 757:
case 309:
case 2928:
case 3804:
case 2046:
case 3599:
case 2695:
case 214:
case 3228:
case 2321:
case 650:
case 3015:
case 1453:
case 356:
case 1916:
case 2516:
case 1933:
case 2687:
case 1794:
case 795:
case 2284:
case 1926:
case 3218:
case 2311:
case 3545:
case 2338:
case 3231:
case 262:
case 1528:
case 126:
case 1048:
case 696:
case 3817:
case 2650:
case 3447:
case 3666:
case 2918:
case 1105:
case 3489:
case 798:
case 2254:
case 3810:
case 3329:
case 2740:
case 1063:
case 2657:
case 3440:
case 64:
case 3822:
case 2680:
case 603:
case 1593:
case 2003:
case 3459:
case 334:
case 463:
case 3781:
case 2993:
case 3111:
case 3434:
case 2239:
case 3820:
case 687:
case 3442:
case 83:
case 3574:
case 3420:
case 1306:
case 2182:
case 3349:
case 4036:
case 1563:
case 3638:
case 3412:
case 2712:
case 4023:
case 413:
case 2091:
case 1501:
case 2881:
case 653:
case 740:
case 2366:
case 1093:
case 332:
case 2561:
case 1961:
case 2157:
case 3621:
case 837:
case 4013:
case 2180:
case 2722:
case 3395:
case 3074:
case 3422:
case 516:
case 1225:
case 2149:
case 2665:
case 3417:
case 1031:
case 917:
case 359:
case 1170:
case 3889:
case 707:
case 1605:
case 600:
case 2619:
case 2341:
case 306:
case 3248:
case 3515:
case 3108:
case 2016:
case 3404:
case 129:
case 699:
case 3525:
case 1269:
case 783:
case 3357:
case 3045:
case 1946:
case 1853:
case 2629:
case 1172:
case 1764:
case 1028:
case 1215:
case 264:
case 1548:
case 3380:
case 2209:
case 569:
case 1239:
case 786:
case 3113:
case 2483:
case 3783:
case 3305:
case 2398:
case 3291:
case 3554:
case 1682:
case 4041:
case 1003:
case 1759:
case 3539:
case 3974:
case 974:
case 303:
case 634:
case 3136:
case 2779:
case 3479:
case 882:
case 965:
case 162:
case 226:
case 3233:
case 2313:
case 1119:
case 1918:
case 3226:
case 1789:
case 2670:
case 2794:
case 690:
case 120:
case 469:
case 2926:
case 3606:
case 1165:
case 522:
case 3999:
case 1046:
case 1695:
case 114:
case 755:
case 1321:
case 2916:
case 3668:
case 3864:
case 1129:
case 1451:
case 161:
case 1652:
case 2336:
case 1928:
case 248:
case 3016:
case 2404:
case 3704:
case 3152:
case 492:
case 311:
case 2909:
case 3629:
case 2045:
case 3727:
case 4005:
case 2427:
case 364:
case 1335:
case 501:
case 1246:
case 3195:
case 2380:
case 3149:
case 2382:
case 2417:
case 554:
case 3948:
case 100:
case 259:
case 2099:
case 3546:
case 3619:
case 312:
case 3033:
case 3341:
case 206:
case 2248:
case 491:
case 1636:
case 2352:
case 1054:
case 231:
case 2621:
case 3901:
case 1372:
case 2395:
case 1203:
case 1879:
case 3180:
case 3722:
case 1143:
case 2420:
case 536:
case 153:
case 2638:
case 3712:
case 2842:
case 1370:
case 2387:
case 2412:
case 3366:
case 147:
case 1039:
case 2141:
case 3561:
case 2350:
case 661:
case 454:
case 2009:
case 4050:
case 1804:
case 3471:
case 533:
case 3453:
case 2864:
case 3518:
case 3531:
case 3245:
case 1751:
case 4087:
case 865:
case 2216:
case 3336:
case 109:
case 4049:
case 614:
case 1984:
case 190:
case 3313:
case 326:
case 2233:
case 3048:
case 1666:
case 3299:
case 3105:
case 1489:
case 2198:
case 3933:
case 401:
case 3670:
case 727:
case 1025:
case 3926:
case 1231:
case 4052:
case 779:
case 3593:
case 1121:
case 24:
case 3635:
case 134:
case 37:
case 944:
case 203:
case 1810:
case 2123:
case 2479:
case 2136:
case 3779:
case 1820:
case 2113:
case 4080:
case 982:
case 2783:
case 1574:
case 287:
case 4057:
case 3398:
case 2554:
case 1138:
case 2643:
case 1365:
case 377:
case 3093:
case 935:
case 2039:
case 1141:
case 1350:
case 2143:
case 1349:
case 1420:
case 942:
case 145:
case 253:
case 2370:
case 3883:
case 1412:
case 3501:
case 3135:
case 984:
case 1410:
case 3368:
case 2261:
case 1840:
case 193:
case 1395:
case 3177:
case 2879:
case 2636:
case 3961:
case 3903:
case 1859:
case 2623:
case 2054:
case 1263:
case 28:
case 2894:
case 2509:
case 3605:
case 1248:
case 1569:
case 1382:
case 2106:
case 1847:
case 3018:
case 612:
case 4029:
case 3170:
case 200:
case 2464:
case 3028:
case 3172:
case 2168:
case 3764:
case 2335:
case 3548:
case 3215:
case 678:
case 2246:
case 1380:
case 2969:
case 938:
case 451:
case 3871:
case 1108:
case 2915:
case 4065:
case 329:
case 3269:
case 1525:
case 72:
case 1045:
case 3481:
case 2781:
case 1554:
case 2138:
case 1643:
case 2365:
case 3682:
case 1113:
case 3239:
case 4077:
case 285:
case 1783:
case 2812:
case 2574:
case 93:
case 1974:
case 430:
case 3254:
case 103:
case 3740:
case 67:
case 3591:
case 1136:
case 2822:
case 3680:
case 1539:
case 2459:
case 14:
case 2121:
case 3061:
case 3687:
case 3516:
case 1494:
case 3284:
case 2025:
case 3649:
case 1606:
case 2545:
case 2231:
case 3311:
case 3650:
case 2447:
case 3119:
case 2817:
case 3931:
case 2666:
case 3789:
case 1226:
case 2489:
case 2069:
case 2827:
case 1864:
case 552:
case 2196:
case 504:
case 2751:
case 1216:
case 2773:
case 1584:
case 2608:
case 150:
case 3046:
case 1771:
case 2599:
case 1009:
case 288:
case 2804:
case 773:
case 2228:
case 3321:
case 2015:
case 867:
case 1792:
case 849:
case 1011:
case 1038:
case 2941:
case 3475:
case 423:
case 3800:
case 1856:
case 1943:
case 3693:
case 2639:
case 3241:
case 3535:
case 2013:
case 782:
case 886:
case 1878:
case 2023:
case 2654:
case 3163:
case 57:
case 3980:
case 858:
case 3802:
case 639:
case 1235:
case 3957:
case 979:
case 1346:
case 1277:
case 2249:
case 3631:
case 4016:
case 3618:
case 1125:
case 2287:
case 927:
case 1508:
case 260:
case 3266:
case 3005:
case 3949:
case 3148:
case 2744:
case 3814:
case 222:
case 3444:
case 2250:
case 3572:
case 166:
case 119:
case 2301:
case 652:
case 3824:
case 2363:
case 1169:
case 4026:
case 1115:
case 3430:
case 3952:
case 2730:
case 1566:
case 1785:
case 391:
case 4033:
case 2295:
case 1303:
case 630:
case 3892:
case 336:
case 1139:
case 3213:
case 47:
case 3399:
case 970:
case 1700:
case 2326:
case 1536:
case 3191:
case 4063:
case 3756:
case 1523:
case 3855:
case 3082:
case 1043:
case 2478:
case 3080:
case 3462:
case 2762:
case 3778:
case 1513:
case 3223:
case 1702:
case 163:
case 3345:
case 2511:
case 2316:
case 1921:
case 354:
case 883:
case 1393:
case 2205:
case 3897:
case 1184:
case 3298:
case 2391:
case 2625:
case 2596:
case 3049:
case 1265:
case 512:
case 4048:
case 426:
case 578:
case 85:
case 1996:
case 511:
case 3519:
case 2767:
case 1068:
case 694:
case 124:
case 807:
case 1724:
case 2669:
case 2486:
case 1229:
case 3565:
case 3885:
case 3116:
case 1908:
case 3268:
case 895:
case 2272:
case 304:
case 561:
case 2785:
case 2566:
case 3485:
case 633:
case 1295:
case 2303:
case 3616:
case 3972:
case 219:
case 3549:
case 514:
case 3029:
case 3867:
case 691:
case 1363:
case 80:
case 2699:
case 3595:
case 3626:
case 2906:
case 4028:
case 122:
case 925:
case 857:
case 3970:
case 3633:
case 3206:
case 3065:
case 1966:
case 2125:
case 351:
case 1287:
case 2270:
case 3497:
case 2508:
case 1684:
case 1098:
case 2797:
case 160:
case 3161:
case 3315:
case 2235:
case 2541:
case 3103:
case 2346:
case 2277:
case 3490:
case 2790:
case 928:
case 1036:
case 2878:
case 3935:
case 3862:
case 339:
case 1023:
case 73:
case 3369:
case 113:
case 1543:
case 3582:
case 0:
case 2856:
case 2943:
case 2755:
case 1348:
case 3455:
case 3325:
case 2011:
case 1737:
case 1282:
case 3243:
case 1775:
case 1145:
case 420:
case 1669:
case 1486:
case 2229:
case 3830:
case 394:
case 169:
case 601:
case 3505:
case 529:
case 3424:
case 1767:
case 3128:
case 210:
case 3788:
case 461:
case 3070:
case 654:
case 3919:
case 1391:
case 602:
case 3118:
case 1596:
case 3414:
case 2265:
case 116:
case 2219:
case 3648:
case 3832:
case 1066:
case 1205:
case 1199:
case 3402:
case 263:
case 1538:
case 2458:
case 1316:
case 2921:
case 1478:
case 1762:
case 784:
case 2513:
case 1936:
case 1456:
case 636:
case 577:
case 976:
case 2523:
case 808:
case 3211:
case 3238:
case 2331:
case 1521:
case 889:
case 4003:
case 1333:
case 1041:
case 3776:
case 2139:
case 3837:
case 2476:
case 2911:
case 3193:
case 3875:
case 2938:
case 2700:
case 3856:
case 3943:
case 1577:
case 2455:
case 3755:
case 2492:
case 2557:
case 585:
case 3011:
case 4054:
case 1802:
case 3235:
case 3541:
case 2315:
case 613:
case 2490:
case 4039:
case 2862:
case 1101:
case 239:
case 2369:
case 1163:
case 2977:
case 534:
case 1980:
case 3906:
case 499:
case 1949:
case 2019:
case 1444:
case 1148:
case 1814:
case 2970:
case 1572:
case 2633:
case 1987:
case 2206:
case 590:
case 1618:
case 2065:
case 3270:
case 1432:
case 192:
case 3797:
case 622:
case 2497:
case 943:
case 3115:
case 1952:
case 1430:
case 204:
case 3566:
case 2146:
case 509:
case 2587:
case 2616:
case 2972:
case 957:
case 1208:
case 2549:
case 1824:
case 556:
case 2029:
case 71:
case 1756:
case 547:
case 946:
case 1082:
case 772:
case 1460:
case 3331:
case 1855:
case 1892:
case 2837:
case 3476:
case 136:
case 2875:
case 3938:
case 2193:
case 2402:
case 3458:
case 3154:
case 2758:
case 2663:
case 1345:
case 989:
case 1890:
case 2601:
case 2077:
case 485:
case 1080:
case 908:
case 1603:
case 3328:
case 2221:
case 1661:
case 58:
case 2070:
case 3488:
case 1087:
case 2919:
case 616:
case 3006:
case 2414:
case 409:
case 3714:
case 1905:
case 2118:
case 3265:
case 3219:
case 102:
case 1133:
case 154:
case 456:
case 82:
case 500:
case 2354:
case 2296:
case 1565:
case 1786:
case 3229:
case 1885:
case 4025:
case 3598:
case 3707:
case 3609:
case 2929:
case 2505:
case 490:
case 3724:
case 3068:
case 2424:
case 324:
case 3252:
case 1972:
case 2570:
case 3301:
case 2208:
case 459:
case 1549:
case 3506:
case 233:
case 1029:
case 321:
case 1867:
case 955:
case 3908:
case 1550:
case 104:
case 3295:
case 3109:
case 550:
case 1146:
case 2618:
case 151:
case 2631:
case 3287:
case 3732:
case 2950:
case 1552:
case 292:
case 3684:
case 360:
case 1626:
case 2005:
case 1595:
case 322:
case 3744:
case 2572:
case 1970:
case 1633:
case 2987:
case 3250:
case 1935:
case 3023:
case 54:
case 3257:
case 3543:
case 2980:
case 1161:
case 3858:
case 949:
case 1103:
case 2309:
case 2957:
case 3280:
case 432:
case 768:
case 3737:
case 3282:
case 1557:
case 2437:
case 3876:
case 3775:
case 2475:
case 1691:
case 2800:
case 493:
case 1455:
case 1860:
case 2535:
case 2646:
case 2095:
case 1505:
case 2519:
case 2467:
case 3615:
case 1072:
case 76:
case 983:
case 3145:
case 1296:
case 1830:
case 2786:
case 3486:
case 201:
case 2052:
case 2116:
case 3008:
case 3998:
case 1339:
case 316:
case 254:
case 1648:
case 4009:
case 2050:
case 1832:
case 3199:
case 717:
case 1788:
case 2087:
case 1919:
case 907:
case 3596:
case 1414:
case 1131:
case 2049:
case 450:
case 1844:
case 2905:
case 2529:
case 1077:
case 3174:
case 3478:
case 2080:
case 2462:
case 1221:
case 2661:
case 3936:
case 870:
case 3511:
case 487:
case 2057:
case 3316:
case 2236:
case 2890:
case 3521:
case 2892:
case 2213:
case 545:
case 1837:
case 3041:
case 1776:
case 1875:
case 44:
case 940:
case 1193:
case 1400:
case 3326:
case 2756:
case 1384:
case 2082:
case 2460:
case 1238:
case 4064:
case 987:
case 1870:
case 3189:
case 1524:
case 586:
case 3988:
case 3147:
case 3719:
case 3586:
case 2465:
case 3617:
case 3214:
case 2334:
case 2097:
case 3381:
case 3866:
case 374:
case 244:
case 3224:
case 1030:
case 713:
case 3627:
case 3808:
case 549:
case 2085:
case 2173:
case 1379:
case 2895:
case 3729:
case 1286:
case 2429:
case 2151:
case 94:
case 2796:
case 440:
case 3142:
case 1183:
case 3578:
case 1960:
case 2562:
case 2055:
case 2276:
case 667:
case 3411:
case 1502:
case 2900:
case 2092:
case 2181:
case 3976:
case 1075:
case 2857:
case 407:
case 3610:
case 555:
case 3159:
case 2902:
case 1500:
case 2090:
case 3958:
case 826:
case 1278:
case 45:
case 61:
case 3373:
case 2258:
case 2560:
case 1835:
case 1723:
case 3140:
case 3202:
case 1944:
case 3297:
case 672:
case 3694:
case 1449:
case 3406:
case 2706:
case 1320:
case 1819:
case 1932:
case 1865:
case 1450:
case 945:
case 2997:
case 3898:
case 1766:
case 184:
case 2985:
case 458:
case 1651:
case 141:
case 1597:
case 486:
case 875:
case 1452:
case 1673:
case 1930:
case 1495:
case 3285:
case 4047:
case 671:
case 3164:
case 2768:
case 1829:
case 2472:
case 3468:
case 2024:
case 618:
case 2544:
case 931:
case 455:
case 1317:
case 1060:
case 878:
case 3813:
case 2743:
case 906:
case 3076:
case 1741:
case 3255:
case 1975:
case 2992:
case 2683:
case 1937:
case 959:
case 864:
case 3058:
case 2537:
case 583:
case 1592:
case 2002:
case 4034:
case 138:
case 2575:
case 948:
case 3290:
case 2477:
case 812:
case 1480:
case 2435:
case 4042:
case 36:
case 3823:
case 4020:
case 3179:
case 2736:
case 1258:
case 1:
case 4012:
case 2723:
case 956:
case 3423:
case 31:
case 1721:
case 1902:
case 719:
case 3371:
case 2278:
case 3260:
case 990:
case 2037:
case 3558:
case 2502:
case 1900:
case 766:
case 861:
case 2256:
case 1389:
case 2183:
case 4010:
case 2960:
case 665:
case 1276:
case 1347:
case 2713:
case 3843:
case 1882:
case 3956:
case 4022:
case 2379:
case 4017:
case 3588:
case 1340:
case 2872:
case 3868:
case 598:
case 2286:
case 1429:
case 2514:
case 23:
case 181:
case 668:
case 2030:
case 2171:
case 1085:
case 446:
case 3498:
case 1097:
case 3194:
case 3705:
case 1914:
case 1887:
case 3383:
case 1342:
case 2870:
case 2524:
case 1567:
case 2044:
case 1419:
case 489:
case 3780:
case 2062:
case 1435:
case 495:
case 2555:
case 3659:
case 2327:
case 3757:
case 1537:
case 2457:
case 3640:
case 724:
case 3821:
case 2592:
case 1575:
case 238:
case 66:
case 3811:
case 505:
case 457:
case 3441:
case 2975:
case 1992:
case 3642:
case 1683:
case 2937:
case 900:
case 3112:
case 443:
case 1955:
case 2317:
case 2482:
case 3237:
case 3782:
case 3634:
case 4079:
case 2322:
case 508:
case 2067:
case 1768:
case 2829:
case 2310:
case 1472:
case 3230:
case 1024:
case 480:
case 1985:
case 371:
case 3086:
case 2597:
case 318:
case 3752:
case 2673:
case 2930:
case 1532:
case 2865:
case 3750:
case 2450:
case 3244:
case 372:
case 1997:
case 953:
case 137:
case 2766:
case 2944:
case 947:
case 3232:
case 2312:
case 2487:
case 235:
case 2449:
case 3117:
case 1014:
case 1706:
case 2320:
case 3749:
case 1617:
case 1765:
case 1214:
case 3032:
case 682:
case 2705:
case 834:
case 3524:
case 1719:
case 3044:
case 1147:
case 2588:
case 3967:
case 681:
case 3286:
case 2868:
case 1496:
case 1224:
case 3030:
case 33:
case 174:
case 1627:
case 1808:
case 739:
case 528:
case 1411:
case 962:
case 1134:
case 2558:
case 165:
case 2260:
case 3256:
case 1142:
case 3183:
case 920:
case 856:
case 1578:
case 42:
case 3713:
case 2843:
case 2956:
case 888:
case 3877:
case 1556:
case 2179:
case 1373:
case 3962:
case 2978:
case 1351:
case 704:
case 1140:
case 1610:
case 2353:
case 573:
case 961:
case 21:
case 3500:
case 2262:
case 2647:
case 3932:
case 2750:
case 3865:
case 2244:
case 3585:
case 3766:
case 4053:
case 2466:
case 730:
case 1770:
case 3312:
case 3487:
case 2787:
case 1088:
case 428:
case 576:
case 3819:
case 2749:
case 3322:
case 3495:
case 1468:
case 3067:
case 3829:
case 3310:
case 2896:
case 2086:
case 384:
case 271:
case 853:
case 2441:
case 1076:
case 1255:
case 899:
case 3590:
case 2112:
case 1813:
case 1443:
case 3060:
case 215:
case 1290:
case 3062:
case 2078:
case 2122:
case 929:
case 2780:
case 16:
case 2659:
case 1823:
case 2757:
case 3592:
case 1679:
case 3304:
case 338:
case 425:
case 1353:
case 1576:
case 3721:
case 2421:
case 11:
case 3902:
case 2622:
case 3090:
case 1262:
case 2958:
case 791:
case 2556:
case 3880:
case 2373:
case 3:
case 2202:
case 1423:
case 2578:
case 1843:
case 1956:
case 3055:
case 3276:
case 1413:
case 3347:
case 3738:
case 2134:
case 1558:
case 265:
case 2438:
case 3711:
case 3900:
case 3092:
case 579:
case 2808:
case 3852:
case 3085:
case 3895:
case 2207:
case 3924:
case 2604:
case 3340:
case 1868:
case 97:
case 470:
case 3796:
case 3914:
case 1705:
case 1383:
case 84:
case 3887:
case 3567:
case 1806:
case 3465:
case 2765:
case 382:
case 2214:
case 3097:
case 1498:
case 2381:
case 4081:
case 2058:
case 1821:
case 3002:
case 964:
case 2290:
case 2836:
case 1122:
case 806:
case 1780:
case 2735:
case 911:
case 3435:
case 638:
case 1110:
case 701:
case 1659:
case 2823:
case 1112:
case 702:
case 848:
case 2813:
case 754:
case 912:
case 2292:
case 2076:
case 2255:
case 3992:
case 1086:
case 3985:
case 1408:
case 1104:
case 3532:
case 832:
case 2285:
case 3671:
case 1127:
case 2164:
case 3544:
case 1896:
case 642:
case 3805:
case 2088:
case 2694:
case 3470:
case 3706:
case 1749:
case 479:
case 3014:
case 1117:
case 1647:
case 3530:
case 1750:
case 975:
case 570:
case 1689:
case 337:
case 1466:
case 635:
case 1959:
case 3581:
case 4037:
case 810:
case 4075:
case 2534:
case 1158:
case 2010:
case 3690:
case 2474:
case 994:
case 2178:
case 2542:
case 538:
case 729:
case 205:
case 3983:
case 1942:
case 3160:
case 1314:
case 3692:
case 2156:
case 1579:
case 1281:
case 107:
case 3655:
case 2004:
case 1594:
case 208:
case 1273:
case 2716:
case 3745:
case 3971:
case 2186:
case 541:
case 3167:
case 2027:
case 4044:
case 2362:
case 2271:
case 3378:
case 2017:
case 542:
case 1188:
case 3697:
case 1484:
case 140:
case 863:
case 1947:
case 3356:
case 2726:
case 43:
case 3799:
case 930:
case 535:
case 246:
case 3433:
case 2994:
case 670:
case 3222:
case 1703:
case 1678:
case 257:
case 866:
case 1761:
case 2854:
case 714:
case 3463:
case 952:
case 2763:
case 155:
case 3602:
case 1520:
case 2922:
case 904:
case 2701:
case 1874:
case 2910:
case 1512:
case 2912:
case 4062:
case 1522:
case 720:
case 1042:
case 3893:
case 2332:
case 3212:
case 325:
case 819:
case 197:
case 2839:
case 3137:
case 1034:
case 2409:
case 1746:
case 3071:
case 3709:
case 3624:
case 3053:
case 3227:
case 679:
case 1686:
case 53:
case 1469:
case 1964:
case 2927:
case 3607:
case 328:
case 435:
case 1355:
case 3818:
case 3144:
case 2748:
case 3831:
case 2564:
case 1089:
case 2917:
case 484:
case 441:
case 158:
case 2688:
case 3217:
case 1392:
case 1425:
case 3614:
case 2300:
case 481:
case 444:
case 3247:
case 4085:
case 146:
case 1994:
case 1825:
case 3431:
case 1017:
case 3114:
case 2731:
case 2989:
case 936:
case 3784:
case 370:
case 2484:
case 2947:
case 676:
case 3632:
case 3630:
case 1253:
case 3951:
case 1362:
case 482:
case 1004:
case 108:
case 2809:
case 1716:
case 3358:
case 2251:
case 2934:
case 3100:
case 1283:
case 3242:
case 3981:
case 25:
case 3739:
case 1559:
case 902:
case 2942:
case 1540:
case 869:
case 3234:
case 712:
case 1020:
case 2579:
case 3388:
case 3675:
case 1012:
case 1010:
case 283:
case 1979:
case 3259:
case 1022:
case 1178:
case 2940:
case 1542:
case 3583:
case 2307:
case 4092:
case 2959:
case 62:
case 1534:
case 2158:
case 2454:
case 2899:
case 1375:
case 258:
case 3197:
case 1688:
case 2504:
case 286:
case 1337:
case 2392:
case 3725:
case 2355:
case 1748:
case 2047:
case 1564:
case 582:
case 180:
case 2089:
case 1917:
case 581:
case 2517:
case 544:
case 77:
case 3769:
case 1927:
case 2390:
case 1409:
case 3446:
case 1904:
case 3715:
case 628:
case 437:
case 2415:
case 4002:
case 821:
case 3081:
case 3192:
case 3660:
case 726:
case 1839:
case 2510:
case 1912:
case 1676:
case 1344:
case 3155:
case 3891:
case 2522:
case 1920:
case 625:
case 327:
case 143:
case 1658:
case 255:
case 2520:
case 1701:
case 1079:
case 2874:
case 3403:
case 2703:
case 2385:
case 3662:
case 3190:
case 933:
case 4000:
case 2059:
case 2863:
case 12:
case 802:
case 1162:
case 748:
case 2801:
case 3940:
case 2583:
case 3307:
case 1581:
case 2102:
case 1386:
case 2240:
case 3454:
case 2754:
case 3158:
case 3934:
case 2493:
case 605:
case 759:
case 2100:
case 3439:
case 2739:
case 2637:
case 2234:
case 1692:
case 706:
case 1160:
case 3314:
case 517:
case 1491:
case 2630:
case 2973:
case 731:
case 3064:
case 1167:
case 2428:
case 1378:
case 1953:
case 2107:
case 3594:
case 3273:
case 1971:
case 1745:
case 689:
case 2289:
case 1799:
case 2571:
case 1433:
case 176:
case 2376:
case 2247:
case 2644:
case 745:
case 468:
case 2418:
case 3989:
case 3484:
case 3188:
case 2784:
case 1697:
case 270:
case 646:
case 1573:
case 1356:
case 173:
case 355:
case 892:
case 3520:
case 1401:
case 3512:
case 2403:
case 750:
case 3678:
case 3385:
case 2662:
case 3761:
case 3059:
case 921:
case 417:
case 3397:
case 1175:
case 1893:
case 2660:
case 125:
case 1220:
case 891:
case 2155:
case 3522:
case 46:
case 3686:
case 2051:
case 4088:
case 2769:
case 279:
case 1607:
case 3964:
case 349:
case 698:
case 3390:
case 1071:
case 2446:
case 1053:
case 3415:
case 3845:
case 1227:
case 1130:
case 2264:
case 2197:
case 3899:
case 1217:
case 386:
case 2725:
case 1614:
case 3392:
case 680:
case 1448:
case 1818:
case 1144:
case 3047:
case 3527:
case 3089:
case 1418:
case 1431:
case 3017:
case 1848:
case 3360:
case 572:
case 747:
case 2294:
case 1289:
case 3726:
case 2799:
case 2433:
case 1553:
case 1247:
case 3825:
case 640:
case 2846:
case 3716:
case 1107:
case 308:
case 2416:
case 3445:
case 2971:
case 1358:
case 2745:
case 3186:
case 3253:
case 1124:
case 963:
case 3869:
case 1428:
case 2167:
case 3362:
case 1951:
case 607:
case 3540:
case 305:
case 1637:
case 3156:
case 3791:
case 2491:
case 1388:
case 1675:
case 1493:
case 41:
case 700:
case 1981:
case 515:
case 3559:
case 2581:
case 799:
case 924:
case 3534:
case 3367:
case 467:
case 3979:
case 3178:
case 2690:
case 3474:
case 3542:
case 1583:
case 658:
case 2831:
case 2818:
case 2144:
case 3564:
case 3884:
case 686:
case 4086:
case 1197:
case 3375:
case 3094:
case 2217:
case 418:
case 785:
case 472:
case 1816:
case 3409:
case 1446:
case 1667:
case 2624:
case 1715:
case 3904:
case 2227:
case 2130:
case 734:
case 2607:
case 179:
case 228:
case 1073:
case 1155:
case 1891:
case 852:
case 127:
case 2175:
case 2893:
case 2212:
case 3332:
case 1660:
case 790:
case 1192:
case 2220:
case 966:
case 1403:
case 1190:
case 655:
case 709:
case 1662:
case 3330:
case 2210:
case 3854:
case 4056:
case 273:
case 3763:
case 3658:
case 343:
case 2463:
case 2401:
case 3701:
case 3079:
case 851:
case 3910:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755489601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,];
var gg_b = "1755489601/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
