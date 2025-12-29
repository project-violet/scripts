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
case 885:
case 4067:
case 1919:
case 4064:
case 51:
case 120:
case 210:
case 3991:
case 3944:
case 2551:
case 1672:
case 913:
case 657:
case 2281:
case 507:
case 1951:
case 2949:
case 1809:
case 137:
case 3464:
case 2091:
case 353:
case 3701:
case 3746:
case 93:
case 1712:
case 2047:
case 78:
case 3331:
case 27:
case 3785:
case 2166:
case 1040:
case 1833:
case 1948:
case 2205:
case 2328:
case 2652:
case 2808:
case 1475:
case 618:
case 3800:
case 3:
case 3162:
case 2010:
case 816:
case 1876:
case 3320:
case 2918:
case 3122:
case 599:
case 3603:
case 3581:
case 1244:
case 24:
case 3485:
case 390:
case 726:
case 175:
case 1081:
case 113:
case 722:
case 2882:
case 49:
case 540:
case 2645:
case 1775:
case 3834:
case 200:
case 937:
case 1728:
case 2214:
case 1117:
case 381:
case 3886:
case 3251:
case 4085:
case 3682:
case 2637:
case 4046:
case 629:
case 3845:
case 1513:
case 4001:
case 2634:
case 3926:
case 2755:
case 2803:
case 2442:
case 1838:
case 2110:
case 1943:
case 662:
case 164:
case 3966:
case 2323:
case 3724:
case 3118:
case 2686:
case 1342:
case 2026:
case 419:
case 3316:
case 3505:
case 3764:
case 2962:
case 1140:
case 1412:
case 2910:
case 3166:
case 3368:
case 605:
case 37:
case 3808:
case 3126:
case 3652:
case 139:
case 2:
case 1213:
case 3010:
case 2800:
case 249:
case 659:
case 335:
case 2360:
case 555:
case 2122:
case 3918:
case 1367:
case 2608:
case 2514:
case 1633:
case 1051:
case 2049:
case 734:
case 193:
case 1716:
case 1327:
case 3742:
case 1896:
case 2395:
case 2991:
case 1807:
case 3455:
case 741:
case 1547:
case 4055:
case 0:
case 4029:
case 756:
case 2424:
case 3949:
case 1019:
case 1544:
case 1591:
case 1917:
case 3047:
case 950:
case 2746:
case 643:
case 2701:
case 253:
case 3600:
case 3044:
case 1914:
case 2464:
case 831:
case 3312:
case 3634:
case 2022:
case 2845:
case 148:
case 1905:
case 1148:
case 3769:
case 2248:
case 1301:
case 2682:
case 2966:
case 844:
case 3110:
case 2062:
case 3442:
case 771:
case 2316:
case 3543:
case 1815:
case 3026:
case 1795:
case 1830:
case 3686:
case 3913:
case 1271:
case 2171:
case 2446:
case 3066:
case 361:
case 1526:
case 673:
case 767:
case 2505:
case 2764:
case 615:
case 978:
case 1638:
case 993:
case 2485:
case 290:
case 630:
case 1720:
case 59:
case 888:
case 323:
case 3882:
case 2837:
case 417:
case 281:
case 3839:
case 3217:
case 3214:
case 279:
case 627:
case 2886:
case 1385:
case 1151:
case 1981:
case 150:
case 1731:
case 3831:
case 4072:
case 576:
case 2868:
case 3573:
case 2265:
case 1627:
case 1165:
case 1084:
case 1297:
case 764:
case 2106:
case 1206:
case 2532:
case 3270:
case 2225:
case 1667:
case 1739:
case 1989:
case 1294:
case 2259:
case 2476:
case 2141:
case 1241:
case 2278:
case 1178:
case 285:
case 3257:
case 3199:
case 3254:
case 2589:
case 3820:
case 3102:
case 374:
case 3860:
case 169:
case 3628:
case 3352:
case 1993:
case 126:
case 3730:
case 421:
case 3150:
case 2631:
case 3980:
case 4004:
case 3895:
case 3298:
case 1588:
case 122:
case 212:
case 775:
case 2409:
case 2290:
case 3174:
case 1829:
case 3404:
case 2738:
case 1309:
case 187:
case 2593:
case 2080:
case 1392:
case 365:
case 98:
case 611:
case 3721:
case 800:
case 4021:
case 3002:
case 3906:
case 1599:
case 2554:
case 3289:
case 3941:
case 3994:
case 2863:
case 3430:
case 2303:
case 660:
case 2236:
case 3511:
case 1338:
case 3099:
case 2709:
case 3415:
case 745:
case 2006:
case 3707:
case 3796:
case 1403:
case 2273:
case 1025:
case 2041:
case 2094:
case 3461:
case 3232:
case 388:
case 823:
case 2570:
case 1065:
case 1954:
case 3559:
case 2284:
case 2950:
case 3083:
case 2180:
case 926:
case 404:
case 3979:
case 1577:
case 969:
case 3623:
case 392:
case 601:
case 3337:
case 3293:
case 1601:
case 542:
case 3612:
case 3663:
case 861:
case 1439:
case 396:
case 737:
case 2733:
case 268:
case 2079:
case 2983:
case 987:
case 202:
case 331:
case 551:
case 1550:
case 2598:
case 206:
case 877:
case 2977:
case 2088:
case 849:
case 784:
case 2352:
case 1864:
case 2628:
case 1827:
case 2715:
case 312:
case 2895:
case 2150:
case 1307:
case 3053:
case 2730:
case 2668:
case 521:
case 1824:
case 2761:
case 483:
case 1274:
case 2174:
case 3290:
case 1580:
case 1093:
case 3356:
case 4009:
case 2721:
case 4092:
case 1745:
case 265:
case 514:
case 1283:
case 952:
case 2183:
case 1372:
case 3265:
case 748:
case 1786:
case 476:
case 1032:
case 3868:
case 3695:
case 1936:
case 2831:
case 3476:
case 4033:
case 2270:
case 3225:
case 3828:
case 472:
case 3106:
case 1734:
case 3875:
case 2820:
case 1984:
case 1299:
case 1154:
case 3589:
case 1157:
case 2300:
case 2257:
case 1669:
case 2860:
case 1089:
case 3211:
case 2536:
case 1629:
case 2102:
case 1202:
case 793:
case 292:
case 1558:
case 134:
case 778:
case 2979:
case 1486:
case 446:
case 2083:
case 3180:
case 3950:
case 680:
case 296:
case 3776:
case 636:
case 2612:
case 2663:
case 2077:
case 1700:
case 2337:
case 1434:
case 691:
case 302:
case 3339:
case 1098:
case 2050:
case 494:
case 3733:
case 3079:
case 368:
case 3977:
case 2772:
case 3616:
case 306:
case 3598:
case 1288:
case 152:
case 244:
case 1885:
case 1579:
case 1321:
case 3812:
case 1925:
case 3863:
case 2994:
case 1959:
case 1846:
case 3557:
case 2997:
case 989:
case 2415:
case 3709:
case 739:
case 1054:
case 1057:
case 2430:
case 1315:
case 2816:
case 1911:
case 3273:
case 2565:
case 3438:
case 890:
case 2796:
case 16:
case 2707:
case 1330:
case 3097:
case 3006:
case 2559:
case 3284:
case 288:
case 1506:
case 1752:
case 967:
case 1597:
case 3287:
case 2048:
case 3468:
case 670:
case 1360:
case 1122:
case 2222:
case 2510:
case 149:
case 4075:
case 2692:
case 405:
case 1320:
case 2262:
case 1:
case 239:
case 345:
case 3475:
case 3571:
case 4028:
case 1785:
case 1935:
case 3518:
case 3696:
case 1331:
case 3607:
case 3040:
case 1910:
case 2143:
case 3266:
case 889:
case 744:
case 153:
case 2914:
case 557:
case 871:
case 3712:
case 3763:
case 1746:
case 2676:
case 2495:
case 731:
case 1424:
case 3355:
case 2544:
case 979:
case 337:
case 3723:
case 1427:
case 3809:
case 2896:
case 3549:
case 1395:
case 1944:
case 1991:
case 2324:
case 2327:
case 3017:
case 3672:
case 443:
case 1514:
case 633:
case 2051:
case 1852:
case 792:
case 293:
case 990:
case 607:
case 1517:
case 138:
case 774:
case 3412:
case 2043:
case 841:
case 1446:
case 1171:
case 2526:
case 2795:
case 9:
case 2566:
case 3235:
case 4023:
case 498:
case 1966:
case 364:
case 2416:
case 415:
case 2861:
case 1013:
case 3210:
case 1062:
case 473:
case 3838:
case 852:
case 2905:
case 2301:
case 658:
case 1682:
case 4063:
case 4012:
case 856:
case 3562:
case 2346:
case 1251:
case 1886:
case 2385:
case 3630:
case 1149:
case 2249:
case 2981:
case 640:
case 33:
case 2731:
case 617:
case 482:
case 55:
case 3081:
case 60:
case 2119:
case 3621:
case 1485:
case 3291:
case 3244:
case 1581:
case 1603:
case 3247:
case 284:
case 3676:
case 1047:
case 3917:
case 457:
case 1044:
case 1091:
case 2892:
case 900:
case 2723:
case 1856:
case 3544:
case 1281:
case 2355:
case 1949:
case 3495:
case 702:
case 203:
case 2017:
case 2672:
case 4095:
case 1455:
case 3807:
case 1429:
case 2549:
case 393:
case 3051:
case 378:
case 3609:
case 822:
case 3510:
case 3048:
case 3535:
case 3940:
case 3262:
case 2876:
case 4020:
case 3692:
case 135:
case 628:
case 1548:
case 2428:
case 1126:
case 2475:
case 1808:
case 2948:
case 245:
case 2833:
case 655:
case 2105:
case 977:
case 2266:
case 418:
case 887:
case 3460:
case 2040:
case 3143:
case 2604:
case 2696:
case 1368:
case 2615:
case 23:
case 350:
case 3385:
case 3249:
case 586:
case 2768:
case 2630:
case 2117:
case 530:
case 45:
case 582:
case 2728:
case 2114:
case 1214:
case 910:
case 2775:
case 3720:
case 1645:
case 1882:
case 712:
case 123:
case 2661:
case 384:
case 2247:
case 3638:
case 2291:
case 1191:
case 14:
case 3526:
case 161:
case 3271:
case 3043:
case 1913:
case 2463:
case 462:
case 3566:
case 2342:
case 785:
case 2423:
case 3815:
case 1543:
case 2005:
case 1442:
case 2522:
case 2210:
case 2838:
case 515:
case 177:
case 598:
case 264:
case 88:
case 2235:
case 3346:
case 2513:
case 1634:
case 1312:
case 3821:
case 619:
case 1637:
case 1769:
case 348:
case 165:
case 3392:
case 944:
case 1183:
case 1721:
case 1675:
case 1407:
case 1496:
case 3703:
case 2274:
case 2093:
case 2580:
case 387:
case 1761:
case 4056:
case 3258:
case 3309:
case 1177:
case 2277:
case 779:
case 1895:
case 996:
case 2396:
case 2307:
case 2250:
case 1668:
case 511:
case 3279:
case 2824:
case 2304:
case 1298:
case 3993:
case 992:
case 790:
case 2629:
case 2973:
case 988:
case 672:
case 2089:
case 738:
case 2157:
case 1257:
case 2987:
case 893:
case 2669:
case 3408:
case 2984:
case 676:
case 1254:
case 2299:
case 1199:
case 3664:
case 3241:
case 1584:
case 3294:
case 3739:
case 2170:
case 1270:
case 3624:
case 3087:
case 1573:
case 3550:
case 38:
case 2642:
case 965:
case 753:
case 252:
case 642:
case 1958:
case 3482:
case 848:
case 432:
case 4039:
case 501:
case 480:
case 3708:
case 131:
case 2098:
case 2700:
case 1074:
case 454:
case 3090:
case 3583:
case 241:
case 1334:
case 1077:
case 4082:
case 1612:
case 491:
case 2486:
case 3280:
case 1083:
case 3998:
case 192:
case 2558:
case 1623:
case 3577:
case 2978:
case 1232:
case 2597:
case 1559:
case 3954:
case 1421:
case 560:
case 1525:
case 3065:
case 7:
case 2330:
case 1461:
case 2070:
case 3136:
case 2057:
case 3502:
case 1099:
case 4003:
case 1906:
case 2801:
case 1997:
case 2321:
case 3970:
case 2925:
case 1994:
case 2959:
case 3011:
case 1289:
case 2189:
case 1345:
case 1211:
case 3202:
case 3629:
case 761:
case 3299:
case 4000:
case 3984:
case 2408:
case 2376:
case 1433:
case 2036:
case 2782:
case 2125:
case 2667:
case 1225:
case 2739:
case 2073:
case 2989:
case 1141:
case 1308:
case 1194:
case 663:
case 777:
case 2333:
case 2206:
case 2627:
case 1265:
case 837:
case 3372:
case 3936:
case 2087:
case 1695:
case 803:
case 1868:
case 3032:
case 3786:
case 3745:
case 3283:
case 3452:
case 1080:
case 1593:
case 845:
case 424:
case 2392:
case 1660:
case 968:
case 700:
case 2258:
case 1988:
case 1356:
case 3580:
case 3093:
case 902:
case 2829:
case 222:
case 112:
case 3827:
case 2456:
case 411:
case 2279:
case 1631:
case 116:
case 226:
case 3867:
case 74:
case 1492:
case 2065:
case 1999:
case 1284:
case 3541:
case 2184:
case 2187:
case 3597:
case 875:
case 3752:
case 3978:
case 3132:
case 813:
case 1438:
case 985:
case 3070:
case 1273:
case 2842:
case 1094:
case 3911:
case 1097:
case 2685:
case 36:
case 2403:
case 1709:
case 2756:
case 2502:
case 3057:
case 1236:
case 2136:
case 3846:
case 2011:
case 2970:
case 3925:
case 1812:
case 77:
case 3321:
case 1557:
case 4086:
case 352:
case 106:
case 1977:
case 3642:
case 1974:
case 3579:
case 3885:
case 536:
case 3098:
case 1339:
case 604:
case 580:
case 2708:
case 1079:
case 1733:
case 3437:
case 532:
case 2253:
case 1776:
case 2646:
case 2583:
case 912:
case 2601:
case 3700:
case 334:
case 916:
case 1180:
case 3486:
case 1200:
case 1357:
case 2100:
case 3003:
case 2793:
case 4078:
case 3459:
case 1354:
case 2813:
case 3425:
case 2470:
case 1681:
case 1503:
case 4011:
case 2302:
case 85:
case 3561:
case 1021:
case 3465:
case 728:
case 2045:
case 2822:
case 260:
case 4065:
case 2903:
case 3530:
case 1402:
case 1843:
case 1172:
case 1938:
case 4025:
case 3397:
case 3306:
case 3478:
case 1015:
case 3108:
case 3826:
case 1499:
case 2374:
case 808:
case 921:
case 1450:
case 3156:
case 541:
case 2037:
case 3358:
case 862:
case 3622:
case 2498:
case 354:
case 606:
case 797:
case 3292:
case 1582:
case 534:
case 829:
case 2939:
case 866:
case 391:
case 104:
case 2086:
case 3937:
case 2732:
case 2152:
case 3784:
case 1539:
case 2350:
case 2207:
case 556:
case 3490:
case 3379:
case 2666:
case 1477:
case 3773:
case 2230:
case 571:
case 857:
case 1115:
case 3572:
case 2215:
case 589:
case 2798:
case 685:
case 1508:
case 2871:
case 1933:
case 2432:
case 1783:
case 1121:
case 2221:
case 2145:
case 1245:
case 2908:
case 3103:
case 2000:
case 3790:
case 2261:
case 2647:
case 4036:
case 719:
case 422:
case 3353:
case 3139:
case 3725:
case 1004:
case 3507:
case 3618:
case 1286:
case 1851:
case 904:
case 3765:
case 2388:
case 1556:
case 1702:
case 3891:
case 2635:
case 3380:
case 3711:
case 114:
case 612:
case 2592:
case 3182:
case 818:
case 2757:
case 3952:
case 1819:
case 1393:
case 3778:
case 487:
case 1234:
case 2754:
case 3377:
case 644:
case 2622:
case 2358:
case 3034:
case 2986:
case 1479:
case 3374:
case 3789:
case 291:
case 1534:
case 71:
case 1537:
case 434:
case 58:
case 3626:
case 696:
case 3152:
case 2787:
case 3982:
case 815:
case 873:
case 3086:
case 452:
case 2937:
case 3204:
case 2039:
case 232:
case 983:
case 194:
case 707:
case 3296:
case 1586:
case 3207:
case 3350:
case 886:
case 2425:
case 3470:
case 3813:
case 3399:
case 2521:
case 2276:
case 1176:
case 1494:
case 1378:
case 1406:
case 3100:
case 4054:
case 3822:
case 2465:
case 1311:
case 2561:
case 1780:
case 976:
case 2866:
case 1365:
case 1961:
case 799:
case 3272:
case 827:
case 2530:
case 360:
case 46:
case 1921:
case 1325:
case 2108:
case 2341:
case 2945:
case 3457:
case 3770:
case 1741:
case 2671:
case 311:
case 740:
case 942:
case 1552:
case 1706:
case 717:
case 1814:
case 2353:
case 665:
case 3388:
case 3052:
case 3849:
case 2711:
case 3610:
case 70:
case 3509:
case 1996:
case 2891:
case 1092:
case 3754:
case 1009:
case 1648:
case 2952:
case 3592:
case 994:
case 1282:
case 674:
case 3818:
case 471:
case 1779:
case 2436:
case 3871:
case 176:
case 4032:
case 3533:
case 3145:
case 3221:
case 2487:
case 1500:
case 3432:
case 758:
case 3647:
case 3261:
case 1758:
case 2790:
case 2835:
case 1336:
case 3644:
case 3000:
case 3602:
case 2874:
case 19:
case 3229:
case 3255:
case 721:
case 2748:
case 584:
case 3269:
case 2883:
case 997:
case 1085:
case 714:
case 623:
case 43:
case 386:
case 2694:
case 1659:
case 2641:
case 1295:
case 330:
case 1718:
case 3481:
case 1665:
case 2227:
case 382:
case 398:
case 464:
case 315:
case 3175:
case 1512:
case 909:
case 2120:
case 2313:
case 1854:
case 2899:
case 3546:
case 661:
case 2362:
case 1001:
case 1690:
case 3677:
case 2160:
case 1523:
case 3012:
case 1260:
case 548:
case 2679:
case 2751:
case 1343:
case 677:
case 763:
case 262:
case 2923:
case 2542:
case 3366:
case 229:
case 3128:
case 3806:
case 2016:
case 266:
case 4005:
case 2912:
case 1413:
case 1687:
case 3853:
case 1969:
case 1024:
case 3705:
case 1027:
case 4014:
case 1955:
case 704:
case 2349:
case 1185:
case 1351:
case 1929:
case 1067:
case 1673:
case 2743:
case 3527:
case 578:
case 197:
case 2451:
case 1449:
case 2555:
case 3344:
case 610:
case 3880:
case 647:
case 257:
case 3414:
case 1319:
case 437:
case 1713:
case 3417:
case 109:
case 1216:
case 824:
case 3242:
case 359:
case 3068:
case 218:
case 128:
case 1528:
case 635:
case 2975:
case 2371:
case 1101:
case 2201:
case 2928:
case 2060:
case 3112:
case 1146:
case 1889:
case 3931:
case 3781:
case 305:
case 2968:
case 2020:
case 3075:
case 3123:
case 1426:
case 3899:
case 3362:
case 1275:
case 298:
case 564:
case 2405:
case 638:
case 273:
case 2916:
case 1466:
case 832:
case 2063:
case 2677:
case 3443:
case 2674:
case 3802:
case 1744:
case 776:
case 1865:
case 999:
case 4043:
case 2650:
case 3131:
case 308:
case 2168:
case 891:
case 1042:
case 1825:
case 2717:
case 2841:
case 2806:
case 1901:
case 158:
case 1228:
case 1710:
case 227:
case 575:
case 140:
case 1155:
case 1381:
case 1129:
case 1735:
case 2229:
case 2602:
case 91:
case 3748:
case 484:
case 3641:
case 53:
case 1670:
case 3264:
case 10:
case 3697:
case 783:
case 933:
case 3227:
case 2481:
case 35:
case 3224:
case 907:
case 439:
case 1410:
case 3116:
case 3318:
case 2028:
case 2920:
case 3975:
case 1340:
case 3031:
case 1887:
case 2068:
case 4048:
case 2440:
case 3060:
case 1263:
case 199:
case 2310:
case 958:
case 1560:
case 1223:
case 1836:
case 1726:
case 1317:
case 940:
case 520:
case 3419:
case 1632:
case 243:
case 917:
case 3095:
case 653:
case 1766:
case 3888:
case 493:
case 3743:
case 1444:
case 22:
case 3285:
case 751:
case 2344:
case 1069:
case 1689:
case 107:
case 537:
case 1964:
case 133:
case 1029:
case 2414:
case 180:
case 2586:
case 3474:
case 634:
case 3398:
case 2643:
case 568:
case 1787:
case 1937:
case 1934:
case 136:
case 3539:
case 251:
case 492:
case 2537:
case 3582:
case 1292:
case 2192:
case 656:
case 72:
case 1662:
case 4083:
case 1613:
case 2390:
case 2479:
case 2881:
case 2256:
case 1156:
case 3450:
case 1082:
case 652:
case 154:
case 242:
case 4074:
case 743:
case 2109:
case 2805:
case 3030:
case 1397:
case 3499:
case 2921:
case 2325:
case 1826:
case 3370:
case 1341:
case 1394:
case 2359:
case 3015:
case 1945:
case 1530:
case 488:
case 3788:
case 2961:
case 3843:
case 2780:
case 66:
case 3503:
case 2311:
case 1465:
case 1561:
case 3200:
case 3357:
case 1425:
case 2038:
case 3354:
case 2545:
case 1521:
case 2494:
case 1276:
case 2176:
case 1056:
case 1778:
case 3237:
case 3393:
case 3819:
case 1952:
case 2282:
case 2453:
case 1182:
case 980:
case 3799:
case 936:
case 870:
case 3702:
case 786:
case 465:
case 3488:
case 2904:
case 4088:
case 2706:
case 2552:
case 3992:
case 1353:
case 2814:
case 3096:
case 512:
case 3004:
case 1725:
case 3640:
case 1759:
case 1103:
case 1238:
case 585:
case 2758:
case 1487:
case 2500:
case 3933:
case 689:
case 3848:
case 3245:
case 1484:
case 1900:
case 3614:
case 2387:
case 3976:
case 276:
case 2384:
case 807:
case 3508:
case 3072:
case 3617:
case 2033:
case 2779:
case 272:
case 2373:
case 1572:
case 1008:
case 715:
case 3359:
case 3208:
case 4006:
case 2370:
case 2030:
case 3133:
case 4041:
case 4094:
case 1272:
case 2843:
case 2172:
case 2402:
case 2021:
case 1045:
case 1538:
case 1302:
case 3780:
case 3545:
case 2354:
case 1813:
case 1470:
case 2357:
case 3406:
case 3378:
case 1666:
case 101:
case 4079:
case 1350:
case 1207:
case 2107:
case 402:
case 3586:
case 2196:
case 1626:
case 351:
case 2539:
case 1732:
case 406:
case 924:
case 2252:
case 1939:
case 1789:
case 346:
case 819:
case 592:
case 1034:
case 1374:
case 68:
case 4058:
case 3256:
case 3881:
case 1037:
case 3390:
case 3758:
case 3076:
case 897:
case 729:
case 1647:
case 3138:
case 2774:
case 1644:
case 2121:
case 1221:
case 2389:
case 708:
case 1145:
case 2245:
case 1908:
case 3619:
case 574:
case 1432:
case 3500:
case 376:
case 1871:
case 1489:
case 1533:
case 2614:
case 2115:
case 1215:
case 3373:
case 372:
case 3651:
case 2130:
case 3009:
case 2799:
case 1754:
case 626:
case 3282:
case 1592:
case 1757:
case 1137:
case 2393:
case 1509:
case 3904:
case 4080:
case 565:
case 809:
case 3092:
case 3907:
case 2556:
case 687:
case 2286:
case 1849:
case 1052:
case 221:
case 111:
case 3741:
case 2004:
case 2640:
case 3239:
case 3817:
case 2096:
case 2007:
case 855:
case 3706:
case 3552:
case 1806:
case 648:
case 2228:
case 319:
case 3462:
case 846:
case 1841:
case 2859:
case 1894:
case 2946:
case 3231:
case 561:
case 2268:
case 3749:
case 1168:
case 438:
case 2698:
case 2516:
case 2744:
case 2791:
case 3001:
case 3046:
case 3942:
case 959:
case 1677:
case 1063:
case 115:
case 1405:
case 2878:
case 198:
case 3857:
case 173:
case 1501:
case 2426:
case 3854:
case 851:
case 3220:
case 2275:
case 481:
case 1879:
case 3124:
case 1585:
case 3295:
case 684:
case 182:
case 20:
case 3085:
case 3625:
case 1740:
case 2670:
case 2657:
case 490:
case 2654:
case 2985:
case 2890:
case 650:
case 2155:
case 1229:
case 127:
case 3611:
case 1858:
case 105:
case 1781:
case 4:
case 1335:
case 1310:
case 355:
case 639:
case 2693:
case 3146:
case 3471:
case 2520:
case 2263:
case 1163:
case 2212:
case 2887:
case 3528:
case 159:
case 3832:
case 1068:
case 1920:
case 2884:
case 309:
case 3568:
case 2435:
case 2142:
case 2410:
case 973:
case 4018:
case 2055:
case 2964:
case 678:
case 1414:
case 2029:
case 3713:
case 3762:
case 2967:
case 2689:
case 1880:
case 986:
case 736:
case 2924:
case 3722:
case 872:
case 2491:
case 1524:
case 12:
case 3064:
case 21:
case 3351:
case 791:
case 397:
case 4049:
case 3067:
case 2447:
case 3024:
case 2632:
case 143:
case 1853:
case 927:
case 3684:
case 2317:
case 3027:
case 400:
case 1227:
case 2127:
case 2898:
case 579:
case 2124:
case 1224:
case 15:
case 581:
case 2167:
case 1267:
case 3670:
case 2659:
case 1694:
case 613:
case 724:
case 2085:
case 1697:
case 30:
case 2164:
case 3657:
case 2611:
case 1877:
case 29:
case 3155:
case 3985:
case 1016:
case 3859:
case 3042:
case 3228:
case 358:
case 219:
case 129:
case 3901:
case 3305:
case 3516:
case 2343:
case 3865:
case 1923:
case 3268:
case 1679:
case 108:
case 1160:
case 2942:
case 2260:
case 2523:
case 3811:
case 1658:
case 2046:
case 2001:
case 3744:
case 3791:
case 1120:
case 2512:
case 1362:
case 1313:
case 2857:
case 477:
case 325:
case 2713:
case 2762:
case 95:
case 333:
case 2893:
case 157:
case 1529:
case 620:
case 1555:
case 4047:
case 1743:
case 2673:
case 2067:
case 1888:
case 297:
case 2955:
case 1349:
case 603:
case 3595:
case 3444:
case 2027:
case 3317:
case 2684:
case 3632:
case 1419:
case 863:
case 2024:
case 3223:
case 929:
case 549:
case 5:
case 966:
case 1680:
case 3836:
case 3520:
case 908:
case 2575:
case 1060:
case 2889:
case 2471:
case 2101:
case 1201:
case 645:
case 255:
case 3340:
case 3884:
case 47:
case 1371:
case 2832:
case 195:
case 1653:
case 1031:
case 2216:
case 3410:
case 3873:
case 3142:
case 2568:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1767027601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,];
var gg_b = "1767027601/";

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
