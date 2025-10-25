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
case 1637:
case 1129:
case 3181:
case 687:
case 3877:
case 250:
case 2774:
case 1003:
case 2039:
case 1805:
case 2538:
case 2210:
case 1258:
case 1108:
case 1625:
case 2686:
case 1500:
case 3022:
case 202:
case 554:
case 121:
case 1523:
case 2876:
case 430:
case 2590:
case 3204:
case 1591:
case 557:
case 3068:
case 508:
case 2775:
case 427:
case 38:
case 2413:
case 1247:
case 857:
case 3374:
case 78:
case 1624:
case 907:
case 3154:
case 12:
case 463:
case 4052:
case 1800:
case 3223:
case 1316:
case 3383:
case 843:
case 1152:
case 2448:
case 2801:
case 1656:
case 1823:
case 174:
case 2086:
case 1025:
case 3622:
case 91:
case 3200:
case 2594:
case 2309:
case 3087:
case 2639:
case 3558:
case 2127:
case 1948:
case 3993:
case 657:
case 3150:
case 884:
case 3370:
case 2838:
case 471:
case 2328:
case 1741:
case 2288:
case 2621:
case 3456:
case 3939:
case 75:
case 403:
case 2770:
case 967:
case 2693:
case 4008:
case 1024:
case 1978:
case 3547:
case 868:
case 329:
case 2292:
case 911:
case 988:
case 1891:
case 3869:
case 2489:
case 4029:
case 2457:
case 2922:
case 3668:
case 2783:
case 3420:
case 3308:
case 2153:
case 2164:
case 3586:
case 406:
case 122:
case 1513:
case 138:
case 249:
case 3492:
case 3414:
case 2256:
case 782:
case 2332:
case 2373:
case 1615:
case 926:
case 3107:
case 2822:
case 382:
case 4040:
case 733:
case 3289:
case 3257:
case 4061:
case 1221:
case 1688:
case 2491:
case 760:
case 2106:
case 1490:
case 2380:
case 360:
case 1144:
case 1119:
case 1857:
case 998:
case 2011:
case 2587:
case 1692:
case 2731:
case 1174:
case 290:
case 485:
case 1848:
case 20:
case 1363:
case 3780:
case 1354:
case 4083:
case 3415:
case 2729:
case 2938:
case 1614:
case 1649:
case 140:
case 3690:
case 1900:
case 2669:
case 273:
case 3479:
case 1782:
case 3046:
case 1145:
case 594:
case 1923:
case 3038:
case 4045:
case 2351:
case 2677:
case 2318:
case 1350:
case 2859:
case 1170:
case 2404:
case 1966:
case 1079:
case 700:
case 3521:
case 1557:
case 3116:
case 1183:
case 1015:
case 3352:
case 3172:
case 217:
case 2385:
case 3676:
case 1286:
case 2522:
case 352:
case 1904:
case 2225:
case 752:
case 945:
case 391:
case 2912:
case 1667:
case 791:
case 525:
case 3410:
case 3199:
case 2568:
case 375:
case 2752:
case 2976:
case 2994:
case 2160:
case 810:
case 775:
case 825:
case 3977:
case 1548:
case 2141:
case 1412:
case 1140:
case 26:
case 697:
case 3911:
case 2224:
case 1905:
case 2384:
case 510:
case 1494:
case 1092:
case 2647:
case 1476:
case 4075:
case 116:
case 3751:
case 2132:
case 721:
case 630:
case 2636:
case 1155:
case 321:
case 2212:
case 713:
case 3307:
case 1424:
case 2353:
case 1375:
case 3500:
case 2613:
case 2276:
case 1344:
case 627:
case 1319:
case 3003:
case 1687:
case 3805:
case 1659:
case 895:
case 3765:
case 2078:
case 2057:
case 1858:
case 484:
case 1502:
case 663:
case 1154:
case 1847:
case 487:
case 3706:
case 72:
case 2514:
case 2549:
case 359:
case 468:
case 2592:
case 1396:
case 18:
case 2937:
case 2365:
case 1374:
case 3624:
case 503:
case 479:
case 1345:
case 3936:
case 3487:
case 3753:
case 4050:
case 3804:
case 2867:
case 2707:
case 1204:
case 3202:
case 220:
case 603:
case 3468:
case 548:
case 3741:
case 2678:
case 2689:
case 1087:
case 1762:
case 3603:
case 2238:
case 1150:
case 2118:
case 2013:
case 374:
case 1126:
case 2815:
case 3025:
case 848:
case 237:
case 1200:
case 774:
case 3800:
case 4063:
case 524:
case 2036:
case 67:
case 1361:
case 2:
case 3504:
case 192:
case 527:
case 2290:
case 1869:
case 3342:
case 563:
case 1403:
case 377:
case 2772:
case 530:
case 2814:
case 695:
case 136:
case 3422:
case 827:
case 3989:
case 1921:
case 3957:
case 1456:
case 789:
case 983:
case 1728:
case 3771:
case 671:
case 863:
case 389:
case 2892:
case 15:
case 1340:
case 3717:
case 3878:
case 3144:
case 3857:
case 3010:
case 2914:
case 3239:
case 2949:
case 3679:
case 1289:
case 3221:
case 1278:
case 566:
case 799:
case 993:
case 2763:
case 160:
case 3536:
case 3798:
case 133:
case 1107:
case 1012:
case 1743:
case 182:
case 722:
case 1601:
case 1586:
case 866:
case 322:
case 338:
case 2525:
case 970:
case 986:
case 1969:
case 1046:
case 3067:
case 555:
case 2197:
case 606:
case 2402:
case 340:
case 410:
case 2691:
case 1732:
case 2004:
case 1479:
case 1780:
case 2781:
case 3649:
case 3614:
case 2979:
case 269:
case 4072:
case 1095:
case 2988:
case 3174:
case 3730:
case 4033:
case 3401:
case 2524:
case 2000:
case 1676:
case 1213:
case 3904:
case 152:
case 3326:
case 2447:
case 1694:
case 1116:
case 3183:
case 2825:
case 3015:
case 2335:
case 1236:
case 2605:
case 2520:
case 100:
case 3170:
case 655:
case 3966:
case 3079:
case 3589:
case 2128:
case 506:
case 3557:
case 1521:
case 3088:
case 1539:
case 1038:
case 2259:
case 2327:
case 3446:
case 2287:
case 1784:
case 19:
case 3494:
case 885:
case 209:
case 2666:
case 3092:
case 1751:
case 3727:
case 316:
case 2910:
case 494:
case 1958:
case 1977:
case 3049:
case 2824:
case 241:
case 3412:
case 3140:
case 4007:
case 1911:
case 2604:
case 585:
case 1090:
case 666:
case 191:
case 3667:
case 1142:
case 2458:
case 1410:
case 41:
case 3825:
case 696:
case 34:
case 2183:
case 161:
case 74:
case 3556:
case 3000:
case 1466:
case 4065:
case 1225:
case 3447:
case 819:
case 1385:
case 2286:
case 1522:
case 644:
case 464:
case 1658:
case 3503:
case 3287:
case 1677:
case 2446:
case 1351:
case 3259:
case 3837:
case 628:
case 995:
case 1117:
case 3605:
case 2734:
case 2966:
case 1237:
case 519:
case 2578:
case 1171:
case 2088:
case 2557:
case 1995:
case 2589:
case 741:
case 2548:
case 1141:
case 2049:
case 2014:
case 853:
case 2140:
case 3334:
case 2905:
case 4053:
case 709:
case 1224:
case 2494:
case 2476:
case 3666:
case 3162:
case 2727:
case 647:
case 1912:
case 97:
case 3726:
case 114:
case 3091:
case 3604:
case 1976:
case 2161:
case 1568:
case 1752:
case 1405:
case 2221:
case 3469:
case 299:
case 2381:
case 1491:
case 2688:
case 3005:
case 2490:
case 924:
case 4060:
case 1380:
case 3330:
case 2857:
case 2144:
case 2889:
case 1587:
case 2239:
case 1164:
case 1153:
case 3856:
case 3525:
case 847:
case 2991:
case 2513:
case 222:
case 2175:
case 2355:
case 4041:
case 2798:
case 2536:
case 3623:
case 1822:
case 101:
case 3402:
case 240:
case 583:
case 1343:
case 4017:
case 896:
case 3755:
case 2900:
case 3268:
case 528:
case 3691:
case 3004:
case 173:
case 2145:
case 2782:
case 378:
case 930:
case 3915:
case 1708:
case 619:
case 1047:
case 3979:
case 458:
case 1165:
case 3988:
case 1731:
case 828:
case 2196:
case 2174:
case 883:
case 3524:
case 190:
case 2354:
case 1423:
case 927:
case 2363:
case 3781:
case 1729:
case 1639:
case 3510:
case 3238:
case 180:
case 570:
case 2505:
case 2620:
case 320:
case 3317:
case 1328:
case 720:
case 2468:
case 631:
case 3689:
case 2800:
case 886:
case 715:
case 966:
case 2316:
case 2760:
case 593:
case 1761:
case 315:
case 1801:
case 2656:
case 3036:
case 2025:
case 274:
case 1576:
case 1968:
case 1309:
case 2333:
case 1594:
case 737:
case 734:
case 3733:
case 334:
case 3567:
case 505:
case 3772:
case 3439:
case 2399:
case 2504:
case 3:
case 3290:
case 1783:
case 7:
case 1249:
case 1214:
case 2771:
case 805:
case 1770:
case 2717:
case 3920:
case 742:
case 3849:
case 2024:
case 2566:
case 1362:
case 1595:
case 2957:
case 1292:
case 3353:
case 2108:
case 3613:
case 3276:
case 1686:
case 2500:
case 439:
case 2625:
case 1182:
case 102:
case 2056:
case 83:
case 2307:
case 906:
case 1021:
case 3057:
case 3089:
case 3810:
case 2020:
case 3306:
case 3924:
case 53:
case 2131:
case 1538:
case 1039:
case 1796:
case 2277:
case 259:
case 3592:
case 3937:
case 1744:
case 2624:
case 693:
case 831:
case 1895:
case 985:
case 4035:
case 1959:
case 3048:
case 3514:
case 1846:
case 3867:
case 1590:
case 3707:
case 1198:
case 670:
case 565:
case 1775:
case 1397:
case 2487:
case 2936:
case 2459:
case 2804:
case 3117:
case 1605:
case 3002:
case 3237:
case 3171:
case 611:
case 688:
case 3404:
case 1128:
case 2521:
case 3995:
case 2038:
case 1503:
case 2539:
case 804:
case 3658:
case 667:
case 3611:
case 1000:
case 2213:
case 2694:
case 717:
case 1109:
case 2133:
case 1825:
case 1023:
case 2116:
case 2612:
case 1967:
case 504:
case 1556:
case 507:
case 1604:
case 3069:
case 558:
case 275:
case 3568:
case 3994:
case 3160:
case 2090:
case 3912:
case 1477:
case 2785:
case 2410:
case 1458:
case 444:
case 1726:
case 2142:
case 1750:
case 2718:
case 3224:
case 483:
case 858:
case 1666:
case 2751:
case 1162:
case 1910:
case 2977:
case 1824:
case 141:
case 908:
case 1334:
case 2414:
case 3256:
case 233:
case 564:
case 2107:
case 282:
case 2308:
case 943:
case 3164:
case 3153:
case 749:
case 1382:
case 1525:
case 1222:
case 2586:
case 4062:
case 419:
case 349:
case 658:
case 2821:
case 607:
case 864:
case 3559:
case 2638:
case 3203:
case 2331:
case 1469:
case 1992:
case 3491:
case 1537:
case 1005:
case 1803:
case 2839:
case 260:
case 1754:
case 888:
case 2415:
case 30:
case 3423:
case 2248:
case 823:
case 3729:
case 453:
case 1066:
case 3047:
case 987:
case 3731:
case 2095:
case 1988:
case 3400:
case 2893:
case 867:
case 790:
case 4009:
case 604:
case 1524:
case 178:
case 1197:
case 3708:
case 1915:
case 3868:
case 3343:
case 979:
case 2690:
case 773:
case 567:
case 2479:
case 2732:
case 1398:
case 1185:
case 1013:
case 456:
case 1742:
case 2200:
case 2622:
case 598:
case 3968:
case 1493:
case 3215:
case 2223:
case 43:
case 3761:
case 1036:
case 2370:
case 120:
case 1317:
case 526:
case 3288:
case 3328:
case 539:
case 3621:
case 3639:
case 1238:
case 776:
case 1879:
case 612:
case 997:
case 2511:
case 1118:
case 1888:
case 780:
case 1920:
case 994:
case 1849:
case 2547:
case 236:
case 3362:
case 3595:
case 229:
case 3292:
case 2728:
case 3214:
case 1903:
case 2939:
case 1341:
case 2456:
case 4032:
case 3770:
case 1892:
case 4073:
case 3693:
case 2340:
case 2361:
case 3457:
case 2291:
case 3922:
case 645:
case 2420:
case 4080:
case 3783:
case 2709:
case 3546:
case 1567:
case 3890:
case 1956:
case 2344:
case 3774:
case 3210:
case 545:
case 1579:
case 1078:
case 3021:
case 2811:
case 1588:
case 1089:
case 750:
case 1180:
case 2205:
case 2877:
case 3894:
case 1132:
case 845:
case 2155:
case 1173:
case 470:
case 4084:
case 1364:
case 2424:
case 1294:
case 1613:
case 3686:
case 3745:
case 2022:
case 218:
case 3182:
case 3397:
case 910:
case 4051:
case 639:
case 4018:
case 1867:
case 3590:
case 2437:
case 2986:
case 698:
case 3895:
case 3093:
case 3436:
case 1295:
case 2396:
case 1592:
case 1365:
case 4085:
case 1486:
case 2374:
case 2644:
case 2387:
case 1497:
case 2188:
case 2818:
case 1850:
case 1581:
case 3996:
case 3529:
case 473:
case 1071:
case 2070:
case 2851:
case 2580:
case 3974:
case 1606:
case 2997:
case 1555:
case 2235:
case 2573:
case 841:
case 2885:
case 40:
case 753:
case 3123:
case 1653:
case 3508:
case 3009:
case 285:
case 3465:
case 158:
case 4047:
case 92:
case 3697:
case 4077:
case 2645:
case 4011:
case 54:
case 3975:
case 2234:
case 401:
case 2040:
case 1554:
case 2114:
case 3787:
case 2696:
case 1665:
case 319:
case 678:
case 3464:
case 2873:
case 332:
case 1462:
case 2282:
case 328:
case 1064:
case 1855:
case 732:
case 383:
case 728:
case 188:
case 2683:
case 3768:
case 3552:
case 796:
case 1617:
case 1006:
case 64:
case 2499:
case 569:
case 1671:
case 3281:
case 3321:
case 1357:
case 1229:
case 3339:
case 1158:
case 2880:
case 344:
case 2442:
case 1111:
case 3940:
case 2584:
case 3970:
case 2074:
case 2433:
case 347:
case 2472:
case 266:
case 1703:
case 2096:
case 3662:
case 2739:
case 1147:
case 1854:
case 1065:
case 1641:
case 1348:
case 3263:
case 2416:
case 461:
case 2298:
case 3471:
case 3104:
case 1428:
case 2368:
case 1972:
case 1756:
case 3417:
case 1660:
case 3983:
case 1916:
case 3097:
case 164:
case 2045:
case 3722:
case 2843:
case 1035:
case 1833:
case 3136:
case 2809:
case 263:
case 1323:
case 2463:
case 1283:
case 3673:
case 3216:
case 1507:
case 705:
case 2608:
case 1682:
case 842:
case 3575:
case 3085:
case 3883:
case 3113:
case 2828:
case 1630:
case 3544:
case 3519:
case 1954:
case 834:
case 940:
case 1027:
case 2631:
case 2629:
case 1749:
case 2217:
case 1443:
case 230:
case 1240:
case 2862:
case 386:
case 922:
case 938:
case 2702:
case 1034:
case 786:
case 1432:
case 2241:
case 2455:
case 770:
case 1981:
case 3738:
case 3840:
case 837:
case 3482:
case 3084:
case 2124:
case 3574:
case 4039:
case 515:
case 3242:
case 393:
case 3908:
case 2260:
case 820:
case 3299:
case 198:
case 1391:
case 2481:
case 1261:
case 4021:
case 3369:
case 2984:
case 3570:
case 27:
case 3157:
case 2528:
case 3819:
case 3189:
case 3844:
case 3377:
case 2031:
case 1627:
case 1139:
case 2103:
case 1244:
case 3311:
case 637:
case 3746:
case 1807:
case 1572:
case 2376:
case 3073:
case 916:
case 2312:
case 1516:
case 620:
case 2652:
case 365:
case 203:
case 3561:
case 1304:
case 1098:
case 2985:
case 1599:
case 1926:
case 3043:
case 3712:
case 3794:
case 642:
case 2450:
case 3427:
case 1245:
case 476:
case 3776:
case 295:
case 3952:
case 634:
case 3684:
case 2711:
case 2562:
case 1710:
case 1366:
case 3347:
case 2265:
case 2395:
case 1296:
case 2777:
case 3435:
case 73:
case 2951:
case 1950:
case 1193:
case 1634:
case 33:
case 2101:
case 3653:
case 2474:
case 758:
case 1009:
case 707:
case 1386:
case 2325:
case 1226:
case 1465:
case 469:
case 358:
case 1100:
case 2072:
case 3555:
case 225:
case 3252:
case 1945:
case 153:
case 98:
case 86:
case 3826:
case 1123:
case 2607:
case 3850:
case 1529:
case 1996:
case 4004:
case 2965:
case 601:
case 3102:
case 1974:
case 2530:
case 2218:
case 3724:
case 2445:
case 3497:
case 814:
case 817:
case 1787:
case 1759:
case 3665:
case 1464:
case 2324:
case 2284:
case 1453:
case 918:
case 1944:
case 3563:
case 861:
case 673:
case 3041:
case 3737:
case 2190:
case 4005:
case 3060:
case 2598:
case 535:
case 3725:
case 2713:
case 2042:
case 3907:
case 2444:
case 3231:
case 1339:
case 3177:
case 144:
case 3550:
case 50:
case 2280:
case 2320:
case 635:
case 1105:
case 4091:
case 1628:
case 3389:
case 3671:
case 3229:
case 2461:
case 1321:
case 2440:
case 441:
case 929:
case 2882:
case 311:
case 388:
case 2616:
case 2007:
case 2273:
case 936:
case 80:
case 323:
case 294:
case 3942:
case 2356:
case 1441:
case 1552:
case 1768:
case 95:
case 1961:
case 3526:
case 3999:
case 2672:
case 128:
case 3064:
case 2633:
case 3053:
case 890:
case 767:
case 2194:
case 183:
case 2960:
case 764:
case 501:
case 2898:
case 2146:
case 1104:
case 1471:
case 549:
case 297:
case 3972:
case 66:
case 3756:
case 2243:
case 3660:
case 3641:
case 4023:
case 2483:
case 31:
case 1393:
case 2534:
case 1970:
case 2917:
case 614:
case 951:
case 3703:
case 1662:
case 4000:
case 1166:
case 3147:
case 3065:
case 2379:
case 2228:
case 3714:
case 2388:
case 1302:
case 1680:
case 1519:
case 3630:
case 1544:
case 3954:
case 602:
case 2871:
case 1870:
case 279:
case 3027:
case 2817:
case 2553:
case 2209:
case 268:
case 2998:
case 1883:
case 1113:
case 1136:
case 1632:
case 3283:
case 1673:
case 1790:
case 2723:
case 3842:
case 798:
case 1643:
case 562:
case 3391:
case 1299:
case 4089:
case 3261:
case 4057:
case 2431:
case 876:
case 1545:
case 193:
case 1242:
case 3899:
case 339:
case 1596:
case 2262:
case 862:
case 326:
case 2565:
case 1482:
case 1574:
case 2408:
case 170:
case 3034:
case 3779:
case 580:
case 3432:
case 2349:
case 2314:
case 1207:
case 1875:
case 1583:
case 2055:
case 2853:
case 165:
case 2704:
case 312:
case 3767:
case 3082:
case 3572:
case 1685:
case 3275:
case 3533:
case 680:
case 2766:
case 434:
case 1377:
case 3139:
case 2806:
case 3627:
case 662:
case 3244:
case 1311:
case 1570:
case 2517:
case 1080:
case 1157:
case 2081:
case 991:
case 1819:
case 4:
case 1178:
case 2541:
case 1148:
case 345:
case 2927:
case 1435:
case 3950:
case 952:
case 1540:
case 3634:
case 2865:
case 1684:
case 3274:
case 550:
case 3710:
case 3485:
case 4013:
case 1347:
case 3418:
case 2367:
case 3245:
case 900:
case 3451:
case 254:
case 3542:
case 1952:
case 2168:
case 3098:
case 3304:
case 1845:
case 850:
case 1712:
case 1043:
case 2560:
case 2767:
case 212:
case 3122:
case 88:
case 2275:
case 1376:
case 357:
case 3626:
case 2533:
case 708:
case 1509:
case 1008:
case 2484:
case 4024:
case 1264:
case 1312:
case 3864:
case 2305:
case 17:
case 1120:
case 58:
case 2121:
case 1528:
case 651:
case 3310:
case 1747:
case 477:
case 3806:
case 1103:
case 2219:
case 2274:
case 1711:
case 2485:
case 1562:
case 474:
case 2710:
case 881:
case 2296:
case 245:
case 3452:
case 3541:
case 3927:
case 3865:
case 692:
case 3063:
case 2634:
case 3168:
case 65:
case 4037:
case 2599:
case 2926:
case 1897:
case 754:
case 354:
case 2451:
case 3367:
case 2245:
case 195:
case 55:
case 973:
case 1828:
case 3871:
case 681:
case 379:
case 1631:
case 3159:
case 3817:
case 3187:
case 2027:
case 3379:
case 3681:
case 1271:
case 529:
case 1629:
case 536:
case 2714:
case 2443:
case 2270:
case 2833:
case 3655:
case 2035:
case 1454:
case 42:
case 2323:
case 1463:
case 85:
case 1608:
case 3553:
case 1301:
case 2300:
case 592:
case 127:
case 3026:
case 2186:
case 2816:
case 4003:
case 3431:
case 2955:
case 3700:
case 1932:
case 3860:
case 2899:
case 4020:
case 1260:
case 3723:
case 2715:
case 2480:
case 1390:
case 3982:
case 784:
case 298:
case 2391:
case 2261:
case 1862:
case 851:
case 3663:
case 3654:
case 2473:
case 2432:
case 343:
case 1241:
case 2788:
case 3314:
case 4056:
case 1455:
case 901:
case 3392:
case 148:
case 3262:
case 226:
case 1124:
case 3841:
case 3408:
case 1980:
case 3280:
case 1670:
case 2006:
case 2617:
case 1499:
case 1962:
case 2357:
case 3748:
case 3941:
case 2231:
case 1442:
case 3527:
case 2158:
case 1110:
case 1518:
case 2881:
case 1230:
case 4092:
case 1282:
case 267:
case 1322:
case 2053:
case 3194:
case 3960:
case 2208:
case 3882:
case 794:
case 3440:
case 2942:
case 3535:
case 155:
case 4049:
case 4079:
case 1661:
case 2756:
case 4088:
case 397:
case 1368:
case 3699:
case 1909:
case 860:
case 797:
case 2660:
case 2916:
case 533:
case 1167:
case 3146:
case 1843:
case 172:
case 1584:
case 2409:
case 1074:
case 1739:
case 2854:
case 2147:
case 2863:
case 3778:
case 2641:
case 833:
case 1721:
case 3757:
case 4015:
case 962:
case 675:
case 3534:
case 325:
case 1997:
case 1532:
case 1235:
case 2336:
case 3016:
case 1885:
case 2664:
case 575:
case 3325:
case 1675:
case 3285:
case 3530:
case 2724:
case 1387:
case 4067:
case 2497:
case 2850:
case 1818:
case 2581:
case 3337:
case 2071:
case 875:
case 1179:
case 1070:
case 902:
case 2554:
case 2563:
case 1040:
case 1149:
case 1884:
case 2041:
case 438:
case 422:
case 3475:
case 2665:
case 500:
case 3284:
case 204:
case 3042:
case 3713:
case 2725:
case 950:
case 3444:
case 3953:
case 3190:
case 3964:
case 2060:
case 1061:
case 2169:
case 3099:
case 3598:
case 1766:
case 3747:
case 1806:
case 3103:
case 2795:
case 3031:
case 674:
case 1650:
case 1934:
case 52:
case 2311:
case 2570:
case 3206:
case 37:
case 1517:
case 2844:
case 2819:
case 3528:
case 559:
case 2207:
case 2073:
case 2583:
case 703:
case 3156:
case 1853:
case 1864:
case 2032:
case 303:
case 3652:
case 265:
case 1122:
case 859:
case 108:
case 2685:
case 157:
case 429:
case 3509:
case 3253:
case 521:
case 154:
case 1367:
case 1935:
case 3346:
case 2952:
case 1168:
case 2561:
case 771:
case 3985:
case 3897:
case 1560:
case 1452:
case 3951:
case 821:
case 2896:
case 1705:
case 1054:
case 23:
case 2540:
case 1063:
case 2684:
case 3711:
case 2347:
case 3758:
case 3562:
case 1553:
case 3608:
case 3943:
case 168:
case 2272:
case 2085:
case 3125:
case 1655:
case 2136:
case 1791:
case 205:
case 3052:
case 2632:
case 1315:
case 2673:
case 187:
case 1681:
case 2498:
case 3629:
case 1388:
case 730:
case 4068:
case 1506:
case 2519:
case 2870:
case 179:
case 3338:
case 3631:
case 1817:
case 2596:
case 874:
case 2738:
case 2482:
case 2840:
case 418:
case 748:
case 3862:
case 1930:
case 3702:
case 143:
case 2931:
case 184:
case 1723:
case 2908:
case 2643:
case 62:
case 1982:
case 2369:
case 1429:
case 3481:
case 1431:
case 3932:
case 1860:
case 2242:
case 659:
case 724:
case 1112:
case 1882:
case 755:
case 942:
case 3683:
case 194:
case 2808:
case 2552:
case 2768:
case 1356:
case 2255:
case 2961:
case 3075:
case 1176:
case 1672:
case 228:
case 3322:
case 2609:
case 3832:
case 1960:
case 2339:
case 1303:
case 3442:
case 3551:
case 1527:
case 3518:
case 3230:
case 491:
case 2460:
case 4090:
case 3793:
case 2831:
case 2105:
case 3499:
case 3962:
case 296:
case 1830:
case 1461:
case 475:
case 1748:
case 1778:
case 1483:
case 937:
case 3640:
case 2393:
case 3584:
case 4001:
case 915:
case 366:
case 838:
case 3928:
case 247:
case 3472:
case 1971:
case 2983:
case 772:
case 1898:
case 616:
case 1642:
case 3045:
case 2471:
case 3298:
case 522:
case 3368:
case 197:
case 538:
case 3909:
case 1243:
case 2417:
case 1470:
case 400:
case 2996:
case 516:
case 3188:
case 1337:
case 3070:
case 1827:
case 3580:
case 1530:
case 1218:
case 3387:
case 3227:
case 4046:
case 2009:
case 1101:
case 2508:
case 2852:
case 1325:
case 1285:
case 2386:
case 785:
case 1072:
case 816:
case 125:
case 3532:
case 2945:
case 3235:
case 2123:
case 3083:
case 1016:
case 1953:
case 1190:
case 3543:
case 2975:
case 1736:
case 1099:
case 1598:
case 2697:
case 3786:
case 1042:
case 1444:
case 2062:
case 4076:
case 3192:
case 1834:
case 4094:
case 706:
case 1906:
case 2464:
case 1324:
case 2919:
case 4012:
case 3114:
case 3884:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761364801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,];
var gg_b = "1761364801/";

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
