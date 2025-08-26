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
case 443:
case 2531:
case 1829:
case 1198:
case 430:
case 1351:
case 1156:
case 334:
case 423:
case 157:
case 3982:
case 510:
case 2986:
case 2777:
case 1061:
case 517:
case 1319:
case 2707:
case 921:
case 3990:
case 3725:
case 526:
case 150:
case 437:
case 909:
case 3562:
case 1003:
case 88:
case 466:
case 546:
case 371:
case 941:
case 671:
case 1583:
case 3178:
case 1901:
case 3305:
case 387:
case 3268:
case 3435:
case 3111:
case 721:
case 857:
case 2753:
case 1367:
case 2154:
case 3110:
case 3039:
case 3529:
case 65:
case 1607:
case 3159:
case 3638:
case 1862:
case 293:
case 2524:
case 2923:
case 380:
case 3826:
case 1545:
case 1137:
case 3375:
case 2742:
case 3108:
case 1971:
case 964:
case 1412:
case 1798:
case 1149:
case 1074:
case 197:
case 468:
case 2930:
case 1654:
case 2267:
case 1212:
case 1427:
case 3884:
case 528:
case 3591:
case 2889:
case 806:
case 0:
case 3962:
case 3047:
case 786:
case 39:
case 835:
case 3871:
case 2698:
case 3685:
case 4053:
case 611:
case 1584:
case 3929:
case 1500:
case 1855:
case 3072:
case 2076:
case 2153:
case 986:
case 2754:
case 2656:
case 581:
case 3214:
case 3652:
case 3710:
case 455:
case 3341:
case 2015:
case 412:
case 1945:
case 1387:
case 2219:
case 3759:
case 3488:
case 2033:
case 1964:
case 1518:
case 253:
case 890:
case 1570:
case 202:
case 1563:
case 2006:
case 3002:
case 1737:
case 3643:
case 1891:
case 2099:
case 3708:
case 2142:
case 2129:
case 2510:
case 2898:
case 421:
case 3885:
case 219:
case 1655:
case 1279:
case 3852:
case 4029:
case 966:
case 2578:
case 409:
case 1997:
case 784:
case 930:
case 1690:
case 1789:
case 943:
case 3124:
case 1339:
case 3723:
case 3942:
case 1691:
case 804:
case 3233:
case 730:
case 984:
case 2755:
case 488:
case 3215:
case 3130:
case 2402:
case 743:
case 972:
case 342:
case 1552:
case 3019:
case 3095:
case 322:
case 1585:
case 3206:
case 3303:
case 2782:
case 3684:
case 3786:
case 1543:
case 3360:
case 3051:
case 3276:
case 1938:
case 40:
case 2790:
case 3663:
case 2689:
case 766:
case 3361:
case 1965:
case 4062:
case 737:
case 3671:
case 1944:
case 2729:
case 1597:
case 2978:
case 336:
case 2849:
case 2911:
case 869:
case 279:
case 367:
case 3087:
case 3553:
case 3954:
case 755:
case 2910:
case 2959:
case 2546:
case 968:
case 1372:
case 1807:
case 3420:
case 544:
case 464:
case 2617:
case 3626:
case 3724:
case 3865:
case 360:
case 16:
case 3421:
case 1985:
case 768:
case 1347:
case 1629:
case 3730:
case 2155:
case 4082:
case 2379:
case 1952:
case 3731:
case 3897:
case 2439:
case 2068:
case 3392:
case 605:
case 3664:
case 3766:
case 1717:
case 2190:
case 2493:
case 2035:
case 667:
case 955:
case 2239:
case 636:
case 2013:
case 2191:
case 1028:
case 486:
case 1538:
case 2085:
case 3471:
case 3366:
case 3792:
case 2694:
case 746:
case 3676:
case 2672:
case 50:
case 23:
case 676:
case 3056:
case 726:
case 2758:
case 3218:
case 618:
case 3615:
case 3633:
case 1747:
case 2132:
case 3400:
case 1935:
case 3103:
case 3284:
case 3704:
case 763:
case 3699:
case 2043:
case 1812:
case 4032:
case 1491:
case 2941:
case 1011:
case 1193:
case 662:
case 963:
case 3888:
case 2895:
case 1490:
case 1139:
case 3324:
case 1010:
case 1059:
case 3512:
case 509:
case 239:
case 376:
case 461:
case 1369:
case 1702:
case 917:
case 1008:
case 1679:
case 926:
case 586:
case 3264:
case 2109:
case 981:
case 3245:
case 2196:
case 3760:
case 3049:
case 4058:
case 285:
case 1988:
case 777:
case 3761:
case 2158:
case 932:
case 620:
case 2355:
case 2038:
case 129:
case 3483:
case 1147:
case 1229:
case 728:
case 2382:
case 149:
case 3386:
case 2269:
case 640:
case 3648:
case 3104:
case 748:
case 294:
case 3180:
case 3621:
case 14:
case 2217:
case 424:
case 1793:
case 928:
case 1462:
case 2541:
case 12:
case 2975:
case 3323:
case 1739:
case 781:
case 829:
case 1632:
case 2905:
case 3835:
case 2916:
case 801:
case 3465:
case 1787:
case 3359:
case 3741:
case 1976:
case 3820:
case 3244:
case 2557:
case 2083:
case 3668:
case 1477:
case 761:
case 2249:
case 3378:
case 1933:
case 4012:
case 1832:
case 3635:
case 2449:
case 1277:
case 1534:
case 3310:
case 2354:
case 3613:
case 566:
case 1442:
case 2893:
case 2974:
case 2687:
case 1520:
case 1195:
case 1242:
case 875:
case 2573:
case 2839:
case 1521:
case 523:
case 1453:
case 3017:
case 1066:
case 3297:
case 2536:
case 3532:
case 530:
case 1150:
case 892:
case 3979:
case 2980:
case 2957:
case 674:
case 3443:
case 2001:
case 724:
case 3775:
case 3346:
case 3243:
case 2000:
case 1576:
case 983:
case 298:
case 3140:
case 512:
case 1858:
case 1599:
case 2651:
case 152:
case 2456:
case 3705:
case 2847:
case 3452:
case 631:
case 1934:
case 3089:
case 2650:
case 1533:
case 2018:
case 1515:
case 3252:
case 2712:
case 2256:
case 2353:
case 3614:
case 2437:
case 3325:
case 3558:
case 1719:
case 3876:
case 2872:
case 2973:
case 2574:
case 331:
case 815:
case 3596:
case 3509:
case 1086:
case 2580:
case 470:
case 3815:
case 428:
case 2936:
case 3932:
case 1454:
case 803:
case 448:
case 568:
case 3806:
case 382:
case 3128:
case 1254:
case 2667:
case 374:
case 1408:
case 935:
case 2325:
case 3437:
case 529:
case 3894:
case 3973:
case 656:
case 6:
case 2876:
case 3307:
case 1675:
case 906:
case 1344:
case 3237:
case 2596:
case 1788:
case 231:
case 501:
case 797:
case 1459:
case 1365:
case 549:
case 2509:
case 1082:
case 3580:
case 1168:
case 2579:
case 1605:
case 2833:
case 2932:
case 186:
case 1411:
case 1210:
case 3377:
case 3581:
case 3802:
case 2899:
case 1113:
case 1091:
case 2128:
case 1714:
case 1616:
case 3667:
case 2443:
case 3001:
case 1993:
case 1874:
case 2141:
case 4040:
case 1892:
case 3695:
case 1572:
case 3342:
case 2243:
case 3000:
case 4041:
case 3084:
case 3651:
case 3727:
case 735:
case 3063:
case 2089:
case 886:
case 2285:
case 3456:
case 3847:
case 997:
case 356:
case 1804:
case 2252:
case 3071:
case 2485:
case 1880:
case 164:
case 3561:
case 3992:
case 1641:
case 3893:
case 3974:
case 757:
case 789:
case 365:
case 3573:
case 1246:
case 1343:
case 696:
case 3560:
case 1640:
case 188:
case 1768:
case 2017:
case 1062:
case 1947:
case 2834:
case 3981:
case 1385:
case 1735:
case 2532:
case 3904:
case 214:
case 1713:
case 658:
case 3980:
case 10:
case 1539:
case 1225:
case 2444:
case 2741:
case 2238:
case 109:
case 1860:
case 1972:
case 600:
case 1425:
case 950:
case 2308:
case 121:
case 2820:
case 2175:
case 2740:
case 3557:
case 1861:
case 78:
case 957:
case 396:
case 2378:
case 665:
case 1902:
case 3449:
case 1803:
case 2116:
case 3112:
case 1628:
case 2613:
case 3217:
case 552:
case 2621:
case 3422:
case 1660:
case 240:
case 1176:
case 1053:
case 2620:
case 3541:
case 1318:
case 1661:
case 220:
case 278:
case 868:
case 2323:
case 2927:
case 76:
case 1431:
case 685:
case 1734:
case 2835:
case 1384:
case 969:
case 1199:
case 2912:
case 1300:
case 1967:
case 3916:
case 1828:
case 406:
case 1042:
case 1721:
case 3390:
case 1657:
case 2264:
case 96:
case 1919:
case 2760:
case 2049:
case 2773:
case 3887:
case 2192:
case 2464:
case 385:
case 3158:
case 3639:
case 2761:
case 4092:
case 497:
case 1077:
case 3469:
case 1951:
case 490:
case 2736:
case 2634:
case 2181:
case 4080:
case 3065:
case 2703:
case 2283:
case 812:
case 3179:
case 394:
case 2180:
case 2157:
case 823:
case 904:
case 1364:
case 3575:
case 1987:
case 1776:
case 3941:
case 1345:
case 195:
case 843:
case 3895:
case 218:
case 654:
case 592:
case 830:
case 339:
case 1715:
case 3516:
case 3851:
case 3329:
case 1733:
case 63:
case 1681:
case 276:
case 866:
case 48:
case 1134:
case 172:
case 3850:
case 1286:
case 1604:
case 1706:
case 1148:
case 2527:
case 2037:
case 2814:
case 575:
case 3289:
case 2263:
case 2270:
case 3085:
case 457:
case 2471:
case 2676:
case 1595:
case 2160:
case 2271:
case 2470:
case 2056:
case 895:
case 33:
case 489:
case 2218:
case 130:
case 1223:
case 1326:
case 639:
case 2330:
case 354:
case 2615:
case 2136:
case 1550:
case 1805:
case 2284:
case 2704:
case 2606:
case 872:
case 262:
case 2331:
case 3928:
case 2780:
case 2699:
case 2234:
case 2381:
case 1998:
case 2448:
case 177:
case 2730:
case 1549:
case 3379:
case 2186:
case 2683:
case 2392:
case 3293:
case 148:
case 2374:
case 3439:
case 351:
case 2645:
case 3068:
case 3190:
case 1257:
case 92:
case 2766:
case 1726:
case 3525:
case 3358:
case 3035:
case 170:
case 94:
case 729:
case 2507:
case 3013:
case 3191:
case 506:
case 3978:
case 67:
case 72:
case 2087:
case 877:
case 2553:
case 1630:
case 3849:
case 949:
case 1315:
case 379:
case 1436:
case 205:
case 2954:
case 651:
case 3910:
case 929:
case 1306:
case 132:
case 1184:
case 1631:
case 1376:
case 1273:
case 1745:
case 2542:
case 1461:
case 848:
case 1825:
case 3617:
case 1666:
case 2221:
case 1261:
case 2724:
case 3622:
case 1473:
case 2220:
case 2421:
case 452:
case 181:
case 1171:
case 2499:
case 1878:
case 2233:
case 1949:
case 1811:
case 4031:
case 3402:
case 2095:
case 3088:
case 2299:
case 2303:
case 2131:
case 2415:
case 3272:
case 2051:
case 1859:
case 2373:
case 589:
case 3294:
case 2360:
case 2907:
case 2663:
case 3689:
case 2670:
case 3162:
case 2361:
case 619:
case 3014:
case 1808:
case 4066:
case 3247:
case 3898:
case 2885:
case 475:
case 1701:
case 1480:
case 817:
case 1404:
case 1481:
case 846:
case 2953:
case 3856:
case 2852:
case 3447:
case 1183:
case 1204:
case 1784:
case 1537:
case 1027:
case 1292:
case 3508:
case 1274:
case 1763:
case 810:
case 2124:
case 238:
case 2843:
case 2067:
case 2942:
case 1771:
case 3946:
case 3559:
case 2778:
case 144:
case 2929:
case 2685:
case 2072:
case 3076:
case 2094:
case 3754:
case 3656:
case 2214:
case 124:
case 56:
case 2710:
case 1969:
case 3451:
case 2759:
case 4046:
case 883:
case 703:
case 302:
case 2708:
case 3142:
case 2643:
case 3099:
case 1205:
case 1785:
case 2582:
case 3586:
case 602:
case 3930:
case 1611:
case 2800:
case 1216:
case 3267:
case 1313:
case 1405:
case 3177:
case 1335:
case 2884:
case 2591:
case 449:
case 3107:
case 1138:
case 1659:
case 2962:
case 3966:
case 2125:
case 3889:
case 2863:
case 1475:
case 915:
case 1823:
case 1165:
case 2590:
case 429:
case 1743:
case 3637:
case 1275:
case 1079:
case 1144:
case 2435:
case 775:
case 2093:
case 4010:
case 287:
case 2268:
case 259:
case 4078:
case 3154:
case 3312:
case 3753:
case 2316:
case 2213:
case 4011:
case 2110:
case 2638:
case 1989:
case 3524:
case 792:
case 3034:
case 393:
case 1625:
case 3822:
case 3048:
case 3742:
case 2644:
case 1185:
case 3021:
case 3020:
case 693:
case 1314:
case 1152:
case 504:
case 2982:
case 2697:
case 3707:
case 1241:
case 2725:
case 2864:
case 1032:
case 1522:
case 2562:
case 1240:
case 3566:
case 1824:
case 3487:
case 1765:
case 2991:
case 861:
case 325:
case 1143:
case 1646:
case 2365:
case 3086:
case 1509:
case 2675:
case 1596:
case 2344:
case 3795:
case 2208:
case 3719:
case 953:
case 1876:
case 2408:
case 2113:
case 2091:
case 2478:
case 585:
case 3254:
case 3750:
case 2210:
case 1806:
case 615:
case 3454:
case 2605:
case 2278:
case 286:
case 47:
case 3751:
case 2211:
case 1579:
case 479:
case 2939:
case 1140:
case 2572:
case 1775:
case 315:
case 1346:
case 2874:
case 2993:
case 2892:
case 3187:
case 3896:
case 3809:
case 1443:
case 3879:
case 1485:
case 1614:
case 874:
case 3515:
case 2804:
case 2397:
case 702:
case 2881:
case 3934:
case 1285:
case 303:
case 1705:
case 3599:
case 3521:
case 2343:
case 2246:
case 3242:
case 692:
case 3520:
case 554:
case 2446:
case 114:
case 2352:
case 2114:
case 1979:
case 1728:
case 3150:
case 745:
case 1022:
case 1848:
case 1532:
case 3066:
case 3398:
case 1834:
case 4014:
case 3453:
case 2768:
case 725:
case 1438:
case 2425:
case 3337:
case 945:
case 1820:
case 1175:
case 539:
case 3976:
case 1359:
case 241:
case 2539:
case 925:
case 3167:
case 2628:
case 814:
case 3024:
case 793:
case 1635:
case 392:
case 3277:
case 3548:
case 1105:
case 3477:
case 1311:
case 3915:
case 5:
case 120:
case 2318:
case 4076:
case 951:
case 1323:
case 3739:
case 2371:
case 2587:
case 1620:
case 649:
case 255:
case 3194:
case 3793:
case 34:
case 2363:
case 3389:
case 2266:
case 3262:
case 1621:
case 4033:
case 1912:
case 2042:
case 1835:
case 4015:
case 598:
case 2231:
case 2636:
case 116:
case 1868:
case 127:
case 2431:
case 4006:
case 1445:
case 2840:
case 1761:
case 268:
case 3988:
case 2995:
case 2841:
case 2919:
case 840:
case 1174:
case 2424:
case 1773:
case 1192:
case 833:
case 1264:
case 751:
case 3914:
case 301:
case 3568:
case 1648:
case 847:
case 1104:
case 1283:
case 2950:
case 1634:
case 62:
case 329:
case 77:
case 827:
case 118:
case 3139:
case 3658:
case 2054:
case 2692:
case 3794:
case 2674:
case 3011:
case 3609:
case 3078:
case 2364:
case 2680:
case 493:
case 272:
case 2383:
case 2286:
case 3455:
case 2148:
case 2733:
case 3482:
case 3059:
case 1512:
case 2567:
case 818:
case 2326:
case 1161:
case 3322:
case 4021:
case 1463:
case 2120:
case 2423:
case 1173:
case 1263:
case 3317:
case 1471:
case 223:
case 1098:
case 3812:
case 2816:
case 565:
case 3913:
case 1401:
case 1200:
case 1606:
case 1704:
case 162:
case 1400:
case 876:
case 425:
case 3747:
case 2805:
case 791:
case 3514:
case 71:
case 1615:
case 1186:
case 1248:
case 1897:
case 1683:
case 1304:
case 2549:
case 1434:
case 805:
case 369:
case 867:
case 277:
case 3629:
case 1234:
case 66:
case 1381:
case 2998:
case 3028:
case 2457:
case 3842:
case 3538:
case 2624:
case 2726:
case 228:
case 270:
case 3717:
case 1392:
case 794:
case 248:
case 3769:
case 3302:
case 2783:
case 3877:
case 2203:
case 2306:
case 232:
case 2100:
case 2399:
case 4001:
case 498:
case 1087:
case 167:
case 2630:
case 3041:
case 2315:
case 3232:
case 2236:
case 3597:
case 994:
case 2937:
case 4070:
case 4063:
case 2171:
case 1123:
case 160:
case 1626:
case 2118:
case 1865:
case 2473:
case 2170:
case 3662:
case 2764:
case 985:
case 3189:
case 2273:
case 2376:
case 2461:
case 4018:
case 456:
case 4:
case 1542:
case 1838:
case 1131:
case 1684:
case 2598:
case 1977:
case 3854:
case 525:
case 1433:
case 1600:
case 1299:
case 2949:
case 2556:
case 142:
case 73:
case 1019:
case 1130:
case 1215:
case 1499:
case 2878:
case 1336:
case 1233:
case 754:
case 1671:
case 2320:
case 3122:
case 1618:
case 1476:
case 2623:
case 1166:
case 3117:
case 263:
case 873:
case 4026:
case 2859:
case 3938:
case 400:
case 2348:
case 2183:
case 2204:
case 2686:
case 2784:
case 3997:
case 1953:
case 3075:
case 3279:
case 3655:
case 4083:
case 2404:
case 2334:
case 1885:
case 2701:
case 2480:
case 593:
case 3409:
case 1843:
case 4064:
case 1067:
case 2012:
case 1723:
case 3258:
case 2492:
case 138:
case 3496:
case 3005:
case 173:
case 2770:
case 3690:
case 2763:
case 93:
case 3209:
case 2537:
case 3296:
case 2027:
case 3458:
case 3882:
case 2886:
case 3983:
case 2969:
case 1214:
case 1652:
case 224:
case 1072:
case 1711:
case 199:
case 3500:
case 1094:
case 244:
case 1414:
case 1708:
case 1288:
case 3890:
case 306:
case 1488:
case 3571:
case 3387:
case 1759:
case 3945:
case 2610:
case 3427:
case 2335:
case 1884:
case 1555:
case 1800:
case 3654:
case 2313:
case 606:
case 2096:
case 9:
case 956:
case 899:
case 3149:
case 3074:
case 3798:
case 3412:
case 485:
case 2785:
case 2009:
case 2678:
case 635:
case 2743:
case 2275:
case 19:
case 2144:
case 2823:
case 3926:
case 2165:
case 1590:
case 3004:
case 4038:
case 2475:
case 4044:
case 3081:
case 2138:
case 4065:
case 2659:
case 758:
case 2797:
case 2831:
case 3677:
case 2228:
case 834:
case 159:
case 650:
case 1316:
case 900:
case 1435:
case 1111:
case 187:
case 2830:
case 1305:
case 2569:
case 2428:
case 38:
case 1746:
case 1644:
case 3971:
case 261:
case 3137:
case 1826:
case 1665:
case 796:
case 180:
case 3564:
case 2989:
case 3862:
case 2625:
case 2866:
case 3970:
case 657:
case 1638:
case 3061:
case 1982:
case 1697:
case 51:
case 357:
case 2314:
case 4085:
case 996:
case 591:
case 707:
case 1955:
case 3073:
case 3351:
case 3749:
case 389:
case 2185:
case 43:
case 4052:
case 2388:
case 1991:
case 2143:
case 958:
case 454:
case 1562:
case 2240:
case 2517:
case 3003:
case 4043:
case 1864:
case 3526:
case 1990:
case 2032:
case 3036:
case 3319:
case 1986:
case 1869:
case 2061:
case 3152:
case 2156:
case 2829:
case 661:
case 2642:
case 3646:
case 3744:
case 125:
case 1487:
case 3441:
case 3240:
case 1566:
case 3517:
case 3032:
case 3522:
case 2036:
case 250:
case 3241:
case 3738:
case 1707:
case 462:
case 542:
case 208:
case 538:
case 2984:
case 3831:
case 2900:
case 1312:
case 3228:
case 3830:
case 1649:
case 2057:
case 914:
case 361:
case 2564:
case 1822:
case 1048:
case 2862:
case 845:
case 1034:
case 3610:
case 1177:
case 2756:
case 1267:
case 3752:
case 297:
case 3096:
case 2227:
case 1930:
case 2092:
case 3205:
case 2798:
case 2412:
case 3144:
case 3275:
case 2080:
case 3165:
case 2004:
case 853:
case 290:
case 3823:
case 802:
case 3475:
case 782:
case 383:
case 1966:
case 624:
case 3138:
case 1250:
case 2501:
case 3886:
case 1656:
case 1754:
case 433:
case 2500:
case 2855:
case 420:
case 1251:
case 344:
case 2584:
case 2891:
case 416:
case 427:
case 153:
case 102:
case 1924:
case 2563:
case 1033:
case 2964:
case 1495:
case 1523:
case 206:
case 2945:
case 567:
case 3204:
case 2682:
case 1578:
case 2997:
case 3348:
case 3183:
case 1511:
case 1856:
case 1447:
case 2075:
case 119:
case 962:
case 3404:
case 3701:
case 3480:
case 3281:
case 718:
case 3334:
case 2479:
case 2016:
case 81:
case 626:
case 2258:
case 3718:
case 3492:
case 2496:
case 3474:
case 2789:
case 3763:
case 2209:
case 2005:
case 646:
case 587:
case 2296:
case 2393:
case 3145:
case 3292:
case 2458:
case 3598:
case 2585:
case 1782:
case 1202:
case 976:
case 2854:
case 1088:
case 1755:
case 55:
case 819:
case 3556:
case 2552:
case 1332:
case 3878:
case 1837:
case 534:
case 191:
case 310:
case 3623:
case 3126:
case 2965:
case 1494:
case 363:
case 414:
case 3321:
case 1790:
case 1689:
case 3859:
case 648:
case 3631:
case 2769:
case 1910:
case 2302:
case 3783:
case 3203:
case 733:
case 2040:
case 3399:
case 3436:
case 3100:
case 2432:
case 1911:
case 1849:
case 3315:
case 3630:
case 2232:
case 720:
case 3236:
case 3333:
case 1729:
case 727:
case 4089:
case 1908:
case 381:
case 3118:
case 1622:
case 3460:
case 2189:
case 2662:
case 1617:
case 747:
case 3666:
case 3764:
case 1959:
case 3273:
case 2372:
case 2807:
case 1669:
case 927:
case 947:
case 1155:
case 3998:
case 2347:
case 1191:
case 3457:
case 2842:
case 2538:
case 3846:
case 1525:
case 328:
case 940:
case 1035:
case 370:
case 3624:
case 3726:
case 1309:
case 1190:
case 2565:
case 1439:
case 151:
case 632:
case 348:
case 2544:
case 1293:
case 978:
case 3326:
case 3223:
case 2322:
case 1489:
case 3120:
case 13:
case 343:
case 1694:
case 1796:
case 672:
case 3595:
case 3423:
case 684:
case 323:
case 434:
case 1362:
case 1289:
case 1043:
case 3551:
case 1867:
case 1779:
case 1602:
case 45:
case 471:
case 3550:
case 2747:
case 695:
case 3805:
case 1132:
case 2827:
case 154:
case 839:
case 2139:
case 4093:
case 2658:
case 1940:
case 2010:
case 666:
case 1895:
case 3054:
case 83:
case 2291:
case 3776:
case 1941:
case 1819:
case 2772:
case 2011:
case 3345:
case 4039:
case 2078:
case 2491:
case 2290:
case 3364:
case 2679:
case 2008:
case 3680:
case 3383:
case 2702:
case 2369:
case 3286:
case 773:
case 942:
case 1505:
case 643:
case 3134:
case 738:
case 2059:
case 630:
case 922:
case 1851:
case 3567:
case 480:
case 2255:
case 3715:
case 854:
case 3077:
case 1158:
case 1639:
case 3224:
case 582:
case 1391:
case 574:
case 612:
case 1887:
case 1693:
case 3841:
case 3919:
case 3657:
case 1109:
case 3721:
case 201:
case 194:
case 2429:
case 1382:
case 1065:
case 2147:
case 411:
case 2229:
case 1732:
case 2513:
case 3951:
case 1528:
case 736:
case 1097:
case 4072:
case 3318:
case 2462:
case 1417:
case 22:
case 1975:
case 3371:
case 2172:
case 705:
case 2194:
case 1422:
case 3370:
case 1540:
case 3266:
case 3300:
case 3828:
case 894:
case 3106:
case 713:
case 2102:
case 3430:
case 3603:
case 3384:
case 312:
case 3734:
case 3636:
case 3133:
case 3115:
case 3230:
case 668:
case 3861:
case 1557:
case 1083:
case 2337:
case 3425:
case 3593:
case 2787:
case 3994:
case 3972:
case 576:
case 3225:
case 60:
case 3029:
case 971:
case 3539:
case 1354:
case 2167:
case 1112:
case 3628:
case 800:
case 1449:
case 3803:
case 2534:
case 3902:
case 518:
case 1064:
case 2933:
case 934:
case 3836:
case 196:
case 1127:
case 2915:
case 438:
case 2477:
case 1249:
case 4019:
case 2031:
case 1839:
case 2521:
case 3640:
case 388:
case 3343:
case 1560:
case 2195:
case 2242:
case 3188:
case 1573:
case 3641:
case 1893:
case 422:
case 2030:
case 107:
case 1561:
case 858:
case 3446:
case 641:
case 2253:
case 2356:
case 3713:
case 75:
case 609:
case 100:
case 2398:
case 1981:
case 2453:
case 621:
case 3947:
case 2151:
case 771:
case 4050:
case 4087:
case 1342:
case 799:
case 3594:
case 1000:
case 3572:
case 1695:
case 3892:
case 1619:
case 3874:
case 405:
case 1957:
case 516:
case 2809:
case 911:
case 413:
case 1712:
case 2879:
case 2023:
case 3397:
case 2533:
case 578:
case 2948:
case 156:
case 520:
case 3804:
case 1456:
case 533:
case 1847:
case 3881:
case 540:
case 1727:
case 1651:
case 3082:
case 1961:
case 3788:
case 3208:
case 3675:
case 1237:
case 3344:
case 2719:
case 1960:
case 3259:
case 1872:
case 3338:
case 1973:
case 2612:
case 1667:
case 3113:
case 1377:
case 1802:
case 8:
case 856:
case 3411:
case 1903:
case 1936:
case 3410:
case 711:
case 2751:
case 3211:
case 1580:
case 3168:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756206001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,];
var gg_b = "1756206001/";

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
