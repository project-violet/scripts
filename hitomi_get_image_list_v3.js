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
case 2328:
case 734:
case 2816:
case 3972:
case 408:
case 1754:
case 1291:
case 3584:
case 4009:
case 2096:
case 727:
case 1938:
case 2612:
case 820:
case 2380:
case 1163:
case 2837:
case 1640:
case 2358:
case 2460:
case 457:
case 2502:
case 4066:
case 1226:
case 3647:
case 3614:
case 978:
case 1060:
case 1906:
case 1594:
case 3281:
case 2712:
case 3411:
case 4023:
case 400:
case 2072:
case 482:
case 1740:
case 810:
case 1263:
case 1313:
case 4089:
case 3565:
case 1839:
case 3067:
case 3323:
case 691:
case 892:
case 828:
case 960:
case 1156:
case 1969:
case 3101:
case 544:
case 951:
case 1191:
case 485:
case 1911:
case 24:
case 3477:
case 2878:
case 165:
case 2610:
case 2815:
case 3761:
case 1470:
case 297:
case 3553:
case 2095:
case 2627:
case 1783:
case 2462:
case 2500:
case 3041:
case 3970:
case 3348:
case 3523:
case 2657:
case 1232:
case 3589:
case 1759:
case 876:
case 1977:
case 4065:
case 804:
case 162:
case 159:
case 1603:
case 414:
case 361:
case 2979:
case 2757:
case 3793:
case 2558:
case 307:
case 2580:
case 3566:
case 1125:
case 1703:
case 172:
case 533:
case 1629:
case 1062:
case 3384:
case 358:
case 2343:
case 3509:
case 754:
case 916:
case 3464:
case 2528:
case 2727:
case 463:
case 1683:
case 242:
case 1866:
case 3107:
case 3910:
case 1573:
case 3345:
case 3488:
case 4045:
case 1457:
case 3131:
case 3927:
case 1059:
case 1228:
case 416:
case 507:
case 806:
case 1427:
case 2113:
case 1988:
case 3957:
case 2993:
case 2326:
case 2875:
case 3534:
case 3019:
case 937:
case 2795:
case 2098:
case 1950:
case 813:
case 219:
case 3420:
case 16:
case 1280:
case 1853:
case 1158:
case 3187:
case 2010:
case 1498:
case 1042:
case 2525:
case 2027:
case 229:
case 2429:
case 17:
case 389:
case 1908:
case 2057:
case 1889:
case 2199:
case 3207:
case 431:
case 2459:
case 1944:
case 4039:
case 1823:
case 180:
case 301:
case 3339:
case 3998:
case 3118:
case 3813:
case 864:
case 561:
case 3175:
case 2961:
case 3231:
case 1297:
case 3546:
case 1143:
case 1024:
case 194:
case 2440:
case 2721:
case 1282:
case 1412:
case 2355:
case 3667:
case 985:
case 3276:
case 4046:
case 2294:
case 2876:
case 2751:
case 344:
case 2325:
case 3192:
case 982:
case 1935:
case 748:
case 2332:
case 1054:
case 721:
case 1633:
case 468:
case 3292:
case 1884:
case 2194:
case 2914:
case 4034:
case 2454:
case 1949:
case 957:
case 353:
case 1202:
case 2526:
case 1971:
case 2772:
case 470:
case 1040:
case 2530:
case 3674:
case 2556:
case 64:
case 2012:
case 3545:
case 3047:
case 1373:
case 740:
case 3176:
case 3767:
case 1182:
case 3568:
case 2892:
case 2315:
case 981:
case 1912:
case 1192:
case 3922:
case 2940:
case 455:
case 144:
case 3733:
case 2378:
case 909:
case 3054:
case 2265:
case 3804:
case 3865:
case 2049:
case 3660:
case 725:
case 1435:
case 2769:
case 1774:
case 1276:
case 1422:
case 1894:
case 2184:
case 3952:
case 1667:
case 2071:
case 3412:
case 2711:
case 452:
case 469:
case 2638:
case 3282:
case 394:
case 2802:
case 2786:
case 3243:
case 2501:
case 1674:
case 3040:
case 1176:
case 2284:
case 3373:
case 2611:
case 2738:
case 1047:
case 95:
case 2035:
case 3949:
case 2606:
case 583:
case 3633:
case 790:
case 2516:
case 3971:
case 2165:
case 2052:
case 2148:
case 2843:
case 575:
case 2828:
case 3988:
case 210:
case 2123:
case 3427:
case 1899:
case 2266:
case 2677:
case 613:
case 1741:
case 3083:
case 2942:
case 2337:
case 1450:
case 1910:
case 1107:
case 1368:
case 2880:
case 606:
case 1218:
case 572:
case 2858:
case 2153:
case 3197:
case 2209:
case 1131:
case 3100:
case 674:
case 3457:
case 1275:
case 1290:
case 1093:
case 2785:
case 218:
case 189:
case 177:
case 3297:
case 1231:
case 2109:
case 302:
case 3003:
case 2983:
case 3128:
case 101:
case 2050:
case 559:
case 3823:
case 2800:
case 1679:
case 2020:
case 2897:
case 3853:
case 623:
case 2578:
case 2381:
case 2959:
case 1444:
case 2419:
case 3180:
case 2289:
case 2017:
case 1641:
case 1365:
case 3232:
case 1304:
case 2962:
case 1693:
case 150:
case 247:
case 2855:
case 2650:
case 161:
case 580:
case 1485:
case 3603:
case 359:
case 3977:
case 1215:
case 2825:
case 2620:
case 2708:
case 365:
case 1719:
case 2744:
case 2376:
case 1477:
case 2531:
case 3783:
case 2832:
case 1761:
case 158:
case 375:
case 3062:
case 2441:
case 2644:
case 588:
case 1405:
case 2479:
case 2518:
case 2717:
case 1509:
case 30:
case 2077:
case 2146:
case 56:
case 2788:
case 2085:
case 2587:
case 1793:
case 3703:
case 3125:
case 1995:
case 2392:
case 171:
case 107:
case 1438:
case 3640:
case 3845:
case 1074:
case 2592:
case 1714:
case 3163:
case 620:
case 1366:
case 3868:
case 2635:
case 1647:
case 2011:
case 1216:
case 829:
case 2771:
case 2856:
case 2387:
case 2375:
case 618:
case 1309:
case 146:
case 3986:
case 2139:
case 3230:
case 2652:
case 1237:
case 979:
case 1584:
case 641:
case 695:
case 842:
case 2239:
case 1:
case 3130:
case 1353:
case 3156:
case 628:
case 3496:
case 2331:
case 2576:
case 2307:
case 206:
case 969:
case 2863:
case 1406:
case 2168:
case 3263:
case 3740:
case 610:
case 3421:
case 4013:
case 1951:
case 1281:
case 3594:
case 955:
case 3060:
case 2649:
case 2722:
case 819:
case 692:
case 2474:
case 845:
case 409:
case 2671:
case 1504:
case 1067:
case 1565:
case 3126:
case 1116:
case 3313:
case 3184:
case 1355:
case 2282:
case 1721:
case 1440:
case 921:
case 294:
case 3686:
case 936:
case 3049:
case 2660:
case 2024:
case 675:
case 1672:
case 3447:
case 1796:
case 807:
case 506:
case 2102:
case 2054:
case 785:
case 4015:
case 574:
case 3204:
case 3265:
case 1947:
case 2935:
case 3315:
case 3706:
case 2922:
case 1563:
case 3882:
case 1325:
case 3940:
case 2733:
case 3378:
case 1294:
case 3581:
case 3516:
case 376:
case 2971:
case 3165:
case 3052:
case 3843:
case 861:
case 304:
case 434:
case 1454:
case 1914:
case 3924:
case 2884:
case 3606:
case 708:
case 1651:
case 850:
case 2633:
case 1892:
case 999:
case 757:
case 2182:
case 911:
case 1621:
case 3802:
case 1530:
case 665:
case 1330:
case 3301:
case 2228:
case 2059:
case 1887:
case 3858:
case 2100:
case 3493:
case 2457:
case 2573:
case 4001:
case 2920:
case 737:
case 1403:
case 3880:
case 3685:
case 4016:
case 3677:
case 26:
case 763:
case 3903:
case 2950:
case 2410:
case 1098:
case 145:
case 454:
case 1670:
case 1326:
case 3764:
case 3705:
case 696:
case 1429:
case 3381:
case 3777:
case 129:
case 3959:
case 3419:
case 1695:
case 3166:
case 1363:
case 2180:
case 3289:
case 773:
case 3017:
case 320:
case 1770:
case 1213:
case 3800:
case 3664:
case 2762:
case 2158:
case 3020:
case 3897:
case 4081:
case 59:
case 3253:
case 838:
case 2200:
case 2003:
case 2128:
case 3983:
case 3050:
case 956:
case 280:
case 2944:
case 547:
case 1555:
case 3785:
case 3531:
case 1462:
case 4076:
case 1798:
case 1597:
case 3832:
case 1382:
case 3825:
case 3590:
case 1815:
case 3507:
case 3005:
case 1610:
case 3708:
case 1878:
case 3376:
case 2642:
case 2729:
case 14:
case 3650:
case 2603:
case 39:
case 3636:
case 518:
case 2232:
case 731:
case 347:
case 2703:
case 2125:
case 1580:
case 3392:
case 716:
case 3788:
case 595:
case 2905:
case 1979:
case 3234:
case 528:
case 2132:
case 1727:
case 592:
case 703:
case 3717:
case 2834:
case 1343:
case 1710:
case 3608:
case 510:
case 3441:
case 2629:
case 2599:
case 3644:
case 1070:
case 411:
case 602:
case 504:
case 801:
case 680:
case 1967:
case 877:
case 3245:
case 576:
case 2291:
case 2754:
case 3375:
case 889:
case 768:
case 3006:
case 78:
case 1328:
case 3960:
case 3139:
case 2230:
case 3635:
case 440:
case 2226:
case 1021:
case 927:
case 3856:
case 3771:
case 605:
case 4087:
case 2640:
case 3069:
case 2845:
case 934:
case 3622:
case 1380:
case 2163:
case 2868:
case 1612:
case 2724:
case 917:
case 3474:
case 751:
case 2839:
case 2313:
case 760:
case 3933:
case 1712:
case 2594:
case 3649:
case 3722:
case 3145:
case 2911:
case 4031:
case 3576:
case 2191:
case 421:
case 2654:
case 3863:
case 867:
case 3390:
case 3752:
case 1582:
case 3168:
case 4090:
case 4007:
case 3239:
case 1974:
case 2156:
case 1300:
case 3331:
case 3460:
case 2486:
case 3021:
case 4080:
case 1830:
case 1011:
case 1749:
case 787:
case 2714:
case 1592:
case 3837:
case 1069:
case 805:
case 2438:
case 238:
case 1245:
case 1652:
case 412:
case 802:
case 3328:
case 1960:
case 2201:
case 1139:
case 3816:
case 1318:
case 2309:
case 689:
case 3051:
case 1375:
case 1390:
case 1752:
case 106:
case 1307:
case 2921:
case 3881:
case 1576:
case 4000:
case 2137:
case 3397:
case 2353:
case 3974:
case 2101:
case 1239:
case 86:
case 2067:
case 2565:
case 1671:
case 230:
case 2323:
case 1735:
case 1038:
case 2747:
case 1474:
case 752:
case 633:
case 2281:
case 3712:
case 2951:
case 3072:
case 1933:
case 1636:
case 19:
case 2215:
case 2485:
case 653:
case 1650:
case 261:
case 2970:
case 2348:
case 1962:
case 250:
case 1688:
case 986:
case 735:
case 2761:
case 4082:
case 993:
case 397:
case 3095:
case 3597:
case 3798:
case 1246:
case 3462:
case 3500:
case 2041:
case 34:
case 2477:
case 1376:
case 3878:
case 3173:
case 3610:
case 1507:
case 1064:
case 1620:
case 3382:
case 3343:
case 1575:
case 2509:
case 1717:
case 591:
case 1479:
case 519:
case 2464:
case 3727:
case 2405:
case 3698:
case 3070:
case 1441:
case 1608:
case 2384:
case 4043:
case 258:
case 207:
case 1736:
case 4002:
case 1392:
case 1750:
case 271:
case 2995:
case 2115:
case 3941:
case 542:
case 3302:
case 3979:
case 3757:
case 2793:
case 3795:
case 391:
case 1903:
case 2061:
case 4026:
case 1189:
case 1266:
case 630:
case 2899:
case 1705:
case 1008:
case 3113:
case 2779:
case 3993:
case 2957:
case 2417:
case 3326:
case 3875:
case 233:
case 2275:
case 1493:
case 2131:
case 1209:
case 2927:
case 1301:
case 267:
case 2368:
case 141:
case 3391:
case 1337:
case 2345:
case 1942:
case 201:
case 1983:
case 493:
case 2339:
case 2998:
case 2175:
case 638:
case 1109:
case 2231:
case 1785:
case 3057:
case 3555:
case 646:
case 1929:
case 3199:
case 3919:
case 3459:
case 3807:
case 1017:
case 1289:
case 3363:
case 1166:
case 3027:
case 3695:
case 1419:
case 1959:
case 2444:
case 1578:
case 1777:
case 1381:
case 3429:
case 1897:
case 2187:
case 1664:
case 1800:
case 1605:
case 4063:
case 54:
case 3770:
case 1223:
case 3532:
case 486:
case 3947:
case 1265:
case 1204:
case 3332:
case 872:
case 4025:
case 166:
case 3796:
case 1581:
case 1378:
case 3751:
case 925:
case 3325:
case 998:
case 3563:
case 1706:
case 2452:
case 709:
case 3721:
case 1638:
case 1711:
case 3355:
case 2667:
case 2894:
case 781:
case 2346:
case 2774:
case 3672:
case 1686:
case 42:
case 2047:
case 1537:
case 1611:
case 3591:
case 2176:
case 1414:
case 1954:
case 2449:
case 3424:
case 912:
case 3892:
case 865:
case 2471:
case 862:
case 104:
case 2334:
case 1843:
case 1148:
case 3696:
case 1104:
case 176:
case 2292:
case 949:
case 1924:
case 915:
case 3454:
case 2529:
case 1877:
case 3544:
case 3707:
case 3508:
case 3352:
case 3870:
case 2432:
case 3675:
case 738:
case 476:
case 923:
case 1628:
case 1598:
case 1797:
case 3618:
case 1700:
case 814:
case 2073:
case 3446:
case 3335:
case 1658:
case 2270:
case 3179:
case 2978:
case 2915:
case 4035:
case 2455:
case 1312:
case 1680:
case 540:
case 2195:
case 2170:
case 4049:
case 2613:
case 3787:
case 1055:
case 1758:
case 3241:
case 730:
case 2295:
case 1473:
case 3536:
case 3349:
case 1780:
case 3550:
case 863:
case 2503:
case 269:
case 2799:
case 3895:
case 3520:
case 3690:
case 837:
case 2354:
case 2841:
case 3434:
case 913:
case 466:
case 1805:
case 3631:
case 3517:
case 1600:
case 3718:
case 1728:
case 1527:
case 1063:
case 2426:
case 2272:
case 947:
case 1260:
case 1743:
case 343:
case 2554:
case 3320:
case 1682:
case 556:
case 2342:
case 4017:
case 2121:
case 3468:
case 232:
case 2524:
case 3350:
case 3792:
case 2867:
case 750:
case 418:
case 2151:
case 4088:
case 3388:
case 3571:
case 2456:
case 1702:
case 65:
case 4036:
case 193:
case 3692:
case 428:
case 2251:
case 2794:
case 2981:
case 1030:
case 441:
case 3001:
case 3439:
case 1602:
case 707:
case 2874:
case 3037:
case 771:
case 885:
case 1091:
case 1398:
case 3896:
case 1643:
case 800:
case 681:
case 3552:
case 1026:
case 1782:
case 2221:
case 3308:
case 1806:
case 354:
case 3344:
case 609:
case 2329:
case 2847:
case 3601:
case 1835:
case 1630:
case 3448:
case 4085:
case 3465:
case 910:
case 1691:
case 1521:
case 2976:
case 3637:
case 3385:
case 1494:
case 1154:
case 184:
case 1551:
case 3781:
case 3377:
case 928:
case 2533:
case 3114:
case 1763:
case 1240:
case 995:
case 851:
case 652:
case 3616:
case 3247:
case 1596:
case 1904:
case 4005:
case 1140:
case 543:
case 2112:
case 918:
case 687:
case 1663:
case 3147:
case 1082:
case 1726:
case 3305:
case 3716:
case 356:
case 1730:
case 447:
case 3586:
case 1756:
case 2094:
case 3737:
case 701:
case 1254:
case 281:
case 1850:
case 198:
case 2773:
case 125:
case 2210:
case 3999:
case 1836:
case 2918:
case 3386:
case 2893:
case 2360:
case 2198:
case 1372:
case 3161:
case 1909:
case 3007:
case 3090:
case 3827:
case 3293:
case 1595:
case 1097:
case 1625:
case 1966:
case 474:
case 1000:
case 3615:
case 321:
case 3193:
case 3898:
case 3453:
case 1570:
case 2861:
case 534:
case 753:
case 112:
case 1103:
case 3306:
case 3715:
case 527:
case 1725:
case 1028:
case 2333:
case 3577:
case 3075:
case 3778:
case 1351:
case 115:
case 4069:
case 149:
case 3585:
case 3087:
case 1142:
case 2673:
case 1321:
case 1953:
case 2127:
case 1413:
case 340:
case 3423:
case 3261:
case 2298:
case 2734:
case 1293:
case 2288:
case 2475:
case 1564:
case 136:
case 2250:
case 2842:
case 3159:
case 3499:
case 322:
case 2541:
case 1031:
case 1615:
case 3000:
case 2236:
case 148:
case 3820:
case 3966:
case 3625:
case 2053:
case 3595:
case 1999:
case 1338:
case 3129:
case 325:
case 1119:
case 398:
case 3242:
case 3850:
case 3655:
case 2217:
case 3372:
case 2089:
case 51:
case 2646:
case 1386:
case 3888:
case 794:
case 603:
case 2208:
case 3321:
case 3142:
case 1311:
case 2120:
case 1585:
case 1087:
case 3058:
case 349:
case 2244:
case 3283:
case 2746:
case 257:
case 2117:
case 140:
case 1423:
case 3080:
case 3413:
case 52:
case 3953:
case 2066:
case 3732:
case 631:
case 2634:
case 3570:
case 832:
case 208:
case 1453:
case 2431:
case 1898:
case 3396:
case 1193:
case 2188:
case 3351:
case 3844:
case 1778:
case 1577:
case 2009:
case 2136:
case 3989:
case 3259:
case 3028:
case 3808:
case 2490:
case 1018:
case 1306:
case 3103:
case 1994:
case 3240:
case 3043:
case 660:
case 1377:
case 1781:
case 3551:
case 384:
case 3965:
case 3626:
case 3596:
case 2235:
case 1247:
case 1616:
case 2084:
case 852:
case 2739:
case 3656:
case 3630:
case 1601:
case 1569:
case 2574:
case 3154:
case 3002:
case 224:
case 919:
case 3494:
case 3822:
case 1385:
case 2668:
case 2982:
case 1637:
case 2840:
case 3521:
case 68:
case 3871:
case 3756:
case 3730:
case 1701:
case 2943:
case 668:
case 2004:
case 2492:
case 3254:
case 3791:
case 702:
case 929:
case 1538:
case 2745:
case 1737:
case 3663:
case 586:
case 1484:
case 2854:
case 1681:
case 3224:
case 2249:
case 3140:
case 1214:
case 497:
case 77:
case 3726:
case 3082:
case 2135:
case 273:
case 4095:
case 2437:
case 1445:
case 608:
case 3838:
case 1549:
case 2039:
case 231:
case 2106:
case 2648:
case 226:
case 759:
case 393:
case 1872:
case 2401:
case 85:
case 2604:
case 1388:
case 3357:
case 3886:
case 2393:
case 2926:
case 3743:
case 143:
case 3260:
case 2930:
case 765:
case 3327:
case 3063:
case 4027:
case 1676:
case 2111:
case 3945:
case 657:
case 3968:
case 429:
case 2361:
case 881:
case 3643:
case 2186:
case 3398:
case 2269:
case 2138:
case 1776:
case 154:
case 2684:
case 1167:
case 1552:
case 1001:
case 3811:
case 3030:
case 2206:
case 3512:
case 3233:
case 2963:
case 3056:
case 1692:
case 1535:
case 3869:
case 1037:
case 2068:
case 3602:
case 2164:
case 1179:
case 549:
case 3658:
case 2723:
case 270:
case 515:
case 1335:
case 2932:
case 1446:
case 2666:
case 2925:
case 1141:
case 32:
case 2789:
case 1790:
case 2415:
case 1352:
case 783:
case 134:
case 3877:
case 28:
case 3700:
case 1618:
case 3797:
case 127:
case 512:
case 3946:
case 1870:
case 1690:
case 1520:
case 637:
case 3527:
case 1718:
case 3600:
case 1631:
case 1078:
case 117:
case 1434:
case 598:
case 3758:
case 3055:
case 3162:
case 2205:
case 2264:
case 1279:
case 739:
case 3934:
case 663:
case 3780:
case 2766:
case 1536:
case 2177:
case 31:
case 430:
case 2909:
case 2372:
case 4067:
case 3928:
case 1893:
case 3487:
case 109:
case 854:
case 1458:
case 1918:
case 3220:
case 2129:
case 3144:
case 1773:
case 382:
case 1013:
case 560:
case 181:
case 2242:
case 2850:
case 300:
case 2655:
case 3367:
case 2000:
case 2820:
case 3236:
case 2625:
case 2595:
case 3734:
case 1257:
case 2632:
case 1987:
case 3958:
case 1428:
case 3579:
case 2351:
case 3009:
case 15:
case 3136:
case 1333:
case 2989:
case 2259:
case 2725:
case 2028:
case 3407:
case 2732:
case 58:
case 446:
case 1497:
case 1400:
case 1157:
case 1562:
case 3374:
case 357:
case 3746:
case 3117:
case 1931:
case 2413:
case 1127:
case 3066:
case 2953:
case 2321:
case 1673:
case 2142:
case 3120:
case 4074:
case 324:
case 516:
case 3668:
case 1976:
case 2691:
case 2521:
case 471:
case 795:
case 741:
case 3574:
case 3171:
case 2904:
case 2596:
case 3235:
case 792:
case 503:
case 2124:
case 1482:
case 2852:
case 3476:
case 2043:
case 1533:
case 710:
case 3222:
case 13:
case 901:
case 2726:
case 4041:
case 3271:
case 3135:
case 1992:
case 3122:
case 2395:
case 3341:
case 2224:
case 4079:
case 3249:
case 2140:
case 3065:
case 1814:
case 3492:
case 461:
case 314:
case 526:
case 531:
case 1094:
case 3639:
case 2572:
case 450:
case 1121:
case 2945:
case 573:
case 3238:
case 2968:
case 1554:
case 2310:
case 3784:
case 135:
case 961:
case 649:
case 1901:
case 2260:
case 3169:
case 950:
case 3416:
case 2327:
case 293:
case 3401:
case 401:
case 1430:
case 79:
case 1916:
case 1456:
case 2702:
case 3393:
case 2886:
case 1196:
case 3860:
case 3926:
case 3437:
case 1151:
case 2133:
case 690:
case 489:
case 1867:
case 331:
case 1694:
case 1524:
case 132:
case 3106:
case 2091:
case 1296:
case 3045:
case 3748:
case 1874:
case 3765:
case 821:
case 524:
case 316:
case 467:
case 2602:
case 622:
case 836:
case 3206:
case 537:
case 1794:
case 1251:
case 3963:
case 3833:
case 563:
case 1329:
case 3319:
case 907:
case 303:
case 3684:
case 2782:
case 4061:
case 698:
case 1172:
case 433:
case 1383:
case 2160:
case 3269:
case 2598:
case 2797:
case 1432:
case 3415:
case 508:
case 3034:
case 2877:
case 38:
case 1529:
case 3478:
case 3285:
case 3666:
case 1195:
case 2885:
case 179:
case 3277:
case 1915:
case 723:
case 3789:
case 1340:
case 3164:
case 946:
case 1270:
case 370:
case 187:
case 3932:
case 2262:
case 1073:
case 152:
case 713:
case 351:
case 3046:
case 2473:
case 3689:
case 2055:
case 3623:
case 2758:
case 582:
case 2162:
case 1613:
case 9:
case 3264:
case 2934:
case 2527:
case 2697:
case 3653:
case 585:
case 2600:
case 706:
case 3185:
case 1542:
case 1799:
case 1789:
case 3978:
case 3915:
case 1277:
case 2322:
case 3195:
case 3073:
case 1932:
case 2335:
case 170:
case 4040:
case 3270:
case 2179:
case 1105:
case 1609:
case 1862:
case 1753:
case 1478:
case 3529:
case 3699:
case 168:
case 3425:
case 2790:
case 2352:
case 217:
case 2718:
case 3542:
case 1185:
case 939:
case 3354:
case 178:
case 2241:
case 1689:
case 3295:
case 1046:
case 1766:
case 509:
case 2550:
case 151:
case 3503:
case 4024:
case 3170:
case 1205:
case 884:
case 2588:
case 2787:
case 2371:
case 160:
case 1593:
case 3196:
case 1604:
case 2388:
case 3916:
case 480:
case 3430:
case 699:
case 2872:
case 812:
case 126:
case 611:
case 402:
case 2468:
case 1106:
case 332:
case 3303:
case 3694:
case 3524:
case 131:
case 2350:
case 965:
case 3867:
case 2336:
case 3491:
case 890:
case 3151:
case 1437:
case 335:
case 1784:
case 3554:
case 797:
case 1238:
case 47:
case 3342:
case 3937:
case 3121:
case 1956:
case 2317:
case 2081:
case 1930:
case 1286:
case 46:
case 1684:
case 3463:
case 103:
case 2851:
case 4083:
case 254:
case 2344:
case 1138:
case 3329:
case 1481:
case 825:
case 1186:
case 53:
case 822:
case 621:
case 3874:
case 90:
case 1748:
case 1045:
case 2522:
case 3251:
case 636:
case 3981:
case 745:
case 719:
case 163:
case 81:
case 1084:
case 40:
case 1171:
case 3362:
case 3212:
case 2781:
case 4062:
case 33:
case 475:
case 1476:
case 2114:
case 3482:
case 2506:
case 2994:
case 3976:
case 2511:
case 1252:
case 1840:
case 1645:
case 96:
case 1982:
case 1668:
case 2385:
case 2812:
case 124:
case 2601:
case 1574:
case 137:
case 2465:
case 2404:
case 1739:
case 97:
case 1048:
case 627:
case 114:
case 1567:
case 2701:
case 905:
case 2586:
case 173:
case 82:
case 2147:
case 535:
case 2716:
case 2305:
case 729:
case 1379:
case 1249:
case 2681:
case 1341:
case 1980:
case 248:
case 1541:
case 2031:
case 1842:
case 1250:
case 236:
case 2564:
case 2007:
case 1418:
case 3257:
case 2409:
case 1734:
case 3918:
case 3458:
case 1487:
case 569:
case 552:
case 2857:
case 2386:
case 3360:
case 3198:
case 3227:
case 1089:
case 3975:
case 2161:
case 1217:
case 1367:
case 100:
case 1023:
case 381:
case 3013:
case 1803:
case 2466:
case 1108:
case 4060:
case 439:
case 3127:
case 579:
case 1900:
case 3931:
case 1746:
case 496:
case 1374:
case 2585:
case 2087:
case 3990:
case 2311:
case 1859:
case 3673:
case 893:
case 1490:
case 2018:
case 1407:
case 3333:
case 2778:
case 2075:
case 3562:
case 2193:
case 483:
case 3400:
case 1431:
case 2453:
case 3497:
case 2913:
case 3861:
case 3099:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757793601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,];
var gg_b = "1757793601/";

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
