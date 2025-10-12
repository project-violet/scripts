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
case 301:
case 4041:
case 3962:
case 1791:
case 3978:
case 3058:
case 466:
case 4031:
case 2587:
case 3007:
case 965:
case 2413:
case 2254:
case 2814:
case 3796:
case 586:
case 2175:
case 2404:
case 1344:
case 3143:
case 1210:
case 3568:
case 2193:
case 801:
case 2746:
case 579:
case 3866:
case 58:
case 2010:
case 459:
case 798:
case 2638:
case 1974:
case 3185:
case 763:
case 3577:
case 3338:
case 3698:
case 4079:
case 783:
case 1591:
case 135:
case 559:
case 829:
case 2536:
case 3666:
case 1661:
case 1475:
case 1104:
case 252:
case 2614:
case 566:
case 1894:
case 921:
case 3777:
case 2226:
case 1493:
case 486:
case 2603:
case 3240:
case 2375:
case 1134:
case 3693:
case 2076:
case 978:
case 4022:
case 3461:
case 3675:
case 2212:
case 1219:
case 2643:
case 1859:
case 2852:
case 2019:
case 196:
case 1012:
case 2198:
case 780:
case 3995:
case 741:
case 508:
case 719:
case 3148:
case 1276:
case 3086:
case 245:
case 2857:
case 2418:
case 2945:
case 3385:
case 3053:
case 3973:
case 2657:
case 1297:
case 3042:
case 3308:
case 408:
case 2092:
case 64:
case 3103:
case 2652:
case 1304:
case 2843:
case 3037:
case 3875:
case 3494:
case 177:
case 3352:
case 2097:
case 3893:
case 3249:
case 205:
case 297:
case 2199:
case 2018:
case 1535:
case 1545:
case 3214:
case 3854:
case 3626:
case 2630:
case 1724:
case 3203:
case 3901:
case 2640:
case 2266:
case 3139:
case 482:
case 701:
case 2326:
case 3690:
case 1802:
case 562:
case 3715:
case 1066:
case 1365:
case 3061:
case 339:
case 363:
case 3551:
case 864:
case 125:
case 839:
case 1807:
case 1556:
case 3728:
case 1417:
case 1858:
case 398:
case 2497:
case 161:
case 1607:
case 1524:
case 4095:
case 3927:
case 1745:
case 883:
case 383:
case 3447:
case 384:
case 276:
case 210:
case 729:
case 4073:
case 2117:
case 582:
case 2492:
case 60:
case 3890:
case 1234:
case 690:
case 3528:
case 1783:
case 1756:
case 3442:
case 3100:
case 1821:
case 3751:
case 27:
case 1098:
case 2190:
case 949:
case 1886:
case 1204:
case 694:
case 2399:
case 2574:
case 1213:
case 2649:
case 1454:
case 3881:
case 1642:
case 668:
case 3130:
case 3252:
case 3140:
case 3339:
case 642:
case 2989:
case 3812:
case 2410:
case 3349:
case 911:
case 1705:
case 841:
case 3979:
case 880:
case 1637:
case 1647:
case 3208:
case 2871:
case 214:
case 3584:
case 3817:
case 341:
case 3407:
case 819:
case 2013:
case 3569:
case 360:
case 4067:
case 2774:
case 2671:
case 3523:
case 1075:
case 230:
case 1376:
case 2317:
case 1837:
case 143:
case 860:
case 3285:
case 3371:
case 2275:
case 1490:
case 3233:
case 4062:
case 3941:
case 3243:
case 4078:
case 491:
case 2991:
case 2293:
case 1842:
case 1426:
case 1832:
case 2839:
case 3784:
case 3421:
case 1686:
case 3109:
case 1110:
case 1956:
case 2144:
case 3813:
case 3960:
case 1375:
case 4029:
case 29:
case 3253:
case 3286:
case 2219:
case 1212:
case 616:
case 3194:
case 670:
case 3570:
case 3722:
case 2859:
case 3000:
case 3501:
case 1935:
case 1418:
case 1945:
case 61:
case 145:
case 1657:
case 1608:
case 3049:
case 2297:
case 3039:
case 878:
case 3522:
case 3438:
case 3247:
case 3237:
case 1652:
case 1833:
case 1843:
case 428:
case 2780:
case 1706:
case 277:
case 3150:
case 1924:
case 1413:
case 1254:
case 1803:
case 3969:
case 2344:
case 4020:
case 3984:
case 2334:
case 2694:
case 2210:
case 3741:
case 3579:
case 1193:
case 3634:
case 636:
case 885:
case 1582:
case 1010:
case 2589:
case 1638:
case 821:
case 3207:
case 2054:
case 321:
case 1511:
case 63:
case 3258:
case 653:
case 172:
case 3818:
case 3457:
case 385:
case 1988:
case 901:
case 3618:
case 4072:
case 4068:
case 365:
case 2325:
case 1787:
case 1848:
case 3779:
case 3485:
case 1546:
case 3625:
case 3531:
case 2090:
case 4:
case 4077:
case 3844:
case 1555:
case 2104:
case 2661:
case 2789:
case 3350:
case 2894:
case 152:
case 1366:
case 1603:
case 309:
case 3361:
case 1226:
case 2204:
case 960:
case 3977:
case 3057:
case 2886:
case 3008:
case 2642:
case 1649:
case 2454:
case 1574:
case 1126:
case 1964:
case 3567:
case 3409:
case 1410:
case 3342:
case 1989:
case 2982:
case 3819:
case 3972:
case 467:
case 3968:
case 2705:
case 2165:
case 2397:
case 114:
case 1871:
case 1013:
case 3876:
case 3337:
case 3676:
case 1774:
case 3897:
case 349:
case 811:
case 2788:
case 243:
case 3767:
case 2075:
case 130:
case 567:
case 3033:
case 2847:
case 849:
case 3107:
case 311:
case 1600:
case 3619:
case 2490:
case 2946:
case 3353:
case 4084:
case 599:
case 2505:
case 3386:
case 3920:
case 2319:
case 1312:
case 3440:
case 2426:
case 1849:
case 1991:
case 1293:
case 3778:
case 3102:
case 2653:
case 538:
case 612:
case 2686:
case 2545:
case 1018:
case 105:
case 1199:
case 1390:
case 3142:
case 3250:
case 983:
case 3321:
case 984:
case 3132:
case 2412:
case 3400:
case 3261:
case 2802:
case 1326:
case 1809:
case 721:
case 2365:
case 2066:
case 2197:
case 2225:
case 3014:
case 4015:
case 3137:
case 225:
case 2218:
case 2858:
case 2583:
case 2417:
case 240:
case 2658:
case 189:
case 261:
case 1298:
case 3865:
case 831:
case 765:
case 176:
case 331:
case 3358:
case 62:
case 1044:
case 110:
case 3153:
case 4060:
case 1492:
case 3186:
case 2499:
case 3038:
case 1181:
case 963:
case 2234:
case 1830:
case 2310:
case 3302:
case 1840:
case 17:
case 1112:
case 2119:
case 2821:
case 998:
case 417:
case 1560:
case 198:
case 3858:
case 381:
case 1728:
case 97:
case 340:
case 3807:
case 2665:
case 506:
case 2471:
case 325:
case 2137:
case 1551:
case 163:
case 139:
case 555:
case 825:
case 1970:
case 840:
case 3066:
case 1715:
case 3197:
case 682:
case 910:
case 3802:
case 1690:
case 1330:
case 2142:
case 475:
case 2132:
case 976:
case 3724:
case 3481:
case 1854:
case 1453:
case 1214:
case 3545:
case 3192:
case 3621:
case 1486:
case 3821:
case 1100:
case 3119:
case 2294:
case 933:
case 703:
case 3310:
case 1309:
case 3756:
case 1654:
case 3244:
case 2038:
case 1515:
case 40:
case 2153:
case 490:
case 1890:
case 575:
case 3499:
case 2186:
case 1238:
case 956:
case 861:
case 1171:
case 184:
case 231:
case 183:
case 2358:
case 2773:
case 1094:
case 517:
case 997:
case 735:
case 3658:
case 361:
case 1569:
case 2347:
case 180:
case 2562:
case 1458:
case 2876:
case 2697:
case 437:
case 1584:
case 1208:
case 3647:
case 3637:
case 757:
case 2052:
case 119:
case 1059:
case 1979:
case 3705:
case 2409:
case 2332:
case 79:
case 1812:
case 2692:
case 2819:
case 468:
case 2259:
case 1140:
case 1252:
case 588:
case 494:
case 1881:
case 3632:
case 3886:
case 2057:
case 3853:
case 2008:
case 1723:
case 3653:
case 593:
case 3110:
case 1109:
case 594:
case 3686:
case 1421:
case 1300:
case 3832:
case 3842:
case 2430:
case 1681:
case 2762:
case 3505:
case 2920:
case 1612:
case 2892:
case 777:
case 2619:
case 1941:
case 542:
case 1285:
case 1371:
case 211:
case 343:
case 3376:
case 4074:
case 3955:
case 3847:
case 2033:
case 715:
case 392:
case 1523:
case 843:
case 844:
case 2676:
case 3093:
case 537:
case 1698:
case 285:
case 2457:
case 952:
case 221:
case 2258:
case 3564:
case 740:
case 659:
case 402:
case 781:
case 725:
case 3589:
case 2009:
case 2825:
case 1866:
case 2644:
case 1459:
case 2634:
case 1720:
case 923:
case 2394:
case 1572:
case 2741:
case 3861:
case 4036:
case 1143:
case 666:
case 4046:
case 1133:
case 3334:
case 3791:
case 1962:
case 2969:
case 101:
case 4082:
case 2159:
case 2361:
case 1230:
case 972:
case 1777:
case 2350:
case 2716:
case 3894:
case 803:
case 2923:
case 303:
case 4011:
case 304:
case 3789:
case 3661:
case 2834:
case 1666:
case 679:
case 2625:
case 4087:
case 1157:
case 502:
case 1520:
case 2779:
case 761:
case 2485:
case 335:
case 3591:
case 2040:
case 3026:
case 1596:
case 896:
case 2727:
case 1138:
case 3276:
case 3081:
case 2501:
case 3012:
case 396:
case 1563:
case 54:
case 1450:
case 2570:
case 800:
case 1729:
case 3859:
case 3219:
case 1675:
case 2194:
case 1461:
case 546:
case 2414:
case 39:
case 2951:
case 2286:
case 3017:
case 3144:
case 1343:
case 2813:
case 3134:
case 1333:
case 2960:
case 258:
case 1249:
case 945:
case 2150:
case 446:
case 2527:
case 920:
case 1352:
case 2604:
case 2161:
case 1875:
case 1114:
case 1037:
case 3292:
case 3304:
case 4006:
case 792:
case 3118:
case 3099:
case 315:
case 2237:
case 2770:
case 1529:
case 2448:
case 608:
case 1308:
case 2928:
case 1042:
case 3297:
case 1032:
case 3125:
case 815:
case 743:
case 1337:
case 2817:
case 1562:
case 1347:
case 3013:
case 3004:
case 2584:
case 313:
case 813:
case 667:
case 219:
case 1968:
case 1819:
case 3800:
case 1121:
case 3989:
case 2812:
case 1342:
case 2402:
case 3964:
case 3126:
case 2140:
case 3574:
case 3639:
case 2723:
case 3190:
case 1008:
case 512:
case 2421:
case 2784:
case 1102:
case 3293:
case 1762:
case 3991:
case 2681:
case 3312:
case 2300:
case 3839:
case 1920:
case 3154:
case 1085:
case 2243:
case 1619:
case 3600:
case 1158:
case 687:
case 3317:
case 830:
case 2523:
case 3671:
case 149:
case 1897:
case 3774:
case 1676:
case 334:
case 2728:
case 3476:
case 298:
case 35:
case 1137:
case 1014:
case 1471:
case 264:
case 2061:
case 52:
case 239:
case 3809:
case 2330:
case 1963:
case 356:
case 805:
case 1261:
case 1400:
case 3266:
case 1132:
case 1595:
case 2139:
case 2149:
case 1250:
case 618:
case 2854:
case 3630:
case 2626:
case 3390:
case 2901:
case 532:
case 3199:
case 397:
case 2486:
case 3018:
case 2453:
case 526:
case 432:
case 981:
case 2100:
case 37:
case 426:
case 2528:
case 1439:
case 2654:
case 2309:
case 2442:
case 2826:
case 1929:
case 2922:
case 752:
case 2890:
case 1610:
case 1153:
case 3354:
case 42:
case 889:
case 3034:
case 4035:
case 3044:
case 4045:
case 2238:
case 2437:
case 2447:
case 284:
case 376:
case 2927:
case 724:
case 1773:
case 810:
case 345:
case 3506:
case 1727:
case 3945:
case 3935:
case 2053:
case 2271:
case 2148:
case 41:
case 320:
case 3217:
case 3685:
case 550:
case 2563:
case 714:
case 3425:
case 1570:
case 2729:
case 2450:
case 3633:
case 2461:
case 507:
case 2675:
case 3643:
case 1286:
case 1414:
case 1951:
case 1960:
case 158:
case 2333:
case 3076:
case 3924:
case 957:
case 3166:
case 1150:
case 2249:
case 1613:
case 2494:
case 2352:
case 3706:
case 1359:
case 2763:
case 3299:
case 516:
case 2875:
case 3434:
case 495:
case 2103:
case 1247:
case 2308:
case 1438:
case 1039:
case 3608:
case 51:
case 3657:
case 900:
case 43:
case 1408:
case 1818:
case 2698:
case 2185:
case 1207:
case 769:
case 3648:
case 3398:
case 75:
case 3010:
case 1009:
case 2002:
case 2572:
case 3193:
case 2720:
case 1579:
case 1394:
case 1644:
case 2459:
case 3746:
case 671:
case 1452:
case 436:
case 1202:
case 705:
case 2209:
case 1741:
case 3814:
case 574:
case 3175:
case 1984:
case 201:
case 3803:
case 3587:
case 3254:
case 1361:
case 474:
case 1159:
case 4089:
case 2152:
case 3366:
case 352:
case 1716:
case 4064:
case 1350:
case 852:
case 3782:
case 3290:
case 2303:
case 1844:
case 536:
case 1541:
case 2157:
case 651:
case 6:
case 3838:
case 2768:
case 3536:
case 789:
case 3848:
case 1040:
case 553:
case 1618:
case 2898:
case 823:
case 554:
case 316:
case 1688:
case 1428:
case 3717:
case 1195:
case 2539:
case 2549:
case 94:
case 370:
case 1542:
case 1805:
case 1415:
case 2022:
case 870:
case 1173:
case 3374:
case 3944:
case 946:
case 2160:
case 2384:
case 1222:
case 2700:
case 3712:
case 1547:
case 1378:
case 81:
case 3823:
case 4019:
case 3781:
case 350:
case 208:
case 3869:
case 4092:
case 1742:
case 3517:
case 1732:
case 3483:
case 1451:
case 2571:
case 3799:
case 2263:
case 850:
case 3925:
case 3512:
case 1737:
case 1270:
case 2495:
case 2001:
case 128:
case 2115:
case 2874:
case 3435:
case 712:
case 307:
case 1888:
case 395:
case 322:
case 1635:
case 1167:
case 1707:
case 336:
case 3526:
case 2540:
case 1758:
case 3091:
case 3815:
case 836:
case 1985:
case 552:
case 2031:
case 3255:
case 33:
case 3246:
case 1162:
case 685:
case 2360:
case 353:
case 1933:
case 1231:
case 854:
case 3651:
case 1423:
case 2296:
case 3754:
case 1683:
case 2740:
case 3913:
case 1558:
case 1883:
case 1624:
case 1469:
case 3726:
case 3904:
case 1484:
case 1721:
case 3851:
case 572:
case 665:
case 2123:
case 72:
case 1068:
case 2079:
case 373:
case 374:
case 2509:
case 3089:
case 286:
case 2467:
case 2268:
case 452:
case 2272:
case 4065:
case 279:
case 3554:
case 732:
case 873:
case 3488:
case 726:
case 2315:
case 874:
case 2172:
case 1370:
case 3965:
case 2757:
case 1023:
case 138:
case 3575:
case 3187:
case 1301:
case 1116:
case 3663:
case 2431:
case 4013:
case 3111:
case 2752:
case 3829:
case 3005:
case 2585:
case 1420:
case 1930:
case 988:
case 2223:
case 2921:
case 1477:
case 2806:
case 2329:
case 2557:
case 2284:
case 430:
case 2269:
case 3136:
case 1278:
case 1262:
case 993:
case 1880:
case 1909:
case 3910:
case 2196:
case 3775:
case 1468:
case 2479:
case 1559:
case 1327:
case 2552:
case 795:
case 937:
case 812:
case 2958:
case 1069:
case 291:
case 456:
case 1170:
case 3997:
case 4025:
case 1594:
case 2372:
case 57:
case 2855:
case 2937:
case 722:
case 3387:
case 3668:
case 497:
case 405:
case 906:
case 3106:
case 469:
case 433:
case 1689:
case 3992:
case 1761:
case 2682:
case 2377:
case 2548:
case 45:
case 1015:
case 2846:
case 3766:
case 1429:
case 1664:
case 2703:
case 90:
case 73:
case 990:
case 576:
case 2714:
case 3677:
case 2953:
case 2073:
case 2251:
case 4034:
case 3035:
case 3696:
case 3045:
case 2320:
case 1341:
case 2260:
case 2129:
case 476:
case 2811:
case 533:
case 1864:
case 489:
case 82:
case 3919:
case 55:
case 3480:
case 2738:
case 332:
case 3872:
case 3868:
case 2748:
case 326:
case 1561:
case 597:
case 774:
case 1273:
case 826:
case 2514:
case 3976:
case 2887:
case 3355:
case 1060:
case 3083:
case 504:
case 2395:
case 2635:
case 3673:
case 1540:
case 3345:
case 2020:
case 3046:
case 1031:
case 1169:
case 973:
case 974:
case 1351:
case 2933:
case 2231:
case 4054:
case 3383:
case 1360:
case 2702:
case 3356:
case 2943:
case 2241:
case 3565:
case 2423:
case 302:
case 16:
case 717:
case 535:
case 159:
case 3291:
case 2824:
case 1730:
case 922:
case 3087:
case 1478:
case 2856:
case 1462:
case 2883:
case 1740:
case 936:
case 18:
case 706:
case 2721:
case 2216:
case 755:
case 3324:
case 3264:
case 1959:
case 1079:
case 2068:
case 2072:
case 2952:
case 3082:
case 1467:
case 186:
case 1509:
case 3510:
case 1268:
case 3105:
case 3474:
case 179:
case 2835:
case 2908:
case 3765:
case 2957:
case 2845:
case 1016:
case 2227:
case 2688:
case 794:
case 1771:
case 2367:
case 1674:
case 3776:
case 2428:
case 2532:
case 2029:
case 768:
case 742:
case 3592:
case 1160:
case 3183:
case 1229:
case 2378:
case 4081:
case 1151:
case 3719:
case 1027:
case 2786:
case 3678:
case 3597:
case 907:
case 1739:
case 916:
case 3862:
case 415:
case 1749:
case 2201:
case 2903:
case 108:
case 327:
case 970:
case 34:
case 1263:
case 1961:
case 84:
case 3966:
case 2737:
case 2063:
case 59:
case 3867:
case 500:
case 2605:
case 477:
case 788:
case 2270:
case 1128:
case 1495:
case 1874:
case 1001:
case 2888:
case 2553:
case 3305:
case 1473:
case 2586:
case 3006:
case 92:
case 1228:
case 947:
case 3718:
case 1427:
case 182:
case 1937:
case 1947:
case 1855:
case 1215:
case 3534:
case 3679:
case 932:
case 3999:
case 481:
case 2689:
case 2429:
case 698:
case 561:
case 2015:
case 1538:
case 1422:
case 2101:
case 425:
case 2316:
case 1836:
case 1377:
case 1932:
case 3224:
case 2939:
case 1611:
case 1163:
case 817:
case 3616:
case 1714:
case 684:
case 683:
case 1953:
case 1251:
case 2691:
case 1811:
case 3981:
case 2122:
case 3256:
case 1401:
case 1636:
case 1396:
case 581:
case 3744:
case 1095:
case 3631:
case 525:
case 306:
case 3641:
case 2900:
case 2550:
case 1738:
case 1655:
case 2561:
case 3245:
case 1514:
case 162:
case 2273:
case 2179:
case 368:
case 894:
case 342:
case 893:
case 1757:
case 3455:
case 1533:
case 3205:
case 868:
case 3990:
case 2680:
case 592:
case 1441:
case 1177:
case 2301:
case 3436:
case 2420:
case 1585:
case 1752:
case 2759:
case 3164:
case 837:
case 3926:
case 619:
case 2940:
case 3713:
case 1223:
case 1921:
case 544:
case 2496:
case 1606:
case 3704:
case 2322:
case 1329:
case 2131:
case 1557:
case 1508:
case 443:
case 2278:
case 3801:
case 3411:
case 3074:
case 3954:
case 4075:
case 444:
case 3191:
case 660:
case 3482:
case 1067:
case 1196:
case 727:
case 4093:
case 1743:
case 2880:
case 1552:
case 888:
case 1785:
case 2468:
case 2472:
case 2267:
case 2084:
case 2069:
case 191:
case 1078:
case 388:
case 1907:
case 4052:
case 1182:
case 3496:
case 1491:
case 2164:
case 3930:
case 2713:
case 2601:
case 2436:
case 1005:
case 1111:
case 2822:
case 2446:
case 613:
case 2990:
case 3680:
case 867:
case 1663:
case 3116:
case 614:
case 4008:
case 2670:
case 294:
case 2455:
case 338:
case 293:
case 2827:
case 1965:
case 3370:
case 3179:
case 2513:
case 3069:
case 3084:
case 1155:
case 2288:
case 2870:
case 728:
case 3468:
case 1775:
case 2482:
case 1489:
case 449:
case 1910:
case 3909:
case 1863:
case 3880:
case 887:
case 1464:
case 3262:
case 1793:
case 2411:
case 3131:
case 3477:
case 630:
case 1598:
case 2364:
case 2180:
case 2616:
case 1382:
case 962:
case 3939:
case 2224:
case 3949:
case 3028:
case 669:
case 4014:
case 3101:
case 3750:
case 2999:
case 217:
case 2841:
case 1992:
case 3761:
case 65:
case 1106:
case 2831:
case 2679:
case 2534:
case 318:
case 1387:
case 2725:
case 605:
case 2718:
case 275:
case 3379:
case 1997:
case 3170:
case 818:
case 1083:
case 290:
case 1355:
case 2917:
case 3051:
case 3971:
case 20:
case 1798:
case 2879:
case 1872:
case 3295:
case 1566:
case 2525:
case 1480:
case 2391:
case 3463:
case 1919:
case 751:
case 1620:
case 2734:
case 689:
case 3691:
case 3331:
case 3122:
case 2981:
case 2256:
case 676:
case 1045:
case 1696:
case 2816:
case 2518:
case 1781:
case 1669:
case 2662:
case 4000:
case 2678:
case 1684:
case 3786:
case 3753:
case 1823:
case 3378:
case 3547:
case 3537:
case 1712:
case 645:
case 1934:
case 620:
case 578:
case 1944:
case 2145:
case 1599:
case 4071:
case 3948:
case 3938:
case 3805:
case 3367:
case 2776:
case 3532:
case 1717:
case 3688:
case 2998:
case 195:
case 107:
case 3888:
case 1435:
case 2006:
case 3586:
case 3605:
case 828:
case 3270:
case 3737:
case 1080:
case 2867:
case 246:
case 1925:
case 2124:
case 2792:
case 787:
case 1799:
case 227:
case 1623:
case 3451:
case 1483:
case 3460:
case 3732:
case 3742:
case 3903:
case 1456:
case 1660:
case 4009:
case 2291:
case 3824:
case 979:
case 1651:
case 202:
case 565:
case 3231:
case 2055:
case 2975:
case 2383:
case 2356:
case 3702:
case 3241:
case 3162:
case 3178:
case 1246:
case 13:
case 2188:
case 2345:
case 3020:
case 871:
case 2036:
case 3373:
case 3985:
case 1815:
case 2335:
case 2046:
case 1526:
case 136:
case 3707:
case 3096:
case 3635:
case 2673:
case 122:
case 2873:
case 1488:
case 3957:
case 2765:
case 3077:
case 959:
case 3845:
case 2474:
case 1628:
case 1064:
case 2895:
case 3502:
case 2510:
case 1089:
case 652:
case 521:
case 3068:
case 4040:
case 1282:
case 1790:
case 585:
case 4030:
case 1851:
case 623:
case 3484:
case 3721:
case 3216:
case 3624:
case 3507:
case 2087:
case 3883:
case 351:
case 1913:
case 1211:
case 584:
case 1364:
case 4050:
case 583:
case 2598:
case 3942:
case 2382:
case 3932:
case 439:
case 1389:
case 2820:
case 3548:
case 3846:
case 2766:
case 1831:
case 2992:
case 76:
case 1999:
case 1841:
case 117:
case 1679:
case 3855:
case 882:
case 3372:
case 766:
case 3427:
case 1718:
case 3228:
case 2024:
case 348:
case 2976:
case 1917:
case 2083:
case 3503:
case 190:
case 786:
case 10:
case 2798:
case 2566:
case 2868:
case 2872:
case 1879:
case 779:
case 78:
case 1912:
case 3882:
case 1641:
case 106:
case 2480:
case 1391:
case 918:
case 3095:
case 4094:
case 3646:
case 3396:
case 3636:
case 2620:
case 483:
case 484:
case 1283:
case 1981:
case 1406:
case 563:
case 1518:
case 2346:
case 3320:
case 1816:
case 564:
case 3986:
case 247:
case 1189:
case 419:
case 3223:
case 1713:
case 1601:
case 2491:
case 1380:
case 3752:
case 2111:
case 1436:
case 3177:
case 2663:
case 1670:
case 2187:
case 3533:
case 2575:
case 1455:
case 3757:
case 1827:
case 3708:
case 3172:
case 168:
case 967:
case 3907:
case 3062:
case 3078:
case 1487:
case 188:
case 212:
case 3479:
case 891:
case 3552:
case 1870:
case 3743:
case 2489:
case 3733:
case 2775:
case 3067:
case 708:
case 2629:
case 2464:
case 541:
case 1074:
case 1954:
case 3120:
case 2136:
case 644:
case 3508:
case 3284:
case 1291:
case 1993:
case 359:
case 4002:
case 2660:
case 2651:
case 102:
case 3296:
case 1055:
case 253:
case 23:
case 2246:
case 859:
case 782:
case 2590:
case 3031:
case 4007:
case 2255:
case 1335:
case 2174:
case 1345:
case 236:
case 2526:
case 2828:
case 2091:
case 866:
case 1673:
case 604:
case 2488:
case 1873:
case 3315:
case 2628:
case 379:
case 1474:
case 1105:
case 2287:
case 3268:
case 2615:
case 2064:
case 1510:
case 2089:
case 274:
case 4021:
case 1264:
case 2282:
case 429:
case 3277:
case 3740:
case 2860:
case 635:
case 3462:
case 3730:
case 1597:
case 2424:
case 2823:
case 696:
case 3027:
case 3994:
case 3700:
case 1719:
case 3151:
case 21:
case 3369:
case 4086:
case 1156:
case 2944:
case 2934:
case 2599:
case 1592:
case 1388:
case 600:
case 1776:
case 270:
case 3549:
case 3771:
case 216:
case 1006:
case 2445:
case 2918:
case 4037:
case 4047:
case 3495:
case 3128:
case 146:
case 3500:
case 2512:
case 1966:
case 1124:
case 4032:
case 2799:
case 1280:
case 1792:
case 4042:
case 2884:
case 2623:
case 1878:
case 308:
case 1862:
case 2869:
case 3739:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760274001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,];
var gg_b = "1760274001/";

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
