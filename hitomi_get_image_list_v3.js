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
case 4016:
case 177:
case 3412:
case 1316:
case 56:
case 2595:
case 1213:
case 642:
case 3691:
case 1648:
case 1023:
case 2337:
case 990:
case 3134:
case 3848:
case 1891:
case 50:
case 2865:
case 2129:
case 1841:
case 3898:
case 2083:
case 2675:
case 1163:
case 3636:
case 1433:
case 244:
case 988:
case 1098:
case 2669:
case 520:
case 2817:
case 1698:
case 1452:
case 3356:
case 1390:
case 1189:
case 4090:
case 3568:
case 3253:
case 2545:
case 1474:
case 213:
case 1861:
case 3523:
case 3370:
case 973:
case 246:
case 3061:
case 3661:
case 3927:
case 995:
case 1878:
case 2049:
case 582:
case 2579:
case 2607:
case 1591:
case 3548:
case 517:
case 3121:
case 1071:
case 2913:
case 3871:
case 525:
case 2764:
case 379:
case 3444:
case 1536:
case 1671:
case 3868:
case 3203:
case 3364:
case 3326:
case 239:
case 3013:
case 3223:
case 799:
case 1416:
case 1291:
case 1087:
case 3887:
case 632:
case 1945:
case 2437:
case 555:
case 1490:
case 2627:
case 1032:
case 580:
case 891:
case 1995:
case 3907:
case 1374:
case 1108:
case 1241:
case 3832:
case 1236:
case 234:
case 1053:
case 2217:
case 2027:
case 4033:
case 1333:
case 2941:
case 561:
case 2756:
case 2295:
case 3983:
case 3782:
case 3470:
case 3587:
case 3118:
case 2936:
case 501:
case 236:
case 418:
case 3969:
case 1302:
case 585:
case 3344:
case 3957:
case 1158:
case 2147:
case 3803:
case 3553:
case 3268:
case 2991:
case 1003:
case 3365:
case 2212:
case 2022:
case 449:
case 941:
case 2616:
case 2264:
case 2487:
case 2226:
case 3837:
case 4057:
case 2570:
case 2323:
case 3703:
case 3902:
case 1369:
case 4069:
case 3882:
case 2090:
case 2856:
case 2162:
case 1375:
case 3317:
case 6:
case 2453:
case 1427:
case 2690:
case 1286:
case 444:
case 2114:
case 2398:
case 3732:
case 326:
case 842:
case 2120:
case 413:
case 3974:
case 1307:
case 4007:
case 3395:
case 2870:
case 3952:
case 2660:
case 2368:
case 1713:
case 1912:
case 2556:
case 835:
case 2192:
case 2371:
case 1180:
case 2403:
case 1399:
case 1926:
case 356:
case 2594:
case 169:
case 2448:
case 439:
case 109:
case 3184:
case 2864:
case 389:
case 3479:
case 384:
case 608:
case 2256:
case 2100:
case 104:
case 2498:
case 157:
case 3282:
case 2033:
case 1469:
case 164:
case 572:
case 3417:
case 668:
case 840:
case 978:
case 2894:
case 386:
case 94:
case 106:
case 2512:
case 1956:
case 3495:
case 1741:
case 1407:
case 218:
case 166:
case 1736:
case 2717:
case 307:
case 2303:
case 1586:
case 3748:
case 2779:
case 3916:
case 2844:
case 3090:
case 196:
case 3432:
case 1336:
case 2882:
case 1233:
case 872:
case 540:
case 3162:
case 685:
case 938:
case 4041:
case 1341:
case 1274:
case 476:
case 3212:
case 3348:
case 1391:
case 3022:
case 3640:
case 622:
case 601:
case 1154:
case 2837:
case 3264:
case 3226:
case 2703:
case 2902:
case 3040:
case 1006:
case 3660:
case 479:
case 3806:
case 3556:
case 545:
case 971:
case 655:
case 2787:
case 680:
case 1860:
case 199:
case 3060:
case 194:
case 2933:
case 4078:
case 1378:
case 1670:
case 3142:
case 698:
case 226:
case 1104:
case 3986:
case 2537:
case 1540:
case 3120:
case 2753:
case 1727:
case 1516:
case 3870:
case 1290:
case 2686:
case 3674:
case 284:
case 3100:
case 21:
case 3033:
case 3795:
case 3633:
case 1749:
case 3332:
case 3544:
case 2417:
case 625:
case 3387:
case 3594:
case 1222:
case 3423:
case 1664:
case 3812:
case 1799:
case 617:
case 3176:
case 2465:
case 2768:
case 3448:
case 1064:
case 1026:
case 289:
case 4013:
case 1313:
case 3206:
case 1196:
case 3150:
case 3471:
case 1533:
case 563:
case 3303:
case 1757:
case 2723:
case 2748:
case 1574:
case 1937:
case 3002:
case 1044:
case 503:
case 3844:
case 1552:
case 3779:
case 620:
case 3894:
case 652:
case 1783:
case 60:
case 1094:
case 1694:
case 66:
case 3270:
case 1769:
case 1110:
case 1146:
case 542:
case 870:
case 1478:
case 1617:
case 3083:
case 2898:
case 2232:
case 3794:
case 2636:
case 276:
case 1875:
case 855:
case 3069:
case 2641:
case 3683:
case 2253:
case 3382:
case 1486:
case 1227:
case 2568:
case 766:
case 424:
case 3075:
case 2412:
case 429:
case 2173:
case 1665:
case 2691:
case 921:
case 2464:
case 3879:
case 2426:
case 349:
case 2091:
case 962:
case 1549:
case 2598:
case 2121:
case 1645:
case 1583:
case 568:
case 3099:
case 2306:
case 411:
case 3699:
case 850:
case 1045:
case 885:
case 3517:
case 279:
case 919:
case 3845:
case 1569:
case 709:
case 1807:
case 704:
case 2370:
case 914:
case 98:
case 1733:
case 822:
case 3007:
case 3579:
case 861:
case 1695:
case 1953:
case 2078:
case 1774:
case 426:
case 764:
case 2456:
case 2832:
case 4086:
case 3482:
case 484:
case 3770:
case 3978:
case 2949:
case 3217:
case 715:
case 905:
case 1275:
case 3706:
case 852:
case 2999:
case 489:
case 1257:
case 2248:
case 2101:
case 456:
case 2613:
case 86:
case 3167:
case 3437:
case 1119:
case 2887:
case 670:
case 1722:
case 960:
case 2344:
case 1299:
case 2803:
case 1527:
case 3147:
case 59:
case 900:
case 1740:
case 1948:
case 2737:
case 1790:
case 882:
case 3756:
case 951:
case 693:
case 1998:
case 3941:
case 459:
case 817:
case 1207:
case 3197:
case 1105:
case 2975:
case 1249:
case 2470:
case 2587:
case 675:
case 3087:
case 1613:
case 551:
case 4012:
case 1248:
case 2119:
case 3945:
case 52:
case 2760:
case 3440:
case 2968:
case 3813:
case 3422:
case 1326:
case 4064:
case 2155:
case 1223:
case 1013:
case 9:
case 3632:
case 2177:
case 1907:
case 99:
case 3032:
case 1456:
case 500:
case 3241:
case 2386:
case 3374:
case 1151:
case 2249:
case 890:
case 3278:
case 63:
case 1587:
case 3513:
case 2790:
case 3979:
case 3130:
case 1553:
case 237:
case 2527:
case 2740:
case 3003:
case 2948:
case 3460:
case 2722:
case 1957:
case 1271:
case 2923:
case 797:
case 1344:
case 1406:
case 3111:
case 888:
case 3158:
case 1532:
case 1426:
case 3322:
case 1287:
case 1185:
case 3623:
case 1464:
case 3048:
case 2903:
case 2065:
case 631:
case 2549:
case 3891:
case 1134:
case 2679:
case 1412:
case 3340:
case 1173:
case 3648:
case 1691:
case 3213:
case 2875:
case 4056:
case 3390:
case 496:
case 3452:
case 3698:
case 3474:
case 2017:
case 2125:
case 1568:
case 683:
case 718:
case 2883:
case 519:
case 1041:
case 1636:
case 2695:
case 494:
case 2953:
case 55:
case 3878:
case 1661:
case 2752:
case 2849:
case 1078:
case 502:
case 562:
case 2557:
case 4070:
case 678:
case 3143:
case 2733:
case 2932:
case 1494:
case 2181:
case 2095:
case 516:
case 4006:
case 2045:
case 1203:
case 3536:
case 2987:
case 653:
case 3071:
case 2899:
case 3541:
case 828:
case 1598:
case 3360:
case 2645:
case 3668:
case 0:
case 1768:
case 1184:
case 1465:
case 690:
case 309:
case 2491:
case 1960:
case 2064:
case 1479:
case 2240:
case 2612:
case 1135:
case 1771:
case 2664:
case 2626:
case 2874:
case 3886:
case 3469:
case 2436:
case 2502:
case 2852:
case 1086:
case 3970:
case 746:
case 11:
case 2833:
case 3327:
case 3761:
case 1282:
case 935:
case 688:
case 2441:
case 304:
case 3449:
case 2694:
case 695:
case 2769:
case 2146:
case 159:
case 2775:
case 2982:
case 1798:
case 3741:
case 3956:
case 306:
case 673:
case 3791:
case 3586:
case 167:
case 2552:
case 154:
case 2196:
case 930:
case 387:
case 2644:
case 1723:
case 1837:
case 310:
case 1902:
case 3357:
case 3637:
case 2172:
case 1365:
case 2413:
case 2154:
case 2822:
case 84:
case 736:
case 3682:
case 2274:
case 3994:
case 2336:
case 2056:
case 3082:
case 2233:
case 3375:
case 2890:
case 124:
case 1974:
case 734:
case 315:
case 2727:
case 2361:
case 1952:
case 831:
case 294:
case 1732:
case 1933:
case 126:
case 2104:
case 2522:
case 1787:
case 447:
case 2860:
case 3964:
case 299:
case 3399:
case 111:
case 4045:
case 538:
case 553:
case 1332:
case 1052:
case 1633:
case 264:
case 2469:
case 2970:
case 2139:
case 2475:
case 3502:
case 3852:
case 1544:
case 3833:
case 616:
case 2483:
case 1100:
case 1674:
case 774:
case 3290:
case 871:
case 1795:
case 3441:
case 1033:
case 2761:
case 4053:
case 662:
case 3216:
case 578:
case 3064:
case 3612:
case 779:
case 1864:
case 65:
case 1387:
case 3799:
case 1812:
case 1423:
case 3626:
case 269:
case 1468:
case 1002:
case 2791:
case 3937:
case 619:
case 1844:
case 3802:
case 3196:
case 212:
case 1206:
case 1602:
case 1303:
case 3769:
case 1270:
case 3694:
case 2736:
case 3478:
case 1564:
case 1717:
case 3146:
case 1526:
case 3783:
case 614:
case 3982:
case 3131:
case 776:
case 2956:
case 3461:
case 2407:
case 3252:
case 1690:
case 633:
case 1398:
case 2369:
case 3336:
case 1090:
case 3056:
case 1506:
case 3890:
case 1856:
case 2082:
case 3233:
case 210:
case 4023:
case 1323:
case 3816:
case 1640:
case 1022:
case 4048:
case 2637:
case 1212:
case 1616:
case 3413:
case 53:
case 1192:
case 1244:
case 3860:
case 1371:
case 600:
case 1403:
case 2964:
case 1060:
case 1660:
case 227:
case 4068:
case 3006:
case 1556:
case 3590:
case 2912:
case 1806:
case 2713:
case 87:
case 3540:
case 1120:
case 3070:
case 1870:
case 2307:
case 3727:
case 541:
case 975:
case 993:
case 3522:
case 3670:
case 62:
case 3378:
case 3827:
case 1978:
case 638:
case 404:
case 3177:
case 134:
case 1027:
case 1115:
case 2333:
case 2053:
case 819:
case 2632:
case 3283:
case 2653:
case 1627:
case 2352:
case 2995:
case 464:
case 3386:
case 2374:
case 2108:
case 2241:
case 2291:
case 2087:
case 1279:
case 1437:
case 3760:
case 88:
case 814:
case 2813:
case 3971:
case 922:
case 980:
case 1245:
case 528:
case 337:
case 2979:
case 1991:
case 2003:
case 3722:
case 3923:
case 816:
case 3299:
case 843:
case 671:
case 3249:
case 2278:
case 3998:
case 2513:
case 1197:
case 998:
case 1069:
case 2390:
case 1075:
case 558:
case 2474:
case 3486:
case 925:
case 3869:
case 1683:
case 648:
case 860:
case 3599:
case 2163:
case 1675:
case 786:
case 67:
case 2098:
case 3903:
case 1744:
case 2578:
case 3065:
case 149:
case 1879:
case 1657:
case 2048:
case 573:
case 3549:
case 1129:
case 2316:
case 1595:
case 3679:
case 982:
case 4037:
case 754:
case 2340:
case 917:
case 707:
case 789:
case 1699:
case 2068:
case 3987:
case 2193:
case 2541:
case 865:
case 1913:
case 1712:
case 1099:
case 756:
case 1049:
case 1579:
case 2786:
case 2128:
case 3849:
case 1565:
case 113:
case 415:
case 590:
case 881:
case 1895:
case 3181:
case 146:
case 3733:
case 71:
case 3897:
case 1281:
case 3005:
case 812:
case 3963:
case 798:
case 2442:
case 2925:
case 443:
case 2818:
case 145:
case 2420:
case 416:
case 2501:
case 2851:
case 3567:
case 1973:
case 2011:
case 3559:
case 2630:
case 2338:
case 2058:
case 3288:
case 780:
case 1047:
case 2492:
case 2350:
case 421:
case 2030:
case 1985:
case 866:
case 594:
case 2611:
case 1480:
case 929:
case 419:
case 3597:
case 271:
case 2376:
case 3335:
case 1921:
case 1667:
case 2273:
case 1819:
case 1067:
case 3993:
case 761:
case 2518:
case 2187:
case 3019:
case 869:
case 2132:
case 1615:
case 3859:
case 3677:
case 2981:
case 3509:
case 1704:
case 3943:
case 3742:
case 2462:
case 33:
case 750:
case 3720:
case 2300:
case 1659:
case 2414:
case 3077:
case 414:
case 48:
case 433:
case 2573:
case 2320:
case 135:
case 405:
case 1881:
case 3700:
case 752:
case 2628:
case 3081:
case 1205:
case 3195:
case 827:
case 383:
case 3529:
case 2534:
case 2977:
case 3681:
case 2028:
case 2585:
case 2643:
case 2218:
case 465:
case 142:
case 2693:
case 677:
case 956:
case 3209:
case 1380:
case 1199:
case 2821:
case 1525:
case 1088:
case 3247:
case 2919:
case 3776:
case 331:
case 1901:
case 481:
case 3888:
case 815:
case 720:
case 3958:
case 1629:
case 400:
case 130:
case 1581:
case 954:
case 1157:
case 907:
case 3911:
case 717:
case 353:
case 3829:
case 2148:
case 2201:
case 460:
case 1219:
case 1183:
case 1731:
case 34:
case 3259:
case 2198:
case 2521:
case 1710:
case 42:
case 1825:
case 2089:
case 1951:
case 1277:
case 3215:
case 810:
case 725:
case 1439:
case 1746:
case 604:
case 3646:
case 1443:
case 3031:
case 243:
case 1831:
case 1204:
case 3194:
case 438:
case 3610:
case 168:
case 3220:
case 2535:
case 3576:
case 2397:
case 1810:
case 2347:
case 1638:
case 202:
case 4030:
case 772:
case 1896:
case 3850:
case 3500:
case 2972:
case 25:
case 3838:
case 1566:
case 1311:
case 4011:
case 2488:
case 1650:
case 609:
case 3729:
case 4058:
case 2721:
case 358:
case 1272:
case 3301:
case 1531:
case 3473:
case 612:
case 3788:
case 3164:
case 3485:
case 2835:
case 1076:
case 2429:
case 1510:
case 979:
case 373:
case 1463:
case 3624:
case 974:
case 1000:
case 3550:
case 1596:
case 2315:
case 1133:
case 1824:
case 1489:
case 3538:
case 1152:
case 1174:
case 3066:
case 3214:
case 666:
case 3024:
case 4008:
case 1231:
case 1804:
case 1554:
case 3759:
case 4028:
case 3004:
case 2924:
case 1210:
case 47:
case 2966:
case 3451:
case 1020:
case 205:
case 1642:
case 3604:
case 1343:
case 4043:
case 448:
case 3715:
case 1246:
case 775:
case 2388:
case 3250:
case 1411:
case 1755:
case 1458:
case 2409:
case 1092:
case 3767:
case 3514:
case 1935:
case 2447:
case 2701:
case 610:
case 2080:
case 3892:
case 3238:
case 1160:
case 1854:
case 3054:
case 627:
case 3334:
case 260:
case 1872:
case 1116:
case 2284:
case 2137:
case 2235:
case 3672:
case 1140:
case 3520:
case 770:
case 1614:
case 3200:
case 3862:
case 3156:
case 1190:
case 4089:
case 3797:
case 1705:
case 2931:
case 2459:
case 877:
case 3814:
case 1363:
case 2751:
case 1662:
case 1266:
case 3592:
case 2096:
case 2421:
case 3954:
case 117:
case 1539:
case 3488:
case 3785:
case 2838:
case 2292:
case 2144:
case 949:
case 1280:
case 343:
case 288:
case 1481:
case 3535:
case 1789:
case 1914:
case 2220:
case 2046:
case 4005:
case 1942:
case 3904:
case 2624:
case 43:
case 703:
case 2262:
case 1377:
case 763:
case 2538:
case 577:
case 2066:
case 3359:
case 1728:
case 1425:
case 3039:
case 1635:
case 2301:
case 3721:
case 3367:
case 4019:
case 1319:
case 1684:
case 2473:
case 1084:
case 2126:
case 2788:
case 120:
case 1992:
case 1035:
case 2250:
case 122:
case 2562:
case 101:
case 939:
case 381:
case 2238:
case 161:
case 3080:
case 2842:
case 696:
case 365:
case 1708:
case 847:
case 2170:
case 2939:
case 2604:
case 333:
case 3924:
case 2820:
case 4081:
case 32:
case 198:
case 694:
case 351:
case 2797:
case 3931:
case 44:
case 1580:
case 936:
case 2592:
case 3415:
case 3718:
case 2385:
case 3329:
case 1758:
case 2709:
case 2054:
case 292:
case 1950:
case 1730:
case 2654:
case 3284:
case 1938:
case 2520:
case 2672:
case 2373:
case 180:
case 3137:
case 1419:
case 2559:
case 3221:
case 997:
case 241:
case 515:
case 3338:
case 490:
case 1811:
case 3058:
case 3492:
case 3658:
case 1929:
case 2288:
case 170:
case 3611:
case 2847:
case 1618:
case 1310:
case 223:
case 4010:
case 3442:
case 4046:
case 1651:
case 2963:
case 1331:
case 3818:
case 2567:
case 3501:
case 1228:
case 2989:
case 1263:
case 3981:
case 3132:
case 1808:
case 1366:
case 495:
case 193:
case 2943:
case 2742:
case 3300:
case 2928:
case 473:
case 23:
case 2547:
case 3153:
case 2077:
case 1472:
case 371:
case 3273:
case 1113:
case 3518:
case 3187:
case 1001:
case 3285:
case 2792:
case 458:
case 2993:
case 2019:
case 1988:
case 637:
case 3551:
case 1780:
case 3234:
case 791:
case 3171:
case 3955:
case 1496:
case 3693:
case 3821:
case 1258:
case 566:
case 1563:
case 894:
case 231:
case 1230:
case 506:
case 2776:
case 1893:
case 2247:
case 3919:
case 1967:
case 3735:
case 2700:
case 3628:
case 37:
case 1431:
case 3320:
case 283:
case 2195:
case 1828:
case 3534:
case 3251:
case 899:
case 587:
case 1915:
case 428:
case 1178:
case 3028:
case 3218:
case 512:
case 1739:
case 3342:
case 24:
case 3063:
case 1997:
case 2625:
case 708:
case 918:
case 3198:
case 3521:
case 509:
case 3689:
case 768:
case 2025:
case 1466:
case 1889:
case 172:
case 2750:
case 2958:
case 3873:
case 2911:
case 647:
case 1073:
case 253:
case 3123:
case 564:
case 3201:
case 3148:
case 2165:
case 1372:
case 2738:
case 2435:
case 2179:
case 4054:
case 3885:
case 2828:
case 2410:
case 3149:
case 1529:
case 2178:
case 2446:
case 2739:
case 2304:
case 904:
case 3881:
case 335:
case 676:
case 78:
case 183:
case 450:
case 2161:
case 1195:
case 811:
case 3205:
case 1297:
case 1776:
case 422:
case 3088:
case 3525:
case 2621:
case 2967:
case 909:
case 719:
case 1888:
case 3901:
case 826:
case 2211:
case 2496:
case 969:
case 3199:
case 2528:
case 2085:
case 2191:
case 1484:
case 1829:
case 1165:
case 2372:
case 1435:
case 3219:
case 2947:
case 679:
case 3581:
case 3796:
case 824:
case 330:
case 3629:
case 2073:
case 480:
case 455:
case 721:
case 912:
case 702:
case 3255:
case 3918:
case 2136:
case 2593:
case 3169:
case 3825:
case 3710:
case 829:
case 1025:
case 3439:
case 3746:
case 1588:
case 906:
case 716:
case 3183:
case 178:
case 1259:
case 743:
case 3697:
case 2051:
case 2331:
case 1567:
case 1714:
case 2018:
case 1989:
case 2243:
case 751:
case 425:
case 2346:
case 2404:
case 72:
case 1963:
case 854:
case 2651:
case 1005:
case 1762:
case 3609:
case 2396:
case 332:
case 1515:
case 270:
case 2929:
case 1847:
case 700:
case 2830:
case 1559:
case 141:
case 760:
case 3009:
case 340:
case 1792:
case 1229:
case 1867:
case 781:
case 3505:
case 4084:
case 3855:
case 1619:
case 420:
case 81:
case 4035:
case 1055:
case 3877:
case 1928:
case 2289:
case 889:
case 1720:
case 275:
case 40:
case 733:
case 3015:
case 1509:
case 1859:
case 3615:
case 765:
case 2558:
case 293:
case 46:
case 3059:
case 1170:
case 1939:
case 3642:
case 1451:
case 879:
case 1418:
case 3246:
case 250:
case 3777:
case 3:
case 2381:
case 1842:
case 624:
case 2708:
case 39:
case 3620:
case 3042:
case 2900:
case 1004:
case 1759:
case 2880:
case 3430:
case 1321:
case 1767:
case 1892:
case 3984:
case 1562:
case 3411:
case 201:
case 3296:
case 1250:
case 874:
case 3692:
case 3393:
case 771:
case 3458:
case 472:
case 1401:
case 1747:
case 280:
case 1520:
case 3140:
case 1672:
case 1385:
case 3504:
case 876:
case 3122:
case 3854:
case 1072:
case 2455:
case 192:
case 1709:
case 1054:
case 3662:
case 2580:
case 1814:
case 738:
case 539:
case 3224:
case 2239:
case 3389:
case 3190:
case 1156:
case 1862:
case 1200:
case 298:
case 3614:
case 2325:
case 3705:
case 368:
case 1010:
case 1046:
case 3428:
case 3810:
case 1576:
case 4051:
case 1031:
case 1646:
case 1610:
case 684:
case 4018:
case 3204:
case 3831:
case 546:
case 3102:
case 3311:
case 1838:
case 1292:
case 3358:
case 513:
case 1729:
case 190:
case 2280:
case 1696:
case 1096:
case 3050:
case 1421:
case 217:
case 1850:
case 3896:
case 667:
case 2084:
case 1980:
case 1164:
case 544:
case 3546:
case 1126:
case 1788:
case 1434:
case 2992:
case 1876:
case 4001:
case 1301:
case 654:
case 1473:
case 3676:
case 391:
case 2839:
case 3489:
case 3866:
case 493:
case 3308:
case 2920:
case 195:
case 1066:
case 3600:
case 2425:
case 2186:
case 3174:
case 2942:
case 3000:
case 475:
case 1624:
case 77:
case 252:
case 3781:
case 2430:
case 2092:
case 3880:
case 1447:
case 3976:
case 846:
case 4088:
case 1388:
case 697:
case 301:
case 1680:
case 2755:
case 2692:
case 2393:
case 2020:
case 1924:
case 2343:
case 2642:
case 2777:
case 2246:
case 350:
case 73:
case 2804:
case 2328:
case 3708:
case 2620:
case 1497:
case 2572:
case 1751:
case 2662:
case 3239:
case 3477:
case 2266:
case 2014:
case 2614:
case 12:
case 2389:
case 1459:
case 430:
case 1284:
case 3419:
case 937:
case 3711:
case 844:
case 2122:
case 3950:
case 1329:
case 160:
case 1488:
case 3539:
case 162:
case 3280:
case 2493:
case 1347:
case 4047:
case 317:
case 2330:
case 1954:
case 2050:
case 2896:
case 382:
case 1773:
case 15:
case 2846:
case 325:
case 3789:
case 3305:
case 2428:
case 778:
case 445:
case 3763:
case 74:
case 2831:
case 3481:
case 2152:
case 3839:
case 1039:
case 2600:
case 4059:
case 3728:
case 36:
case 2308:
case 3920:
case 30:
case 2463:
case 618:
case 1904:
case 3743:
case 3377:
case 352:
case 839:
case 2133:
case 4015:
case 119:
case 2546:
case 2076:
case 3084:
case 576:
case 834:
case 731:
case 1429:
case 3035:
case 2510:
case 1367:
case 4067:
case 440:
case 3635:
case 291:
case 2254:
case 947:
case 3684:
case 3319:
case 3893:
case 1168:
case 586:
case 3589:
case 1438:
case 3967:
case 1093:
case 1693:
case 3021:
case 1450:
case 242:
case 1955:
case 2199:
case 3563:
case 3915:
case 2149:
case 1251:
case 1342:
case 4042:
case 1218:
case 3304:
case 1643:
case 49:
case 1320:
case 235:
case 3431:
case 3959:
case 2107:
case 4:
case 148:
case 2205:
case 773:
case 3593:
case 3136:
case 1663:
case 3424:
case 3889:
case 3466:
case 2175:
case 2951:
case 1362:
case 4062:
case 2439:
case 897:
case 1400:
case 2183:
case 3997:
case 2731:
case 613:
case 1689:
case 3863:
case 3141:
case 1314:
case 788:
case 1198:
case 1476:
case 3673:
case 1834:
case 3085:
case 3354:
case 2029:
case 51:
case 3947:
case 230:
case 2581:
case 3909:
case 2255:
case 3685:
case 3543:
case 1123:
case 3073:
case 2609:
case 1492:
case 1350:
case 2577:
case 4050:
case 3830:
case 2985:
case 3293:
case 3858:
case 818:
case 1011:
case 2772:
case 1221:
case 2973:
case 3508:
case 639:
case 1630:
case 2754:
case 2009:
case 3811:
case 4038:
case 1338:
case 2519:
case 3051:
case 245:
case 1420:
case 3331:
case 1851:
case 3228:
case 511:
case 2555:
case 3618:
case 2805:
case 996:
case 2097:
case 2281:
case 3651:
case 3404:
case 375:
case 1608:
case 2659:
case 4000:
case 1300:
case 1414:
case 2225:
case 2015:
case 2615:
case 2339:
case 2059:
case 2704:
case 1008:
case 3324:
case 3511:
case 1462:
case 2819:
case 1285:
case 240:
case 3001:
case 1234:
case 491:
case 3988:
case 4076:
case 171:
case 1376:
case 3472:
case 2855:
case 3113:
case 2667:
case 3454:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743955201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,];
var gg_b = "1743955201/";

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
