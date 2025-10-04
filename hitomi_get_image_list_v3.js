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
case 224:
case 536:
case 2633:
case 610:
case 1384:
case 2724:
case 3232:
case 2932:
case 1213:
case 664:
case 1362:
case 2036:
case 180:
case 3016:
case 2409:
case 2005:
case 2048:
case 1780:
case 2423:
case 3944:
case 2521:
case 2328:
case 1788:
case 726:
case 1099:
case 2468:
case 3912:
case 2212:
case 465:
case 11:
case 2460:
case 789:
case 3887:
case 2824:
case 1369:
case 312:
case 3564:
case 2093:
case 1025:
case 1345:
case 951:
case 1403:
case 170:
case 1300:
case 1574:
case 356:
case 3761:
case 4048:
case 4005:
case 1880:
case 90:
case 3919:
case 2219:
case 67:
case 157:
case 1771:
case 779:
case 509:
case 1639:
case 2402:
case 3985:
case 1430:
case 198:
case 1549:
case 2920:
case 3575:
case 3552:
case 1273:
case 1192:
case 3893:
case 2662:
case 938:
case 1565:
case 3263:
case 2391:
case 519:
case 980:
case 2716:
case 2207:
case 3757:
case 302:
case 268:
case 4061:
case 3972:
case 2193:
case 1066:
case 1620:
case 1811:
case 4087:
case 1446:
case 1125:
case 628:
case 848:
case 3319:
case 3116:
case 1514:
case 2140:
case 3793:
case 957:
case 554:
case 1354:
case 10:
case 3385:
case 817:
case 2645:
case 2600:
case 3836:
case 3494:
case 2816:
case 970:
case 3456:
case 1969:
case 653:
case 3979:
case 2543:
case 2087:
case 2883:
case 530:
case 2101:
case 387:
case 3694:
case 3588:
case 1237:
case 3381:
case 1377:
case 401:
case 3183:
case 1256:
case 1294:
case 1098:
case 2469:
case 79:
case 3874:
case 1917:
case 720:
case 699:
case 2400:
case 2303:
case 2408:
case 1864:
case 1789:
case 3637:
case 2329:
case 1941:
case 2126:
case 2049:
case 1428:
case 3034:
case 1420:
case 1323:
case 1587:
case 3473:
case 3370:
case 1309:
case 3571:
case 3378:
case 201:
case 176:
case 2395:
case 1360:
case 1561:
case 417:
case 2042:
case 3701:
case 3774:
case 741:
case 1782:
case 25:
case 1815:
case 3951:
case 303:
case 3246:
case 708:
case 1135:
case 2014:
case 2210:
case 3910:
case 407:
case 1317:
case 2599:
case 73:
case 3197:
case 381:
case 1548:
case 1557:
case 245:
case 2753:
case 882:
case 1439:
case 718:
case 1035:
case 2929:
case 3229:
case 2114:
case 1505:
case 2677:
case 2903:
case 3203:
case 3765:
case 473:
case 705:
case 1143:
case 52:
case 575:
case 4074:
case 590:
case 4001:
case 1775:
case 1603:
case 2897:
case 2281:
case 1629:
case 3814:
case 3749:
case 3558:
case 2734:
case 1198:
case 3083:
case 1190:
case 2922:
case 207:
case 872:
case 2853:
case 371:
case 3413:
case 3686:
case 543:
case 2026:
case 2660:
case 2149:
case 445:
case 2668:
case 483:
case 1909:
case 3978:
case 2001:
case 2278:
case 2338:
case 2525:
case 2433:
case 273:
case 562:
case 1491:
case 1286:
case 824:
case 644:
case 3849:
case 3714:
case 2808:
case 1012:
case 2299:
case 501:
case 3474:
case 2869:
case 3503:
case 1482:
case 896:
case 1044:
case 3529:
case 3033:
case 1240:
case 1376:
case 992:
case 819:
case 3145:
case 55:
case 146:
case 2567:
case 1763:
case 3426:
case 1720:
case 3648:
case 132:
case 3366:
case 2483:
case 278:
case 2380:
case 104:
case 2581:
case 2388:
case 3640:
case 2616:
case 3605:
case 488:
case 3522:
case 3054:
case 3096:
case 33:
case 1489:
case 3258:
case 2947:
case 3247:
case 781:
case 3693:
case 3211:
case 2173:
case 2292:
case 2884:
case 305:
case 3727:
case 1650:
case 3925:
case 3931:
case 2570:
case 2304:
case 2371:
case 914:
case 2578:
case 288:
case 1820:
case 1828:
case 854:
case 960:
case 478:
case 3873:
case 159:
case 1791:
case 2854:
case 904:
case 863:
case 1976:
case 932:
case 1007:
case 946:
case 3442:
case 3288:
case 192:
case 2624:
case 3966:
case 2980:
case 3280:
case 2676:
case 622:
case 490:
case 285:
case 3713:
case 475:
case 3399:
case 573:
case 3196:
case 703:
case 308:
case 1688:
case 1732:
case 836:
case 1316:
case 2073:
case 1119:
case 2113:
case 2971:
case 3271:
case 1891:
case 2796:
case 3331:
case 787:
case 1287:
case 684:
case 3069:
case 1261:
case 545:
case 3465:
case 1112:
case 2551:
case 2347:
case 3813:
case 2453:
case 275:
case 39:
case 22:
case 3687:
case 485:
case 290:
case 320:
case 583:
case 2510:
case 2518:
case 2311:
case 3392:
case 462:
case 1471:
case 2860:
case 1895:
case 3252:
case 1573:
case 3487:
case 3041:
case 2653:
case 2702:
case 1249:
case 749:
case 3528:
case 3321:
case 442:
case 3998:
case 2290:
case 3990:
case 1265:
case 2823:
case 2389:
case 2186:
case 2507:
case 140:
case 582:
case 3109:
case 1178:
case 2315:
case 1170:
case 658:
case 463:
case 3123:
case 1822:
case 565:
case 927:
case 1795:
case 3786:
case 236:
case 1214:
case 361:
case 2802:
case 1018:
case 1242:
case 1051:
case 2634:
case 1488:
case 3259:
case 4056:
case 1829:
case 843:
case 121:
case 3614:
case 1181:
case 4037:
case 1167:
case 2424:
case 409:
case 2243:
case 263:
case 3642:
case 2579:
case 2382:
case 966:
case 3077:
case 1846:
case 2741:
case 888:
case 3002:
case 712:
case 1081:
case 2989:
case 419:
case 3794:
case 940:
case 3756:
case 1411:
case 2206:
case 2717:
case 3215:
case 3921:
case 2235:
case 3737:
case 2352:
case 2375:
case 1110:
case 1838:
case 379:
case 3390:
case 2512:
case 830:
case 1151:
case 3591:
case 3398:
case 3060:
case 794:
case 2086:
case 454:
case 3:
case 3264:
case 2137:
case 1746:
case 2841:
case 3282:
case 2982:
case 3009:
case 3856:
case 1201:
case 2416:
case 3440:
case 3343:
case 921:
case 1334:
case 3457:
case 3023:
case 2683:
case 3448:
case 219:
case 2519:
case 993:
case 568:
case 1226:
case 1397:
case 296:
case 326:
case 1738:
case 2194:
case 1682:
case 942:
case 2664:
case 2397:
case 667:
case 1194:
case 2738:
case 1156:
case 3283:
case 233:
case 2730:
case 227:
case 2682:
case 3022:
case 6:
case 936:
case 266:
case 1964:
case 4081:
case 3095:
case 2746:
case 598:
case 331:
case 1841:
case 963:
case 3710:
case 78:
case 2070:
case 1982:
case 626:
case 2078:
case 2201:
case 3901:
case 4067:
case 2334:
case 119:
case 1683:
case 3029:
case 1544:
case 3349:
case 3425:
case 3003:
case 1352:
case 551:
case 2838:
case 2830:
case 3365:
case 1512:
case 2151:
case 679:
case 909:
case 3810:
case 1741:
case 2450:
case 1989:
case 2447:
case 3818:
case 3130:
case 3138:
case 2411:
case 3851:
case 1915:
case 2513:
case 919:
case 440:
case 221:
case 2803:
case 538:
case 2181:
case 1364:
case 1697:
case 163:
case 2934:
case 3234:
case 3030:
case 1243:
case 3508:
case 3301:
case 1579:
case 859:
case 2795:
case 2997:
case 3297:
case 3129:
case 1877:
case 2010:
case 3881:
case 2018:
case 3770:
case 1709:
case 3942:
case 2242:
case 2488:
case 1959:
case 1723:
case 142:
case 580:
case 2480:
case 1389:
case 2729:
case 1037:
case 1555:
case 34:
case 3584:
case 3195:
case 1186:
case 814:
case 2652:
case 2675:
case 1315:
case 557:
case 3562:
case 2170:
case 109:
case 3698:
case 2822:
case 4018:
case 1860:
case 2471:
case 1868:
case 2404:
case 1952:
case 1975:
case 3949:
case 2249:
case 1653:
case 3781:
case 1298:
case 3870:
case 3767:
case 1094:
case 3878:
case 753:
case 4051:
case 493:
case 3965:
case 1056:
case 2265:
case 1823:
case 3191:
case 1347:
case 2112:
case 1358:
case 1551:
case 2604:
case 2671:
case 1510:
case 384:
case 2144:
case 260:
case 2452:
case 1754:
case 36:
case 1796:
case 799:
case 988:
case 3961:
case 840:
case 492:
case 4055:
case 214:
case 4072:
case 3490:
case 3393:
case 1833:
case 3132:
case 4007:
case 1676:
case 893:
case 3517:
case 2839:
case 185:
case 3063:
case 2185:
case 3666:
case 3020:
case 3357:
case 3224:
case 3348:
case 162:
case 374:
case 3443:
case 3340:
case 3028:
case 2688:
case 2316:
case 3305:
case 259:
case 3712:
case 3336:
case 2791:
case 460:
case 2976:
case 4079:
case 608:
case 978:
case 3744:
case 2459:
case 143:
case 641:
case 821:
case 1980:
case 322:
case 1624:
case 446:
case 3435:
case 2647:
case 739:
case 618:
case 1304:
case 1578:
case 2863:
case 2820:
case 188:
case 3692:
case 2107:
case 2611:
case 2155:
case 2172:
case 3993:
case 3560:
case 3361:
case 432:
case 3779:
case 1708:
case 1700:
case 4012:
case 1950:
case 3625:
case 1745:
case 1958:
case 1769:
case 3128:
case 3807:
case 605:
case 1292:
case 586:
case 2019:
case 975:
case 3406:
case 3872:
case 3855:
case 2415:
case 943:
case 3936:
case 3699:
case 2763:
case 1483:
case 178:
case 3502:
case 232:
case 2728:
case 1581:
case 3032:
case 866:
case 3577:
case 1127:
case 3879:
case 1800:
case 1299:
case 827:
case 1845:
case 962:
case 3707:
case 3905:
case 2205:
case 2916:
case 706:
case 985:
case 3940:
case 576:
case 1784:
case 2257:
case 3772:
case 2248:
case 4006:
case 1074:
case 1270:
case 3082:
case 1531:
case 3223:
case 2923:
case 3444:
case 671:
case 2968:
case 2852:
case 2875:
case 3064:
case 1797:
case 3986:
case 1995:
case 3260:
case 948:
case 2198:
case 344:
case 559:
case 1165:
case 2190:
case 107:
case 3670:
case 3678:
case 81:
case 838:
case 1592:
case 306:
case 4021:
case 1026:
case 1668:
case 1346:
case 3790:
case 339:
case 870:
case 2536:
case 2143:
case 895:
case 3015:
case 681:
case 2859:
case 2006:
case 2775:
case 2752:
case 2977:
case 1897:
case 613:
case 3089:
case 3337:
case 1281:
case 1496:
case 3843:
case 560:
case 1142:
case 3394:
case 2557:
case 1753:
case 2548:
case 2341:
case 514:
case 1929:
case 2035:
case 2021:
case 1114:
case 1042:
case 3407:
case 2782:
case 1322:
case 1484:
case 2815:
case 3472:
case 1251:
case 2630:
case 532:
case 677:
case 2764:
case 907:
case 1462:
case 898:
case 1014:
case 1930:
case 1783:
case 2420:
case 2323:
case 2106:
case 3115:
case 973:
case 603:
case 101:
case 2463:
case 276:
case 650:
case 1395:
case 3189:
case 2561:
case 2368:
case 722:
case 2256:
case 1065:
case 2098:
case 2917:
case 3706:
case 1303:
case 3052:
case 1408:
case 784:
case 687:
case 1329:
case 2789:
case 1445:
case 1049:
case 3524:
case 2941:
case 1126:
case 1174:
case 3576:
case 3182:
case 1617:
case 835:
case 911:
case 4043:
case 229:
case 399:
case 3164:
case 1566:
case 1641:
case 352:
case 3735:
case 3721:
case 3937:
case 1816:
case 886:
case 1061:
case 74:
case 3269:
case 2969:
case 251:
case 1417:
case 2711:
case 3792:
case 3004:
case 649:
case 3899:
case 3208:
case 2908:
case 829:
case 1279:
case 3534:
case 2747:
case 235:
case 965:
case 2514:
case 1140:
case 758:
case 1669:
case 1157:
case 1148:
case 20:
case 3725:
case 2354:
case 353:
case 982:
case 1645:
case 2199:
case 300:
case 1332:
case 451:
case 791:
case 2066:
case 1255:
case 2620:
case 3553:
case 168:
case 3088:
case 2811:
case 2628:
case 2446:
case 435:
case 2125:
case 2663:
case 533:
case 3262:
case 2962:
case 3313:
case 3410:
case 566:
case 2333:
case 2430:
case 1928:
case 3672:
case 3655:
case 298:
case 2438:
case 328:
case 2192:
case 2273:
case 3607:
case 634:
case 3825:
case 737:
case 3831:
case 1662:
case 602:
case 972:
case 1963:
case 2565:
case 3147:
case 1598:
case 1391:
case 40:
case 3158:
case 3467:
case 438:
case 3866:
case 2880:
case 540:
case 182:
case 2092:
case 2771:
case 2996:
case 3050:
case 3327:
case 1285:
case 2639:
case 2954:
case 3619:
case 2166:
case 1696:
case 2025:
case 1939:
case 480:
case 295:
case 1654:
case 325:
case 2345:
case 2574:
case 656:
case 2300:
case 2632:
case 4092:
case 1005:
case 521:
case 1423:
case 1320:
case 3766:
case 2933:
case 2788:
case 3233:
case 1244:
case 364:
case 1328:
case 1535:
case 1991:
case 2804:
case 2099:
case 1212:
case 2495:
case 1776:
case 457:
case 1633:
case 1161:
case 3644:
case 1724:
case 731:
case 2213:
case 2362:
case 3104:
case 968:
case 1187:
case 593:
case 495:
case 4025:
case 4031:
case 3612:
case 3982:
case 2894:
case 2856:
case 1751:
case 2440:
case 2343:
case 2448:
case 319:
case 2023:
case 3683:
case 2539:
case 3964:
case 2060:
case 627:
case 3086:
case 1499:
case 847:
case 3137:
case 4002:
case 131:
case 3585:
case 1554:
case 3359:
case 2117:
case 197:
case 1022:
case 2837:
case 923:
case 772:
case 2436:
case 502:
case 396:
case 1926:
case 2141:
case 2756:
case 1138:
case 2794:
case 94:
case 2906:
case 1492:
case 2215:
case 467:
case 2077:
case 1810:
case 4068:
case 2289:
case 3989:
case 1635:
case 354:
case 1621:
case 549:
case 83:
case 2493:
case 1365:
case 2398:
case 3512:
case 1029:
case 2737:
case 1533:
case 2921:
case 1146:
case 426:
case 1431:
case 1425:
case 3352:
case 818:
case 4017:
case 3709:
case 1942:
case 1778:
case 1867:
case 621:
case 3634:
case 2259:
case 3959:
case 1643:
case 3723:
case 841:
case 1466:
case 336:
case 1297:
case 997:
case 1129:
case 4041:
case 3768:
case 1046:
case 3802:
case 808:
case 3424:
case 1545:
case 931:
case 1234:
case 1030:
case 2943:
case 815:
case 3579:
case 1374:
case 1500:
case 693:
case 191:
case 2614:
case 1569:
case 2102:
case 2998:
case 2461:
case 1870:
case 1878:
case 1965:
case 2990:
case 3056:
case 1122:
case 2017:
case 3823:
case 461:
case 3777:
case 3868:
case 2252:
case 3952:
case 2275:
case 3975:
case 2487:
case 3702:
case 2041:
case 2335:
case 2109:
case 2665:
case 1690:
case 1698:
case 2168:
case 556:
case 3389:
case 3037:
case 3555:
case 2649:
case 1584:
case 3507:
case 4084:
case 1961:
case 2465:
case 1393:
case 1844:
case 1132:
case 2271:
case 2008:
case 3113:
case 4062:
case 3904:
case 2000:
case 1812:
case 513:
case 3754:
case 2538:
case 1785:
case 415:
case 2530:
case 3518:
case 2661:
case 2546:
case 1191:
case 3027:
case 3453:
case 375:
case 2687:
case 3350:
case 2813:
case 390:
case 717:
case 614:
case 1744:
case 1819:
case 3733:
case 3988:
case 3266:
case 2966:
case 3980:
case 2280:
case 4045:
case 1139:
case 1712:
case 1336:
case 3896:
case 1276:
case 4008:
case 1020:
case 1357:
case 208:
case 1224:
case 1348:
case 1541:
case 362:
case 2713:
case 1517:
case 1063:
case 2196:
case 745:
case 1120:
case 2693:
case 218:
case 3173:
case 3292:
case 1406:
case 1872:
case 1855:
case 1779:
case 879:
case 3700:
case 2522:
case 587:
case 1163:
case 2096:
case 3950:
case 1631:
case 2250:
case 1625:
case 3862:
case 2247:
case 3958:
case 1692:
case 2595:
case 1568:
case 1361:
case 569:
case 3225:
case 3231:
case 1387:
case 2931:
case 205:
case 1523:
case 2727:
case 1039:
case 3304:
case 3570:
case 3578:
case 3371:
case 2503:
case 2474:
case 1216:
case 418:
case 2529:
case 3784:
case 1755:
case 1772:
case 1879:
case 4054:
case 1091:
case 43:
case 3299:
case 707:
case 632:
case 3762:
case 3483:
case 2366:
case 378:
case 2648:
case 2169:
case 3581:
case 3388:
case 1032:
case 8:
case 3616:
case 247:
case 922:
case 2100:
case 2108:
case 550:
case 3013:
case 867:
case 773:
case 271:
case 2413:
case 3592:
case 2511:
case 1175:
case 1152:
case 106:
case 3149:
case 2686:
case 3026:
case 3660:
case 3668:
case 144:
case 515:
case 2550:
case 3623:
case 307:
case 3922:
case 1412:
case 778:
case 1268:
case 508:
case 1064:
case 2153:
case 894:
case 3001:
case 1890:
case 541:
case 3074:
case 3270:
case 1082:
case 3525:
case 3531:
case 345:
case 3602:
case 3753:
case 281:
case 1681:
case 856:
case 1516:
case 471:
case 3834:
case 1843:
case 4083:
case 3599:
case 1356:
case 812:
case 1089:
case 1485:
case 2814:
case 2749:
case 1790:
case 139:
case 3267:
case 2967:
case 59:
case 2134:
case 1798:
case 1015:
case 383:
case 1610:
case 301:
case 1618:
case 1835:
case 1386:
case 3395:
case 4053:
case 2034:
case 1651:
case 2230:
case 348:
case 3938:
case 3783:
case 2504:
case 2571:
case 2246:
case 2097:
case 2918:
case 3462:
case 3210:
case 944:
case 3014:
case 2701:
case 3042:
case 1407:
case 3322:
case 1455:
case 1472:
case 1806:
case 203:
case 1164:
case 2580:
case 3566:
case 2427:
case 2053:
case 152:
case 1721:
case 2588:
case 2381:
case 518:
case 939:
case 3174:
case 1576:
case 3617:
case 3101:
case 53:
case 287:
case 199:
case 2694:
case 2656:
case 4034:
case 3400:
case 1075:
case 629:
case 1052:
case 849:
case 3445:
case 2637:
case 116:
case 3049:
case 1524:
case 1241:
case 2801:
case 269:
case 1956:
case 72:
case 2874:
case 686:
case 317:
case 1927:
case 1731:
case 3645:
case 2437:
case 100:
case 2836:
case 3600:
case 635:
case 3105:
case 4024:
case 2793:
case 249:
case 1899:
case 4076:
case 2979:
case 3279:
case 3136:
case 1245:
case 1534:
case 3543:
case 3441:
case 3339:
case 434:
case 2456:
case 2494:
case 3816:
case 2857:
case 2848:
case 567:
case 1831:
case 3662:
case 803:
case 3963:
case 3590:
case 742:
case 3391:
case 1158:
case 449:
case 736:
case 3928:
case 2344:
case 2228:
case 1672:
case 2220:
case 3920:
case 3684:
case 128:
case 1973:
case 1111:
case 1607:
case 877:
case 1262:
case 1418:
case 698:
case 1313:
case 2907:
case 2972:
case 2748:
case 3193:
case 3272:
case 2955:
case 3255:
case 202:
case 368:
case 1892:
case 526:
case 1451:
case 1088:
case 98:
case 234:
case 1685:
case 17:
case 125:
case 2176:
case 1180:
case 2564:
case 3093:
case 494:
case 657:
case 212:
case 813:
case 1481:
case 1058:
case 1327:
case 3285:
case 2787:
case 365:
case 1254:
case 670:
case 900:
case 2761:
case 1866:
case 382:
case 3219:
case 695:
case 1011:
case 2515:
case 1913:
case 719:
case 3036:
case 1612:
case 324:
case 1644:
case 294:
case 3724:
case 2372:
case 2307:
case 561:
case 3991:
case 2291:
case 3468:
case 2912:
case 2486:
case 3363:
case 928:
case 2887:
case 2613:
case 3409:
case 1478:
case 1470:
case 372:
case 3057:
case 3423:
case 3320:
case 3048:
case 871:
case 1233:
case 796:
case 3521:
case 3328:
case 2944:
case 3099:
case 1291:
case 3804:
case 3871:
case 31:
case 4058:
case 210:
case 1613:
case 624:
case 727:
case 2478:
case 1016:
case 806:
case 3632:
case 591:
case 2470:
case 1861:
case 2373:
case 3780:
case 2766:
case 338:
case 1944:
case 3788:
case 3213:
case 2913:
case 934:
case 672:
case 2104:
case 3691:
case 425:
case 1589:
case 766:
case 1372:
case 3704:
case 949:
case 2058:
case 2047:
case 2481:
case 1787:
case 3639:
case 3954:
case 2254:
case 2296:
case 1985:
case 2327:
case 1124:
case 3526:
case 2467:
case 464:
case 54:
case 1919:
case 3092:
case 1239:
case 27:
case 225:
case 3429:
case 3345:
case 1379:
case 839:
case 3403:
case 370:
case 48:
case 1582:
case 1176:
case 558:
case 2180:
case 2799:
case 3131:
case 2262:
case 2418:
case 4004:
case 2313:
case 3850:
case 1907:
case 1757:
case 2553:
case 102:
case 3984:
case 1972:
case 3811:
case 134:
case 3628:
case 2892:
case 2451:
case 400:
case 2831:
case 2825:
case 668:
case 2150:
case 2158:
case 1228:
case 3333:
case 1024:
case 2672:
case 3549:
case 2655:
case 1575:
case 1552:
case 3900:
case 2899:
case 2200:
case 2004:
case 912:
case 899:
case 1979:
case 2071:
case 3908:
case 3758:
case 2534:
case 3750:
case 335:
case 1627:
case 4088:
case 4080:
case 351:
case 2792:
case 1840:
case 2731:
case 3396:
case 2927:
case 1385:
case 1559:
case 200:
case 1836:
case 428:
case 1793:
case 149:
case 2075:
case 913:
case 2479:
case 3864:
case 3789:
case 3941:
case 2241:
case 216:
case 1183:
case 3090:
case 2956:
case 1801:
case 3294:
case 2994:
case 3882:
case 3098:
case 3917:
case 2706:
case 252:
case 1580:
case 3237:
case 1588:
case 2735:
case 386:
case 3377:
case 2576:
case 760:
case 1656:
case 1367:
case 329:
case 299:
case 1694:
case 416:
case 3764:
case 3889:
case 4075:
case 1910:
case 828:
case 3782:
case 2455:
case 2472:
case 3638:
case 3815:
case 3630:
case 1951:
case 971:
case 2059:
case 2610:
case 2821:
case 2835:
case 65:
case 3463:
case 1726:
case 792:
case 452:
case 2189:
case 3428:
case 759:
case 1034:
case 3420:
case 3587:
case 1370:
case 3106:
case 3309:
case 1571:
case 3977:
case 3775:
case 3752:
case 3603:
case 584:
case 987:
case 1981:
case 3629:
case 2485:
case 1765:
case 239:
case 3536:
case 825:
case 2015:
case 2419:
case 3006:
case 1197:
case 683:
case 181:
case 3548:
case 3341:
case 406:
case 2681:
case 3021:
case 3035:
case 3505:
case 969:
case 2843:
case 611:
case 2356:
case 444:
case 2667:
case 2394:
case 3491:
case 3875:
case 732:
case 2412:
case 2268:
case 3968:
case 3286:
case 704:
case 607:
case 2986:
case 1295:
case 3960:
case 977:
case 2064:
case 1714:
case 1865:
case 3909:
case 1978:
case 1742:
case 3622:
case 2898:
case 2223:
case 88:
case 3923:
case 439:
case 903:
case 171:
case 1413:
case 2175:
case 1511:
case 1318:
case 2152:
case 864:
case 1686:
case 950:
case 206:
case 1351:
case 1558:
case 244:
case 1083:
case 1550:
case 1222:
case 1366:
case 831:
case 2502:
case 3728:
case 1773:
case 2577:
case 1605:
case 1100:
case 3376:
case 3179:
case 855:
case 1827:
case 2699:
case 1145:
case 3236:
case 4039:
case 2936:
case 346:
case 3763:
case 1426:
case 2905:
case 3205:
case 2707:
case 3482:
case 3916:
case 1401:
case 3044:
case 1033:
case 3240:
case 2940:
case 2755:
case 2948:
case 3324:
case 2772:
case 3257:
case 2879:
case 897:
case 1999:
case 2091:
case 1636:
case 678:
case 4032:
case 2692:
case 1184:
case 1595:
case 2560:
case 3586:
case 3155:
case 2993:
case 2568:
case 3658:
case 2421:
case 2435:
case 2523:
case 105:
case 3650:
case 1162:
case 2509:
case 3863:
case 2128:
case 552:
case 118:
case 920:
case 99:
case 3019:
case 2872:
case 2779:
case 1054:
case 2631:
case 2625:
case 3489:
case 688:
case 1247:
case 2224:
case 2541:
case 3680:
case 2028:
case 3732:
case 3316:
case 484:
case 2305:
case 3119:
case 1399:
case 1154:
case 3556:
case 2063:
case 1196:
case 3007:
case 3537:
case 685:
case 222:
case 3055:
case 891:
case 544:
case 46:
case 2885:
case 1414:
case 2276:
case 662:
case 858:
case 93:
case 474:
case 4020:
case 1546:
case 1133:
case 1813:
case 3739:
case 19:
case 918:
case 3604:
case 120:
case 3671:
case 3261:
case 2961:
case 690:
case 1465:
case 62:
case 2719:
case 905:
case 84:
case 2132:
case 1008:
case 2812:
case 3475:
case 3452:
case 2785:
case 3287:
case 26:
case 1538:
case 2987:
case 729:
case 1109:
case 1306:
case 1123:
case 4030:
case 735:
case 2698:
case 3729:
case 1168:
case 1160:
case 24:
case 2584:
case 2195:
case 2253:
case 1649:
case 340:
case 3703:
case 3652:
case 491:
case 525:
case 1563:
case 2878:
case 2122:
case 437:
case 1017:
case 3471:
case 3895:
case 3404:
case 1252:
case 979:
case 4046:
case 2949:
case 3249:
case 1335:
case 1321:
case 884:
case 3167:
case 2030:
case 2234:
case 2301:
case 636:
case 9:
case 2374:
case 1177:
case 3829:
case 321:
case 291:
case 1614:
case 3181:
case 967:
case 1102:
case 2778:
case 2867:
case 2643:
case 3051:
case 223:
case 1259:
case 3480:
case 2326:
case 2297:
case 2046:
case 798:
case 2129:
case 3018:
case 2103:
case 497:
case 654:
case 4022:
case 3830:
case 2606:
case 179:
case 2365:
case 3151:
case 1398:
case 1591:
case 2425:
case 2349:
case 3118:
case 2003:
case 2130:
case 455:
case 1794:
case 1756:
case 2138:
case 770:
case 1215:
case 500:
case 1077:
case 3846:
case 3450:
case 3353:
case 2810:
case 1002:
case 3447:
case 3081:
case 4095:
case 3458:
case 2554:
case 2283:
case 71:
case 961:
case 1117:
case 2022:
case 1837:
case 2314:
case 4003:
case 4029:
case 2926:
case 1141:
case 3397:
case 3664:
case 126:
case 2974:
case 167:
case 1856:
case 1009:
case 3078:
case 1440:
case 1343:
case 3334:
case 1457:
case 1023:
case 1539:
case 1448:
case 1060:
case 1626:
case 366:
case 1:
case 1264:
case 528:
case 1068:
case 2710:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759579202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,];
var gg_b = "1759579202/";

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
