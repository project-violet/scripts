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
case 3248:
case 2852:
case 2518:
case 1755:
case 2343:
case 758:
case 159:
case 1090:
case 2711:
case 1376:
case 3397:
case 1438:
case 1096:
case 3119:
case 1370:
case 119:
case 3645:
case 3784:
case 666:
case 1557:
case 2753:
case 1697:
case 2118:
case 3002:
case 3670:
case 3520:
case 1940:
case 1006:
case 1122:
case 2369:
case 3411:
case 1201:
case 1265:
case 287:
case 984:
case 2973:
case 3372:
case 1672:
case 1522:
case 947:
case 1946:
case 3453:
case 244:
case 956:
case 2200:
case 2941:
case 4078:
case 3130:
case 2454:
case 303:
case 3530:
case 1063:
case 2206:
case 3264:
case 1428:
case 916:
case 642:
case 1587:
case 851:
case 2296:
case 62:
case 2290:
case 1049:
case 769:
case 168:
case 1729:
case 1716:
case 2882:
case 2239:
case 87:
case 2894:
case 3491:
case 266:
case 3012:
case 496:
case 2765:
case 3109:
case 3932:
case 10:
case 3238:
case 1862:
case 1878:
case 2701:
case 373:
case 1763:
case 2567:
case 3599:
case 644:
case 2658:
case 3860:
case 687:
case 3465:
case 2598:
case 2198:
case 1617:
case 1936:
case 2804:
case 1211:
case 1624:
case 1574:
case 983:
case 3317:
case 1085:
case 3199:
case 868:
case 865:
case 3803:
case 3228:
case 2285:
case 3140:
case 1464:
case 2323:
case 3922:
case 390:
case 3175:
case 3777:
case 2492:
case 2011:
case 3084:
case 1389:
case 3575:
case 3625:
case 3689:
case 372:
case 819:
case 1325:
case 1283:
case 1920:
case 3957:
case 810:
case 3792:
case 598:
case 1634:
case 982:
case 2402:
case 2029:
case 958:
case 143:
case 4037:
case 2936:
case 2211:
case 2359:
case 3284:
case 1598:
case 2930:
case 4082:
case 251:
case 1083:
case 324:
case 3879:
case 3449:
case 659:
case 665:
case 1701:
case 784:
case 1765:
case 1333:
case 619:
case 2862:
case 1894:
case 747:
case 1108:
case 3212:
case 2039:
case 2700:
case 2926:
case 4027:
case 3496:
case 12:
case 439:
case 4014:
case 844:
case 2634:
case 3895:
case 668:
case 3490:
case 1477:
case 1847:
case 716:
case 2142:
case 3400:
case 2325:
case 3388:
case 2283:
case 1210:
case 3254:
case 1688:
case 3173:
case 3623:
case 2790:
case 1011:
case 955:
case 2055:
case 2464:
case 1216:
case 1285:
case 1323:
case 1931:
case 3406:
case 2000:
case 3531:
case 2522:
case 250:
case 82:
case 3856:
case 2265:
case 1973:
case 842:
case 2607:
case 323:
case 2940:
case 3455:
case 2122:
case 210:
case 2345:
case 2557:
case 1118:
case 2697:
case 60:
case 265:
case 259:
case 2376:
case 1711:
case 1852:
case 1518:
case 843:
case 2644:
case 3728:
case 1371:
case 498:
case 2716:
case 1882:
case 3277:
case 2049:
case 268:
case 2729:
case 3671:
case 2132:
case 1837:
case 34:
case 3202:
case 961:
case 1412:
case 2710:
case 1206:
case 3485:
case 2999:
case 431:
case 1001:
case 2063:
case 3998:
case 3292:
case 1941:
case 782:
case 1065:
case 1454:
case 1200:
case 456:
case 368:
case 3532:
case 555:
case 3049:
case 3644:
case 138:
case 3587:
case 2908:
case 3710:
case 98:
case 222:
case 2202:
case 3132:
case 1136:
case 3063:
case 2429:
case 2416:
case 873:
case 2880:
case 1813:
case 2886:
case 2815:
case 560:
case 2410:
case 730:
case 1536:
case 1372:
case 1881:
case 3265:
case 1453:
case 350:
case 3672:
case 899:
case 3522:
case 310:
case 3122:
case 2850:
case 1307:
case 223:
case 3201:
case 1368:
case 4093:
case 636:
case 804:
case 1645:
case 1784:
case 518:
case 3438:
case 1397:
case 3096:
case 872:
case 3370:
case 102:
case 1002:
case 1520:
case 3345:
case 3557:
case 3291:
case 1942:
case 3157:
case 3755:
case 1676:
case 1526:
case 1077:
case 1519:
case 359:
case 3376:
case 558:
case 365:
case 2643:
case 3634:
case 64:
case 798:
case 3700:
case 3926:
case 622:
case 3542:
case 1334:
case 2212:
case 4081:
case 2490:
case 2895:
case 1575:
case 1625:
case 3796:
case 874:
case 2254:
case 1084:
case 1540:
case 1702:
case 3325:
case 2388:
case 3055:
case 1803:
case 1546:
case 1228:
case 3464:
case 1140:
case 835:
case 2573:
case 2623:
case 3790:
case 2541:
case 1324:
case 1866:
case 3211:
case 2463:
case 3617:
case 838:
case 1317:
case 996:
case 311:
case 1199:
case 3174:
case 351:
case 3253:
case 3010:
case 1054:
case 3930:
case 2284:
case 3359:
case 1860:
case 2141:
case 173:
case 1509:
case 2449:
case 4051:
case 2879:
case 1635:
case 2633:
case 4013:
case 30:
case 795:
case 1109:
case 1932:
case 3229:
case 1623:
case 3492:
case 2777:
case 460:
case 3011:
case 939:
case 3323:
case 3931:
case 2922:
case 691:
case 2540:
case 1805:
case 2146:
case 3210:
case 204:
case 907:
case 78:
case 1400:
case 3477:
case 2792:
case 516:
case 415:
case 823:
case 3847:
case 455:
case 1212:
case 2334:
case 2893:
case 1496:
case 1038:
case 584:
case 2238:
case 3333:
case 3894:
case 1633:
case 2491:
case 458:
case 3239:
case 547:
case 1879:
case 2987:
case 635:
case 2635:
case 3701:
case 3567:
case 2509:
case 1449:
case 3598:
case 2465:
case 2860:
case 822:
case 3791:
case 2317:
case 1028:
case 1748:
case 2866:
case 2324:
case 3198:
case 3804:
case 998:
case 2536:
case 3454:
case 1815:
case 3200:
case 1886:
case 836:
case 604:
case 2712:
case 291:
case 1292:
case 3001:
case 2136:
case 203:
case 1429:
case 1998:
case 14:
case 3837:
case 699:
case 1121:
case 931:
case 2754:
case 1967:
case 3783:
case 3412:
case 3091:
case 1202:
case 122:
case 3882:
case 1728:
case 3371:
case 1671:
case 3290:
case 2077:
case 3249:
case 673:
case 2942:
case 235:
case 2120:
case 2248:
case 583:
case 3852:
case 4005:
case 3518:
case 796:
case 2676:
case 202:
case 1439:
case 2520:
case 2670:
case 727:
case 3753:
case 274:
case 2645:
case 2784:
case 123:
case 3263:
case 1850:
case 2307:
case 1064:
case 3827:
case 344:
case 2453:
case 1856:
case 3973:
case 1883:
case 799:
case 2486:
case 2415:
case 2533:
case 1944:
case 1451:
case 1004:
case 2133:
case 3309:
case 1535:
case 2480:
case 2308:
case 1413:
case 1609:
case 3399:
case 3117:
case 3715:
case 3293:
case 704:
case 361:
case 2398:
case 790:
case 3524:
case 2247:
case 3780:
case 3750:
case 3346:
case 1047:
case 444:
case 1727:
case 1189:
case 1972:
case 1646:
case 1714:
case 1640:
case 1262:
case 3838:
case 551:
case 1968:
case 1589:
case 177:
case 3375:
case 807:
case 1907:
case 3340:
case 3061:
case 773:
case 1752:
case 2450:
case 3266:
case 696:
case 830:
case 1481:
case 3976:
case 3642:
case 1342:
case 2456:
case 3534:
case 195:
case 3005:
case 50:
case 1853:
case 1027:
case 369:
case 442:
case 2318:
case 3864:
case 2461:
case 568:
case 1145:
case 355:
case 1934:
case 2806:
case 1747:
case 1014:
case 738:
case 1170:
case 139:
case 1626:
case 42:
case 1576:
case 107:
case 1545:
case 315:
case 2800:
case 3320:
case 2405:
case 4053:
case 2282:
case 703:
case 3507:
case 2988:
case 2569:
case 2495:
case 3172:
case 3568:
case 2890:
case 2237:
case 68:
case 2896:
case 895:
case 4011:
case 1493:
case 3622:
case 3572:
case 3705:
case 1322:
case 1917:
case 1636:
case 1891:
case 443:
case 3336:
case 3462:
case 2849:
case 3330:
case 510:
case 3959:
case 2958:
case 1630:
case 1082:
case 1794:
case 2171:
case 3015:
case 318:
case 702:
case 3687:
case 831:
case 1460:
case 3281:
case 735:
case 1801:
case 3544:
case 2214:
case 2778:
case 1332:
case 466:
case 358:
case 565:
case 3632:
case 2571:
case 3080:
case 559:
case 2227:
case 3923:
case 1169:
case 2322:
case 230:
case 382:
case 3802:
case 1495:
case 3877:
case 2052:
case 3447:
case 1569:
case 1988:
case 1143:
case 3286:
case 74:
case 1800:
case 2357:
case 1405:
case 972:
case 207:
case 722:
case 904:
case 3892:
case 2014:
case 2170:
case 990:
case 2619:
case 1318:
case 2747:
case 3013:
case 1571:
case 3404:
case 3321:
case 2332:
case 1214:
case 2460:
case 3051:
case 127:
case 2865:
case 2794:
case 1171:
case 88:
case 2387:
case 4010:
case 2082:
case 2630:
case 1849:
case 3766:
case 3760:
case 544:
case 2037:
case 4016:
case 411:
case 4085:
case 3494:
case 3713:
case 3341:
case 2159:
case 3751:
case 18:
case 1398:
case 3698:
case 630:
case 3558:
case 1308:
case 1480:
case 2609:
case 2782:
case 1885:
case 1829:
case 316:
case 3066:
case 1367:
case 1133:
case 2737:
case 2944:
case 2135:
case 607:
case 2451:
case 52:
case 3205:
case 3943:
case 2853:
case 465:
case 566:
case 2811:
case 419:
case 1204:
case 2997:
case 3003:
case 2675:
case 1123:
case 2262:
case 2640:
case 2589:
case 2968:
case 724:
case 2972:
case 2189:
case 935:
case 2278:
case 3279:
case 1673:
case 1642:
case 1260:
case 2884:
case 247:
case 284:
case 70:
case 3342:
case 2943:
case 987:
case 3752:
case 573:
case 1945:
case 1061:
case 683:
case 3811:
case 2414:
case 2093:
case 1375:
case 3262:
case 1838:
case 815:
case 423:
case 1756:
case 4064:
case 3525:
case 3125:
case 2188:
case 3727:
case 1346:
case 855:
case 3714:
case 2373:
case 3972:
case 3159:
case 2341:
case 1524:
case 1780:
case 331:
case 682:
case 1786:
case 3699:
case 2437:
case 1124:
case 3559:
case 2066:
case 2608:
case 3004:
case 1828:
case 1203:
case 422:
case 3413:
case 398:
case 2205:
case 599:
case 3451:
case 2854:
case 3944:
case 3135:
case 3737:
case 1544:
case 2321:
case 3466:
case 535:
case 283:
case 765:
case 158:
case 1779:
case 759:
case 2250:
case 1632:
case 1080:
case 861:
case 684:
case 502:
case 2051:
case 3865:
case 1687:
case 574:
case 1144:
case 3460:
case 1935:
case 1959:
case 2766:
case 3630:
case 1848:
case 2494:
case 4028:
case 3917:
case 2760:
case 750:
case 1462:
case 1336:
case 1622:
case 3493:
case 1168:
case 160:
case 1572:
case 77:
case 2802:
case 92:
case 2923:
case 3322:
case 1761:
case 591:
case 2877:
case 1568:
case 307:
case 1320:
case 3545:
case 115:
case 2215:
case 1213:
case 1050:
case 3934:
case 155:
case 3747:
case 2280:
case 169:
case 3619:
case 768:
case 4038:
case 1795:
case 2618:
case 3014:
case 1760:
case 2336:
case 744:
case 856:
case 523:
case 3252:
case 816:
case 3479:
case 2478:
case 1766:
case 4054:
case 2281:
case 3762:
case 951:
case 2935:
case 1256:
case 3171:
case 2086:
case 2015:
case 218:
case 3227:
case 258:
case 3571:
case 2544:
case 1933:
case 1321:
case 911:
case 3863:
case 183:
case 1404:
case 2319:
case 499:
case 1892:
case 2213:
case 1280:
case 3543:
case 255:
case 269:
case 2864:
case 3461:
case 2326:
case 3405:
case 2056:
case 1286:
case 3800:
case 2597:
case 2251:
case 3890:
case 2989:
case 2172:
case 2761:
case 2925:
case 3569:
case 472:
case 2507:
case 404:
case 182:
case 847:
case 2705:
case 1923:
case 1331:
case 884:
case 3631:
case 2622:
case 1373:
case 2095:
case 3673:
case 2346:
case 965:
case 2756:
case 3839:
case 1969:
case 3294:
case 2838:
case 2134:
case 658:
case 3450:
case 1427:
case 4002:
case 1003:
case 2005:
case 618:
case 435:
case 2534:
case 1943:
case 536:
case 4077:
case 950:
case 1854:
case 1060:
case 742:
case 3415:
case 72:
case 1971:
case 97:
case 2828:
case 3816:
case 669:
case 1667:
case 116:
case 1066:
case 3367:
case 3133:
case 3829:
case 261:
case 1437:
case 3398:
case 403:
case 2124:
case 1751:
case 1812:
case 1558:
case 2399:
case 491:
case 1698:
case 968:
case 2079:
case 2780:
case 3641:
case 2524:
case 1295:
case 2674:
case 1232:
case 975:
case 2650:
case 1938:
case 725:
case 209:
case 3773:
case 1018:
case 3807:
case 2869:
case 3442:
case 2057:
case 1287:
case 3381:
case 2190:
case 821:
case 4089:
case 3230:
case 2984:
case 464:
case 1446:
case 2352:
case 2100:
case 2506:
case 997:
case 4025:
case 776:
case 3164:
case 1440:
case 2742:
case 3897:
case 1870:
case 3911:
case 96:
case 2337:
case 341:
case 120:
case 388:
case 2871:
case 3983:
case 1708:
case 1767:
case 679:
case 2441:
case 3844:
case 4059:
case 2615:
case 2686:
case 4035:
case 3351:
case 3220:
case 3148:
case 1651:
case 2912:
case 1191:
case 3313:
case 3226:
case 692:
case 2774:
case 43:
case 3219:
case 728:
case 3741:
case 3021:
case 2032:
case 1409:
case 25:
case 1242:
case 1660:
case 1666:
case 609:
case 1067:
case 3366:
case 545:
case 2421:
case 2833:
case 293:
case 1362:
case 3901:
case 3662:
case 3240:
case 3128:
case 1583:
case 2185:
case 600:
case 2074:
case 3678:
case 1183:
case 694:
case 1378:
case 2732:
case 2679:
case 2529:
case 908:
case 3041:
case 3073:
case 2347:
case 2555:
case 1718:
case 2695:
case 340:
case 1693:
case 3834:
case 2155:
case 1553:
case 3299:
case 2298:
case 3393:
case 2267:
case 3209:
case 1419:
case 462:
case 2661:
case 3138:
case 2139:
case 292:
case 2902:
case 2823:
case 4045:
case 1825:
case 2042:
case 706:
case 2722:
case 1420:
case 4076:
case 417:
case 1889:
case 1732:
case 2378:
case 925:
case 3154:
case 2430:
case 775:
case 1074:
case 3379:
case 1110:
case 1510:
case 2583:
case 1185:
case 1116:
case 1787:
case 3963:
case 2098:
case 2436:
case 2362:
case 3554:
case 3009:
case 2067:
case 1421:
case 797:
case 2666:
case 2948:
case 3512:
case 4071:
case 3736:
case 3949:
case 15:
case 2889:
case 4043:
case 1042:
case 2825:
case 3888:
case 170:
case 2420:
case 53:
case 1902:
case 3361:
case 2426:
case 3418:
case 1823:
case 1208:
case 1267:
case 894:
case 3996:
case 3584:
case 489:
case 1992:
case 837:
case 1431:
case 2693:
case 4069:
case 221:
case 3040:
case 2964:
case 2153:
case 3046:
case 3726:
case 1695:
case 809:
case 3900:
case 3395:
case 2511:
case 3719:
case 3241:
case 3647:
case 928:
case 3184:
case 3192:
case 100:
case 4023:
case 1106:
case 1022:
case 1742:
case 1352:
case 1100:
case 1506:
case 3592:
case 1473:
case 1984:
case 2876:
case 563:
case 3775:
case 1190:
case 1656:
case 3740:
case 3356:
case 3020:
case 312:
case 3939:
case 3614:
case 3746:
case 1869:
case 3350:
case 2232:
case 1590:
case 2938:
case 708:
case 3577:
case 1196:
case 705:
case 39:
case 1680:
case 4033:
case 3467:
case 2409:
case 1912:
case 3408:
case 3386:
case 1087:
case 171:
case 3682:
case 1563:
case 3030:
case 353:
case 1382:
case 3916:
case 2928:
case 621:
case 906:
case 3637:
case 2101:
case 3036:
case 3498:
case 46:
case 2408:
case 3191:
case 3613:
case 29:
case 780:
case 1351:
case 3257:
case 1983:
case 188:
case 1474:
case 3165:
case 3767:
case 2682:
case 253:
case 2929:
case 4024:
case 2231:
case 320:
case 93:
case 141:
case 478:
case 3499:
case 654:
case 1164:
case 3845:
case 1031:
case 686:
case 3475:
case 2192:
case 1897:
case 3870:
case 3876:
case 185:
case 1953:
case 3446:
case 1564:
case 2020:
case 3681:
case 267:
case 2502:
case 252:
case 2356:
case 1872:
case 497:
case 2177:
case 3938:
case 2627:
case 2577:
case 525:
case 3232:
case 1868:
case 1807:
case 2746:
case 2102:
case 3018:
case 212:
case 2305:
case 405:
case 2990:
case 748:
case 3603:
case 1138:
case 2418:
case 3426:
case 2040:
case 140:
case 957:
case 1834:
case 3693:
case 4068:
case 653:
case 2647:
case 2395:
case 2719:
case 4072:
case 2726:
case 2900:
case 1678:
case 3183:
case 1528:
case 1041:
case 3835:
case 1721:
case 3098:
case 433:
case 2963:
case 3362:
case 1240:
case 2099:
case 1662:
case 946:
case 2604:
case 1991:
case 2112:
case 3666:
case 3008:
case 3067:
case 963:
case 1824:
case 1432:
case 888:
case 4044:
case 841:
case 2512:
case 408:
case 3660:
case 3242:
case 3695:
case 688:
case 3347:
case 1046:
case 1647:
case 1184:
case 2073:
case 379:
case 852:
case 3992:
case 867:
case 1584:
case 154:
case 3757:
case 2299:
case 1040:
case 1720:
case 1906:
case 2834:
case 3139:
case 2303:
case 1361:
case 3902:
case 1996:
case 3267:
case 56:
case 3977:
case 370:
case 3539:
case 1305:
case 428:
case 73:
case 1888:
case 2457:
case 1512:
case 35:
case 1009:
case 2432:
case 3304:
case 597:
case 853:
case 3185:
case 2662:
case 3787:
case 3116:
case 2240:
case 1963:
case 534:
case 2901:
case 393:
case 1554:
case 2275:
case 3833:
case 186:
case 3732:
case 575:
case 1154:
case 476:
case 3529:
case 2965:
case 3679:
case 3585:
case 2528:
case 3110:
case 685:
case 1916:
case 1637:
case 1498:
case 1929:
case 981:
case 3441:
case 948:
case 1030:
case 1709:
case 3954:
case 2983:
case 4058:
case 3871:
case 1386:
case 1799:
case 371:
case 886:
case 2220:
case 3149:
case 2351:
case 3686:
case 2021:
case 1467:
case 406:
case 3549:
case 2219:
case 2741:
case 649:
case 3218:
case 717:
case 1408:
case 1380:
case 1746:
case 1026:
case 3327:
case 1577:
case 3196:
case 1019:
case 309:
case 1627:
case 2868:
case 1221:
case 3650:
case 508:
case 3656:
case 1775:
case 1020:
case 746:
case 167:
case 1502:
case 3057:
case 1740:
case 4088:
case 394:
case 2953:
case 2564:
case 3984:
case 1652:
case 945:
case 1192:
case 2164:
case 3742:
case 300:
case 3500:
case 306:
case 3166:
case 4032:
case 3560:
case 662:
case 181:
case 913:
case 1913:
case 2915:
case 2986:
case 1874:
case 953:
case 2504:
case 2035:
case 3160:
case 2059:
case 740:
case 521:
case 1562:
case 1178:
case 2310:
case 2594:
case 1225:
case 2223:
case 2194:
case 2316:
case 1771:
case 2385:
case 1162:
case 2329:
case 2867:
case 3193:
case 3224:
case 912:
case 2776:
case 3217:
case 4022:
case 2025:
case 2684:
case 1353:
case 2745:
case 494:
case 2770:
case 1259:
case 1472:
case 952:
case 2089:
case 1981:
case 3476:
case 1769:
case 3503:
case 3846:
case 2950:
case 3840:
case 3103:
case 3338:
case 2514:
case 2905:
case 470:
case 2527:
case 529:
case 2271:
case 4042:
case 7:
case 180:
case 1434:
case 2725:
case 3788:
case 492:
case 2070:
case 63:
case 3581:
case 262:
case 2789:
case 2602:
case 954:
case 2114:
case 1993:
case 845:
case 189:
case 2818:
case 2552:
case 3364:
case 3826:
case 2692:
case 3425:
case 2488:
case 3820:
case 741:
case 3489:
case 520:
case 479:
case 881:
case 3459:
case 1733:
case 2537:
case 1887:
case 4074:
case 3207:
case 3601:
case 2363:
case 2735:
case 493:
case 1301:
case 848:
case 1832:
case 1966:
case 2759:
case 3758:
case 1245:
case 2243:
case 325:
case 3513:
case 3348:
case 1276:
case 3151:
case 45:
case 2349:
case 1995:
case 3072:
case 1488:
case 1300:
case 2857:
case 3947:
case 1552:
case 3007:
case 949:
case 2069:
case 1692:
case 753:
case 1306:
case 2664:
case 1070:
case 157:
case 1602:
case 940:
case 571:
case 2434:
case 864:
case 1127:
case 2903:
case 3696:
case 332:
case 681:
case 1527:
case 2723:
case 1905:
case 2043:
case 3156:
case 79:
case 1390:
case 1076:
case 3377:
case 3724:
case 645:
case 2071:
case 3580:
case 308:
case 3649:
case 509:
case 537:
case 3515:
case 4008:
case 2245:
case 752:
case 767:
case 2966:
case 1759:
case 1137:
case 594:
case 1363:
case 2301:
case 2424:
case 3994:
case 3663:
case 1582:
case 2417:
case 1979:
case 1182:
case 83:
case 1458:
case 500:
case 1537:
case 2628:
case 3937:
case 689:
case 9:
case 1194:
case 579:
case 1385:
case 3579:
case 3629:
case 846:
case 3982:
case 1654:
case 3288:
case 2225:
case 1059:
case 754:
case 2289:
case 3610:
case 2562:
case 2951:
case 1035:
case 863:
case 1986:
case 3471:
case 281:
case 680:
case 3312:
case 2913:
case 941:
case 570:
case 3914:
case 326:
case 1233:
case 3034:
case 1950:
case 3161:
case 4018:
case 1339:
case 3927:
case 3561:
case 3384:
case 501:
case 1089:
case 3797:
case 1025:
case 2842:
case 857:
case 862:
case 1147:
case 593:
case 786:
case 375:
case 2743:
case 817:
case 2023:
case 2407:
case 1776:
case 2311:
case 3638:
case 4026:
case 2505:
case 1103:
case 1445:
case 2034:
case 1875:
case 3497:
case 900:
case 4019:
case 2639:
case 1470:
case 3981:
case 3235:
case 608:
case 1846:
case 452:
case 4020:
case 1088:
case 937:
case 2195:
case 3472:
case 2797:
case 633:
case 828:
case 2655:
case 3311:
case 1224:
case 3468:
case 1611:
case 275:
case 3771:
case 1328:
case 2629:
case 2024:
case 1809:
case 2685:
case 3578:
case 2937:
case 2744:
case 2610:
case 2354:
case 3562:
case 3178:
case 540:
case 721:
case 2288:
case 3225:
case 1058:
case 2982:
case 348:
case 605:
case 1160:
case 3444:
case 1166:
case 1234:
case 3913:
case 876:
case 632:
case 1899:
case 2580:
case 2717:
case 1513:
case 2115:
case 208:
case 1435:
case 3960:
case 1151:
case 3276:
case 2724:
case 697:
case 1830:
case 3270:
case 1297:
case 2904:
case 2433:
case 3966:
case 901:
case 2586:
case 2515:
case 1113:
case 3245:
case 91:
case 1207:
case 486:
case 1268:
case 585:
case 2821:
case 3832:
case 3301:
case 1962:
case 176:
case 3365:
case 3733:
case 95:
case 806:
case 634:
case 4046:
case 1820:
case 2600:
case 720:
case 389:
case 588:
case 2068:
case 2606:
case 3993:
case 2423:
case 2007:
case 1788:
case 3822:
case 1581:
case 2097:
case 2377:
case 1244:
case 2156:
case 205:
case 729:
case 2550:
case 3723:
case 3458:
case 2665:
case 3979:
case 700:
case 86:
case 1821:
case 2268:
case 3363:
case 133:
case 2962:
case 1663:
case 2601:
case 737:
case 1180:
case 2758:
case 3759:
case 567:
case 2836:
case 552:
case 2691:
case 878:
case 1044:
case 512:
case 2830:
case 1649:
case 2348:
case 225:
case 3243:
case 2513:
case 3271:
case 1690:
case 3527:
case 59:
case 3905:
case 1377:
case 2244:
case 875:
case 3114:
case 3396:
case 449:
case 357:
case 3725:
case 2788:
case 132:
case 3961:
case 1150:
case 1556:
case 1007:
case 3692:
case 897:
case 3306:
case 2364:
case 2826:
case 1606:
case 1068:
case 3995:
case 4073:
case 1600:
case 3152:
case 513:
case 1947:
case 2820:
case 3488:
case 2611:
case 1469:
case 3547:
case 2217:
case 1655:
case 2224:
case 2193:
case 1595:
case 832:
case 3089:
case 2593:
case 1384:
case 2653:
case 134:
case 1952:
case 3745:
case 485:
case 1258:
case 3956:
case 2846:
case 1561:
case 197:
case 1873:
case 126:
case 3233:
case 2338:
case 2470:
case 1639:
case 1161:
case 1034:
case 2445:
case 3950:
case 3980:
case 1312:
case 16:
case 4:
case 33:
case 2166:
case 3612:
case 792:
case 1982:
case 3310:
case 1610:
case 554:
case 2683:
case 1024:
case 3867:
case 2809:
case 808:
case 1616:
case 3329:
case 1937:
case 3316:
case 1017:
case 441:
case 1629:
case 178:
case 3808:
case 3194:
case 3223:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1765159201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,];
var gg_b = "1765159201/";

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
