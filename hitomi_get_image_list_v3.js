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
case 424:
case 342:
case 3897:
case 573:
case 3703:
case 991:
case 1029:
case 1483:
case 1261:
case 1454:
case 745:
case 3661:
case 3402:
case 3941:
case 3512:
case 931:
case 546:
case 1185:
case 2497:
case 3341:
case 282:
case 2670:
case 2456:
case 1466:
case 3495:
case 1237:
case 3060:
case 3637:
case 1042:
case 965:
case 2802:
case 233:
case 664:
case 2101:
case 2560:
case 3870:
case 82:
case 122:
case 171:
case 1523:
case 1314:
case 731:
case 2133:
case 2664:
case 765:
case 1654:
case 3254:
case 3602:
case 208:
case 3461:
case 2765:
case 3110:
case 41:
case 417:
case 2944:
case 358:
case 805:
case 1683:
case 1900:
case 399:
case 3283:
case 534:
case 8:
case 2697:
case 2344:
case 2470:
case 1295:
case 3548:
case 1666:
case 2656:
case 594:
case 945:
case 3104:
case 1851:
case 1152:
case 2162:
case 3925:
case 791:
case 1914:
case 4022:
case 55:
case 1144:
case 248:
case 1551:
case 2561:
case 3229:
case 1629:
case 3719:
case 1876:
case 1362:
case 2671:
case 2790:
case 1933:
case 678:
case 3474:
case 3848:
case 1642:
case 1962:
case 4057:
case 1127:
case 2250:
case 2114:
case 2035:
case 3940:
case 1333:
case 2146:
case 3570:
case 92:
case 3387:
case 2860:
case 865:
case 2385:
case 1358:
case 3730:
case 705:
case 620:
case 3002:
case 2777:
case 727:
case 1274:
case 3218:
case 302:
case 1618:
case 831:
case 3460:
case 615:
case 914:
case 891:
case 1901:
case 3871:
case 2968:
case 2595:
case 2648:
case 3095:
case 1066:
case 3258:
case 2806:
case 1170:
case 1135:
case 701:
case 1014:
case 3440:
case 3374:
case 861:
case 1810:
case 3078:
case 1318:
case 1601:
case 2452:
case 3527:
case 3974:
case 687:
case 3189:
case 1499:
case 3516:
case 895:
case 611:
case 1786:
case 3798:
case 309:
case 3544:
case 1000:
case 578:
case 1804:
case 2044:
case 780:
case 259:
case 1156:
case 1197:
case 1458:
case 515:
case 3487:
case 1893:
case 1511:
case 2652:
case 2204:
case 3759:
case 1401:
case 1662:
case 606:
case 3960:
case 3606:
case 3299:
case 1699:
case 520:
case 1633:
case 3360:
case 2720:
case 901:
case 2183:
case 2912:
case 4073:
case 1278:
case 3678:
case 2841:
case 1001:
case 2142:
case 1225:
case 3625:
case 3724:
case 1715:
case 2997:
case 3585:
case 383:
case 3302:
case 1966:
case 3995:
case 2587:
case 485:
case 1058:
case 2068:
case 596:
case 1366:
case 3395:
case 4069:
case 3902:
case 795:
case 2644:
case 1539:
case 4005:
case 3200:
case 369:
case 129:
case 1983:
case 243:
case 2616:
case 1171:
case 3425:
case 2211:
case 741:
case 1504:
case 1062:
case 2052:
case 3844:
case 544:
case 1779:
case 65:
case 2825:
case 961:
case 816:
case 1241:
case 2444:
case 2370:
case 1033:
case 2335:
case 2506:
case 3337:
case 3006:
case 2118:
case 634:
case 1099:
case 263:
case 3001:
case 83:
case 837:
case 3278:
case 1678:
case 2227:
case 772:
case 1150:
case 1214:
case 2717:
case 2411:
case 3966:
case 4038:
case 183:
case 3354:
case 1246:
case 2558:
case 3646:
case 524:
case 685:
case 1395:
case 3366:
case 2093:
case 169:
case 1200:
case 2039:
case 3593:
case 192:
case 897:
case 3872:
case 3171:
case 3504:
case 2800:
case 1040:
case 2389:
case 1552:
case 3414:
case 1176:
case 1425:
case 626:
case 3062:
case 1844:
case 784:
case 517:
case 2672:
case 1816:
case 3779:
case 581:
case 1361:
case 2351:
case 3446:
case 45:
case 3241:
case 1961:
case 2010:
case 2599:
case 1123:
case 4084:
case 3033:
case 223:
case 1780:
case 2846:
case 1006:
case 2533:
case 3658:
case 2546:
case 2899:
case 630:
case 411:
case 3763:
case 3046:
case 737:
case 1374:
case 177:
case 1201:
case 17:
case 48:
case 1078:
case 487:
case 2923:
case 551:
case 1189:
case 3433:
case 540:
case 2376:
case 3918:
case 1406:
case 2639:
case 109:
case 4021:
case 1798:
case 2161:
case 2500:
case 1151:
case 3804:
case 2862:
case 2410:
case 3572:
case 2195:
case 3329:
case 1781:
case 1487:
case 997:
case 3707:
case 4045:
case 2769:
case 2252:
case 3893:
case 3511:
case 2705:
case 3942:
case 1640:
case 655:
case 884:
case 954:
case 2011:
case 3342:
case 1606:
case 1360:
case 3633:
case 1885:
case 2102:
case 3164:
case 1041:
case 2610:
case 2493:
case 2439:
case 937:
case 93:
case 2051:
case 3144:
case 3551:
case 2722:
case 3508:
case 3999:
case 3362:
case 3589:
case 1848:
case 74:
case 2089:
case 590:
case 1340:
case 747:
case 2178:
case 478:
case 4009:
case 3962:
case 3399:
case 188:
case 3260:
case 1037:
case 3823:
case 3083:
case 3358:
case 2939:
case 825:
case 3429:
case 2554:
case 2141:
case 1730:
case 3054:
case 228:
case 415:
case 1775:
case 2623:
case 1728:
case 807:
case 313:
case 1218:
case 80:
case 3618:
case 1812:
case 3901:
case 3442:
case 1556:
case 2248:
case 1172:
case 879:
case 94:
case 3958:
case 555:
case 1095:
case 2608:
case 2689:
case 3782:
case 2866:
case 142:
case 847:
case 979:
case 1571:
case 1897:
case 1193:
case 910:
case 2529:
case 3454:
case 3261:
case 1402:
case 1661:
case 2651:
case 4077:
case 2972:
case 4013:
case 3168:
case 2187:
case 90:
case 907:
case 1341:
case 2270:
case 436:
case 2235:
case 2050:
case 2911:
case 624:
case 3042:
case 1864:
case 1378:
case 371:
case 2106:
case 867:
case 1870:
case 322:
case 86:
case 444:
case 70:
case 2518:
case 2489:
case 707:
case 1110:
case 3346:
case 3755:
case 3654:
case 986:
case 725:
case 2757:
case 1461:
case 1767:
case 3683:
case 1835:
case 199:
case 3666:
case 1695:
case 2297:
case 4090:
case 710:
case 3152:
case 681:
case 3914:
case 2140:
case 1437:
case 1024:
case 3134:
case 3015:
case 2017:
case 2515:
case 1820:
case 32:
case 862:
case 327:
case 16:
case 3573:
case 3517:
case 2284:
case 305:
case 988:
case 899:
case 3892:
case 3943:
case 1330:
case 3191:
case 1838:
case 2739:
case 3632:
case 839:
case 612:
case 3298:
case 1286:
case 1698:
case 1545:
case 3:
case 1047:
case 2807:
case 3805:
case 2793:
case 3343:
case 1975:
case 2492:
case 2103:
case 3526:
case 842:
case 1659:
case 498:
case 2669:
case 1521:
case 3259:
case 4044:
case 2949:
case 1740:
case 2886:
case 3463:
case 3281:
case 314:
case 1681:
case 1319:
case 3109:
case 1157:
case 2220:
case 2710:
case 1196:
case 1919:
case 3432:
case 4027:
case 1080:
case 1706:
case 1853:
case 570:
case 290:
case 2357:
case 1367:
case 799:
case 3063:
case 3355:
case 125:
case 3479:
case 1553:
case 2563:
case 1149:
case 10:
case 3224:
case 1215:
case 3615:
case 762:
case 1624:
case 1931:
case 2617:
case 1725:
case 3714:
case 1480:
case 391:
case 2879:
case 2626:
case 1394:
case 3247:
case 3955:
case 2532:
case 1647:
case 4052:
case 2245:
case 179:
case 623:
case 942:
case 1279:
case 2772:
case 3679:
case 3826:
case 443:
case 2507:
case 1424:
case 742:
case 3336:
case 2473:
case 939:
case 3007:
case 1059:
case 4068:
case 186:
case 285:
case 3592:
case 2175:
case 3982:
case 476:
case 888:
case 1903:
case 999:
case 1520:
case 962:
case 3817:
case 1447:
case 2198:
case 1019:
case 2022:
case 3455:
case 2496:
case 3522:
case 2457:
case 474:
case 184:
case 1603:
case 1590:
case 969:
case 2855:
case 1888:
case 3896:
case 21:
case 3857:
case 217:
case 3979:
case 3184:
case 281:
case 749:
case 1494:
case 433:
case 3655:
case 2288:
case 3120:
case 3267:
case 2209:
case 1667:
case 783:
case 1834:
case 361:
case 3138:
case 121:
case 877:
case 1513:
case 1192:
case 87:
case 1891:
case 1577:
case 2317:
case 732:
case 1169:
case 1924:
case 3915:
case 2917:
case 1631:
case 3043:
case 1795:
case 493:
case 1347:
case 1694:
case 769:
case 395:
case 2543:
case 809:
case 2882:
case 2992:
case 2305:
case 512:
case 1428:
case 3307:
case 4056:
case 909:
case 2582:
case 1475:
case 1126:
case 2290:
case 260:
case 3443:
case 1981:
case 452:
case 97:
case 849:
case 977:
case 2969:
case 468:
case 3742:
case 2649:
case 1534:
case 1173:
case 2750:
case 1675:
case 2213:
case 77:
case 777:
case 2277:
case 1774:
case 3228:
case 4070:
case 1628:
case 13:
case 137:
case 3718:
case 2180:
case 1509:
case 4035:
case 2422:
case 3055:
case 3849:
case 3230:
case 953:
case 1890:
case 380:
case 3332:
case 3643:
case 1243:
case 3963:
case 2776:
case 3822:
case 19:
case 892:
case 448:
case 1307:
case 503:
case 3003:
case 1082:
case 2690:
case 220:
case 2413:
case 2503:
case 3126:
case 652:
case 2920:
case 2222:
case 3381:
case 1729:
case 1219:
case 3619:
case 2091:
case 215:
case 3591:
case 3877:
case 1742:
case 3534:
case 428:
case 1907:
case 3959:
case 2034:
case 2115:
case 3173:
case 3117:
case 2677:
case 3774:
case 2613:
case 648:
case 2490:
case 1275:
case 1718:
case 337:
case 1228:
case 1986:
case 1557:
case 875:
case 1596:
case 3588:
case 3630:
case 2009:
case 1230:
case 2088:
case 1055:
case 559:
case 1363:
case 2353:
case 3890:
case 2594:
case 1332:
case 204:
case 2748:
case 3398:
case 2984:
case 354:
case 1963:
case 1822:
case 3031:
case 2819:
case 2531:
case 39:
case 2831:
case 2132:
case 3019:
case 2409:
case 2519:
case 1455:
case 384:
case 2090:
case 1203:
case 563:
case 141:
case 3603:
case 2634:
case 589:
case 2921:
case 3809:
case 975:
case 2867:
case 3380:
case 718:
case 1184:
case 1979:
case 2770:
case 1754:
case 3030:
case 3702:
case 3667:
case 2945:
case 2609:
case 1655:
case 2296:
case 3834:
case 693:
case 4050:
case 1783:
case 3513:
case 3891:
case 2575:
case 3403:
case 3028:
case 1138:
case 2077:
case 918:
case 2528:
case 1436:
case 2107:
case 2434:
case 3631:
case 682:
case 1915:
case 3924:
case 3347:
case 2797:
case 2803:
case 3795:
case 2345:
case 2756:
case 633:
case 195:
case 576:
case 2053:
case 423:
case 1746:
case 2365:
case 2388:
case 3367:
case 2309:
case 689:
case 2880:
case 574:
case 294:
case 3553:
case 2084:
case 325:
case 165:
case 3778:
case 307:
case 813:
case 4010:
case 30:
case 2273:
case 3931:
case 771:
case 3725:
case 3215:
case 25:
case 1224:
case 257:
case 1615:
case 191:
case 1190:
case 2909:
case 508:
case 4004:
case 1247:
case 3647:
case 2988:
case 3098:
case 234:
case 1032:
case 3821:
case 663:
case 3279:
case 145:
case 1679:
case 246:
case 2143:
case 2581:
case 1336:
case 2934:
case 2559:
case 533:
case 2847:
case 3538:
case 1592:
case 1936:
case 1113:
case 1177:
case 2334:
case 2038:
case 3680:
case 971:
case 1817:
case 3520:
case 2445:
case 3741:
case 3375:
case 1134:
case 871:
case 1517:
case 367:
case 3820:
case 36:
case 127:
case 2684:
case 1663:
case 2653:
case 412:
case 3330:
case 3286:
case 2547:
case 1632:
case 568:
case 1805:
case 2859:
case 552:
case 2913:
case 3975:
case 2182:
case 1526:
case 2752:
case 1762:
case 1607:
case 1259:
case 3207:
case 2898:
case 638:
case 3319:
case 114:
case 3681:
case 548:
case 2155:
case 28:
case 3157:
case 2620:
case 287:
case 3498:
case 1486:
case 3919:
case 3706:
case 3853:
case 3080:
case 2990:
case 2580:
case 4001:
case 2447:
case 1130:
case 3824:
case 2520:
case 1815:
case 669:
case 2903:
case 2680:
case 1175:
case 2538:
case 185:
case 4058:
case 2303:
case 2845:
case 1069:
case 2059:
case 1417:
case 1473:
case 3621:
case 683:
case 3559:
case 3991:
case 3143:
case 2279:
case 346:
case 2081:
case 632:
case 558:
case 279:
case 2122:
case 599:
case 2821:
case 1586:
case 3598:
case 2967:
case 3909:
case 4062:
case 1957:
case 1245:
case 3744:
case 3988:
case 1996:
case 3226:
case 1879:
case 210:
case 562:
case 649:
case 2931:
case 1617:
case 3217:
case 2725:
case 35:
case 3727:
case 2624:
case 2778:
case 207:
case 20:
case 2149:
case 394:
case 2553:
case 4033:
case 225:
case 2994:
case 1396:
case 3365:
case 3388:
case 3309:
case 2367:
case 3990:
case 190:
case 2884:
case 928:
case 2706:
case 3638:
case 1863:
case 2853:
case 3292:
case 2080:
case 609:
case 1922:
case 2498:
case 2196:
case 2157:
case 38:
case 2319:
case 67:
case 1194:
case 719:
case 4000:
case 3390:
case 1131:
case 3021:
case 1832:
case 1949:
case 1605:
case 2659:
case 3752:
case 770:
case 2207:
case 1103:
case 3438:
case 502:
case 3913:
case 3977:
case 3881:
case 3182:
case 653:
case 970:
case 3420:
case 3859:
case 2286:
case 2698:
case 2232:
case 3653:
case 2838:
case 1253:
case 155:
case 2330:
case 3768:
case 3785:
case 728:
case 2787:
case 1515:
case 267:
case 2820:
case 2459:
case 3524:
case 26:
case 2375:
case 1017:
case 1073:
case 2024:
case 1449:
case 57:
case 3819:
case 2094:
case 3953:
case 2890:
case 3594:
case 3179:
case 2630:
case 2067:
case 1057:
case 3065:
case 3567:
case 912:
case 2998:
case 2588:
case 2565:
case 509:
case 23:
case 1180:
case 237:
case 3613:
case 3034:
case 1124:
case 4083:
case 1750:
case 2117:
case 1649:
case 1392:
case 2534:
case 3338:
case 315:
case 2591:
case 2981:
case 413:
case 3712:
case 2619:
case 1147:
case 3920:
case 3771:
case 1290:
case 3477:
case 3413:
case 3503:
case 2126:
case 2359:
case 4066:
case 1369:
case 3938:
case 1992:
case 1305:
case 1181:
case 1836:
case 3491:
case 2347:
case 3803:
case 3756:
case 583:
case 1973:
case 3434:
case 1917:
case 2924:
case 1326:
case 1159:
case 3107:
case 532:
case 3077:
case 2324:
case 3528:
case 1317:
case 2513:
case 3575:
case 2028:
case 642:
case 336:
case 3530:
case 3764:
case 3257:
case 1657:
case 2667:
case 2702:
case 2255:
case 1265:
case 471:
case 3691:
case 1291:
case 3163:
case 344:
case 11:
case 1049:
case 3867:
case 812:
case 117:
case 2888:
case 2865:
case 3634:
case 2737:
case 723:
case 1234:
case 3735:
case 3921:
case 3894:
case 699:
case 1789:
case 100:
case 2282:
case 3321:
case 1708:
case 1751:
case 1457:
case 3132:
case 1198:
case 3186:
case 2019:
case 295:
case 575:
case 196:
case 324:
case 164:
case 898:
case 1803:
case 442:
case 2043:
case 2766:
case 1756:
case 1345:
case 989:
case 1797:
case 859:
case 3326:
case 1434:
case 3917:
case 3373:
case 2436:
case 2315:
case 2482:
case 1077:
case 3926:
case 261:
case 1575:
case 4060:
case 2783:
case 136:
case 235:
case 963:
case 2655:
case 1296:
case 3265:
case 2754:
case 2267:
case 2120:
case 1609:
case 3657:
case 462:
case 1163:
case 381:
case 2153:
case 3291:
case 2979:
case 4074:
case 2857:
case 1867:
case 31:
case 1921:
case 3234:
case 2203:
case 241:
case 1894:
case 250:
case 3708:
case 439:
case 1465:
case 2455:
case 1409:
case 1186:
case 943:
case 2379:
case 1132:
case 3022:
case 622:
case 1531:
case 843:
case 3776:
case 2822:
case 2643:
case 1748:
case 2386:
case 798:
case 759:
case 1179:
case 1594:
case 104:
case 1353:
case 1009:
case 2849:
case 178:
case 3555:
case 4037:
case 2596:
case 1384:
case 2228:
case 3180:
case 2718:
case 3723:
case 351:
case 3213:
case 3124:
case 3750:
case 1034:
case 1115:
case 2907:
case 2742:
case 3905:
case 1249:
case 1875:
case 1828:
case 2443:
case 2219:
case 613:
case 3622:
case 3147:
case 1503:
case 2036:
case 959:
case 1477:
case 889:
case 120:
case 1690:
case 3305:
case 3992:
case 1938:
case 3369:
case 4095:
case 1580:
case 1292:
case 3692:
case 2799:
case 111:
case 3863:
case 4025:
case 3922:
case 2486:
case 952:
case 18:
case 3167:
case 882:
case 187:
case 1155:
case 2165:
case 47:
case 3710:
case 1484:
case 1453:
case 3832:
case 1898:
case 3886:
case 409:
case 1752:
case 2607:
case 2259:
case 3704:
case 893:
case 1205:
case 3492:
case 1438:
case 513:
case 1881:
case 1913:
case 1977:
case 1420:
case 1859:
case 2869:
case 2805:
case 2343:
case 3793:
case 2632:
case 1547:
case 2686:
case 355:
case 2191:
case 808:
case 2663:
case 768:
case 205:
case 3284:
case 106:
case 1768:
case 1785:
case 1524:
case 3515:
case 752:
case 227:
case 2573:
case 3405:
case 2134:
case 3073:
case 1391:
case 1020:
case 782:
case 3815:
case 2873:
case 2817:
case 173:
case 3092:
case 483:
case 908:
case 2113:
case 2592:
case 2936:
case 3426:
case 3175:
case 2982:
case 2007:
case 974:
case 3069:
case 1621:
case 2382:
case 2415:
case 1559:
case 2505:
case 2336:
case 3711:
case 469:
case 1934:
case 3473:
case 793:
case 1581:
case 1991:
case 245:
case 2826:
case 134:
case 2700:
case 3119:
case 774:
case 2247:
case 3996:
case 3532:
case 1988:
case 3586:
case 1645:
case 3879:
case 3626:
case 1226:
case 982:
case 852:
case 1273:
case 1217:
case 1084:
case 2479:
case 933:
case 1309:
case 3357:
case 868:
case 2746:
case 2355:
case 1365:
case 2743:
case 3393:
case 2066:
case 1097:
case 1648:
case 1595:
case 3566:
case 505:
case 2958:
case 2901:
case 213:
case 2301:
case 1223:
case 3623:
case 1471:
case 1777:
case 85:
case 152:
case 98:
case 1064:
case 911:
case 894:
case 1385:
case 2358:
case 1860:
case 3554:
case 2850:
case 2823:
case 1874:
case 78:
case 1146:
case 3310:
case 43:
case 437:
case 711:
case 1035:
case 3650:
case 1250:
case 2962:
case 4067:
case 1952:
case 906:
case 1537:
case 873:
case 3423:
case 3089:
case 1671:
case 2116:
case 1790:
case 2999:
case 2508:
case 2589:
case 2362:
case 3212:
case 601:
case 1561:
case 319:
case 49:
case 3051:
case 1435:
case 3076:
case 1927:
case 2914:
case 1316:
case 3140:
case 4019:
case 1861:
case 946:
case 1162:
case 2808:
case 1048:
case 565:
case 484:
case 2300:
case 174:
case 1656:
case 1697:
case 2946:
case 3297:
case 1470:
case 734:
case 641:
case 650:
case 2755:
case 3796:
case 1765:
case 794:
case 1664:
case 766:
case 2202:
case 2654:
case 108:
case 3451:
case 3264:
case 3757:
case 3489:
case 271:
case 1574:
case 1199:
case 75:
case 695:
case 1802:
case 1101:
case 2550:
case 3235:
case 3542:
case 472:
case 1456:
case 3270:
case 182:
case 95:
case 3972:
case 2168:
case 2454:
case 2261:
case 1464:
case 2483:
case 661:
case 1012:
case 2029:
case 193:
case 635:
case 2736:
case 3608:
case 2782:
case 3689:
case 1289:
case 323:
case 1118:
case 2099:
case 936:
case 541:
case 163:
case 3846:
case 3174:
case 1416:
case 3599:
case 3989:
case 1335:
case 218:
case 3951:
case 407:
case 1878:
case 3010:
case 0:
case 815:
case 2400:
case 691:
case 1825:
case 2510:
case 1970:
case 2148:
case 410:
case 964:
case 3004:
case 665:
case 3800:
case 3562:
case 2414:
case 3726:
case 1129:
case 804:
case 2593:
case 2811:
case 535:
case 764:
case 1397:
case 3244:
case 2539:
case 2366:
case 4059:
case 1745:
case 3093:
case 1964:
case 176:
case 3472:
case 275:
case 486:
case 1364:
case 736:
case 2354:
case 878:
case 2646:
case 3160:
case 3411:
case 2614:
case 1841:
case 2001:
case 645:
case 1142:
case 2278:
case 3439:
case 1912:
case 1183:
case 4024:
case 467:
case 1210:
case 3610:
case 978:
case 3350:
case 1971:
case 103:
case 3792:
case 312:
case 2342:
case 1738:
case 2839:
case 3950:
case 1204:
case 2707:
case 720:
case 3252:
case 2893:
case 2942:
case 2329:
case 3072:
case 1468:
case 1485:
case 516:
case 2572:
case 3195:
case 1044:
case 3862:
case 198:
case 1293:
case 447:
case 44:
case 3639:
case 864:
case 2000:
case 896:
case 2918:
case 2433:
case 2601:
case 3404:
case 915:
case 2810:
case 1525:
case 3976:
case 3323:
case 2014:
case 2170:
case 138:
case 4080:
case 2046:
case 2287:
case 836:
case 778:
case 1784:
case 1668:
case 1685:
case 3268:
case 4015:
case 3210:
case 42:
case 881:
case 3720:
case 3154:
case 2041:
case 940:
case 2233:
case 253:
case 3887:
case 1350:
case 2606:
case 3738:
case 81:
case 112:
case 1792:
case 303:
case 817:
case 1011:
case 1950:
case 2960:
case 800:
case 656:
case 1769:
case 3204:
case 1252:
case 760:
case 2262:
case 3468:
case 3312:
case 667:
case 2781:
case 1195:
case 3166:
case 3293:
case 1410:
case 359:
case 3348:
case 209:
case 3840:
case 2406:
case 2108:
case 4079:
case 1376:
case 3016:
case 1514:
case 2078:
case 597:
case 277:
case 2201:
case 740:
case 3578:
case 2025:
case 1137:
case 2440:
case 1976:
case 554:
case 1546:
case 3668:
case 1268:
case 1285:
case 647:
case 3784:
case 3948:
case 2687:
case 2006:
case 679:
case 4063:
case 3118:
case 2780:
case 584:
case 1989:
case 1174:
case 1908:
case 3878:
case 1951:
case 1814:
case 3825:
case 249:
case 2827:
case 3970:
case 607:
case 3272:
case 60:
case 2478:
case 3052:
case 625:
case 2844:
case 3540:
case 1308:
case 2937:
case 2425:
case 2176:
case 3935:
case 1389:
case 1562:
case 4086:
case 389:
case 2552:
case 1726:
case 445:
case 1216:
case 521:
case 343:
case 2200:
case 3129:
case 3745:
case 2902:
case 4007:
case 2395:
case 3964:
case 3644:
case 1244:
case 3397:
case 724:
case 3068:
case 1472:
case 376:
case 3997:
case 2568:
case 2995:
case 3587:
case 283:
case 2302:
case 3364:
case 981:
case 1411:
case 2625:
case 851:
case 1773:
case 840:
case 1160:
case 2150:
case 2678:
case 3841:
case 2731:
case 3316:
case 2437:
case 1076:
case 3927:
case 2104:
case 3861:
case 3162:
case 507:
case 525:
case 441:
case 2794:
case 3470:
case 1297:
case 450:
case 3656:
case 2695:
case 299:
case 684:
case 855:
case 3709:
case 308:
case 2602:
case 2767:
case 726:
case 1796:
case 3788:
case 3944:
case 1489:
case 1518:
case 2074:
case 3327:
case 2325:
case 1023:
case 1408:
case 3199:
case 2870:
case 1106:
case 785:
case 3560:
case 2060:
case 1911:
case 435:
case 3635:
case 461:
case 1270:
case 2495:
case 3251:
case 1529:
case 2402:
case 2193:
case 672:
case 4043:
case 2571:
case 2897:
case 2703:
case 1689:
case 3071:
case 495:
case 3208:
case 1608:
case 1393:
case 2095:
case 556:
case 3056:
case 2172:
case 3968:
case 3985:
case 4036:
case 2871:
case 2987:
case 3595:
case 3648:
case 567:
case 1829:
case 1676:
case 2218:
case 2728:
case 3777:
case 3471:
case 2674:
case 1141:
case 3064:
case 128:
case 2730:
case 2002:
case 1842:
case 3860:
case 1939:
case 3385:
case 3368:
case 2570:
case 3448:
case 1818:
case 3070:
case 1310:
case 3146:
case 2660:
case 885:
case 654:
case 3250:
case 1476:
case 3035:
case 2940:
case 1749:
case 288:
case 2242:
case 1904:
case 54:
case 1178:
case 3952:
case 170:
case 3671:
case 1089:
case 2474:
case 1271:
case 2848:
case 1008:
case 730:
case 2906:
case 63:
case 119:
case 637:
case 3612:
case 348:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743584402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,];
var gg_b = "1743584402/";

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
