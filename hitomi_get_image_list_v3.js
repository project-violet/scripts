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
case 1130:
case 1729:
case 668:
case 1596:
case 1949:
case 1500:
case 1364:
case 3981:
case 2026:
case 2454:
case 643:
case 1957:
case 460:
case 1205:
case 3623:
case 1484:
case 2426:
case 1810:
case 2470:
case 2105:
case 3725:
case 1561:
case 4090:
case 614:
case 2568:
case 785:
case 3408:
case 2992:
case 3803:
case 3250:
case 482:
case 3374:
case 1702:
case 3912:
case 2577:
case 3684:
case 41:
case 3222:
case 1559:
case 1007:
case 359:
case 2821:
case 525:
case 1794:
case 3513:
case 1023:
case 2589:
case 1407:
case 3548:
case 2904:
case 1931:
case 3350:
case 3274:
case 941:
case 3827:
case 518:
case 3008:
case 3322:
case 2769:
case 2324:
case 2646:
case 250:
case 3813:
case 1156:
case 900:
case 2032:
case 1712:
case 1066:
case 2498:
case 204:
case 2272:
case 1491:
case 1017:
case 452:
case 281:
case 3133:
case 1417:
case 755:
case 2682:
case 1466:
case 1859:
case 1124:
case 2186:
case 3731:
case 2432:
case 2521:
case 2877:
case 3994:
case 3043:
case 147:
case 3757:
case 1315:
case 3020:
case 1353:
case 306:
case 502:
case 2868:
case 3219:
case 338:
case 3076:
case 2788:
case 3929:
case 461:
case 3336:
case 2399:
case 3195:
case 1925:
case 699:
case 4039:
case 1896:
case 1253:
case 3452:
case 2751:
case 2673:
case 2383:
case 2115:
case 3319:
case 794:
case 772:
case 4067:
case 475:
case 2775:
case 2153:
case 1643:
case 2028:
case 933:
case 586:
case 1933:
case 2302:
case 947:
case 31:
case 140:
case 2294:
case 3744:
case 748:
case 99:
case 1598:
case 3214:
case 382:
case 2591:
case 3780:
case 923:
case 3801:
case 47:
case 3972:
case 1690:
case 2394:
case 4008:
case 3956:
case 1606:
case 2566:
case 3597:
case 1421:
case 736:
case 257:
case 907:
case 674:
case 549:
case 692:
case 1995:
case 1826:
case 2329:
case 3621:
case 621:
case 2764:
case 3490:
case 3406:
case 849:
case 1563:
case 2919:
case 1962:
case 3090:
case 3006:
case 3546:
case 3999:
case 195:
case 75:
case 2010:
case 1129:
case 3439:
case 1068:
case 1251:
case 2245:
case 2175:
case 415:
case 3379:
case 438:
case 2061:
case 712:
case 2258:
case 2151:
case 82:
case 1388:
case 467:
case 1275:
case 3416:
case 2613:
case 3795:
case 406:
case 3689:
case 3846:
case 3467:
case 78:
case 2381:
case 3930:
case 3279:
case 2345:
case 893:
case 1351:
case 2188:
case 269:
case 3677:
case 630:
case 1181:
case 375:
case 1799:
case 1685:
case 428:
case 2584:
case 1863:
case 1570:
case 2461:
case 83:
case 3387:
case 3039:
case 2096:
case 1783:
case 3157:
case 2000:
case 1980:
case 2312:
case 184:
case 141:
case 3131:
case 1369:
case 3635:
case 1093:
case 1944:
case 1477:
case 3041:
case 3392:
case 3485:
case 3238:
case 1337:
case 2459:
case 3265:
case 3733:
case 3204:
case 1489:
case 2212:
case 1667:
case 489:
case 2742:
case 4018:
case 1077:
case 4043:
case 3085:
case 1112:
case 2891:
case 273:
case 3478:
case 1756:
case 1639:
case 3873:
case 3304:
case 1785:
case 1699:
case 3166:
case 1373:
case 2831:
case 279:
case 1865:
case 1804:
case 3117:
case 1433:
case 1683:
case 3424:
case 798:
case 94:
case 2197:
case 2318:
case 371:
case 483:
case 90:
case 1514:
case 3456:
case 3024:
case 25:
case 2111:
case 1118:
case 1143:
case 1273:
case 2771:
case 2653:
case 2748:
case 334:
case 411:
case 2928:
case 1211:
case 3695:
case 1033:
case 2218:
case 3869:
case 1921:
case 2036:
case 3099:
case 1887:
case 1716:
case 2220:
case 3363:
case 3875:
case 248:
case 105:
case 226:
case 1767:
case 1176:
case 1246:
case 1382:
case 642:
case 1495:
case 2910:
case 1739:
case 1120:
case 1672:
case 2019:
case 2252:
case 3083:
case 1062:
case 2276:
case 2146:
case 1462:
case 3735:
case 1624:
case 2320:
case 2525:
case 3768:
case 1282:
case 3483:
case 2419:
case 1879:
case 602:
case 2436:
case 2857:
case 958:
case 145:
case 787:
case 1790:
case 3184:
case 3270:
case 3140:
case 3354:
case 2825:
case 46:
case 827:
case 2900:
case 814:
case 3588:
case 2557:
case 803:
case 3967:
case 514:
case 773:
case 837:
case 1587:
case 496:
case 3430:
case 3370:
case 843:
case 3680:
case 3326:
case 868:
case 537:
case 3551:
case 3644:
case 1935:
case 191:
case 1260:
case 1444:
case 2727:
case 28:
case 2947:
case 2050:
case 1480:
case 3107:
case 1630:
case 2160:
case 2474:
case 212:
case 1977:
case 929:
case 2308:
case 1360:
case 2422:
case 2531:
case 1504:
case 664:
case 132:
case 2450:
case 769:
case 2703:
case 1201:
case 453:
case 2234:
case 2208:
case 1044:
case 63:
case 3481:
case 2367:
case 4083:
case 2316:
case 1449:
case 2862:
case 3058:
case 2087:
case 1836:
case 2479:
case 2339:
case 751:
case 62:
case 2746:
case 2267:
case 176:
case 520:
case 1139:
case 1720:
case 3815:
case 2637:
case 3458:
case 1776:
case 3081:
case 1271:
case 1141:
case 2773:
case 1645:
case 2544:
case 3934:
case 2580:
case 2385:
case 4056:
case 3189:
case 383:
case 1658:
case 471:
case 2278:
case 1923:
case 2171:
case 2675:
case 2038:
case 2065:
case 1031:
case 2004:
case 3412:
case 3193:
case 3347:
case 762:
case 2465:
case 3259:
case 311:
case 1522:
case 434:
case 2833:
case 3657:
case 2378:
case 2438:
case 922:
case 1550:
case 3717:
case 1355:
case 2092:
case 1681:
case 991:
case 3228:
case 1327:
case 3918:
case 2103:
case 1822:
case 3094:
case 2533:
case 10:
case 3625:
case 2014:
case 2880:
case 3002:
case 310:
case 294:
case 272:
case 686:
case 1966:
case 2760:
case 1917:
case 1629:
case 3707:
case 990:
case 3542:
case 704:
case 158:
case 2306:
case 531:
case 1694:
case 2963:
case 3553:
case 3429:
case 1025:
case 574:
case 916:
case 592:
case 2290:
case 521:
case 3976:
case 3029:
case 3864:
case 3805:
case 3920:
case 781:
case 3784:
case 396:
case 1536:
case 821:
case 255:
case 905:
case 1106:
case 3210:
case 1051:
case 2481:
case 3782:
case 1268:
case 50:
case 3367:
case 2045:
case 759:
case 2058:
case 463:
case 1763:
case 2261:
case 2168:
case 654:
case 4036:
case 2300:
case 3479:
case 2631:
case 2505:
case 1161:
case 3339:
case 3079:
case 3746:
case 3487:
case 2361:
case 1335:
case 1475:
case 1100:
case 3216:
case 408:
case 597:
case 2815:
case 1088:
case 2458:
case 2081:
case 3970:
case 2296:
case 54:
case 2445:
case 897:
case 2853:
case 3651:
case 1901:
case 2934:
case 3580:
case 2908:
case 2189:
case 3113:
case 2791:
case 3492:
case 283:
case 858:
case 3148:
case 3171:
case 3241:
case 1469:
case 2842:
case 479:
case 3065:
case 1289:
case 2412:
case 3711:
case 2347:
case 1732:
case 211:
case 2657:
case 1393:
case 1277:
case 3438:
case 999:
case 1069:
case 3285:
case 45:
case 1037:
case 2649:
case 121:
case 2717:
case 1159:
case 319:
case 3688:
case 2766:
case 192:
case 2247:
case 2177:
case 1911:
case 968:
case 3103:
case 2918:
case 4022:
case 2094:
case 2943:
case 3533:
case 1128:
case 2625:
case 3701:
case 48:
case 4050:
case 2586:
case 1556:
case 394:
case 903:
case 2328:
case 372:
case 728:
case 1572:
case 120:
case 3127:
case 588:
case 1997:
case 927:
case 3932:
case 4074:
case 1754:
case 1830:
case 839:
case 3306:
case 3390:
case 3595:
case 3963:
case 2429:
case 26:
case 2515:
case 1614:
case 3562:
case 3290:
case 1583:
case 829:
case 2805:
case 2864:
case 2920:
case 641:
case 2784:
case 1726:
case 1946:
case 1599:
case 355:
case 2210:
case 1636:
case 114:
case 1391:
case 265:
case 920:
case 2398:
case 3831:
case 4004:
case 379:
case 2117:
case 2072:
case 224:
case 1927:
case 1619:
case 2662:
case 3343:
case 2424:
case 1502:
case 3197:
case 1217:
case 271:
case 3318:
case 103:
case 137:
case 2024:
case 2456:
case 2793:
case 1291:
case 3615:
case 3111:
case 4092:
case 143:
case 1903:
case 2472:
case 930:
case 3771:
case 3653:
case 1812:
case 234:
case 1366:
case 3928:
case 3713:
case 2789:
case 1594:
case 3755:
case 3218:
case 3243:
case 1198:
case 2869:
case 2099:
case 822:
case 3642:
case 2363:
case 326:
case 891:
case 782:
case 3910:
case 1700:
case 2851:
case 522:
case 1796:
case 1453:
case 3019:
case 1845:
case 2990:
case 3146:
case 363:
case 71:
case 3525:
case 1015:
case 3849:
case 832:
case 1881:
case 336:
case 2768:
case 3419:
case 2483:
case 3352:
case 2633:
case 532:
case 3436:
case 3182:
case 647:
case 2184:
case 1126:
case 633:
case 2270:
case 2140:
case 2354:
case 3996:
case 2939:
case 3900:
case 2588:
case 3557:
case 2030:
case 69:
case 3009:
case 1284:
case 1240:
case 1405:
case 1622:
case 1005:
case 1064:
case 3409:
case 666:
case 607:
case 2551:
case 2644:
case 1829:
case 1154:
case 3961:
case 1545:
case 992:
case 974:
case 1323:
case 3727:
case 3050:
case 805:
case 816:
case 3959:
case 3160:
case 3474:
case 2569:
case 505:
case 3308:
case 3422:
case 3605:
case 3531:
case 1955:
case 1728:
case 3074:
case 1802:
case 3450:
case 6:
case 3234:
case 1307:
case 775:
case 2978:
case 1774:
case 21:
case 3807:
case 2744:
case 676:
case 451:
case 1003:
case 3591:
case 2780:
case 1027:
case 1834:
case 2972:
case 1750:
case 1808:
case 3394:
case 3823:
case 480:
case 1722:
case 1942:
case 3428:
case 1610:
case 2314:
case 357:
case 13:
case 717:
case 3410:
case 3884:
case 4026:
case 771:
case 2125:
case 3329:
case 398:
case 2621:
case 2490:
case 541:
case 765:
case 918:
case 2406:
case 935:
case 462:
case 4070:
case 3603:
case 629:
case 1225:
case 584:
case 1576:
case 734:
case 3919:
case 2983:
case 501:
case 3229:
case 1552:
case 260:
case 3936:
case 801:
case 1709:
case 3010:
case 1520:
case 925:
case 4054:
case 639:
case 1325:
case 3671:
case 3753:
case 3400:
case 2379:
case 1852:
case 697:
case 770:
case 1876:
case 3061:
case 2693:
case 3715:
case 1357:
case 540:
case 3151:
case 2287:
case 1905:
case 1820:
case 1349:
case 2689:
case 186:
case 2846:
case 3648:
case 2467:
case 3381:
case 3540:
case 3345:
case 2279:
case 2067:
case 60:
case 3188:
case 3584:
case 261:
case 1249:
case 2762:
case 3461:
case 2387:
case 2039:
case 1647:
case 2157:
case 800:
case 3000:
case 3312:
case 3866:
case 2131:
case 1165:
case 2078:
case 3817:
case 3786:
case 2501:
case 2392:
case 2485:
case 2238:
case 3523:
case 3459:
case 2204:
case 2265:
case 2733:
case 2897:
case 1048:
case 3974:
case 4032:
case 413:
case 149:
case 3212:
case 3137:
case 109:
case 1192:
case 3922:
case 2085:
case 1843:
case 252:
case 481:
case 2338:
case 2292:
case 3950:
case 2873:
case 1331:
case 2365:
case 1600:
case 2304:
case 1109:
case 3660:
case 1988:
case 523:
case 3070:
case 3230:
case 3454:
case 1516:
case 2209:
case 2607:
case 498:
case 1567:
case 2623:
case 547:
case 1975:
case 3426:
case 4010:
case 3105:
case 2309:
case 1951:
case 3470:
case 711:
case 847:
case 1890:
case 1806:
case 777:
case 2408:
case 1937:
case 8:
case 3992:
case 1060:
case 2803:
case 102:
case 1670:
case 1122:
case 1401:
case 2912:
case 3577:
case 4028:
case 2684:
case 1626:
case 1585:
case 1150:
case 2640:
case 1344:
case 1969:
case 909:
case 2548:
case 3938:
case 616:
case 949:
case 1541:
case 3965:
case 457:
case 2144:
case 142:
case 1001:
case 1578:
case 2827:
case 605:
case 2571:
case 1244:
case 3769:
case 2443:
case 93:
case 2855:
case 3646:
case 2813:
case 76:
case 2848:
case 1411:
case 2902:
case 3142:
case 3272:
case 304:
case 3893:
case 3737:
case 2527:
case 2503:
case 1663:
case 4047:
case 1073:
case 3372:
case 2731:
case 3432:
case 289:
case 1765:
case 1704:
case 1011:
case 3521:
case 3877:
case 1885:
case 3356:
case 1119:
case 2020:
case 1046:
case 3697:
case 2162:
case 1136:
case 1482:
case 2666:
case 215:
case 2219:
case 1506:
case 164:
case 3788:
case 238:
case 2749:
case 2929:
case 3399:
case 2336:
case 1839:
case 118:
case 4000:
case 1082:
case 753:
case 3383:
case 246:
case 710:
case 469:
case 622:
case 1295:
case 3775:
case 228:
case 1816:
case 3153:
case 2420:
case 3583:
case 747:
case 811:
case 963:
case 877:
case 1562:
case 2602:
case 2536:
case 3599:
case 2190:
case 511:
case 4005:
case 4064:
case 577:
case 926:
case 1595:
case 2694:
case 1306:
case 723:
case 908:
case 883:
case 766:
case 3614:
case 707:
case 1963:
case 1844:
case 3572:
case 2629:
case 1760:
case 2966:
case 3556:
case 1414:
case 2874:
case 1127:
case 297:
case 1533:
case 499:
case 3911:
case 2327:
case 1998:
case 20:
case 3128:
case 2907:
case 1378:
case 3277:
case 3147:
case 1833:
case 229:
case 2522:
case 596:
case 1404:
case 3679:
case 1465:
case 3389:
case 2313:
case 2348:
case 374:
case 2681:
case 392:
case 1341:
case 1092:
case 3159:
case 98:
case 321:
case 437:
case 896:
case 3377:
case 1148:
case 403:
case 3293:
case 1492:
case 3437:
case 1155:
case 3872:
case 1773:
case 56:
case 2271:
case 2141:
case 3798:
case 2178:
case 2248:
case 2213:
case 2031:
case 1065:
case 1004:
case 2718:
case 427:
case 414:
case 1241:
case 1171:
case 2743:
case 86:
case 2509:
case 1216:
case 853:
case 288:
case 3335:
case 3196:
case 2139:
case 3530:
case 810:
case 1926:
case 2984:
case 2612:
case 1079:
case 2116:
case 510:
case 3451:
case 2167:
case 3088:
case 2776:
case 1637:
case 4015:
case 3235:
case 3488:
case 2449:
case 1316:
case 2819:
case 3883:
case 1782:
case 3161:
case 3075:
case 185:
case 3948:
case 1074:
case 232:
case 2108:
case 638:
case 2134:
case 3955:
case 2565:
case 1664:
case 1422:
case 2993:
case 667:
case 606:
case 3802:
case 2080:
case 646:
case 1947:
case 2480:
case 222:
case 1727:
case 3323:
case 2260:
case 291:
case 628:
case 3894:
case 2977:
case 1022:
case 112:
case 1474:
case 1160:
case 2301:
case 1409:
case 3674:
case 701:
case 3545:
case 2935:
case 3829:
case 2968:
case 524:
case 517:
case 1996:
case 1549:
case 3650:
case 689:
case 1825:
case 571:
case 2790:
case 2579:
case 3622:
case 3284:
case 1009:
case 784:
case 3710:
case 2346:
case 1419:
case 136:
case 3881:
case 1849:
case 1525:
case 2624:
case 1376:
case 108:
case 1857:
case 754:
case 1352:
case 3163:
case 2495:
case 2246:
case 2176:
case 67:
case 2767:
case 205:
case 2152:
case 4075:
case 1642:
case 2716:
case 740:
case 1146:
case 2656:
case 2062:
case 1019:
case 3529:
case 3453:
case 2120:
case 2739:
case 4051:
case 3700:
case 1653:
case 2397:
case 1771:
case 2273:
case 3903:
case 2892:
case 1615:
case 4037:
case 2514:
case 3086:
case 4069:
case 368:
case 1243:
case 2741:
case 3442:
case 1755:
case 1928:
case 3366:
case 1748:
case 3812:
case 2865:
case 2838:
case 3391:
case 314:
case 290:
case 3132:
case 972:
case 303:
case 1318:
case 994:
case 1197:
case 3486:
case 3266:
case 2683:
case 3747:
case 2311:
case 2269:
case 1922:
case 3192:
case 66:
case 309:
case 4011:
case 1059:
case 860:
case 3471:
case 3696:
case 2639:
case 2493:
case 2112:
case 2093:
case 1786:
case 2724:
case 3165:
case 3104:
case 241:
case 1866:
case 284:
case 1312:
case 1447:
case 2832:
case 3231:
case 1459:
case 980:
case 2337:
case 3055:
case 2477:
case 2526:
case 2351:
case 1909:
case 169:
case 3659:
case 1540:
case 1000:
case 4082:
case 1281:
case 3719:
case 732:
case 2468:
case 1096:
case 3647:
case 2288:
case 2435:
case 1461:
case 3179:
case 435:
case 962:
case 2863:
case 2678:
case 1175:
case 1400:
case 582:
case 3187:
case 1496:
case 2068:
case 2158:
case 610:
case 1648:
case 4046:
case 653:
case 1613:
case 2145:
case 2275:
case 2554:
case 425:
case 3349:
case 3820:
case 1655:
case 3905:
case 3964:
case 2388:
case 882:
case 51:
case 2641:
case 3552:
case 1229:
case 2962:
case 1919:
case 3325:
case 1010:
case 1936:
case 683:
case 1705:
case 198:
case 1764:
case 1329:
case 2995:
case 1410:
case 3628:
case 3953:
case 3225:
case 1603:
case 677:
case 904:
case 1566:
case 2690:
case 745:
case 561:
case 3750:
case 3834:
case 875:
case 1428:
case 3722:
case 2421:
case 2102:
case 575:
case 1807:
case 2021:
case 3114:
case 2933:
case 3518:
case 2194:
case 981:
case 32:
case 1591:
case 3003:
case 402:
case 944:
case 4060:
case 3986:
case 3698:
case 2800:
case 318:
case 2925:
case 2896:
case 1399:
case 1063:
case 2758:
case 670:
case 2215:
case 797:
case 335:
case 2643:
case 3362:
case 3816:
case 2618:
case 3867:
case 3295:
case 74:
case 1383:
case 70:
case 3632:
case 486:
case 2:
case 2510:
case 3119:
case 2315:
case 1299:
case 478:
case 1835:
case 364:
case 2781:
case 3395:
case 3136:
case 1868:
case 2199:
case 1098:
case 2847:
case 1914:
case 2417:
case 2286:
case 2091:
case 1356:
case 247:
case 3885:
case 2528:
case 1877:
case 233:
case 3738:
case 1521:
case 3011:
case 3704:
case 409:
case 3765:
case 1432:
case 1372:
case 2124:
case 3497:
case 4048:
case 3411:
case 113:
case 1889:
case 3097:
case 2172:
case 957:
case 3841:
case 3878:
case 1893:
case 1256:
case 2676:
case 3792:
case 104:
case 1142:
case 2066:
case 2652:
case 1498:
case 4071:
case 43:
case 3654:
case 987:
case 2931:
case 546:
case 1589:
case 2023:
case 180:
case 3460:
case 3244:
case 3174:
case 493:
case 846:
case 788:
case 4027:
case 3714:
case 828:
case 342:
case 515:
case 3122:
case 3670:
case 42:
case 3060:
case 1992:
case 806:
case 1821:
case 3969:
case 815:
case 2423:
case 2559:
case 3344:
case 3150:
case 3585:
case 3380:
case 3626:
case 1577:
case 506:
case 2810:
case 1054:
case 2484:
case 617:
case 2264:
case 456:
case 1987:
case 889:
case 1568:
case 2608:
case 3890:
case 2561:
case 1601:
case 2634:
case 3951:
case 1164:
case 162:
case 2305:
case 2364:
case 3988:
case 1660:
case 3109:
case 2949:
case 2130:
case 2957:
case 2040:
case 3516:
case 1230:
case 218:
case 1452:
case 2082:
case 3800:
case 3896:
case 2839:
case 3925:
case 3745:
case 612:
case 1195:
case 1336:
case 720:
case 235:
case 3758:
case 3643:
case 2787:
case 2816:
case 580:
case 2867:
case 146:
case 1319:
case 960:
case 1162:
case 3353:
case 3510:
case 167:
case 1020:
case 3183:
case 225:
case 1757:
case 2119:
case 1236:
case 851:
case 730:
case 1617:
case 3861:
case 1929:
case 4035:
case 1749:
case 2262:
case 1076:
case 2506:
case 264:
case 2482:
case 3781:
case 1052:
case 1219:
case 1666:
case 115:
case 551:
case 3466:
case 3417:
case 1133:
case 3286:
case 3342:
case 2663:
case 1503:
case 347:
case 1994:
case 1043:
case 2011:
case 2233:
case 2765:
case 189:
case 1731:
case 2704:
case 91:
case 1848:
case 3712:
case 4089:
case 1813:
case 2097:
case 1443:
case 307:
case 3386:
case 2841:
case 1418:
case 1527:
case 323:
case 4093:
case 441:
case 3676:
case 3652:
case 1871:
case 1274:
case 1144:
case 3931:
case 1548:
case 3407:
case 3023:
case 1180:
case 3794:
case 454:
case 1322:
case 2174:
case 2460:
case 1571:
case 2714:
case 626:
case 1827:
case 17:
case 1434:
case 202:
case 2670:
case 2122:
case 1408:
case 608:
case 4021:
case 1640:
case 1222:
case 2150:
case 2585:
case 2380:
case 2626:
case 1684:
case 1912:
case 3810:
case 774:
case 792:
case 3484:
case 2975:
case 844:
case 1623:
case 3205:
case 3440:
case 3264:
case 1958:
case 2890:
case 1945:
case 3561:
case 1725:
case 1309:
case 1981:
case 2988:
case 3364:
case 2109:
case 3500:
case 813:
case 3949:
case 3596:
case 3729:
case 2567:
case 1607:
case 65:
case 3957:
case 513:
case 3084:
case 550:
case 3269:
case 3616:
case 447:
case 2818:
case 2192:
case 959:
case 1811:
case 2413:
case 3489:
case 1365:
case 2331:
case 3898:
case 1560:
case 1873:
case 3772:
case 49:
case 3756:
case 4091:
case 1338:
case 301:
case 2661:
case 3724:
case 2104:
case 2165:
case 2138:
case 898:
case 384:
case 2508:
case 2071:
case 249:
case 3832:
case 2048:
case 1204:
case 2231:
case 1265:
case 466:
case 3089:
case 2013:
case 1238:
case 2055:
case 1485:
case 1392:
case 1041:
case 3477:
case 3526:
case 3685:
case 3799:
case 2257:
case 1677:
case 557:
case 1279:
case 1930:
case 2659:
case 1157:
case 2647:
case 3468:
case 3435:
case 1762:
case 3375:
case 2249:
case 161:
case 3863:
case 1693:
case 2876:
case 2187:
case 1439:
case 1846:
case 1689:
case 4:
case 672:
case 1795:
case 3275:
case 3388:
case 3641:
case 915:
case 768:
case 1090:
case 573:
case 3129:
case 3730:
case 967:
case 2325:
case 873:
case 2709:
case 1999:
case 587:
case 703:
case 946:
case 619:
case 3826:
case 3995:
case 4084:
case 928:
case 2628:
case 1582:
case 1406:
case 1490:
case 714:
case 727:
case 869:
case 3606:
case 1956:
case 3690:
case 2808:
case 2834:
case 2750:
case 1972:
case 2027:
case 23:
case 3532:
case 2942:
case 3421:
case 3102:
case 4023:
case 4007:
case 340:
case 11:
case 3933:
case 2543:
case 3194:
case 2003:
case 182:
case 1860:
case 2986:
case 3538:
case 332:
case 2913:
case 497:
case 836:
case 3504:
case 2223:
case 1978:
case 2307:
case 3201:
case 808:
case 536:
case 1123:
case 1107:
case 3480:
case 322:
case 3444:
case 391:
case 826:
case 2894:
case 1985:
case 548:
case 911:
case 3977:
case 2512:
case 1569:
case 863:
case 2609:
case 299:
case 3630:
case 1575:
case 1430:
case 3587:
case 604:
case 2064:
case 2340:
case 55:
case 2558:
case 613:
case 2384:
case 2650:
case 1939:
case 1270:
case 2126:
case 3790:
case 879:
case 2581:
case 2464:
case 2240:
case 2284:
case 1226:
case 458:
case 1030:
case 579:
case 2710:
case 1768:
case 73:
case 3462:
case 345:
case 793:
case 1633:
case 476:
case 651:
case 2163:
case 3495:
case 3176:
case 3767:
case 3152:
case 305:
case 1875:
case 1363:
case 512:
case 3887:
case 1906:
case 3062:
case 1990:
case 316:
case 3656:
case 1083:
case 3672:
case 3120:
case 1851:
case 2700:
case 3397:
case 1298:
case 3273:
case 3118:
case 243:
case 756:
case 1837:
case 1024:
case 237:
case 3514:
case 3921:
case 2198:
case 1869:
case 3033:
case 429:
case 662:
case 1695:
case 2366:
case 2812:
case 1232:
case 1117:
case 2759:
case 4031:
case 3804:
case 3373:
case 1166:
case 3838:
case 165:
case 2042:
case 1777:
case 2636:
case 390:
case 2132:
case 953:
case 2502:
case 910:
case 1662:
case 2486:
case 1424:
case 1056:
case 3683:
case 2266:
case 439:
case 3311:
case 2110:
case 3519:
case 1976:
case 687:
case 1952:
case 2770:
case 3602:
case 3106:
case 819:
case 3536:
case 2946:
case 1805:
case 1864:
case 358:
case 2830:
case 2982:
case 2614:
case 1515:
case 1429:
case 1553:
case 2572:
case 4044:
case 3917:
case 917:
case 2321:
case 3966:
case 110:
case 1002:
case 432:
case 3874:
case 965:
case 3303:
case 2997:
case 735:
case 1494:
case 1707:
case 220:
case 585:
case 3822:
case 3327:
case 764:
case 1121:
case 885:
case 2973:
case 1586:
case 422:
case 3850:
case 3203:
case 1402:
case 1625:
case 3734:
case 30:
case 3708:
case 3991:
case 491:
case 725:
case 3907:
case 1657:
case 2393:
case 555:
case 3371:
case 329:
case 4033:
case 1012:
case 111:
case 1259:
case 2732:
case 3431:
case 3185:
case 274:
case 1177:
case 1247:
case 3681:
case 855:
case 1886:
case 2824:
case 3355:
case 1717:
case 2293:
case 1791:
case 1189:
case 1908:
case 2856:
case 2437:
case 1359:
case 2901:
case 1934:
case 3645:
case 3141:
case 3271:
case 2798:
case 339:
case 3178:
case 2289:
case 3213:
case 1412:
case 3031:
case 1842:
case 3255:
case 3574:
case 2469:
case 3743:
case 2475:
case 894:
case 2100:
case 3720:
case 3139:
case 1361:
case 3940:
case 376:
case 742:
case 572:
case 1200:
case 1853:
case 3116:
case 1296:
case 3752:
case 1081:
case 3167:
case 2088:
case 1261:
case 2763:
case 2235:
case 2488:
case 1058:
case 416:
case 4062:
case 3449:
case 2883:
case 3819:
case 1135:
case 2161:
case 1564:
case 1631:
case 405:
case 3836:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761742802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,];
var gg_b = "1761742802/";

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
