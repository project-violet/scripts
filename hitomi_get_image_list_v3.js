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
case 927:
case 1485:
case 2653:
case 1032:
case 2668:
case 2976:
case 3739:
case 3986:
case 2548:
case 754:
case 2983:
case 766:
case 3973:
case 2312:
case 3346:
case 863:
case 1896:
case 3808:
case 1861:
case 2772:
case 3626:
case 291:
case 491:
case 3969:
case 1837:
case 3030:
case 3421:
case 1172:
case 2498:
case 1091:
case 1780:
case 3451:
case 2905:
case 2637:
case 509:
case 418:
case 3458:
case 2003:
case 983:
case 3634:
case 2514:
case 2113:
case 2142:
case 1559:
case 303:
case 3116:
case 3479:
case 2489:
case 586:
case 2910:
case 3801:
case 648:
case 1277:
case 1823:
case 3693:
case 2696:
case 4085:
case 3740:
case 178:
case 78:
case 2085:
case 1243:
case 900:
case 3092:
case 1452:
case 1860:
case 885:
case 2407:
case 2918:
case 449:
case 4064:
case 2539:
case 2181:
case 653:
case 266:
case 1570:
case 254:
case 466:
case 3862:
case 3450:
case 911:
case 1090:
case 3210:
case 1347:
case 1987:
case 2894:
case 2602:
case 3031:
case 16:
case 871:
case 1657:
case 2199:
case 380:
case 1516:
case 3276:
case 2273:
case 2827:
case 1195:
case 2857:
case 48:
case 2490:
case 578:
case 1117:
case 3129:
case 2022:
case 718:
case 3387:
case 2795:
case 1464:
case 2269:
case 3178:
case 345:
case 157:
case 2717:
case 2540:
case 2911:
case 1007:
case 3714:
case 3800:
case 4052:
case 2052:
case 2443:
case 3537:
case 1963:
case 1160:
case 1958:
case 1794:
case 1945:
case 3871:
case 2881:
case 3409:
case 2534:
case 592:
case 4069:
case 129:
case 975:
case 1303:
case 739:
case 3614:
case 1979:
case 2073:
case 3238:
case 3083:
case 4073:
case 4086:
case 2086:
case 689:
case 3076:
case 2760:
case 2617:
case 3596:
case 3321:
case 2194:
case 1501:
case 2975:
case 3154:
case 2556:
case 3231:
case 1473:
case 3648:
case 1486:
case 3568:
case 1290:
case 2366:
case 3010:
case 3625:
case 3363:
case 3358:
case 293:
case 3345:
case 21:
case 3124:
case 3523:
case 1895:
case 2157:
case 3878:
case 1757:
case 1951:
case 3719:
case 1065:
case 476:
case 638:
case 3267:
case 1012:
case 3292:
case 2389:
case 920:
case 3304:
case 2285:
case 1642:
case 3870:
case 2880:
case 439:
case 1084:
case 323:
case 2307:
case 3249:
case 3320:
case 2761:
case 1137:
case 3964:
case 2796:
case 3640:
case 168:
case 3018:
case 2967:
case 3350:
case 1536:
case 1266:
case 3952:
case 4047:
case 2390:
case 488:
case 2047:
case 2672:
case 830:
case 3726:
case 2723:
case 776:
case 2768:
case 3639:
case 3044:
case 3922:
case 2519:
case 1554:
case 516:
case 356:
case 1680:
case 3474:
case 1168:
case 1950:
case 332:
case 3502:
case 335:
case 959:
case 1920:
case 793:
case 2477:
case 1232:
case 1123:
case 907:
case 2595:
case 3661:
case 3541:
case 1287:
case 1826:
case 2075:
case 3085:
case 3432:
case 4075:
case 1608:
case 3142:
case 3514:
case 403:
case 2116:
case 1856:
case 1274:
case 647:
case 3910:
case 1305:
case 2801:
case 1430:
case 1021:
case 1716:
case 742:
case 1376:
case 604:
case 2049:
case 1383:
case 1912:
case 1943:
case 2463:
case 1588:
case 4006:
case 1965:
case 318:
case 3003:
case 1051:
case 721:
case 1140:
case 474:
case 1770:
case 1406:
case 274:
case 2211:
case 505:
case 1581:
case 3905:
case 3247:
case 1310:
case 391:
case 1028:
case 2421:
case 851:
case 2030:
case 1182:
case 1079:
case 780:
case 1893:
case 2626:
case 1599:
case 114:
case 928:
case 630:
case 1475:
case 3548:
case 3668:
case 2739:
case 3983:
case 2973:
case 3911:
case 1:
case 1759:
case 1636:
case 242:
case 2374:
case 3384:
case 2947:
case 1467:
case 3944:
case 221:
case 3377:
case 3795:
case 421:
case 2387:
case 245:
case 1004:
case 3717:
case 158:
case 3857:
case 1050:
case 1778:
case 160:
case 531:
case 612:
case 1318:
case 2129:
case 2159:
case 615:
case 2276:
case 703:
case 2854:
case 1431:
case 1977:
case 969:
case 2031:
case 838:
case 4031:
case 1624:
case 354:
case 2815:
case 1654:
case 894:
case 2450:
case 2862:
case 1148:
case 2836:
case 1209:
case 2404:
case 349:
case 3064:
case 774:
case 105:
case 2755:
case 3181:
case 2725:
case 4092:
case 4067:
case 3918:
case 3407:
case 3582:
case 2719:
case 671:
case 1998:
case 3906:
case 376:
case 2292:
case 2379:
case 979:
case 3949:
case 141:
case 3264:
case 3332:
case 3888:
case 2010:
case 3366:
case 4010:
case 2829:
case 2363:
case 55:
case 3526:
case 2358:
case 31:
case 2345:
case 1841:
case 2553:
case 732:
case 3975:
case 1330:
case 764:
case 756:
case 2859:
case 1476:
case 2648:
case 3899:
case 4083:
case 1220:
case 210:
case 1349:
case 2238:
case 3086:
case 2076:
case 2641:
case 4076:
case 3695:
case 2596:
case 3617:
case 1825:
case 2321:
case 3194:
case 1855:
case 1659:
case 1410:
case 584:
case 1250:
case 1736:
case 826:
case 1375:
case 3881:
case 640:
case 92:
case 1762:
case 201:
case 1715:
case 401:
case 2136:
case 3222:
case 3252:
case 170:
case 2005:
case 3412:
case 2537:
case 3465:
case 1991:
case 435:
case 3938:
case 2502:
case 2487:
case 3477:
case 1126:
case 908:
case 15:
case 1527:
case 464:
case 456:
case 1156:
case 1367:
case 3484:
case 2474:
case 1279:
case 3813:
case 3753:
case 1228:
case 2756:
case 2230:
case 2835:
case 2922:
case 3768:
case 388:
case 525:
case 3672:
case 4011:
case 1245:
case 1907:
case 1418:
case 3723:
case 2011:
case 3203:
case 1251:
case 701:
case 1635:
case 1839:
case 1411:
case 2018:
case 1533:
case 1134:
case 3992:
case 990:
case 2320:
case 848:
case 1444:
case 83:
case 570:
case 1708:
case 2640:
case 533:
case 1221:
case 1990:
case 3737:
case 2108:
case 1594:
case 710:
case 3307:
case 3285:
case 1616:
case 2734:
case 184:
case 1087:
case 3880:
case 955:
case 1384:
case 2633:
case 3467:
case 62:
case 940:
case 834:
case 3492:
case 3636:
case 2535:
case 3:
case 2007:
case 3759:
case 457:
case 358:
case 865:
case 1717:
case 257:
case 1660:
case 518:
case 1188:
case 898:
case 1269:
case 2464:
case 1944:
case 209:
case 3318:
case 3778:
case 3141:
case 2195:
case 3050:
case 18:
case 1827:
case 3615:
case 3114:
case 3513:
case 982:
case 3624:
case 46:
case 1602:
case 1894:
case 3344:
case 4090:
case 3155:
case 2781:
case 2974:
case 3148:
case 3654:
case 3311:
case 166:
case 985:
case 1064:
case 1833:
case 1582:
case 811:
case 1407:
case 3246:
case 2452:
case 302:
case 2212:
case 377:
case 1085:
case 883:
case 278:
case 3608:
case 652:
case 3826:
case 2369:
case 2823:
case 331:
case 636:
case 1541:
case 2284:
case 3305:
case 3856:
case 1489:
case 655:
case 3735:
case 786:
case 2559:
case 1142:
case 1113:
case 3383:
case 690:
case 2742:
case 2909:
case 3430:
case 3021:
case 924:
case 118:
case 3140:
case 3965:
case 2098:
case 1491:
case 2946:
case 2578:
case 3588:
case 1637:
case 3310:
case 4066:
case 1905:
case 1247:
case 3063:
case 3139:
case 3058:
case 2403:
case 2091:
case 2780:
case 3406:
case 1498:
case 3770:
case 3045:
case 4091:
case 2172:
case 2837:
case 827:
case 3449:
case 191:
case 3599:
case 1772:
case 1365:
case 2861:
case 608:
case 76:
case 3079:
case 2089:
case 3893:
case 1555:
case 2032:
case 566:
case 1180:
case 314:
case 2232:
case 51:
case 1477:
case 2364:
case 813:
case 2920:
case 2950:
case 1842:
case 2168:
case 1484:
case 2680:
case 973:
case 3527:
case 2554:
case 1519:
case 399:
case 2500:
case 3331:
case 2904:
case 2291:
case 1723:
case 3907:
case 3245:
case 3258:
case 1672:
case 996:
case 3840:
case 1390:
case 2266:
case 1992:
case 3533:
case 2447:
case 3411:
case 2298:
case 729:
case 3251:
case 1203:
case 3635:
case 367:
case 1796:
case 2137:
case 1761:
case 3882:
case 295:
case 495:
case 1307:
case 3594:
case 2161:
case 250:
case 2084:
case 3990:
case 3074:
case 4084:
case 384:
case 1880:
case 3087:
case 139:
case 2515:
case 2322:
case 1931:
case 947:
case 2562:
case 2613:
case 3616:
case 2597:
case 2043:
case 3405:
case 2681:
case 1906:
case 4065:
case 2065:
case 3754:
case 2951:
case 2727:
case 2757:
case 0:
case 2921:
case 3724:
case 27:
case 646:
case 1264:
case 1702:
case 2469:
case 11:
case 193:
case 1526:
case 2699:
case 2817:
case 1366:
case 2290:
case 3700:
case 416:
case 1556:
case 3330:
case 216:
case 3119:
case 3629:
case 2508:
case 875:
case 3932:
case 1760:
case 3220:
case 1899:
case 912:
case 3349:
case 915:
case 2979:
case 3410:
case 697:
case 3848:
case 1398:
case 3306:
case 2303:
case 229:
case 1222:
case 1133:
case 1534:
case 1930:
case 1881:
case 3375:
case 3204:
case 2945:
case 795:
case 3991:
case 60:
case 1412:
case 768:
case 2963:
case 1443:
case 2688:
case 3966:
case 370:
case 994:
case 1572:
case 3265:
case 402:
case 3243:
case 1725:
case 1755:
case 205:
case 1171:
case 2600:
case 1404:
case 869:
case 2209:
case 1836:
case 3781:
case 2155:
case 1897:
case 2984:
case 2771:
case 714:
case 846:
case 1450:
case 2654:
case 1619:
case 3570:
case 180:
case 2624:
case 1420:
case 1031:
case 2438:
case 2344:
case 743:
case 2125:
case 1038:
case 1283:
case 2819:
case 2020:
case 681:
case 2615:
case 80:
case 3516:
case 2697:
case 2114:
case 2662:
case 731:
case 3694:
case 2318:
case 260:
case 3788:
case 460:
case 2141:
case 2729:
case 517:
case 1387:
case 1205:
case 142:
case 2492:
case 675:
case 906:
case 2759:
case 3007:
case 2:
case 951:
case 1739:
case 2475:
case 3032:
case 1309:
case 214:
case 1656:
case 1170:
case 414:
case 1782:
case 443:
case 2599:
case 580:
case 659:
case 1346:
case 1808:
case 607:
case 3896:
case 2893:
case 2079:
case 3172:
case 702:
case 3837:
case 1421:
case 1969:
case 1244:
case 644:
case 3066:
case 613:
case 2310:
case 2581:
case 4063:
case 2139:
case 2058:
case 4058:
case 174:
case 705:
case 117:
case 1458:
case 3098:
case 1006:
case 1445:
case 2588:
case 521:
case 3946:
case 1463:
case 2943:
case 1049:
case 2376:
case 1135:
case 2716:
case 1428:
case 3713:
case 1801:
case 2305:
case 2274:
case 2735:
case 103:
case 3559:
case 3868:
case 477:
case 3529:
case 277:
case 1517:
case 378:
case 2287:
case 1595:
case 1870:
case 3515:
case 4087:
case 1734:
case 3562:
case 1304:
case 93:
case 2193:
case 123:
case 1108:
case 3196:
case 3161:
case 4074:
case 3084:
case 3352:
case 2990:
case 2221:
case 770:
case 1793:
case 368:
case 733:
case 395:
case 836:
case 3536:
case 2134:
case 3447:
case 2533:
case 852:
case 1018:
case 2839:
case 2411:
case 2245:
case 2418:
case 725:
case 3291:
case 1682:
case 2263:
case 3266:
case 1952:
case 1044:
case 499:
case 1922:
case 1835:
case 2331:
case 1756:
case 2701:
case 3168:
case 132:
case 1474:
case 627:
case 2367:
case 164:
case 3680:
case 156:
case 2670:
case 2527:
case 3153:
case 3554:
case 3524:
case 2557:
case 45:
case 2126:
case 3232:
case 1487:
case 3920:
case 1502:
case 3794:
case 2991:
case 3945:
case 3207:
case 3160:
case 3958:
case 926:
case 1537:
case 1005:
case 270:
case 1136:
case 101:
case 3928:
case 1409:
case 2762:
case 2204:
case 3385:
case 2375:
case 2250:
case 3979:
case 1115:
case 698:
case 2410:
case 3733:
case 2306:
case 2659:
case 2848:
case 1614:
case 665:
case 1197:
case 2855:
case 2825:
case 662:
case 2629:
case 3508:
case 1561:
case 634:
case 1076:
case 110:
case 2349:
case 2220:
case 2476:
case 1568:
case 2483:
case 316:
case 2330:
case 879:
case 556:
case 1553:
case 564:
case 2841:
case 1345:
case 1124:
case 3699:
case 1625:
case 1363:
case 3290:
case 1010:
case 75:
case 4009:
case 2724:
case 600:
case 241:
case 587:
case 225:
case 425:
case 1379:
case 222:
case 2671:
case 1267:
case 2405:
case 3727:
case 3951:
case 1719:
case 687:
case 3096:
case 1216:
case 3685:
case 2879:
case 4093:
case 1456:
case 2093:
case 2174:
case 2586:
case 3576:
case 3061:
case 3948:
case 3925:
case 737:
case 263:
case 1999:
case 463:
case 2718:
case 511:
case 2034:
case 2649:
case 2858:
case 3891:
case 1787:
case 664:
case 2845:
case 1341:
case 656:
case 2329:
case 2863:
case 891:
case 632:
case 635:
case 1651:
case 3603:
case 2359:
case 2606:
case 1314:
case 3505:
case 1774:
case 3037:
case 1988:
case 1543:
case 565:
case 2821:
case 1325:
case 1658:
case 3399:
case 2282:
case 1849:
case 1565:
case 1111:
case 978:
case 1628:
case 1355:
case 2851:
case 562:
case 1434:
case 1806:
case 2026:
case 224:
case 2711:
case 3914:
case 3381:
case 2371:
case 3747:
case 183:
case 3068:
case 3941:
case 3053:
case 2408:
case 740:
case 2056:
case 1278:
case 111:
case 3982:
case 285:
case 1604:
case 3060:
case 1867:
case 2316:
case 3313:
case 482:
case 2783:
case 1105:
case 3773:
case 3939:
case 2454:
case 1259:
case 2705:
case 1183:
case 100:
case 1584:
case 1650:
case 854:
case 3769:
case 1620:
case 471:
case 763:
case 1577:
case 271:
case 1340:
case 3890:
case 1097:
case 237:
case 1229:
case 338:
case 34:
case 2424:
case 3457:
case 1062:
case 2255:
case 3002:
case 1110:
case 724:
case 909:
case 2248:
case 440:
case 1746:
case 240:
case 1054:
case 1382:
case 4019:
case 2820:
case 2019:
case 88:
case 165:
case 2146:
case 1000:
case 3112:
case 3143:
case 198:
case 3165:
case 610:
case 134:
case 3380:
case 1271:
case 3433:
case 2710:
case 2667:
case 2436:
case 747:
case 1646:
case 415:
case 1805:
case 412:
case 1192:
case 212:
case 2731:
case 1167:
case 3934:
case 326:
case 1254:
case 645:
case 4025:
case 172:
case 2025:
case 1131:
case 2610:
case 2048:
case 1441:
case 3764:
case 175:
case 929:
case 3202:
case 1224:
case 2996:
case 1262:
case 1810:
case 2585:
case 2953:
case 1029:
case 4041:
case 2150:
case 3722:
case 2041:
case 1448:
case 2683:
case 796:
case 1455:
case 1425:
case 120:
case 3752:
case 893:
case 4014:
case 2923:
case 2014:
case 3926:
case 59:
case 773:
case 261:
case 3843:
case 1393:
case 730:
case 916:
case 3506:
case 1598:
case 1750:
case 2809:
case 559:
case 2471:
case 680:
case 3481:
case 839:
case 1728:
case 3413:
case 3884:
case 2874:
case 1201:
case 2300:
case 995:
case 2179:
case 3189:
case 572:
case 617:
case 575:
case 992:
case 1745:
case 204:
case 1070:
case 3132:
case 2226:
case 2039:
case 2564:
case 2163:
case 3166:
case 715:
case 3357:
case 3191:
case 2324:
case 33:
case 348:
case 1440:
case 2611:
case 2128:
case 3327:
case 712:
case 2435:
case 1319:
case 3592:
case 1779:
case 3647:
case 1149:
case 2552:
case 430:
case 3394:
case 2121:
case 2618:
case 1035:
case 273:
case 473:
case 1106:
case 2362:
case 2040:
case 4040:
case 2151:
case 2775:
case 2315:
case 2234:
case 3480:
case 2706:
case 496:
case 1751:
case 1927:
case 1175:
case 2336:
case 1674:
case 674:
case 19:
case 1957:
case 1721:
case 1016:
case 706:
case 3995:
case 4068:
case 1461:
case 1632:
case 3408:
case 4053:
case 3026:
case 4023:
case 1280:
case 324:
case 2914:
case 2023:
case 2747:
case 3371:
case 1689:
case 1509:
case 977:
case 3851:
case 2898:
case 3239:
case 817:
case 1978:
case 3821:
case 1437:
case 2272:
case 2399:
case 1691:
case 597:
case 639:
case 2603:
case 3606:
case 1971:
case 2037:
case 3828:
case 3569:
case 3034:
case 3845:
case 251:
case 2891:
case 3329:
case 914:
case 1317:
case 3863:
case 3378:
case 3187:
case 738:
case 2177:
case 2685:
case 1453:
case 3401:
case 3093:
case 3879:
case 1213:
case 2889:
case 2955:
case 3174:
case 794:
case 1468:
case 2576:
case 2511:
case 1822:
case 842:
case 3109:
case 489:
case 3710:
case 3667:
case 3547:
case 1281:
case 960:
case 3146:
case 2143:
case 2807:
case 2664:
case 1460:
case 845:
case 2940:
case 821:
case 2165:
case 1690:
case 3225:
case 1712:
case 3019:
case 9:
case 1027:
case 2494:
case 1765:
case 958:
case 3850:
case 3255:
case 3415:
case 880:
case 3638:
case 2769:
case 905:
case 337:
case 2890:
case 2217:
case 438:
case 44:
case 3424:
case 24:
case 2427:
case 294:
case 146:
case 494:
case 1094:
case 1574:
case 1186:
case 4060:
case 2342:
case 2313:
case 382:
case 3783:
case 3776:
case 2786:
case 2622:
case 1033:
case 1288:
case 1169:
case 385:
case 2982:
case 528:
case 2506:
case 508:
case 1551:
case 419:
case 1122:
case 219:
case 3471:
case 2481:
case 3605:
case 654:
case 361:
case 2865:
case 1361:
case 2549:
case 3738:
case 1521:
case 2812:
case 3846:
case 3308:
case 1337:
case 2752:
case 3014:
case 649:
case 2499:
case 253:
case 2926:
case 2956:
case 4017:
case 1901:
case 3968:
case 925:
case 3041:
case 4095:
case 2686:
case 3150:
case 2095:
case 179:
case 2722:
case 941:
case 3048:
case 3961:
case 2764:
case 2202:
case 2190:
case 1257:
case 3996:
case 1417:
case 810:
case 3429:
case 3459:
case 426:
case 933:
case 226:
case 1886:
case 3219:
case 1873:
case 1099:
case 3792:
case 970:
case 3025:
case 1579:
case 3610:
case 801:
case 1353:
case 3301:
case 1368:
case 1643:
case 555:
case 3478:
case 1323:
case 1677:
case 2538:
case 3293:
case 1360:
case 832:
case 396:
case 3470:
case 691:
case 1798:
case 3706:
case 2703:
case 1954:
case 2919:
case 856:
case 1550:
case 2333:
case 3362:
case 3397:
case 719:
case 3775:
case 3040:
case 1847:
case 3522:
case 3234:
case 330:
case 3121:
case 887:
case 373:
case 3128:
case 136:
case 4072:
case 3435:
case 2072:
case 2327:
case 3163:
case 3644:
case 155:
case 2166:
case 984:
case 2191:
case 2357:
case 23:
case 3145:
case 43:
case 3960:
case 823:
case 1080:
case 3887:
case 1791:
case 2877:
case 2223:
case 3226:
case 52:
case 2413:
case 3730:
case 3256:
case 967:
case 2442:
case 2253:
case 3874:
case 1997:
case 3179:
case 2189:
case 726:
case 462:
case 1667:
case 1710:
case 1804:
case 434:
case 3822:
case 1370:
case 234:
case 3935:
case 809:
case 498:
case 298:
case 4000:
case 465:
case 1146:
case 1019:
case 4054:
case 1820:
case 3027:
case 3299:
case 2054:
case 1225:
case 140:
case 2746:
case 3690:
case 2339:
case 2110:
case 886:
case 30:
case 1850:
case 3057:
case 670:
case 2062:
case 622:
case 4062:
case 2097:
case 137:
case 2340:
case 171:
case 1241:
case 3587:
case 2577:
case 86:
case 3402:
case 1638:
case 949:
case 3186:
case 2176:
case 2650:
case 200:
case 1705:
case 3574:
case 2183:
case 3094:
case 2259:
case 3970:
case 641:
case 625:
case 1335:
case 1400:
case 369:
case 1783:
case 2105:
case 182:
case 2892:
case 2604:
case 3864:
case 1972:
case 966:
case 3288:
case 2278:
case 1408:
case 1917:
case 2001:
case 1995:
case 540:
case 1744:
case 283:
case 2679:
case 667:
case 2875:
case 3885:
case 2270:
case 3959:
case 918:
case 124:
case 2806:
case 734:
case 3147:
case 1851:
case 3803:
case 2628:
case 3509:
case 762:
case 3691:
case 765:
case 2645:
case 2849:
case 2658:
case 2325:
case 2663:
case 1821:
case 2543:
case 2144:
case 3666:
case 2830:
case 1828:
case 65:
case 2981:
case 2774:
case 3784:
case 1359:
case 2651:
case 2235:
case 585:
case 227:
case 1329:
case 427:
case 1240:
case 1845:
case 3777:
case 3395:
case 2787:
case 1858:
case 1649:
case 3423:
case 1718:
case 537:
case 1573:
case 991:
case 1093:
case 1675:
case 2216:
case 1401:
case 2008:
case 2208:
case 213:
case 4016:
case 1293:
case 49:
case 2957:
case 1749:
case 1902:
case 2687:
case 3550:
case 988:
case 1336:
case 3954:
case 2175:
case 2751:
case 196:
case 244:
case 1706:
case 3798:
case 643:
case 1315:
case 2439:
case 259:
case 1775:
case 207:
case 3103:
case 1151:
case 407:
case 3847:
case 1040:
case 2106:
case 2482:
case 3472:
case 173:
case 2035:
case 1618:
case 2844:
case 2507:
case 2149:
case 130:
case 614:
case 677:
case 2933:
case 3789:
case 3936:
case 1435:
case 2319:
case 1082:
case 1354:
case 1128:
case 631:
case 1611:
case 336:
case 2440:
case 3732:
case 1960:
case 147:
case 1324:
case 868:
case 781:
case 3302:
case 355:
case 1564:
case 1644:
case 2818:
case 1226:
case 2994:
case 3791:
case 1887:
case 3080:
case 104:
case 2201:
case 1416:
case 1256:
case 3233:
case 2078:
case 1471:
case 4078:
case 707:
case 2236:
case 3551:
case 1104:
case 993:
case 3396:
case 1308:
case 2393:
case 3521:
case 2720:
case 3152:
case 3361:
case 161:
case 530:
case 976:
case 605:
case 4059:
case 79:
case 713:
case 3337:
case 2425:
case 2334:
case 1683:
case 2448:
case 2215:
case 1676:
case 1968:
case 816:
case 1585:
case 3901:
case 596:
case 4029:
case 602:
case 3417:
case 2532:
case 1429:
case 2224:
case 6:
case 1767:
case 1025:
case 272:
case 1792:
case 472:
case 2883:
case 1219:
case 3227:
case 3886:
case 2414:
case 2876:
case 1731:
case 2192:
case 3368:
case 2200:
case 3353:
case 1301:
case 660:
case 2356:
case 829:
case 3558:
case 3869:
case 2326:
case 3545:
case 481:
case 3665:
case 4071:
case 2566:
case 115:
case 2646:
case 2071:
case 3790:
case 3081:
case 3643:
case 3164:
case 3612:
case 2864:
case 2607:
case 3036:
case 728:
case 616:
case 311:
case 4033:
case 551:
case 3278:
case 269:
case 469:
case 1939:
case 1773:
case 3105:
case 3650:
case 67:
case 2186:
case 3176:
case 3584:
case 300:
case 3183:
case 3980:
case 2970:
case 3259:
case 4094:
case 194:
case 3831:
case 1427:
case 14:
case 1217:
case 3229:
case 3097:
case 1890:
case 2587:
case 3015:
case 3620:
case 3110:
case 1002:
case 3942:
case 3024:
case 20:
case 2057:
case 2765:
case 629:
case 106:
case 2372:
case 4027:
case 3838:
case 2712:
case 2690:
case 942:
case 1165:
case 398:
case 1112:
case 3000:
case 1807:
case 1544:
case 858:
case 362:
case 1433:
case 189:
case 814:
case 1948:
case 1061:
case 746:
case 1955:
case 1583:
case 1184:
case 2242:
case 538:
case 974:
case 54:
case 1177:
case 1925:
case 1832:
case 3621:
case 2317:
case 428:
case 327:
case 2395:
case 1891:
case 3341:
case 3830:
case 3774:
case 2784:
case 2698:
case 3235:
case 769:
case 1603:
case 3651:
case 3565:
case 3849:
case 3543:
case 3144:
case 3325:
case 3512:
case 797:
case 3988:
case 2666:
case 2546:
case 3348:
case 3806:
case 2803:
case 3355:
case 2147:
case 3111:
case 2509:
case 3875:
case 668:
case 1747:
case 1914:
case 917:
case 2959:
case 3270:
case 695:
case 692:
case 506:
case 1068:
case 1941:
case 877:
case 383:
case 1531:
case 2915:
case 1268:
case 2997:
case 1884:
case 1253:
case 526:
case 1442:
case 3728:
case 1413:
case 884:
case 1223:
case 4080:
case 3745:
case 1877:
case 3070:
case 3994:
case 490:
case 2766:
case 3590:
case 3763:
case 148:
case 3440:
case 1357:
case 1191:
case 455:
case 867:
case 2302:
case 3933:
case 1567:
case 1647:
case 252:
case 3779:
case 2936:
case 3130:
case 923:
case 436:
case 3035:
case 3482:
case 2472:
case 1394:
case 3844:
case 3149:
case 1237:
case 935:
case 3811:
case 3439:
case 408:
case 208:
case 3106:
case 2550:
case 1919:
case 3175:
case 2954:
case 3927:
case 1703:
case 3751:
case 779:
case 2360:
case 553:
case 4042:
case 2924:
case 39:
case 2013:
case 4013:
case 2520:
case 85:
case 3687:
case 2869:
case 2323:
case 3591:
case 548:
case 2545:
case 2081:
case 3566:
case 4081:
case 2164:
case 2643:
case 736:
case 3200:
case 910:
case 3192:
case 752:
case 3805:
case 2353:
case 3609:
case 2528:
case 1530:
case 657:
case 3131:
case 2579:
case 3589:
case 372:
case 3254:
case 2873:
case 609:
case 2886:
case 3532:
case 2908:
case 1993:
case 790:
case 2257:
case 1764:
case 3334:
case 279:
case 1722:
case 1095:
case 1686:
case 3704:
case 3810:
case 1575:
case 3297:
case 3029:
case 1956:
case 3262:
case 153:
case 320:
case 3138:
case 1752:
case 825:
case 1260:
case 3393:
case 1812:
case 1669:
case 1549:
case 2152:
case 2361:
case 4088:
case 3078:
case 2122:
case 3236:
case 2551:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750730401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,];
var gg_b = "1750730401/";

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
