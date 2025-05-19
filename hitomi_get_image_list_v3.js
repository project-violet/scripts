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
case 3878:
case 2437:
case 837:
case 968:
case 1789:
case 2942:
case 2313:
case 1798:
case 711:
case 1482:
case 41:
case 2293:
case 1038:
case 3042:
case 2664:
case 1266:
case 3276:
case 3691:
case 2628:
case 3806:
case 3825:
case 3078:
case 1068:
case 2191:
case 463:
case 2917:
case 1824:
case 3440:
case 233:
case 3943:
case 3312:
case 3727:
case 2330:
case 1702:
case 222:
case 1653:
case 1431:
case 2043:
case 663:
case 3292:
case 1746:
case 559:
case 4066:
case 1911:
case 3471:
case 1326:
case 188:
case 1522:
case 1305:
case 666:
case 2219:
case 3544:
case 2388:
case 2360:
case 1714:
case 1649:
case 2843:
case 61:
case 3347:
case 250:
case 1072:
case 519:
case 1383:
case 3144:
case 2719:
case 2962:
case 3430:
case 2412:
case 234:
case 464:
case 2810:
case 3395:
case 1848:
case 3460:
case 3910:
case 2932:
case 3227:
case 4089:
case 1872:
case 2616:
case 1854:
case 1202:
case 2404:
case 3862:
case 272:
case 2371:
case 2658:
case 2010:
case 700:
case 1246:
case 1623:
case 1766:
case 2829:
case 24:
case 3534:
case 3528:
case 2063:
case 1535:
case 4014:
case 3757:
case 640:
case 3963:
case 3413:
case 391:
case 973:
case 1973:
case 147:
case 935:
case 1690:
case 3367:
case 1669:
case 3708:
case 1289:
case 976:
case 3933:
case 2340:
case 1298:
case 664:
case 45:
case 751:
case 1356:
case 1552:
case 1574:
case 3081:
case 2793:
case 2500:
case 3929:
case 1274:
case 2472:
case 1847:
case 1136:
case 1598:
case 2193:
case 3684:
case 2200:
case 2870:
case 3693:
case 1012:
case 3805:
case 705:
case 1265:
case 445:
case 739:
case 2779:
case 1685:
case 1589:
case 338:
case 1235:
case 2070:
case 3487:
case 255:
case 1047:
case 1988:
case 2905:
case 913:
case 1004:
case 2657:
case 1166:
case 1410:
case 3970:
case 1960:
case 1812:
case 785:
case 2291:
case 3228:
case 59:
case 10:
case 2692:
case 3473:
case 397:
case 1342:
case 1913:
case 506:
case 1546:
case 141:
case 883:
case 3527:
case 1325:
case 806:
case 362:
case 1306:
case 212:
case 954:
case 586:
case 879:
case 18:
case 1429:
case 1745:
case 3941:
case 3515:
case 1722:
case 287:
case 3619:
case 930:
case 2496:
case 1651:
case 1433:
case 3744:
case 3368:
case 193:
case 1378:
case 702:
case 3982:
case 717:
case 914:
case 442:
case 531:
case 67:
case 3818:
case 270:
case 2373:
case 2519:
case 2438:
case 2615:
case 3207:
case 1381:
case 3056:
case 2468:
case 3396:
case 1940:
case 2918:
case 782:
case 3077:
case 1067:
case 3127:
case 252:
case 699:
case 2882:
case 1102:
case 3650:
case 1735:
case 1355:
case 3931:
case 3909:
case 365:
case 804:
case 953:
case 1095:
case 2994:
case 215:
case 499:
case 194:
case 1443:
case 3354:
case 3372:
case 1362:
case 2031:
case 2009:
case 1566:
case 504:
case 2791:
case 3083:
case 642:
case 2593:
case 1198:
case 1332:
case 1536:
case 771:
case 47:
case 1895:
case 3348:
case 2700:
case 3508:
case 3775:
case 3883:
case 3894:
case 1459:
case 2809:
case 956:
case 458:
case 3919:
case 3490:
case 2259:
case 3469:
case 1537:
case 752:
case 1951:
case 813:
case 4080:
case 163:
case 513:
case 4068:
case 2019:
case 3641:
case 608:
case 3762:
case 2386:
case 2582:
case 3423:
case 770:
case 4038:
case 8:
case 11:
case 3732:
case 2710:
case 1364:
case 688:
case 3439:
case 3401:
case 202:
case 128:
case 3518:
case 56:
case 816:
case 1375:
case 166:
case 5:
case 2819:
case 367:
case 1104:
case 1595:
case 3397:
case 2893:
case 530:
case 3057:
case 979:
case 3583:
case 2605:
case 3920:
case 2957:
case 1688:
case 554:
case 3126:
case 1238:
case 1036:
case 983:
case 1985:
case 2084:
case 2445:
case 2729:
case 408:
case 3876:
case 1630:
case 3206:
case 349:
case 715:
case 748:
case 1671:
case 3742:
case 3281:
case 1724:
case 1903:
case 4048:
case 2497:
case 2229:
case 1089:
case 3725:
case 1512:
case 755:
case 3449:
case 1921:
case 3345:
case 469:
case 814:
case 1195:
case 1504:
case 2570:
case 1768:
case 221:
case 1344:
case 3183:
case 1307:
case 3194:
case 3526:
case 4054:
case 1889:
case 2109:
case 2131:
case 514:
case 2694:
case 1046:
case 720:
case 787:
case 2210:
case 669:
case 1248:
case 15:
case 2390:
case 3118:
case 178:
case 1002:
case 1167:
case 2435:
case 3027:
case 2339:
case 447:
case 2759:
case 1014:
case 904:
case 1846:
case 2850:
case 1400:
case 2541:
case 1254:
case 2452:
case 3015:
case 2782:
case 200:
case 3562:
case 1949:
case 1376:
case 1097:
case 1611:
case 390:
case 3403:
case 772:
case 145:
case 734:
case 118:
case 4012:
case 3777:
case 3643:
case 750:
case 526:
case 1548:
case 568:
case 68:
case 2563:
case 3028:
case 3875:
case 3783:
case 574:
case 2709:
case 2402:
case 1852:
case 2928:
case 1247:
case 3864:
case 1986:
case 2800:
case 1035:
case 2934:
case 959:
case 1450:
case 1180:
case 2270:
case 3900:
case 2529:
case 1065:
case 2891:
case 832:
case 3075:
case 1835:
case 3142:
case 74:
case 2000:
case 496:
case 998:
case 1596:
case 1124:
case 3064:
case 2761:
case 701:
case 3581:
case 2975:
case 2079:
case 1327:
case 1712:
case 733:
case 3525:
case 3979:
case 1419:
case 3181:
case 3451:
case 3578:
case 2163:
case 3294:
case 361:
case 2879:
case 3663:
case 1923:
case 1747:
case 736:
case 1580:
case 3314:
case 2770:
case 4037:
case 3218:
case 3389:
case 158:
case 2958:
case 1687:
case 277:
case 2303:
case 3277:
case 1420:
case 3807:
case 3058:
case 2632:
case 3610:
case 2110:
case 3132:
case 3398:
case 2466:
case 3256:
case 3816:
case 2741:
case 573:
case 535:
case 2662:
case 3044:
case 2282:
case 1172:
case 1484:
case 1493:
case 2655:
case 2907:
case 2559:
case 2944:
case 3485:
case 722:
case 873:
case 3687:
case 759:
case 2713:
case 1218:
case 3822:
case 877:
case 1016:
case 1277:
case 1807:
case 1844:
case 981:
case 289:
case 577:
case 1058:
case 1256:
case 1398:
case 1132:
case 1044:
case 4094:
case 2672:
case 1816:
case 4083:
case 1162:
case 3022:
case 3172:
case 798:
case 235:
case 925:
case 273:
case 3045:
case 2922:
case 3237:
case 1155:
case 1485:
case 972:
case 4077:
case 3712:
case 2823:
case 1629:
case 1542:
case 3419:
case 3196:
case 3538:
case 665:
case 2696:
case 2271:
case 1181:
case 2801:
case 2788:
case 1294:
case 3568:
case 3939:
case 3901:
case 2492:
case 2173:
case 1578:
case 2869:
case 1663:
case 1517:
case 811:
case 3673:
case 3923:
case 342:
case 2001:
case 3295:
case 224:
case 1314:
case 3580:
case 2573:
case 1178:
case 2319:
case 3865:
case 1205:
case 1783:
case 1034:
case 1117:
case 2086:
case 3795:
case 2680:
case 1991:
case 3204:
case 551:
case 274:
case 3180:
case 3986:
case 2260:
case 922:
case 1900:
case 1834:
case 3212:
case 2974:
case 1828:
case 3138:
case 1142:
case 3835:
case 2415:
case 1581:
case 3052:
case 3124:
case 2965:
case 4005:
case 800:
case 662:
case 3554:
case 975:
case 223:
case 933:
case 2111:
case 1555:
case 318:
case 345:
case 2213:
case 226:
case 438:
case 3767:
case 2587:
case 2849:
case 527:
case 1643:
case 2393:
case 1532:
case 1756:
case 3897:
case 2384:
case 32:
case 557:
case 2428:
case 3491:
case 2902:
case 3046:
case 35:
case 1950:
case 4081:
case 2140:
case 1815:
case 256:
case 2667:
case 2946:
case 1118:
case 443:
case 2287:
case 1177:
case 3640:
case 3167:
case 1027:
case 915:
case 948:
case 2637:
case 446:
case 253:
case 2711:
case 3137:
case 3014:
case 1682:
case 3272:
case 2914:
case 1015:
case 3802:
case 3358:
case 3738:
case 3296:
case 3671:
case 3098:
case 3903:
case 2021:
case 1281:
case 4032:
case 952:
case 585:
case 1725:
case 521:
case 3195:
case 1345:
case 2821:
case 214:
case 2695:
case 805:
case 505:
case 1778:
case 3307:
case 1194:
case 3344:
case 3768:
case 195:
case 1609:
case 4062:
case 821:
case 3147:
case 1670:
case 3836:
case 571:
case 1397:
case 2604:
case 1057:
case 254:
case 1583:
case 1278:
case 2458:
case 1808:
case 3268:
case 2773:
case 2885:
case 3066:
case 230:
case 1126:
case 871:
case 1857:
case 3796:
case 3985:
case 1781:
case 3630:
case 2612:
case 912:
case 704:
case 3112:
case 1225:
case 149:
case 444:
case 1919:
case 3479:
case 955:
case 3951:
case 582:
case 1335:
case 3328:
case 4078:
case 2391:
case 1762:
case 2051:
case 1641:
case 4017:
case 3334:
case 2300:
case 26:
case 1092:
case 1423:
case 517:
case 1374:
case 1518:
case 2113:
case 1401:
case 729:
case 2851:
case 2787:
case 167:
case 3567:
case 366:
case 4025:
case 1577:
case 848:
case 815:
case 1909:
case 1557:
case 204:
case 3355:
case 2871:
case 3095:
case 2786:
case 3566:
case 1372:
case 1354:
case 1728:
case 515:
case 4044:
case 2995:
case 1094:
case 2071:
case 1764:
case 1348:
case 3536:
case 3332:
case 3198:
case 4058:
case 2698:
case 3621:
case 2585:
case 3765:
case 1411:
case 1894:
case 1961:
case 1508:
case 4016:
case 1883:
case 1775:
case 2269:
case 3459:
case 3603:
case 2749:
case 229:
case 939:
case 3037:
case 2406:
case 2614:
case 1856:
case 905:
case 3797:
case 461:
case 1115:
case 1877:
case 3867:
case 1244:
case 231:
case 2967:
case 3146:
case 1258:
case 2478:
case 2753:
case 1592:
case 713:
case 1127:
case 1077:
case 1216:
case 2602:
case 1018:
case 3102:
case 30:
case 4064:
case 283:
case 1324:
case 1338:
case 1758:
case 197:
case 1473:
case 2253:
case 512:
case 341:
case 3546:
case 3342:
case 29:
case 162:
case 812:
case 807:
case 1527:
case 4075:
case 3306:
case 756:
case 279:
case 587:
case 1941:
case 38:
case 3297:
case 3745:
case 1619:
case 4034:
case 1515:
case 286:
case 2481:
case 2151:
case 887:
case 3378:
case 393:
case 1744:
case 3651:
case 3847:
case 3136:
case 1264:
case 3930:
case 3274:
case 2899:
case 1693:
case 2860:
case 1684:
case 2888:
case 3265:
case 2503:
case 2030:
case 3012:
case 1275:
case 2455:
case 138:
case 3589:
case 1826:
case 2790:
case 2060:
case 1157:
case 3235:
case 2099:
case 3004:
case 1620:
case 3047:
case 2359:
case 2739:
case 2701:
case 1176:
case 3960:
case 1970:
case 1005:
case 3812:
case 2904:
case 555:
case 2723:
case 1776:
case 801:
case 1534:
case 3766:
case 2073:
case 1757:
case 732:
case 825:
case 191:
case 3973:
case 1881:
case 2101:
case 2139:
case 1575:
case 3377:
case 2203:
case 2873:
case 2785:
case 2996:
case 2169:
case 1933:
case 774:
case 977:
case 3289:
case 881:
case 3552:
case 3356:
case 3298:
case 3441:
case 1062:
case 2331:
case 2309:
case 2751:
case 3394:
case 495:
case 850:
case 3383:
case 1144:
case 911:
case 1055:
case 2972:
case 550:
case 3214:
case 219:
case 2645:
case 726:
case 1395:
case 3848:
case 834:
case 369:
case 1832:
case 3470:
case 872:
case 1499:
case 1910:
case 1116:
case 2948:
case 2087:
case 3854:
case 2426:
case 1032:
case 2553:
case 572:
case 1855:
case 2405:
case 773:
case 1727:
case 449:
case 735:
case 3702:
case 3431:
case 3746:
case 1292:
case 2811:
case 298:
case 522:
case 1558:
case 2153:
case 4076:
case 388:
case 3326:
case 1715:
case 3461:
case 2251:
case 1544:
case 1959:
case 810:
case 667:
case 3305:
case 4057:
case 259:
case 3714:
case 2149:
case 1304:
case 1878:
case 2924:
case 1208:
case 3165:
case 2703:
case 467:
case 3868:
case 1175:
case 836:
case 2590:
case 980:
case 927:
case 2665:
case 2569:
case 2938:
case 1006:
case 1164:
case 3798:
case 3482:
case 2721:
case 13:
case 536:
case 3880:
case 3038:
case 2652:
case 2186:
case 1276:
case 1806:
case 900:
case 1134:
case 1078:
case 533:
case 833:
case 875:
case 3838:
case 1440:
case 2635:
case 2418:
case 2067:
case 1956:
case 763:
case 3040:
case 152:
case 1882:
case 3967:
case 1977:
case 3478:
case 2837:
case 1468:
case 2940:
case 170:
case 3551:
case 1082:
case 1424:
case 677:
case 411:
case 1438:
case 3442:
case 71:
case 1373:
case 329:
case 3749:
case 3614:
case 766:
case 2765:
case 1387:
case 2971:
case 3689:
case 3269:
case 3290:
case 1831:
case 1279:
case 1584:
case 3071:
case 2752:
case 3310:
case 2198:
case 1593:
case 2536:
case 2362:
case 2566:
case 1009:
case 565:
case 3223:
case 1520:
case 2735:
case 304:
case 1983:
case 115:
case 2095:
case 1448:
case 2960:
case 2166:
case 3904:
case 1291:
case 3947:
case 1120:
case 3099:
case 1905:
case 3739:
case 155:
case 2047:
case 838:
case 2265:
case 3455:
case 3030:
case 2012:
case 1608:
case 2685:
case 2136:
case 3521:
case 1184:
case 1472:
case 1454:
case 2930:
case 1870:
case 3636:
case 3899:
case 538:
case 992:
case 3813:
case 120:
case 187:
case 680:
case 3151:
case 3481:
case 627:
case 75:
case 4091:
case 451:
case 293:
case 3249:
case 2514:
case 2745:
case 303:
case 28:
case 2297:
case 39:
case 1841:
case 597:
case 2306:
case 20:
case 241:
case 3253:
case 1010:
case 1658:
case 3426:
case 1371:
case 2048:
case 2246:
case 1932:
case 2470:
case 1250:
case 3948:
case 1616:
case 2854:
case 718:
case 1412:
case 3972:
case 3645:
case 319:
case 2848:
case 2145:
case 1607:
case 2054:
case 2072:
case 1955:
case 2122:
case 150:
case 421:
case 2736:
case 2356:
case 2552:
case 2574:
case 3221:
case 1784:
case 639:
case 1500:
case 543:
case 2441:
case 1863:
case 621:
case 1981:
case 843:
case 2690:
case 2565:
case 181:
case 457:
case 3169:
case 1340:
case 3996:
case 2318:
case 1720:
case 2639:
case 2601:
case 2896:
case 125:
case 3139:
case 1829:
case 3073:
case 1591:
case 591:
case 1917:
case 1467:
case 990:
case 175:
case 3501:
case 133:
case 2824:
case 1978:
case 1628:
case 3186:
case 3980:
case 2266:
case 3523:
case 2068:
case 4019:
case 1191:
case 3341:
case 1293:
case 2024:
case 1925:
case 1284:
case 2152:
case 2174:
case 2482:
case 1664:
case 1100:
case 3652:
case 83:
case 2165:
case 671:
case 2868:
case 3703:
case 1579:
case 337:
case 1942:
case 3938:
case 136:
case 2789:
case 417:
case 2714:
case 4020:
case 3370:
case 3011:
case 3149:
case 1360:
case 758:
case 3697:
case 2545:
case 1843:
case 560:
case 860:
case 2326:
case 2522:
case 617:
case 2305:
case 2653:
case 2409:
case 544:
case 2746:
case 3483:
case 398:
case 1750:
case 122:
case 1495:
case 208:
case 2295:
case 3001:
case 3039:
case 3799:
case 2580:
case 1163:
case 2901:
case 3492:
case 2939:
case 3023:
case 861:
case 2315:
case 3869:
case 1209:
case 2673:
case 3890:
case 4082:
case 2419:
case 2969:
case 2524:
case 648:
case 615:
case 1079:
case 3069:
case 2712:
case 991:
case 1944:
case 335:
case 1907:
case 448:
case 946:
case 1655:
case 3922:
case 309:
case 3511:
case 708:
case 3945:
case 1662:
case 3672:
case 1741:
case 652:
case 1436:
case 4031:
case 1282:
case 2172:
case 3648:
case 1632:
case 2148:
case 1916:
case 1110:
case 2845:
case 1466:
case 943:
case 3713:
case 3240:
case 177:
case 2420:
case 3187:
case 1303:
case 2267:
case 3053:
case 3849:
case 2897:
case 180:
case 3213:
case 2953:
case 245:
case 127:
case 3587:
case 769:
case 1385:
case 323:
case 2097:
case 455:
case 2611:
case 2737:
case 2357:
case 3111:
case 3049:
case 3853:
case 3997:
case 2376:
case 2572:
case 2949:
case 1498:
case 2392:
case 1533:
case 1000:
case 2835:
case 3638:
case 1975:
case 2074:
case 655:
case 1761:
case 1642:
case 3771:
case 412:
case 1625:
case 3952:
case 1606:
case 747:
case 2212:
case 3230:
case 2795:
case 2247:
case 2852:
case 2874:
case 2204:
case 2180:
case 1934:
case 374:
case 2035:
case 3427:
case 3299:
case 3260:
case 2865:
case 151:
case 3288:
case 2168:
case 4041:
case 1678:
case 1709:
case 487:
case 2307:
case 3588:
case 3273:
case 121:
case 2344:
case 2768:
case 1694:
case 1109:
case 1131:
case 2195:
case 595:
case 2898:
case 2780:
case 3560:
case 314:
case 1570:
case 2921:
case 3998:
case 3003:
case 601:
case 3989:
case 2358:
case 2671:
case 2296:
case 185:
case 3021:
case 240:
case 1161:
case 2098:
case 625:
case 70:
case 4063:
case 1850:
case 1323:
case 401:
case 3464:
case 3914:
case 2802:
case 2254:
case 1474:
case 1759:
case 1339:
case 1301:
case 2137:
case 1465:
case 965:
case 2846:
case 1915:
case 3475:
case 1369:
case 356:
case 2002:
case 3140:
case 278:
case 3379:
case 157:
case 3667:
case 1390:
case 3513:
case 1435:
case 78:
case 1050:
case 2814:
case 2046:
case 2248:
case 1210:
case 3434:
case 793:
case 3113:
case 867:
case 938:
case 228:
case 117:
case 102:
case 3540:
case 316:
case 2567:
case 1819:
case 3787:
case 2375:
case 3300:
case 3:
case 2364:
case 1243:
case 892:
case 1710:
case 21:
case 2328:
case 1141:
case 2334:
case 622:
case 2772:
case 313:
case 1259:
case 475:
case 2537:
case 3612:
case 2630:
case 849:
case 3130:
case 962:
case 3936:
case 3407:
case 1353:
case 794:
case 997:
case 2796:
case 1084:
case 1093:
case 4043:
case 2036:
case 1422:
case 633:
case 171:
case 2268:
case 330:
case 2066:
case 1509:
case 2688:
case 410:
case 2147:
case 1884:
case 2104:
case 1170:
case 2280:
case 3647:
case 3966:
case 3199:
case 354:
case 1349:
case 3604:
case 1976:
case 3445:
case 765:
case 2993:
case 249:
case 1936:
case 2008:
case 2225:
case 3353:
case 3733:
case 2857:
case 996:
case 1407:
case 498:
case 3908:
case 3093:
case 3422:
case 1571:
case 2105:
case 3626:
case 1188:
case 1458:
case 2217:
case 3605:
case 2126:
case 130:
case 3884:
case 3893:
case 2057:
case 459:
case 3349:
case 154:
case 3976:
case 3020:
case 3170:
case 1199:
case 1647:
case 4011:
case 3992:
case 2401:
case 2439:
case 51:
case 1787:
case 828:
case 3819:
case 528:
case 81:
case 2092:
case 2556:
case 2374:
case 3141:
case 3019:
case 1391:
case 563:
case 1051:
case 382:
case 3259:
case 2490:
case 2755:
case 698:
case 1211:
case 2892:
case 4073:
case 3541:
case 994:
case 1914:
case 3474:
case 2262:
case 3301:
case 3339:
case 3915:
case 3465:
case 357:
case 1379:
case 3390:
case 1140:
case 2815:
case 156:
case 3369:
case 3677:
case 3435:
case 3050:
case 55:
case 1287:
case 85:
case 619:
case 1428:
case 1434:
case 3927:
case 2950:
case 2631:
case 1273:
case 2609:
case 564:
case 3263:
case 2505:
case 2778:
case 3683:
case 3109:
case 2526:
case 2717:
case 1821:
case 1599:
case 3570:
case 1695:
case 1560:
case 419:
case 738:
case 3229:
case 2706:
case 2449:
case 1530:
case 1003:
case 2742:
case 3233:
case 2661:
case 1989:
case 2142:
case 2064:
case 483:
case 1771:
case 1638:
case 908:
case 2834:
case 406:
case 3529:
case 132:
case 3964:
case 2125:
case 2828:
case 1952:
case 1974:
case 1230:
case 3891:
case 3402:
case 1299:
case 2783:
case 2028:
case 2875:
case 2205:
case 3563:
case 3617:
case 3446:
case 2794:
case 1086:
case 2226:
case 2034:
case 3678:
case 486:
case 545:
case 2643:
case 82:
case 679:
case 1384:
case 603:
case 3510:
case 1393:
case 2336:
case 2718:
case 126:
case 1740:
case 686:
case 3385:
case 2777:
case 4030:
case 3489:
case 123:
case 2403:
case 1853:
case 2555:
case 1049:
case 3241:
case 4088:
case 3498:
case 2562:
case 2366:
case 300:
case 3782:
case 606:
case 3907:
case 135:
case 947:
case 2485:
case 3741:
case 2816:
case 2044:
case 3662:
case 3282:
case 87:
case 484:
case 558:
case 2132:
case 4071:
case 3321:
case 3543:
case 3958:
case 2389:
case 2218:
case 176:
case 377:
case 858:
case 2844:
case 2807:
case 631:
case 2277:
case 2016:
case 969:
case 1039:
case 1001:
case 1760:
case 3770:
case 842:
case 2314:
case 429:
case 1173:
case 2578:
case 311:
case 2705:
case 3163:
case 1023:
case 1890:
case 3209:
case 3879:
case 2517:
case 3133:
case 3681:
case 2346:
case 604:
case 1839:
case 1801:
case 2451:
case 1696:
case 1271:
case 2181:
case 3261:
case 3129:
case 2506:
case 2302:
case 1090:
case 3079:
case 2525:
case 1730:
case 588:
case 3399:
case 66:
case 3843:
case 6:
case 1251:
case 310:
case 616:
case 2507:
case 260:
case 2959:
case 2544:
case 3859:
case 1483:
case 2558:
case 1153:
case 508:
case 2292:
case 1811:
case 4085:
case 2727:
case 2312:
case 244:
case 3467:
case 2257:
case 1418:
case 413:
case 1635:
case 375:
case 1968:
case 1539:
case 1501:
case 4051:
case 3628:
case 2806:
case 2017:
case 3634:
case 2078:
case 2825:
case 1523:
case 23:
case 2600:
case 761:
case 3906:
case 46:
case 2175:
case 1285:
case 2878:
case 3675:
case 336:
case 1665:
case 137:
case 3579:
case 416:
case 3313:
case 3784:
case 97:
case 2564:
case 3793:
case 2081:
case 3500:
case 614:
case 3033:
case 2679:
case 2708:
case 3179:
case 3029:
case 243:
case 1169:
case 2757:
case 847:
case 2337:
case 1139:
case 2413:
case 453:
case 3829:
case 2776:
case 1073:
case 4021:
case 3371:
case 1361:
case 653:
case 2855:
case 2158:
case 2488:
case 2792:
case 4003:
case 2116:
case 2460:
case 2910:
case 2499:
case 3447:
case 2430:
case 1972:
case 942:
case 2062:
case 1331:
case 1309:
case 3955:
case 1887:
case 2515:
case 1813:
case 387:
case 668:
case 58:
case 3041:
case 88:
case 474:
case 0:
case 2380:
case 103:
case 593:
case 3550:
case 50:
case 3841:
case 262:
case 19:
case 432:
case 307:
case 106:
case 841:
case 3692:
case 2338:
case 2026:
case 2234:
case 3448:
case 1286:
case 2176:
case 1723:
case 1947:
case 1830:
case 3070:
case 3926:
case 4049:
case 1099:
case 3311:
case 1060:
case 1701:
case 3657:
case 2620:
case 2275:
case 1185:
case 1030:
case 1888:
case 3779:
case 426:
case 3472:
case 91:
case 3184:
case 1912:
case 1343:
case 795:
case 2264:
case 2684:
case 1860:
case 4053:
case 674:
case 3200:
case 2883:
case 1689:
case 2508:
case 1103:
case 2894:
case 2411:
case 3831:
case 3279:
case 978:
case 1121:
case 1310:
case 3593:
case 2348:
case 95:
case 3584:
case 1698:
case 184:
case 2372:
case 2734:
case 3031:
case 3009:
case 1786:
case 2728:
case 3791:
case 409:
case 265:
case 2931:
case 2909:
case 3994:
case 473:
case 1871:
case 749:
case 348:
case 2077:
case 3150:
case 3480:
case 1040:
case 3882:
case 352:
case 3627:
case 2650:
case 2018:
case 2056:
case 1417:
case 673:
case 2592:
case 1753:
case 3918:
case 792:
case 1840:
case 1551:
case 676:
case 1442:
case 2244:
case 3519:
case 4023:
case 3373:
case 3615:
case 3438:
case 1425:
case 424:
case 1749:
case 689:
case 4039:
case 4001:
case 1406:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747677602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,];
var gg_b = "1747677602/";

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
