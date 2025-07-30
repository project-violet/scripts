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
var o = 0;
switch (g) {
case 1025:
case 25:
case 3101:
case 3050:
case 1702:
case 2640:
case 354:
case 3612:
case 3471:
case 3059:
case 3770:
case 2827:
case 404:
case 1558:
case 2685:
case 2734:
case 1226:
case 1921:
case 2162:
case 3469:
case 3907:
case 4011:
case 1640:
case 3586:
case 3323:
case 1649:
case 3511:
case 2753:
case 1162:
case 3460:
case 3998:
case 596:
case 2226:
case 1862:
case 1734:
case 1264:
case 2558:
case 255:
case 1187:
case 1887:
case 2040:
case 399:
case 1673:
case 2286:
case 2604:
case 124:
case 719:
case 870:
case 2085:
case 2916:
case 803:
case 3012:
case 1632:
case 2049:
case 2531:
case 930:
case 53:
case 32:
case 2673:
case 2394:
case 4048:
case 3178:
case 224:
case 1604:
case 3878:
case 618:
case 3714:
case 1085:
case 886:
case 1531:
case 1049:
case 3564:
case 3743:
case 3066:
case 3005:
case 1374:
case 2303:
case 1121:
case 717:
case 3517:
case 1821:
case 754:
case 740:
case 692:
case 2352:
case 3684:
case 3735:
case 4017:
case 2374:
case 1927:
case 2488:
case 2693:
case 3898:
case 242:
case 2121:
case 3198:
case 1303:
case 1352:
case 3807:
case 3107:
case 725:
case 1537:
case 2310:
case 3666:
case 3084:
case 319:
case 3491:
case 389:
case 2181:
case 975:
case 1506:
case 2881:
case 248:
case 1116:
case 2217:
case 2093:
case 1428:
case 2987:
case 148:
case 1881:
case 621:
case 1319:
case 2565:
case 3782:
case 3978:
case 1181:
case 72:
case 2901:
case 651:
case 2206:
case 2735:
case 2684:
case 75:
case 1339:
case 623:
case 1456:
case 1107:
case 2722:
case 3303:
case 2237:
case 1024:
case 647:
case 1735:
case 1206:
case 1901:
case 834:
case 2107:
case 2456:
case 2339:
case 2807:
case 342:
case 3821:
case 2136:
case 610:
case 1005:
case 197:
case 3374:
case 680:
case 1237:
case 348:
case 3881:
case 2342:
case 3181:
case 2790:
case 2491:
case 2084:
case 2799:
case 1624:
case 932:
case 3116:
case 1395:
case 2782:
case 1342:
case 119:
case 724:
case 4037:
case 1491:
case 2624:
case 1605:
case 1799:
case 4006:
case 501:
case 2395:
case 3537:
case 1231:
case 1761:
case 1460:
case 465:
case 1998:
case 3734:
case 3264:
case 3862:
case 3649:
case 3248:
case 3827:
case 287:
case 2612:
case 254:
case 3640:
case 2050:
case 125:
case 3226:
case 2936:
case 3921:
case 2460:
case 801:
case 2231:
case 1059:
case 3032:
case 187:
case 1471:
case 690:
case 3753:
case 3702:
case 1101:
case 1050:
case 3073:
case 154:
case 140:
case 225:
case 2375:
case 3049:
case 3531:
case 2659:
case 46:
case 1408:
case 405:
case 1714:
case 3981:
case 578:
case 4031:
case 3604:
case 1878:
case 3286:
case 12:
case 299:
case 748:
case 2743:
case 1258:
case 3632:
case 1012:
case 1383:
case 649:
case 2548:
case 2408:
case 3625:
case 2178:
case 22:
case 199:
case 3887:
case 3441:
case 384:
case 3501:
case 407:
case 3287:
case 3:
case 652:
case 21:
case 1661:
case 3917:
case 475:
case 1158:
case 2562:
case 1014:
case 3749:
case 2712:
case 1043:
case 1278:
case 3886:
case 3186:
case 3380:
case 18:
case 2438:
case 2014:
case 2858:
case 1562:
case 2158:
case 2043:
case 3111:
case 1712:
case 3811:
case 1527:
case 3653:
case 568:
case 3418:
case 3704:
case 3463:
case 3329:
case 215:
case 2750:
case 2831:
case 931:
case 243:
case 3320:
case 3826:
case 1643:
case 1061:
case 3034:
case 1614:
case 3578:
case 1451:
case 1079:
case 115:
case 693:
case 3773:
case 3262:
case 1759:
case 3732:
case 4078:
case 0:
case 143:
case 3164:
case 1831:
case 3148:
case 2061:
case 3848:
case 871:
case 658:
case 469:
case 1958:
case 2667:
case 868:
case 2635:
case 7:
case 964:
case 714:
case 784:
case 741:
case 556:
case 2521:
case 3216:
case 430:
case 1099:
case 3911:
case 1667:
case 802:
case 571:
case 2344:
case 1784:
case 3986:
case 1635:
case 4036:
case 2082:
case 2313:
case 3507:
case 2368:
case 19:
case 3447:
case 2931:
case 3221:
case 2699:
case 2705:
case 2236:
case 1724:
case 1476:
case 2516:
case 2022:
case 409:
case 904:
case 1165:
case 1806:
case 1682:
case 359:
case 2035:
case 862:
case 2137:
case 1516:
case 3948:
case 2457:
case 2106:
case 195:
case 1447:
case 1507:
case 39:
case 78:
case 3635:
case 1986:
case 1015:
case 681:
case 1281:
case 3090:
case 560:
case 96:
case 1216:
case 3667:
case 977:
case 2117:
case 1598:
case 3368:
case 539:
case 3082:
case 194:
case 4021:
case 3344:
case 2986:
case 2911:
case 946:
case 2216:
case 2793:
case 1117:
case 2536:
case 3035:
case 1615:
case 1354:
case 259:
case 3690:
case 500:
case 90:
case 2333:
case 785:
case 3581:
case 3022:
case 743:
case 1948:
case 2372:
case 3236:
case 3705:
case 1964:
case 2926:
case 3931:
case 3699:
case 2221:
case 526:
case 2354:
case 159:
case 2615:
case 3300:
case 3457:
case 3837:
case 1372:
case 2948:
case 3137:
case 3724:
case 1926:
case 3670:
case 257:
case 3527:
case 2749:
case 628:
case 1811:
case 141:
case 2917:
case 1886:
case 3679:
case 2441:
case 691:
case 2740:
case 241:
case 2389:
case 2653:
case 157:
case 3043:
case 1917:
case 2345:
case 3858:
case 3014:
case 1634:
case 1287:
case 3438:
case 1392:
case 1740:
case 2380:
case 184:
case 2602:
case 114:
case 729:
case 474:
case 2034:
case 1227:
case 1262:
case 2826:
case 1732:
case 2126:
case 2320:
case 385:
case 1002:
case 1725:
case 2463:
case 1578:
case 2418:
case 2227:
case 438:
case 1034:
case 2148:
case 327:
case 2164:
case 2732:
case 2864:
case 3587:
case 2773:
case 839:
case 2002:
case 3201:
case 2725:
case 3965:
case 1704:
case 3906:
case 1482:
case 555:
case 2490:
case 2283:
case 3845:
case 3145:
case 3189:
case 3311:
case 1676:
case 3047:
case 334:
case 1944:
case 2657:
case 23:
case 1913:
case 3415:
case 3294:
case 842:
case 1499:
case 665:
case 1283:
case 60:
case 2676:
case 1223:
case 2435:
case 2594:
case 55:
case 449:
case 1777:
case 2422:
case 196:
case 1076:
case 2155:
case 2855:
case 2909:
case 2467:
case 1900:
case 1435:
case 2223:
case 3647:
case 235:
case 1594:
case 3129:
case 2057:
case 2076:
case 372:
case 981:
case 761:
case 3120:
case 3583:
case 911:
case 1909:
case 1467:
case 605:
case 1155:
case 1503:
case 263:
case 1414:
case 1295:
case 4039:
case 922:
case 1708:
case 3989:
case 3210:
case 410:
case 1096:
case 2242:
case 2844:
case 3980:
case 3618:
case 2144:
case 447:
case 778:
case 2168:
case 3539:
case 1552:
case 2503:
case 2443:
case 2708:
case 1574:
case 2295:
case 2038:
case 2797:
case 1844:
case 451:
case 1242:
case 1113:
case 1813:
case 3992:
case 1168:
case 423:
case 734:
case 1651:
case 1230:
case 186:
case 2470:
case 2109:
case 3595:
case 1510:
case 2365:
case 2306:
case 270:
case 3641:
case 1696:
case 1769:
case 633:
case 1239:
case 542:
case 2461:
case 991:
case 2760:
case 3274:
case 361:
case 1771:
case 772:
case 3172:
case 170:
case 1479:
case 3402:
case 1051:
case 2239:
case 2638:
case 928:
case 3929:
case 2539:
case 3868:
case 3651:
case 1992:
case 4074:
case 519:
case 2219:
case 2980:
case 2663:
case 3844:
case 3574:
case 101:
case 2530:
case 825:
case 2992:
case 492:
case 1041:
case 1539:
case 73:
case 3096:
case 3038:
case 1618:
case 4052:
case 3414:
case 3708:
case 1989:
case 3503:
case 3443:
case 2317:
case 1530:
case 2854:
case 453:
case 2154:
case 2641:
case 370:
case 1402:
case 3365:
case 1833:
case 1542:
case 3955:
case 3337:
case 3809:
case 303:
case 597:
case 3470:
case 3771:
case 498:
case 2434:
case 4010:
case 3696:
case 1063:
case 3769:
case 3239:
case 82:
case 2929:
case 2542:
case 2833:
case 2402:
case 1641:
case 3519:
case 735:
case 1595:
case 2172:
case 2453:
case 2872:
case 316:
case 1203:
case 3230:
case 763:
case 913:
case 3499:
case 2145:
case 2845:
case 3791:
case 2728:
case 3490:
case 1192:
case 599:
case 3968:
case 1294:
case 3913:
case 1892:
case 2880:
case 134:
case 278:
case 1047:
case 2180:
case 2386:
case 3676:
case 1145:
case 906:
case 2892:
case 482:
case 2415:
case 2294:
case 52:
case 920:
case 2192:
case 1728:
case 412:
case 1180:
case 3482:
case 517:
case 1788:
case 3467:
case 418:
case 703:
case 2364:
case 1120:
case 1583:
case 3594:
case 3900:
case 94:
case 540:
case 1933:
case 3435:
case 786:
case 2972:
case 1348:
case 664:
case 2326:
case 1364:
case 396:
case 2820:
case 525:
case 3756:
case 1952:
case 89:
case 3939:
case 515:
case 3175:
case 4089:
case 268:
case 1646:
case 3930:
case 1088:
case 4080:
case 829:
case 1628:
case 632:
case 1229:
case 3077:
case 337:
case 1974:
case 3255:
case 2903:
case 3424:
case 2088:
case 2387:
case 1747:
case 760:
case 2894:
case 51:
case 1046:
case 910:
case 2292:
case 1919:
case 3091:
case 2028:
case 3378:
case 3484:
case 1688:
case 1910:
case 1289:
case 638:
case 3995:
case 1493:
case 836:
case 947:
case 2046:
case 108:
case 2747:
case 1387:
case 1028:
case 2919:
case 4029:
case 2289:
case 2910:
case 976:
case 2688:
case 923:
case 1555:
case 3677:
case 2245:
case 3883:
case 3520:
case 2174:
case 326:
case 373:
case 3130:
case 3336:
case 3459:
case 3071:
case 3307:
case 1254:
case 1473:
case 2568:
case 3839:
case 1852:
case 2513:
case 1152:
case 81:
case 2718:
case 2763:
case 3923:
case 1174:
case 3209:
case 1874:
case 3060:
case 2432:
case 737:
case 1513:
case 2852:
case 2254:
case 1404:
case 411:
case 1718:
case 171:
case 3195:
case 2509:
case 3895:
case 3671:
case 3412:
case 843:
case 2485:
case 3554:
case 990:
case 2994:
case 1381:
case 2500:
case 827:
case 1509:
case 271:
case 1485:
case 256:
case 3796:
case 1994:
case 4072:
case 3669:
case 3738:
case 529:
case 339:
case 3842:
case 1741:
case 2819:
case 2381:
case 1440:
case 3233:
case 3544:
case 814:
case 1200:
case 1697:
case 884:
case 3513:
case 2139:
case 2307:
case 988:
case 2975:
case 2071:
case 4044:
case 857:
case 4068:
case 3272:
case 3874:
case 2200:
case 1923:
case 1839:
case 3852:
case 1307:
case 3473:
case 466:
case 3152:
case 1139:
case 126:
case 1398:
case 173:
case 1071:
case 702:
case 1336:
case 3432:
case 1459:
case 3803:
case 2608:
case 1842:
case 1533:
case 1244:
case 1142:
case 594:
case 260:
case 3741:
case 3500:
case 1796:
case 483:
case 1213:
case 4009:
case 1268:
case 1983:
case 3485:
case 1660:
case 1008:
case 2412:
case 3509:
case 3449:
case 160:
case 2842:
case 1554:
case 2669:
case 2097:
case 2796:
case 2008:
case 356:
case 2983:
case 3810:
case 2572:
case 982:
case 371:
case 1671:
case 1412:
case 3110:
case 1895:
case 2545:
case 921:
case 2930:
case 3220:
case 137:
case 953:
case 1255:
case 2589:
case 3974:
case 1757:
case 894:
case 1056:
case 1301:
case 2580:
case 368:
case 2123:
case 2175:
case 3229:
case 2939:
case 2875:
case 1930:
case 675:
case 3903:
case 3327:
case 1589:
case 302:
case 2255:
case 1123:
case 1580:
case 1823:
case 2757:
case 3952:
case 1939:
case 2592:
case 1883:
case 1677:
case 1183:
case 458:
case 557:
case 3555:
case 2484:
case 584:
case 2091:
case 4055:
case 3292:
case 1656:
case 3387:
case 859:
case 3194:
case 67:
case 2520:
case 362:
case 2183:
case 3245:
case 771:
case 541:
case 3688:
case 3910:
case 1995:
case 3919:
case 3280:
case 1091:
case 667:
case 1378:
case 3747:
case 2656:
case 429:
case 1959:
case 1866:
case 2222:
case 1805:
case 4082:
case 600:
case 1105:
case 1166:
case 3021:
case 2098:
case 891:
case 2765:
case 828:
case 230:
case 2515:
case 673:
case 3599:
case 2105:
case 1124:
case 2805:
case 1824:
case 49:
case 1737:
case 1267:
case 4090:
case 732:
case 3681:
case 1706:
case 955:
case 3904:
case 2369:
case 2950:
case 2636:
case 2698:
case 511:
case 1308:
case 660:
case 3193:
case 581:
case 1884:
case 1397:
case 1184:
case 2607:
case 822:
case 3717:
case 1299:
case 3016:
case 3949:
case 3567:
case 2308:
case 2184:
case 95:
case 2397:
case 3940:
case 2282:
case 1607:
case 3081:
case 4067:
case 3215:
case 3494:
case 774:
case 2678:
case 4043:
case 175:
case 3873:
case 3687:
case 1001:
case 1439:
case 1859:
case 2924:
case 1377:
case 3832:
case 3764:
case 1966:
case 3543:
case 1261:
case 2270:
case 3514:
case 1678:
case 3202:
case 2439:
case 948:
case 2731:
case 332:
case 2261:
case 3027:
case 41:
case 207:
case 3726:
case 3253:
case 3474:
case 3388:
case 2442:
case 2502:
case 3419:
case 338:
case 2078:
case 17:
case 2391:
case 3328:
case 1243:
case 1495:
case 3993:
case 3711:
case 591:
case 3410:
case 1112:
case 2984:
case 3346:
case 1078:
case 4079:
case 2243:
case 3662:
case 3627:
case 1553:
case 3570:
case 3149:
case 267:
case 2495:
case 2214:
case 1474:
case 3270:
case 1062:
case 866:
case 1726:
case 3924:
case 2543:
case 2764:
case 2873:
case 2687:
case 2452:
case 2173:
case 1202:
case 3279:
case 3678:
case 2474:
case 3905:
case 307:
case 1764:
case 1234:
case 1543:
case 3859:
case 4:
case 1832:
case 3731:
case 1132:
case 2027:
case 3159:
case 1687:
case 1452:
case 3150:
case 3439:
case 84:
case 3001:
case 1873:
case 2804:
case 2202:
case 1825:
case 558:
case 2104:
case 457:
case 1627:
case 1849:
case 2993:
case 608:
case 3758:
case 1662:
case 2328:
case 4053:
case 820:
case 174:
case 2087:
case 3442:
case 1579:
case 2149:
case 367:
case 3214:
case 1410:
case 1711:
case 2627:
case 997:
case 883:
case 845:
case 1786:
case 2140:
case 2346:
case 274:
case 4034:
case 1419:
case 2973:
case 1590:
case 92:
case 3007:
case 3706:
case 2582:
case 3098:
case 3371:
case 3036:
case 852:
case 1599:
case 3824:
case 2932:
case 3222:
case 3950:
case 3475:
case 3369:
case 369:
case 1582:
case 1925:
case 775:
case 2616:
case 707:
case 1021:
case 513:
case 3105:
case 2599:
case 3166:
case 2193:
case 566:
case 2621:
case 3483:
case 1522:
case 1016:
case 3636:
case 2215:
case 2081:
case 3282:
case 2535:
case 671:
case 3184:
case 2940:
case 309:
case 1893:
case 3308:
case 459:
case 987:
case 2985:
case 2522:
case 917:
case 2717:
case 1621:
case 1017:
case 3637:
case 131:
case 3943:
case 1566:
case 927:
case 2524:
case 2115:
case 2341:
case 3882:
case 943:
case 1524:
case 2566:
case 3899:
case 70:
case 1492:
case 3190:
case 1815:
case 3338:
case 2781:
case 2480:
case 746:
case 3593:
case 576:
case 2721:
case 333:
case 1617:
case 523:
case 3961:
case 3266:
case 1934:
case 3707:
case 3351:
case 1584:
case 2902:
case 2363:
case 3970:
case 1953:
case 3455:
case 2617:
case 1721:
case 849:
case 76:
case 1902:
case 91:
case 661:
case 3135:
case 98:
case 1347:
case 3573:
case 2787:
case 2915:
case 2240:
case 3982:
case 3778:
case 3525:
case 3114:
case 678:
case 2249:
case 3058:
case 3212:
case 4025:
case 1559:
case 2550:
case 365:
case 1915:
case 3990:
case 549:
case 3468:
case 3444:
case 810:
case 3504:
case 1240:
case 880:
case 1648:
case 1249:
case 45:
case 1011:
case 1454:
case 1273:
case 929:
case 164:
case 2802:
case 2472:
case 1512:
case 733:
case 424:
case 346:
case 1134:
case 1762:
case 36:
case 3879:
case 1204:
case 2225:
case 1802:
case 305:
case 4085:
case 3540:
case 3701:
case 99:
case 1102:
case 2026:
case 3409:
case 3031:
case 1611:
case 3549:
case 3376:
case 2834:
case 2762:
case 2232:
case 455:
case 1048:
case 2843:
case 3664:
case 425:
case 1999:
case 1631:
case 2212:
case 2114:
case 3249:
case 1504:
case 2982:
case 2525:
case 1444:
case 3240:
case 165:
case 1413:
case 3787:
case 2573:
case 2999:
case 1532:
case 3626:
case 1843:
case 4050:
case 1212:
case 1058:
case 454:
case 959:
case 487:
case 588:
case 4059:
case 2504:
case 518:
case 3347:
case 2413:
case 3550:
case 42:
case 2658:
case 1922:
case 2161:
case 2861:
case 582:
case 3153:
case 3064:
case 177:
case 1376:
case 1409:
case 105:
case 3802:
case 1935:
case 1357:
case 3686:
case 1400:
case 1540:
case 16:
case 3134:
case 1861:
case 853:
case 1161:
case 2922:
case 1658:
case 2585:
case 3762:
case 499:
case 2031:
case 2409:
case 821:
case 2376:
case 2170:
case 3727:
case 277:
case 2701:
case 2179:
case 364:
case 898:
case 2400:
case 2935:
case 205:
case 3225:
case 4012:
case 994:
case 3454:
case 1250:
case 2606:
case 2182:
case 3492:
case 1190:
case 1396:
case 1338:
case 179:
case 663:
case 3115:
case 1890:
case 2943:
case 812:
case 3524:
case 1899:
case 2637:
case 497:
case 3480:
case 1882:
case 704:
case 2396:
case 553:
case 2899:
case 3445:
case 3505:
case 1637:
case 3017:
case 3293:
case 3902:
case 1979:
case 1835:
case 3363:
case 2707:
case 2736:
case 941:
case 3721:
case 2961:
case 1167:
case 1455:
case 670:
case 3953:
case 1867:
case 2135:
case 9:
case 888:
case 3584:
case 1707:
case 1351:
case 1065:
case 616:
case 1037:
case 2122:
case 1798:
case 419:
case 3617:
case 133:
case 1736:
case 1205:
case 3934:
case 2224:
case 489:
case 957:
case 2970:
case 211:
case 2560:
case 3138:
case 3896:
case 1654:
case 3196:
case 2569:
case 2486:
case 935:
case 1141:
case 3742:
case 150:
case 1672:
case 181:
case 1411:
case 3208:
case 3795:
case 1560:
case 1569:
case 2654:
case 34:
case 1719:
case 3600:
case 3068:
case 244:
case 3013:
case 1486:
case 3382:
case 3271:
case 306:
case 1774:
case 3367:
case 659:
case 2072:
case 2033:
case 1863:
case 320:
case 93:
case 1163:
case 1818:
case 1508:
case 2774:
case 867:
case 1072:
case 3730:
case 3009:
case 383:
case 313:
case 3151:
case 345:
case 1033:
case 3851:
case 3613:
case 2818:
case 2054:
case 1597:
case 2118:
case 3644:
case 4088:
case 3996:
case 2556:
case 2847:
case 3291:
case 1246:
case 228:
case 986:
case 291:
case 3588:
case 684:
case 2577:
case 2620:
case 1089:
case 6:
case 1417:
case 1847:
case 1556:
case 57:
case 2794:
case 128:
case 2246:
case 74:
case 191:
case 567:
case 468:
case 3314:
case 1620:
case 1577:
case 3343:
case 2692:
case 462:
case 720:
case 1591:
case 3465:
case 3406:
case 1963:
case 3857:
case 2029:
case 3157:
case 1680:
case 3370:
case 1689:
case 1288:
case 3876:
case 2334:
case 2680:
case 358:
case 745:
case 809:
case 2963:
case 2302:
case 3723:
case 2288:
case 963:
case 1020:
case 783:
case 1334:
case 3277:
case 68:
case 961:
case 781:
case 2588:
case 391:
case 4077:
case 328:
case 437:
case 3629:
case 2291:
case 3228:
case 2996:
case 1783:
case 2343:
case 2655:
case 744:
case 750:
case 3080:
case 193:
case 1361:
case 1277:
case 2437:
case 3020:
case 2370:
case 3029:
case 158:
case 2406:
case 2465:
case 1723:
case 2857:
case 2546:
case 1775:
case 1528:
case 643:
case 1176:
case 1370:
case 3689:
case 1876:
case 1546:
case 1857:
case 627:
case 2723:
case 3680:
case 1157:
case 2951:
case 2775:
case 1068:
case 1600:
case 1013:
case 3486:
case 3633:
case 2838:
case 2390:
case 3569:
case 2196:
case 14:
case 2138:
case 728:
case 2896:
case 266:
case 69:
case 2399:
case 3560:
case 791:
case 2458:
case 3710:
case 1609:
case 1208:
case 972:
case 3672:
case 3411:
case 4069:
case 1795:
case 311:
case 2600:
case 350:
case 2068:
case 3841:
case 1896:
case 3315:
case 1390:
case 1196:
case 1458:
case 400:
case 832:
case 1399:
case 2795:
case 3571:
case 2208:
case 1644:
case 2957:
case 1739:
case 636:
case 934:
case 1000:
case 1613:
case 1851:
case 3033:
case 1009:
case 1431:
case 1260:
case 439:
case 2322:
case 3703:
case 2976:
case 3448:
case 3508:
case 2367:
case 1335:
case 1957:
case 2644:
case 3163:
case 3054:
case 120:
case 2851:
case 978:
case 2739:
case 2260:
case 283:
case 2009:
case 722:
case 1271:
case 1976:
case 3774:
case 276:
case 1324:
case 2977:
case 2160:
case 3610:
case 3988:
case 3772:
case 1030:
case 1871:
case 4038:
case 782:
case 3003:
case 1695:
case 1039:
case 180:
case 3218:
case 1541:
case 3619:
case 3263:
case 2642:
case 697:
case 2869:
case 3538:
case 2956:
case 2251:
case 1160:
case 3462:
case 1305:
case 2324:
case 123:
case 176:
case 2871:
case 3427:
case 2709:
case 210:
case 908:
case 280:
case 2401:
case 1251:
case 1169:
case 1956:
case 689:
case 1095:
case 2808:
case 2108:
case 1518:
case 2478:
case 2197:
case 2384:
case 1768:
case 1238:
case 3487:
case 3019:
case 2630:
case 353:
case 3393:
case 1808:
case 1384:
case 1478:
case 403:
case 2744:
case 1897:
case 864:
case 2518:
case 2296:
case 1042:
case 2713:
case 2768:
case 190:
case 2407:
case 3729:
case 2156:
case 2177:
case 3720:
case 382:
case 2960:
case 2359:
case 43:
case 312:
case 2683:
case 1276:
case 654:
case 640:
case 792:
case 2257:
case 3325:
case 564:
case 290:
case 3694:
case 1156:
case 2023:
case 1856:
case 1547:
case 3373:
case 625:
case 1359:
case 3332:
case 1436:
case 1960:
case 1498:
case 1177:
case 831:
case 3146:
case 3340:
case 3846:
case 149:
case 1891:
case 4076:
case 1191:
case 435:
case 699:
case 4057:
case 3385:
case 2908:
case 2083:
case 2312:
case 3094:
case 318:
case 2623:
case 798:
case 2191:
case 2891:
case 504:
case 249:
case 2675:
case 721:
case 62:
case 1312:
case 3789:
case 1908:
case 4047:
case 3359:
case 3436:
case 1332:
case 3177:
case 2720:
case 3960:
case 282:
case 3498:
case 1694:
case 1373:
case 3407:
case 3547:
case 2729:
case 1325:
case 2304:
case 478:
case 3971:
case 1421:
case 1720:
case 2332:
case 710:
case 2373:
case 2694:
case 3023:
case 3257:
case 505:
case 3312:
case 3083:
case 2349:
case 2385:
case 118:
case 1094:
case 188:
case 3997:
case 624:
case 1576:
case 2789:
case 2416:
case 1385:
case 2828:
case 2128:
case 3191:
case 900:
case 50:
case 1340:
case 2481:
case 1557:
case 218:
case 2596:
case 3169:
case 3251:
case 3869:
case 3956:
case 2538:
case 2733:
case 3642:
case 2263:
case 2052:
case 2619:
case 2218:
case 2003:
case 351:
case 2610:
case 1427:
case 3160:
case 533:
case 376:
case 1074:
case 642:
case 790:
case 865:
case 1619:
case 3541:
case 1052:
case 380:
case 1263:
case 310:
case 1772:
case 2427:
case 3709:
case 3695:
case 1003:
case 2074:
case 3042:
case 2487:
case 1928:
case 3197:
case 461:
case 2241:
case 1393:
case 937:
case 2010:
case 846:
case 153:
case 3991:
case 2928:
case 3639:
case 86:
case 3768:
case 1487:
case 2551:
case 1241:
case 3518:
case 877:
case 2393:
case 253:
case 4063:
case 3095:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753891202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,];
var gg_b = "1753891202/";

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
