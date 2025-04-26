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
case 3892:
case 2302:
case 2813:
case 1145:
case 2620:
case 3846:
case 1971:
case 3157:
case 1133:
case 234:
case 4068:
case 716:
case 2123:
case 3446:
case 393:
case 340:
case 3793:
case 3496:
case 3652:
case 1619:
case 288:
case 3377:
case 1162:
case 3382:
case 919:
case 2247:
case 1630:
case 2846:
case 3620:
case 1229:
case 99:
case 256:
case 280:
case 1725:
case 339:
case 2157:
case 2465:
case 2892:
case 192:
case 3585:
case 227:
case 2842:
case 2896:
case 348:
case 595:
case 2386:
case 2656:
case 2492:
case 3297:
case 2071:
case 17:
case 2382:
case 2735:
case 2239:
case 52:
case 2793:
case 2210:
case 2496:
case 1255:
case 2611:
case 3751:
case 1791:
case 2314:
case 2507:
case 2867:
case 1613:
case 3233:
case 1073:
case 3784:
case 1257:
case 2419:
case 3528:
case 602:
case 2129:
case 1741:
case 1524:
case 819:
case 2737:
case 2430:
case 3576:
case 1139:
case 1110:
case 3572:
case 639:
case 135:
case 3587:
case 1646:
case 2784:
case 2233:
case 160:
case 3964:
case 2295:
case 966:
case 440:
case 493:
case 3507:
case 1692:
case 1456:
case 2749:
case 3737:
case 769:
case 1642:
case 1696:
case 3375:
case 3129:
case 640:
case 693:
case 3155:
case 89:
case 3534:
case 2576:
case 456:
case 480:
case 1665:
case 2980:
case 627:
case 2131:
case 2973:
case 2587:
case 1064:
case 1708:
case 2266:
case 825:
case 3819:
case 3068:
case 680:
case 2572:
case 2122:
case 2451:
case 353:
case 3370:
case 3493:
case 3217:
case 3796:
case 2240:
case 3653:
case 106:
case 3792:
case 2688:
case 3746:
case 900:
case 3443:
case 2851:
case 2303:
case 2812:
case 3893:
case 1571:
case 331:
case 3835:
case 1660:
case 2985:
case 1132:
case 1261:
case 2627:
case 3843:
case 2742:
case 1649:
case 3641:
case 14:
case 2435:
case 1085:
case 3451:
case 46:
case 1459:
case 2217:
case 1825:
case 911:
case 2443:
case 3358:
case 3126:
case 3691:
case 66:
case 18:
case 1174:
case 2835:
case 296:
case 908:
case 2893:
case 378:
case 3812:
case 3303:
case 1425:
case 2843:
case 3816:
case 3985:
case 2765:
case 3024:
case 3263:
case 478:
case 1028:
case 3899:
case 2309:
case 2460:
case 3987:
case 1891:
case 1888:
case 3972:
case 3625:
case 3884:
case 678:
case 1720:
case 1427:
case 1651:
case 1612:
case 2437:
case 1398:
case 3161:
case 3232:
case 1441:
case 1169:
case 3389:
case 1348:
case 1491:
case 2038:
case 3344:
case 761:
case 3236:
case 1076:
case 3484:
case 3837:
case 1408:
case 1938:
case 963:
case 567:
case 3934:
case 2625:
case 696:
case 1007:
case 2972:
case 882:
case 1222:
case 2884:
case 3309:
case 1853:
case 1140:
case 1301:
case 2161:
case 3730:
case 3907:
case 2389:
case 453:
case 670:
case 1711:
case 1693:
case 1752:
case 2659:
case 2344:
case 811:
case 653:
case 3038:
case 775:
case 2484:
case 1643:
case 1034:
case 518:
case 1453:
case 3274:
case 470:
case 3517:
case 441:
case 804:
case 2540:
case 2997:
case 641:
case 1931:
case 2029:
case 1401:
case 2590:
case 3360:
case 3939:
case 3409:
case 2844:
case 3775:
case 3031:
case 1271:
case 1670:
case 481:
case 2494:
case 2921:
case 2489:
case 519:
case 2349:
case 2055:
case 2654:
case 2168:
case 681:
case 514:
case 1801:
case 3569:
case 1718:
case 832:
case 2384:
case 2444:
case 474:
case 175:
case 1898:
case 3540:
case 3997:
case 525:
case 2517:
case 2304:
case 1327:
case 2910:
case 1955:
case 3844:
case 3029:
case 2360:
case 2409:
case 1848:
case 3947:
case 3590:
case 3489:
case 3349:
case 1481:
case 2337:
case 1929:
case 2031:
case 3921:
case 4057:
case 3384:
case 1658:
case 572:
case 1164:
case 1097:
case 2714:
case 3168:
case 297:
case 2809:
case 2569:
case 2393:
case 4055:
case 3563:
case 3312:
case 3280:
case 3057:
case 2335:
case 3681:
case 3648:
case 2343:
case 3966:
case 2786:
case 1644:
case 3403:
case 3933:
case 3706:
case 241:
case 1066:
case 3532:
case 1854:
case 2601:
case 2200:
case 909:
case 3536:
case 3858:
case 1062:
case 379:
case 3171:
case 2883:
case 381:
case 2280:
case 2057:
case 2681:
case 697:
case 2698:
case 2312:
case 2803:
case 82:
case 3393:
case 895:
case 1522:
case 2458:
case 3343:
case 2273:
case 1923:
case 2648:
case 566:
case 2316:
case 1268:
case 2532:
case 2403:
case 2933:
case 3515:
case 274:
case 3870:
case 74:
case 2536:
case 1578:
case 623:
case 2945:
case 2702:
case 1609:
case 3200:
case 3124:
case 768:
case 1686:
case 1128:
case 1418:
case 4078:
case 1311:
case 630:
case 3475:
case 2285:
case 357:
case 1682:
case 1961:
case 2789:
case 2597:
case 2940:
case 3814:
case 671:
case 1069:
case 8:
case 2547:
case 1176:
case 2138:
case 1531:
case 4026:
case 684:
case 818:
case 2124:
case 489:
case 1781:
case 3794:
case 689:
case 955:
case 4050:
case 2319:
case 2475:
case 582:
case 1320:
case 2061:
case 2709:
case 3597:
case 1602:
case 665:
case 2205:
case 2814:
case 2539:
case 760:
case 3990:
case 164:
case 508:
case 1134:
case 1606:
case 55:
case 2510:
case 2207:
case 3932:
case 3402:
case 3595:
case 349:
case 2886:
case 344:
case 2877:
case 2026:
case 3703:
case 1557:
case 3406:
case 3228:
case 116:
case 2882:
case 271:
case 1224:
case 1063:
case 3802:
case 2392:
case 1036:
case 1754:
case 703:
case 389:
case 2346:
case 2618:
case 3272:
case 2770:
case 1032:
case 3566:
case 2342:
case 3287:
case 3050:
case 249:
case 2533:
case 77:
case 2932:
case 4061:
case 2402:
case 3207:
case 1185:
case 3365:
case 901:
case 2545:
case 1978:
case 3026:
case 3877:
case 2936:
case 967:
case 2406:
case 3234:
case 330:
case 3486:
case 3783:
case 3618:
case 2963:
case 792:
case 2758:
case 3392:
case 1926:
case 2562:
case 2313:
case 426:
case 918:
case 3342:
case 2287:
case 284:
case 626:
case 2272:
case 457:
case 2566:
case 2806:
case 3396:
case 1785:
case 3298:
case 2471:
case 198:
case 1336:
case 1244:
case 2092:
case 2378:
case 3013:
case 3525:
case 342:
case 3673:
case 733:
case 3248:
case 308:
case 978:
case 3559:
case 2871:
case 2664:
case 2158:
case 3170:
case 751:
case 2201:
case 183:
case 4019:
case 3042:
case 4030:
case 1965:
case 970:
case 242:
case 2248:
case 1374:
case 2013:
case 3103:
case 176:
case 3378:
case 2183:
case 1946:
case 1593:
case 2559:
case 190:
case 1879:
case 3664:
case 208:
case 1535:
case 463:
case 1668:
case 3326:
case 794:
case 1992:
case 3201:
case 1705:
case 1209:
case 1942:
case 3600:
case 3065:
case 1543:
case 2724:
case 571:
case 1464:
case 3194:
case 1919:
case 3952:
case 3067:
case 3911:
case 2588:
case 1198:
case 1181:
case 1400:
case 1930:
case 4065:
case 1369:
case 4042:
case 1052:
case 3019:
case 2109:
case 3868:
case 3508:
case 1671:
case 1864:
case 1270:
case 3679:
case 2527:
case 4046:
case 1056:
case 4092:
case 1560:
case 1800:
case 3738:
case 565:
case 2144:
case 831:
case 682:
case 538:
case 1880:
case 2468:
case 3588:
case 3591:
case 65:
case 1020:
case 2361:
case 1599:
case 2189:
case 1584:
case 2194:
case 2952:
case 482:
case 3920:
case 96:
case 2030:
case 1772:
case 642:
case 2019:
case 1340:
case 1101:
case 2508:
case 2868:
case 584:
case 162:
case 1776:
case 1390:
case 2738:
case 411:
case 3527:
case 777:
case 1912:
case 2607:
case 1513:
case 2323:
case 1916:
case 1885:
case 1624:
case 325:
case 791:
case 3186:
case 4084:
case 2106:
case 2634:
case 214:
case 2218:
case 1395:
case 2043:
case 3676:
case 988:
case 1345:
case 2102:
case 3012:
case 3687:
case 4049:
case 1059:
case 3925:
case 2035:
case 2771:
case 219:
case 3607:
case 2182:
case 29:
case 1405:
case 956:
case 980:
case 4060:
case 1935:
case 186:
case 1993:
case 1546:
case 173:
case 927:
case 4004:
case 523:
case 3323:
case 225:
case 1638:
case 1805:
case 3043:
case 940:
case 466:
case 272:
case 1214:
case 2016:
case 3634:
case 3218:
case 1779:
case 2672:
case 2357:
case 3035:
case 3771:
case 2051:
case 2687:
case 2099:
case 4043:
case 1286:
case 619:
case 1807:
case 3908:
case 3438:
case 728:
case 2084:
case 802:
case 4035:
case 1960:
case 888:
case 1277:
case 2049:
case 581:
case 2175:
case 1834:
case 2329:
case 839:
case 1700:
case 3556:
case 1937:
case 1407:
case 834:
case 3768:
case 1530:
case 848:
case 2424:
case 2991:
case 3511:
case 512:
case 3552:
case 541:
case 2438:
case 893:
case 4016:
case 1773:
case 1476:
case 266:
case 472:
case 2037:
case 1472:
case 4012:
case 3355:
case 4051:
case 1041:
case 3927:
case 3685:
case 1487:
case 1780:
case 3824:
case 880:
case 579:
case 1949:
case 625:
case 1027:
case 129:
case 3175:
case 2060:
case 1321:
case 1118:
case 827:
case 425:
case 1872:
case 2552:
case 2004:
case 574:
case 3988:
case 69:
case 3829:
case 3633:
case 4058:
case 1048:
case 737:
case 3044:
case 830:
case 2338:
case 3167:
case 355:
case 2431:
case 3645:
case 3094:
case 3455:
case 1098:
case 1111:
case 610:
case 2518:
case 3119:
case 1989:
case 3130:
case 3662:
case 3998:
case 3981:
case 578:
case 1156:
case 1847:
case 871:
case 1328:
case 128:
case 715:
case 418:
case 2695:
case 926:
case 889:
case 1292:
case 724:
case 570:
case 1246:
case 2829:
case 1334:
case 1296:
case 1410:
case 1717:
case 957:
case 2455:
case 1120:
case 255:
case 3431:
case 3901:
case 1439:
case 1307:
case 1769:
case 849:
case 2662:
case 2429:
case 601:
case 3009:
case 2666:
case 865:
case 467:
case 1575:
case 2324:
case 3831:
case 1623:
case 1839:
case 2948:
case 401:
case 2220:
case 1970:
case 1586:
case 2621:
case 758:
case 2:
case 1305:
case 70:
case 2954:
case 2192:
case 3113:
case 3726:
case 367:
case 2857:
case 301:
case 1983:
case 3778:
case 136:
case 318:
case 930:
case 191:
case 1774:
case 3083:
case 3070:
case 2165:
case 3610:
case 3252:
case 1219:
case 2457:
case 949:
case 1833:
case 3621:
case 310:
case 1466:
case 3857:
case 2113:
case 1845:
case 746:
case 267:
case 655:
case 1495:
case 826:
case 2083:
case 3697:
case 773:
case 1903:
case 1736:
case 1433:
case 1054:
case 159:
case 1866:
case 1506:
case 3457:
case 4094:
case 56:
case 2211:
case 1655:
case 455:
case 857:
case 154:
case 2639:
case 2823:
case 3647:
case 1732:
case 4089:
case 750:
case 534:
case 1840:
case 3581:
case 609:
case 2199:
case 1589:
case 4006:
case 841:
case 2918:
case 105:
case 3548:
case 2461:
case 4002:
case 2149:
case 3137:
case 1747:
case 1440:
case 3160:
case 32:
case 632:
case 1380:
case 2731:
case 3755:
case 432:
case 3636:
case 3104:
case 2674:
case 1373:
case 2861:
case 2501:
case 502:
case 1364:
case 3184:
case 3918:
case 762:
case 2598:
case 177:
case 923:
case 1469:
case 2548:
case 1300:
case 1141:
case 879:
case 3461:
case 3149:
case 2729:
case 1622:
case 2755:
case 1127:
case 2259:
case 4077:
case 2632:
case 1739:
case 3075:
case 1235:
case 2160:
case 1509:
case 1869:
case 3674:
case 593:
case 3861:
case 1678:
case 2104:
case 3077:
case 1237:
case 151:
case 1415:
case 981:
case 4075:
case 1379:
case 3617:
case 2450:
case 1125:
case 2757:
case 4014:
case 2690:
case 1474:
case 2288:
case 2291:
case 3723:
case 3208:
case 204:
case 2006:
case 1570:
case 1204:
case 1815:
case 941:
case 912:
case 1159:
case 2002:
case 3151:
case 3422:
case 1260:
case 11:
case 1982:
case 1661:
case 199:
case 1503:
case 1863:
case 2371:
case 3640:
case 695:
case 1745:
case 2086:
case 2253:
case 3690:
case 790:
case 3288:
case 3291:
case 332:
case 1795:
case 62:
case 897:
case 194:
case 2478:
case 1733:
case 2822:
case 3143:
case 1766:
case 1463:
case 1832:
case 304:
case 823:
case 2116:
case 1762:
case 2669:
case 979:
case 2878:
case 3193:
case 2112:
case 2151:
case 2422:
case 3227:
case 3856:
case 1467:
case 3147:
case 3665:
case 2139:
case 3000:
case 2110:
case 51:
case 1534:
case 2727:
case 1819:
case 403:
case 937:
case 268:
case 3708:
case 1830:
case 3223:
case 3692:
case 3456:
case 1867:
case 2791:
case 1314:
case 217:
case 1964:
case 3318:
case 915:
case 3646:
case 3411:
case 4079:
case 2257:
case 1419:
case 551:
case 3452:
case 1900:
case 1737:
case 3642:
case 2524:
case 80:
case 2741:
case 3110:
case 2000:
case 2856:
case 1262:
case 3139:
case 1576:
case 929:
case 2223:
case 1973:
case 2811:
case 492:
case 1572:
case 2852:
case 1784:
case 2646:
case 2318:
case 3820:
case 2968:
case 2456:
case 2692:
case 846:
case 67:
case 1295:
case 599:
case 1749:
case 1245:
case 3524:
case 3741:
case 47:
case 2411:
case 2452:
case 3257:
case 1413:
case 815:
case 417:
case 2619:
case 3759:
case 1712:
case 188:
case 4080:
case 958:
case 2079:
case 90:
case 2630:
case 617:
case 37:
case 2145:
case 1302:
case 1813:
case 139:
case 2971:
case 435:
case 837:
case 1306:
case 203:
case 1585:
case 3166:
case 193:
case 1446:
case 744:
case 1492:
case 1505:
case 1865:
case 738:
case 1239:
case 749:
case 1071:
case 27:
case 3231:
case 3162:
case 1611:
case 1377:
case 1210:
case 1496:
case 1793:
case 180:
case 156:
case 2725:
case 1157:
case 3971:
case 2229:
case 829:
case 3145:
case 1892:
case 784:
case 3667:
case 1465:
case 3195:
case 127:
case 789:
case 577:
case 3133:
case 4064:
case 2250:
case 1719:
case 3711:
case 1804:
case 1215:
case 3635:
case 1907:
case 1437:
case 3568:
case 2491:
case 3756:
case 2348:
case 536:
case 3453:
case 2616:
case 3034:
case 3643:
case 1038:
case 3278:
case 1934:
case 1404:
case 3190:
case 2841:
case 3938:
case 1837:
case 3226:
case 3301:
case 2888:
case 1309:
case 1767:
case 4005:
case 2427:
case 2720:
case 2117:
case 3007:
case 1389:
case 4085:
case 3169:
case 1449:
case 3398:
case 2752:
case 3612:
case 3087:
case 3651:
case 1394:
case 1928:
case 3076:
case 1236:
case 3827:
case 1344:
case 962:
case 64:
case 3488:
case 3924:
case 1499:
case 723:
case 876:
case 3348:
case 2453:
case 1580:
case 843:
case 2938:
case 1849:
case 797:
case 3720:
case 1625:
case 1972:
case 3117:
case 3891:
case 1573:
case 3888:
case 68:
case 2140:
case 1987:
case 2853:
case 1899:
case 3859:
case 1812:
case 178:
case 821:
case 2571:
case 2136:
case 2604:
case 4028:
case 38:
case 2132:
case 3425:
case 3459:
case 1412:
case 1451:
case 1122:
case 1641:
case 34:
case 3649:
case 1240:
case 1691:
case 3354:
case 1290:
case 206:
case 1358:
case 2174:
case 990:
case 1835:
case 28:
case 1608:
case 3136:
case 3604:
case 1579:
case 1843:
case 2425:
case 3132:
case 3261:
case 1765:
case 3660:
case 1435:
case 1905:
case 1742:
case 3637:
case 779:
case 1217:
case 1370:
case 2085:
case 587:
case 862:
case 2684:
case 2354:
case 976:
case 306:
case 1792:
case 774:
case 1653:
case 2699:
case 537:
case 1870:
case 1023:
case 1515:
case 461:
case 2550:
case 112:
case 3268:
case 407:
case 2066:
case 805:
case 3609:
case 1200:
case 2854:
case 661:
case 2062:
case 2325:
case 3578:
case 607:
case 2957:
case 91:
case 951:
case 4010:
case 1470:
case 1393:
case 2045:
case 2359:
case 3526:
case 181:
case 1782:
case 1335:
case 4039:
case 3923:
case 2033:
case 2454:
case 1343:
case 770:
case 475:
case 877:
case 1933:
case 1403:
case 2578:
case 1171:
case 3062:
case 3325:
case 4021:
case 1858:
case 1702:
case 529:
case 1945:
case 675:
case 1681:
case 1698:
case 3689:
case 4047:
case 1280:
case 1057:
case 1351:
case 422:
case 3095:
case 1966:
case 313:
case 1648:
case 796:
case 1316:
case 994:
case 3033:
case 43:
case 3929:
case 613:
case 3498:
case 3481:
case 4045:
case 1489:
case 2353:
case 3448:
case 1654:
case 1168:
case 322:
case 63:
case 3097:
case 1444:
case 2683:
case 3658:
case 207:
case 3603:
case 2308:
case 1997:
case 905:
case 1540:
case 3881:
case 375:
case 261:
case 1590:
case 2180:
case 3021:
case 4062:
case 2931:
case 1844:
case 3955:
case 3327:
case 899:
case 1337:
case 1279:
case 3271:
case 1031:
case 2929:
case 2097:
case 2658:
case 3353:
case 546:
case 1569:
case 2448:
case 1809:
case 3801:
case 222:
case 2388:
case 2391:
case 573:
case 3173:
case 2898:
case 2881:
case 3308:
case 1304:
case 977:
case 2603:
case 1517:
case 2327:
case 1910:
case 586:
case 1409:
case 2848:
case 1939:
case 3180:
case 2036:
case 748:
case 2754:
case 3238:
case 3926:
case 1078:
case 1392:
case 3074:
case 1486:
case 130:
case 1396:
case 4017:
case 1477:
case 1770:
case 1482:
case 3015:
case 1342:
case 2105:
case 788:
case 3185:
case 1207:
case 1915:
case 1886:
case 2557:
case 521:
case 1877:
case 3978:
case 171:
case 828:
case 2063:
case 1963:
case 562:
case 1758:
case 189:
case 2074:
case 727:
case 3754:
case 1276:
case 959:
case 820:
case 1050:
case 954:
case 2015:
case 3105:
case 780:
case 1566:
case 2675:
case 184:
case 887:
case 485:
case 664:
case 1932:
case 464:
case 1545:
case 3063:
case 793:
case 740:
case 316:
case 138:
case 3557:
case 1936:
case 2978:
case 669:
case 847:
case 2701:
case 1940:
case 3602:
case 2187:
case 2172:
case 2069:
case 3606:
case 3134:
case 3555:
case 4063:
case 2531:
case 1990:
case 416:
case 598:
case 3748:
case 2356:
case 836:
case 891:
case 4036:
case 1744:
case 2686:
case 2352:
case 2677:
case 2311:
case 1794:
case 3107:
case 4032:
case 2320:
case 1061:
case 3818:
case 1917:
case 3701:
case 1814:
case 1709:
case 1367:
case 543:
case 2606:
case 947:
case 2134:
case 1510:
case 2555:
case 2529:
case 3128:
case 126:
case 1414:
case 920:
case 859:
case 576:
case 3356:
case 3961:
case 583:
case 1969:
case 1330:
case 1319:
case 987:
case 1475:
case 3311:
case 2040:
case 2011:
case 1109:
case 2504:
case 2270:
case 3772:
case 2671:
case 2317:
case 2734:
case 2056:
case 2283:
case 3258:
case 2800:
case 2560:
case 3390:
case 498:
case 3776:
case 3880:
case 1541:
case 1724:
case 2464:
case 3203:
case 2919:
case 3599:
case 2930:
case 2707:
case 2369:
case 2181:
case 3873:
case 3864:
case 3270:
case 676:
case 1679:
case 3671:
case 1868:
case 3011:
case 2101:
case 3967:
case 2787:
case 483:
case 3052:
case 1019:
case 2776:
case 2473:
case 3056:
case 2258:
case 3464:
case 163:
case 2203:
case 2728:
case 795:
case 1956:
case 1468:
case 490:
case 3400:
case 1189:
case 2599:
case 3198:
case 3181:
case 1361:
case 1911:
case 643:
case 690:
case 1067:
case 72:
case 1952:
case 2584:
case 3154:
case 3992:
case 2913:
case 3535:
case 1664:
case 1158:
case 390:
case 421:
case 2551:
case 2512:
case 1871:
case 732:
case 3996:
case 1322:
case 1600:
case 3705:
case 1201:
case 2785:
case 2289:
case 2294:
case 4052:
case 709:
case 383:
case 3479:
case 1471:
case 4011:
case 376:
case 906:
case 3374:
case 100:
case 4056:
case 1046:
case 290:
case 2879:
case 2946:
case 3363:
case 3512:
case 545:
case 2154:
case 2992:
case 108:
case 2535:
case 3516:
case 2209:
case 2942:
case 182:
case 2705:
case 952:
case 4020:
case 1170:
case 283:
case 94:
case 1350:
case 585:
case 1298:
case 3785:
case 662:
case 2374:
case 1248:
case 111:
case 142:
case 1013:
case 1525:
case 3244:
case 3336:
case 1329:
case 1175:
case 2834:
case 3027:
case 3202:
case 3949:
case 2700:
case 2937:
case 3887:
case 1991:
case 1988:
case 1424:
case 1114:
case 3999:
case 237:
case 968:
case 2530:
case 3984:
case 2519:
case 3206:
case 3872:
case 803:
case 2008:
case 2764:
case 935:
case 60:
case 658:
case 3091:
case 1099:
case 2053:
case 3773:
case 513:
case 2567:
case 215:
case 3397:
case 1824:
case 2960:
case 40:
case 1685:
case 1927:
case 53:
case 4059:
case 1355:
case 2277:
case 3472:
case 2876:
case 1605:
case 2027:
case 3700:
case 3937:
case 1556:
case 2202:
case 755:
case 673:
case 229:
case 2206:
case 892:
case 2984:
case 3519:
case 650:
case 3008:
case 3764:
case 2118:
case 686:
case 1511:
case 2872:
case 2887:
case 3530:
case 1953:
case 1768:
case 1004:
case 2476:
case 2773:
case 315:
case 3807:
case 2088:
case 2091:
case 3286:
case 166:
case 3434:
case 2041:
case 87:
case 1037:
case 646:
case 1331:
case 2780:
case 2347:
case 3960:
case 114:
case 2333:
case 346:
case 1106:
case 710:
case 3214:
case 1043:
case 3565:
case 1093:
case 2485:
case 615:
case 1771:
case 20:
case 258:
case 3275:
case 3779:
case 2912:
case 3546:
case 3993:
case 2951:
case 350:
case 386:
case 3935:
case 3405:
case 1607:
case 637:
case 3592:
case 868:
case 4008:
case 1323:
case 507:
case 2366:
case 437:
case 3943:
case 903:
case 561:
case 373:
case 1676:
case 2565:
case 701:
case 3395:
case 2214:
case 4091:
case 4088:
case 860:
case 2638:
case 2275:
case 2779:
case 1672:
case 97:
case 1012:
case 3345:
case 3059:
case 4041:
case 1051:
case 3485:
case 429:
case 2405:
case 19:
case 3513:
case 2546:
case 2993:
case 1959:
case 3912:
case 1177:
case 624:
case 250:
case 4027:
case 1186:
case 2596:
case 3366:
case 575:
case 125:
case 3885:
case 2542:
case 3054:
case 3903:
case 3736:
case 1697:
case 3502:
case 2774:
case 3732:
case 2230:
case 3445:
case 4081:
case 2715:
case 354:
case 3655:
case 2219:
case 1457:
case 3866:
case 1750:
case 3629:
case 628:
case 2267:
case 3462:
case 916:
case 428:
case 1954:
case 3845:
case 3763:
case 3466:
case 3958:
case 687:
case 1083:
case 2502:
case 391:
case 336:
case 2433:
case 2736:
case 2054:
case 725:
case 620:
case 254:
case 1211:
case 2655:
case 3715:
case 2866:
case 1610:
case 3219:
case 1639:
case 1823:
case 2385:
case 4001:
case 869:
case 2895:
case 3305:
case 1722:
case 2629:
case 3983:
case 101:
case 2958:
case 447:
case 167:
case 1726:
case 1113:
case 3582:
case 2421:
case 1009:
case 2152:
case 1518:
case 2111:
case 3001:
case 3769:
case 3514:
case 1761:
case 3265:
case 347:
case 3839:
case 1831:
case 2156:
case 3575:
case 491:
case 320:
case 506:
case 3246:
case 3292:
case 2497:
case 2213:
case 2790:
case 436:
case 2376:
case 3242:
case 2740:
case 387:
case 1901:
case 1431:
case 3120:
case 636:
case 2098:
case 3717:
case 3296:
case 2307:
case 3897:
case 2265:
case 969:
case 3989:
case 3421:
case 3152:
case 3111:
case 1855:
case 2575:
case 1666:
case 2810:
case 1948:
case 2623:
case 2839:
case 247:
case 766:
case 1324:
case 964:
case 3213:
case 3790:
case 2292:
case 4054:
case 459:
case 1695:
case 3048:
case 2246:
case 1829:
case 985:
case 2120:
case 1455:
case 2717:
case 2296:
case 1089:
case 3447:
case 1094:
case 2909:
case 3387:
case 104:
case 3463:
case 861:
case 1227:
case 605:
case 2977:
case 1193:
case 2583:
case 1554:
case 2982:
case 2661:
case 2260:
case 251:
case 3249:
case 1640:
case 2237:
case 2125:
case 1450:
case 93:
case 3284:
case 517:
case 3436:
case 132:
case 3795:
case 1291:
case 913:
case 2474:
case 477:
case 3986:
case 711:
case 1208:
case 1723:
case 2762:
case 31:
case 3874:
case 3260:
case 2558:
case 1151:
case 2836:
case 1878:
case 3583:
case 3159:
case 3125:
case 2863:
case 1082:
case 782:
case 3379:
case 1826:
case 3237:
case 2902:
case 2432:
case 1077:
case 2795:
case 1086:
case 3474:
case 560:
case 2299:
case 2733:
case 822:
case 2436:
case 2284:
case 3739:
case 2440:
case 2747:
case 3417:
case 3710:
case 1615:
case 3678:
case 2108:
case 1861:
case 1674:
case 2490:
case 2589:
case 3914:
case 907:
case 2840:
case 377:
case 61:
case 961:
case 503:
case 1184:
case 3364:
case 3622:
case 3975:
case 633:
case 1461:
case 2890:
case 3300:
case 2417:
case 1259:
case 3251:
case 499:
case 3380:
case 2235:
case 1160:
case 1632:
case 2739:
case 3108:
case 2509:
case 2869:
case 1636:
case 699:
case 2678:
case 922:
case 1663:
case 2364:
case 3153:
case 3589:
case 2914:
case 2188:
case 3840:
case 1137:
case 2300:
case 2141:
case 2469:
case 3890:
case 1729:
case 3721:
case 3544:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745632802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,];
var gg_b = "1745632802/";

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
