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
case 3495:
case 2506:
case 3779:
case 2757:
case 3002:
case 2563:
case 2157:
case 729:
case 3330:
case 1452:
case 2093:
case 2783:
case 2802:
case 3625:
case 627:
case 2256:
case 1474:
case 128:
case 3837:
case 2182:
case 298:
case 2866:
case 2620:
case 3892:
case 1271:
case 2971:
case 4022:
case 3003:
case 2037:
case 1130:
case 585:
case 1379:
case 526:
case 3066:
case 2803:
case 710:
case 3778:
case 2811:
case 189:
case 3507:
case 3528:
case 770:
case 1818:
case 3756:
case 3011:
case 1673:
case 2935:
case 2371:
case 2597:
case 3036:
case 523:
case 1235:
case 1356:
case 1048:
case 238:
case 3824:
case 4094:
case 2532:
case 2279:
case 1378:
case 3257:
case 1760:
case 2024:
case 1580:
case 2041:
case 3867:
case 345:
case 1672:
case 2339:
case 3426:
case 1238:
case 1794:
case 1077:
case 1045:
case 2368:
case 46:
case 1347:
case 1375:
case 537:
case 3923:
case 2662:
case 3696:
case 1859:
case 4060:
case 1194:
case 488:
case 372:
case 693:
case 840:
case 3775:
case 896:
case 2216:
case 3161:
case 1916:
case 1840:
case 1413:
case 3629:
case 636:
case 3394:
case 3525:
case 3922:
case 1815:
case 581:
case 4030:
case 50:
case 1401:
case 1722:
case 2851:
case 2464:
case 1204:
case 3116:
case 1614:
case 2338:
case 1876:
case 1680:
case 2427:
case 1572:
case 1975:
case 1331:
case 192:
case 2369:
case 1122:
case 2247:
case 2275:
case 2968:
case 836:
case 1723:
case 75:
case 3270:
case 3731:
case 2146:
case 1554:
case 3131:
case 341:
case 640:
case 893:
case 3607:
case 1123:
case 3628:
case 1234:
case 551:
case 2327:
case 1515:
case 3881:
case 1209:
case 1798:
case 29:
case 234:
case 12:
case 1619:
case 2909:
case 4000:
case 3243:
case 387:
case 1912:
case 2469:
case 2602:
case 1540:
case 2791:
case 171:
case 458:
case 207:
case 3693:
case 2025:
case 565:
case 3701:
case 701:
case 3020:
case 1913:
case 3398:
case 1416:
case 3101:
case 2666:
case 3692:
case 2820:
case 142:
case 1312:
case 1447:
case 1475:
case 1227:
case 2309:
case 2142:
case 2908:
case 1208:
case 2927:
case 3713:
case 413:
case 2439:
case 1854:
case 3326:
case 1199:
case 1901:
case 169:
case 2611:
case 78:
case 646:
case 1313:
case 1726:
case 917:
case 3494:
case 2636:
case 391:
case 843:
case 3291:
case 830:
case 405:
case 1576:
case 3624:
case 2503:
case 1952:
case 115:
case 713:
case 802:
case 3896:
case 555:
case 1555:
case 4026:
case 1659:
case 773:
case 3592:
case 3460:
case 2096:
case 3537:
case 3062:
case 3900:
case 175:
case 3829:
case 1478:
case 1953:
case 2905:
case 2863:
case 2990:
case 561:
case 1615:
case 335:
case 1205:
case 520:
case 2029:
case 468:
case 1987:
case 2:
case 3063:
case 2806:
case 1640:
case 3774:
case 962:
case 3787:
case 2536:
case 3300:
case 3187:
case 3395:
case 716:
case 3174:
case 602:
case 1676:
case 579:
case 3152:
case 2390:
case 1085:
case 508:
case 2305:
case 3286:
case 1353:
case 3807:
case 0:
case 1374:
case 159:
case 2511:
case 519:
case 3752:
case 2028:
case 2435:
case 401:
case 106:
case 919:
case 328:
case 3049:
case 3271:
case 3730:
case 746:
case 1596:
case 3130:
case 2849:
case 3453:
case 1066:
case 801:
case 908:
case 1495:
case 549:
case 2850:
case 2135:
case 2688:
case 2019:
case 253:
case 1960:
case 2382:
case 1002:
case 1179:
case 3819:
case 3050:
case 2735:
case 562:
case 1036:
case 3356:
case 1824:
case 3048:
case 300:
case 730:
case 961:
case 920:
case 3979:
case 1257:
case 2848:
case 2486:
case 145:
case 2521:
case 2765:
case 1360:
case 88:
case 1282:
case 1778:
case 2689:
case 2018:
case 402:
case 389:
case 2585:
case 4075:
case 4047:
case 1930:
case 3818:
case 209:
case 4061:
case 3673:
case 172:
case 2768:
case 263:
case 1775:
case 577:
case 1747:
case 2015:
case 3840:
case 3413:
case 1629:
case 2739:
case 2442:
case 430:
case 552:
case 1525:
case 1761:
case 3815:
case 1922:
case 1581:
case 112:
case 2168:
case 1175:
case 517:
case 2040:
case 676:
case 3238:
case 3045:
case 3077:
case 658:
case 2059:
case 2946:
case 3412:
case 2443:
case 702:
case 332:
case 3931:
case 3269:
case 3375:
case 616:
case 2877:
case 947:
case 3859:
case 2223:
case 605:
case 4079:
case 2589:
case 1498:
case 2685:
case 1731:
case 1270:
case 2621:
case 3554:
case 2644:
case 1131:
case 446:
case 2491:
case 1322:
case 2917:
case 2738:
case 3401:
case 613:
case 3876:
case 3858:
case 1716:
case 1051:
case 951:
case 3331:
case 858:
case 392:
case 3122:
case 1701:
case 2545:
case 2577:
case 1422:
case 131:
case 4074:
case 2108:
case 2942:
case 4053:
case 1999:
case 493:
case 2164:
case 3209:
case 997:
case 3234:
case 3515:
case 1423:
case 3088:
case 32:
case 3431:
case 1243:
case 610:
case 582:
case 4052:
case 2446:
case 371:
case 670:
case 3540:
case 2650:
case 1926:
case 3198:
case 2226:
case 888:
case 2109:
case 3726:
case 2417:
case 1494:
case 21:
case 496:
case 3872:
case 221:
case 1291:
case 3576:
case 1624:
case 2734:
case 1399:
case 27:
case 1998:
case 3312:
case 2054:
case 3089:
case 3618:
case 937:
case 904:
case 727:
case 3854:
case 3461:
case 2889:
case 3901:
case 3264:
case 369:
case 2073:
case 3953:
case 65:
case 3615:
case 3290:
case 3519:
case 283:
case 1593:
case 854:
case 740:
case 1063:
case 2550:
case 3640:
case 923:
case 3974:
case 3952:
case 3555:
case 427:
case 3659:
case 1592:
case 1460:
case 2200:
case 1062:
case 1537:
case 1995:
case 2610:
case 1900:
case 375:
case 654:
case 926:
case 3700:
case 1286:
case 1033:
case 3353:
case 3021:
case 1807:
case 985:
case 286:
case 1828:
case 3387:
case 2821:
case 3100:
case 2844:
case 2483:
case 736:
case 250:
case 2548:
case 1153:
case 3658:
case 3880:
case 1032:
case 1787:
case 4001:
case 2105:
case 2014:
case 1097:
case 1395:
case 1541:
case 2790:
case 1753:
case 2482:
case 40:
case 4009:
case 3566:
case 3096:
case 882:
case 2062:
case 529:
case 3503:
case 497:
case 1549:
case 3862:
case 564:
case 726:
case 183:
case 2593:
case 993:
case 2063:
case 3:
case 3502:
case 2829:
case 235:
case 2006:
case 3990:
case 3651:
case 1705:
case 570:
case 1790:
case 2753:
case 2032:
case 2567:
case 56:
case 2097:
case 682:
case 1105:
case 1014:
case 4064:
case 1190:
case 2787:
case 3511:
case 1885:
case 933:
case 1483:
case 3007:
case 125:
case 1986:
case 295:
case 1457:
case 940:
case 2828:
case 2807:
case 3438:
case 1226:
case 3025:
case 2926:
case 307:
case 737:
case 704:
case 3909:
case 3327:
case 2881:
case 39:
case 2825:
case 3191:
case 3469:
case 1943:
case 2243:
case 899:
case 174:
case 1510:
case 2398:
case 2637:
case 2999:
case 4090:
case 1164:
case 2692:
case 3820:
case 1649:
case 1391:
case 1577:
case 1545:
case 114:
case 2020:
case 1127:
case 2326:
case 2713:
case 3742:
case 699:
case 3201:
case 839:
case 1054:
case 1343:
case 3468:
case 70:
case 33:
case 3927:
case 2113:
case 3142:
case 394:
case 3908:
case 1470:
case 2641:
case 1298:
case 1709:
case 11:
case 1417:
case 3636:
case 485:
case 121:
case 1991:
case 55:
case 160:
case 3143:
case 849:
case 3368:
case 1884:
case 3231:
case 1443:
case 1223:
case 3117:
case 1845:
case 1877:
case 2426:
case 3717:
case 3339:
case 3938:
case 3520:
case 751:
case 1059:
case 2246:
case 2761:
case 479:
case 257:
case 2629:
case 1442:
case 1739:
case 2175:
case 1040:
case 212:
case 2581:
case 3663:
case 2747:
case 1370:
case 2499:
case 1588:
case 1104:
case 1139:
case 3216:
case 2051:
case 344:
case 2716:
case 3427:
case 58:
case 3247:
case 662:
case 3275:
case 3851:
case 1346:
case 649:
case 1058:
case 3697:
case 241:
case 2322:
case 2131:
case 1294:
case 2628:
case 1738:
case 2607:
case 1138:
case 1685:
case 2498:
case 1589:
case 1970:
case 1644:
case 3146:
case 2179:
case 3783:
case 573:
case 3802:
case 2330:
case 267:
case 3093:
case 2529:
case 3506:
case 513:
case 1850:
case 755:
case 2495:
case 3757:
case 1382:
case 2960:
case 3405:
case 3490:
case 2596:
case 3037:
case 3562:
case 3803:
case 3278:
case 3965:
case 3782:
case 930:
case 3092:
case 3182:
case 943:
case 505:
case 1055:
case 720:
case 852:
case 2837:
case 817:
case 1230:
case 1771:
case 2178:
case 109:
case 4004:
case 516:
case 2778:
case 2282:
case 1982:
case 2156:
case 1585:
case 3811:
case 4068:
case 1018:
case 1171:
case 652:
case 2257:
case 990:
case 3041:
case 245:
case 180:
case 1848:
case 677:
case 3597:
case 2283:
case 1983:
case 3935:
case 779:
case 3532:
case 2841:
case 2987:
case 1287:
case 383:
case 1029:
case 1806:
case 3550:
case 2640:
case 1274:
case 2953:
case 546:
case 203:
case 2519:
case 1863:
case 2615:
case 1990:
case 851:
case 1786:
case 3610:
case 4043:
case 976:
case 1096:
case 647:
case 2952:
case 215:
case 3684:
case 916:
case 2555:
case 3885:
case 259:
case 1511:
case 543:
case 3844:
case 1435:
case 2195:
case 905:
case 1007:
case 2100:
case 1390:
case 325:
case 1305:
case 530:
case 2085:
case 3986:
case 665:
case 2518:
case 386:
case 2353:
case 417:
case 1832:
case 3705:
case 3080:
case 2676:
case 350:
case 2658:
case 3105:
case 3299:
case 968:
case 820:
case 752:
case 3764:
case 608:
case 679:
case 3108:
case 3584:
case 1791:
case 3650:
case 1081:
case 1025:
case 3226:
case 107:
case 2088:
case 22:
case 1909:
case 2209:
case 2234:
case 2515:
case 2798:
case 2912:
case 1602:
case 1469:
case 1212:
case 2576:
case 879:
case 808:
case 1743:
case 901:
case 2126:
case 1551:
case 3072:
case 37:
case 3298:
case 2726:
case 31:
case 3342:
case 3134:
case 2872:
case 819:
case 3991:
case 2558:
case 3648:
case 661:
case 2854:
case 2901:
case 269:
case 1611:
case 1201:
case 1964:
case 2475:
case 3054:
case 3343:
case 2312:
case 1468:
case 224:
case 2208:
case 1927:
case 1334:
case 2089:
case 2227:
case 462:
case 1908:
case 2413:
case 3442:
case 3704:
case 3040:
case 3168:
case 623:
case 3370:
case 363:
case 3768:
case 2916:
case 3588:
case 1606:
case 3139:
case 2931:
case 2375:
case 1231:
case 3443:
case 3884:
case 1770:
case 3223:
case 14:
case 2194:
case 1409:
case 1434:
case 1662:
case 3845:
case 2238:
case 439:
case 2084:
case 1938:
case 1520:
case 1170:
case 1746:
case 2123:
case 3738:
case 626:
case 2723:
case 3685:
case 1633:
case 4057:
case 3589:
case 3644:
case 1146:
case 3621:
case 2572:
case 4082:
case 144:
case 1408:
case 2680:
case 1427:
case 292:
case 1369:
case 2122:
case 1275:
case 1968:
case 3076:
case 1247:
case 2268:
case 2331:
case 122:
case 1464:
case 1632:
case 1851:
case 3346:
case 3058:
case 2876:
case 2614:
case 1939:
case 1904:
case 2239:
case 2961:
case 2204:
case 1405:
case 540:
case 3849:
case 1562:
case 1037:
case 2130:
case 2855:
case 1782:
case 1278:
case 2379:
case 2265:
case 2049:
case 2956:
case 3055:
case 1256:
case 228:
case 988:
case 533:
case 1335:
case 1620:
case 1866:
case 799:
case 1563:
case 1802:
case 3735:
case 804:
case 697:
case 4046:
case 96:
case 1093:
case 2452:
case 3135:
case 3850:
case 3688:
case 1506:
case 3019:
case 60:
case 837:
case 1757:
case 353:
case 1836:
case 2760:
case 2979:
case 1279:
case 536:
case 1365:
case 1041:
case 2672:
case 681:
case 380:
case 4070:
case 1024:
case 2580:
case 2514:
case 2235:
case 1597:
case 3983:
case 1371:
case 1067:
case 2356:
case 200:
case 2048:
case 3230:
case 964:
case 309:
case 739:
case 378:
case 482:
case 3165:
case 2818:
case 3544:
case 3521:
case 3982:
case 3765:
case 289:
case 3585:
case 3018:
case 2980:
case 442:
case 2418:
case 1362:
case 3557:
case 2675:
case 2647:
case 3163:
case 2579:
case 262:
case 249:
case 113:
case 3106:
case 553:
case 1214:
case 1535:
case 2661:
case 469:
case 1639:
case 1604:
case 1997:
case 2729:
case 340:
case 641:
case 3448:
case 1363:
case 872:
case 3228:
case 1436:
case 3207:
case 396:
case 3162:
case 1306:
case 3762:
case 3582:
case 3944:
case 703:
case 333:
case 812:
case 42:
case 4088:
case 2578:
case 556:
case 1721:
case 2631:
case 2852:
case 1962:
case 116:
case 2419:
case 1000:
case 2262:
case 1185:
case 3133:
case 2314:
case 1638:
case 3052:
case 1571:
case 3450:
case 3646:
case 158:
case 706:
case 580:
case 759:
case 3074:
case 2455:
case 393:
case 672:
case 3344:
case 9:
case 3053:
case 3385:
case 3197:
case 1333:
case 2616:
case 2874:
case 3517:
case 771:
case 1273:
case 184:
case 2973:
case 1827:
case 3001:
case 711:
case 3682:
case 1864:
case 2801:
case 3120:
case 2547:
case 2575:
case 4085:
case 3657:
case 2679:
case 2181:
case 2125:
case 1272:
case 1788:
case 217:
case 2972:
case 645:
case 4021:
case 459:
case 277:
case 1504:
case 1539:
case 406:
case 2781:
case 18:
case 2373:
case 769:
case 3477:
case 1809:
case 3281:
case 3225:
case 327:
case 3484:
case 724:
case 3410:
case 907:
case 2516:
case 3988:
case 475:
case 2354:
case 2043:
case 3012:
case 1099:
case 2372:
case 2415:
case 1789:
case 1569:
case 2531:
case 2813:
case 566:
case 3842:
case 2440:
case 3546:
case 845:
case 1920:
case 1189:
case 1671:
case 3310:
case 2454:
case 489:
case 1276:
case 3047:
case 732:
case 302:
case 1804:
case 2958:
case 3591:
case 2473:
case 2359:
case 3345:
case 1258:
case 2847:
case 282:
case 3384:
case 1564:
case 2501:
case 1777:
case 1094:
case 2017:
case 835:
case 400:
case 1784:
case 1508:
case 1710:
case 1527:
case 2315:
case 1184:
case 3817:
case 1177:
case 1145:
case 514:
case 792:
case 1838:
case 3031:
case 1351:
case 1023:
case 3910:
case 4050:
case 3984:
case 1869:
case 2831:
case 2652:
case 1259:
case 3945:
case 2959:
case 3151:
case 1420:
case 428:
case 1022:
case 1240:
case 2816:
case 2940:
case 57:
case 2512:
case 3543:
case 1690:
case 15:
case 3751:
case 1534:
case 1215:
case 2414:
case 1030:
case 2137:
case 1664:
case 1749:
case 2211:
case 3350:
case 299:
case 3166:
case 887:
case 2601:
case 2792:
case 492:
case 3586:
case 164:
case 3103:
case 2737:
case 583:
case 938:
case 2057:
case 3421:
case 3485:
case 3224:
case 2193:
case 2083:
case 1303:
case 2793:
case 3102:
case 691:
case 3349:
case 2355:
case 728:
case 239:
case 3950:
case 4084:
case 4077:
case 2587:
case 3293:
case 1219:
case 3136:
case 789:
case 550:
case 2741:
case 1634:
case 2919:
case 687:
case 4010:
case 2167:
case 110:
case 1902:
case 2553:
case 188:
case 2856:
case 3078:
case 3111:
case 1966:
case 1871:
case 998:
case 343:
case 3292:
case 891:
case 2266:
case 3711:
case 2955:
case 1463:
case 3949:
case 631:
case 3348:
case 330:
case 1336:
case 2878:
case 3642:
case 2613:
case 986:
case 1448:
case 3363:
case 2694:
case 226:
case 2329:
case 925:
case 2285:
case 598:
case 1985:
case 1670:
case 1944:
case 2221:
case 133:
case 1706:
case 3362:
case 950:
case 1557:
case 692:
case 3668:
case 3411:
case 3932:
case 1763:
case 313:
case 2328:
case 136:
case 2180:
case 1449:
case 3963:
case 1132:
case 1053:
case 3466:
case 1321:
case 223:
case 983:
case 2090:
case 2005:
case 1197:
case 538:
case 3906:
case 2780:
case 3669:
case 3402:
case 3744:
case 632:
case 3721:
case 3962:
case 316:
case 3785:
case 2996:
case 3000:
case 3095:
case 1296:
case 1133:
case 376:
case 3638:
case 3397:
case 3185:
case 2493:
case 1052:
case 1450:
case 3144:
case 1646:
case 2895:
case 2800:
case 1657:
case 921:
case 495:
case 1891:
case 3788:
case 3272:
case 91:
case 3320:
case 3539:
case 3504:
case 731:
case 2898:
case 2325:
case 4032:
case 237:
case 1720:
case 384:
case 3273:
case 1682:
case 787:
case 2008:
case 3451:
case 3864:
case 689:
case 2027:
case 3099:
case 2523:
case 914:
case 2754:
case 3569:
case 800:
case 1842:
case 2773:
case 2154:
case 628:
case 2899:
case 791:
case 1546:
case 368:
case 3538:
case 974:
case 1013:
case 3671:
case 4063:
case 2522:
case 38:
case 1445:
case 1477:
case 1281:
case 297:
case 889:
case 2772:
case 20:
case 1988:
case 2660:
case 1012:
case 3564:
case 4036:
case 659:
case 3745:
case 3777:
case 3094:
case 757:
case 3710:
case 3508:
case 966:
case 3184:
case 3527:
case 2894:
case 1817:
case 445:
case 3177:
case 3951:
case 1489:
case 1075:
case 507:
case 1047:
case 3276:
case 251:
case 1591:
case 2740:
case 59:
case 1377:
case 3258:
case 875:
case 1061:
case 4011:
case 1384:
case 2039:
case 2115:
case 2004:
case 3868:
case 4003:
case 963:
case 3022:
case 1543:
case 2822:
case 3690:
case 806:
case 3605:
case 35:
case 1016:
case 3534:
case 3838:
case 2210:
case 2599:
case 3023:
case 1488:
case 675:
case 1910:
case 2425:
case 1984:
case 2284:
case 615:
case 1542:
case 1945:
case 3259:
case 1977:
case 53:
case 2245:
case 2277:
case 2481:
case 1702:
case 3150:
case 1444:
case 1079:
case 1421:
case 3366:
case 1241:
case 1485:
case 5:
case 2924:
case 2719:
case 1224:
case 2337:
case 2941:
case 1857:
case 980:
case 3303:
case 3936:
case 2407:
case 1102:
case 3750:
case 261:
case 2967:
case 220:
case 2248:
case 1882:
case 82:
case 2393:
case 767:
case 3749:
case 3664:
case 3432:
case 329:
case 2755:
case 669:
case 4051:
case 978:
case 2830:
case 364:
case 255:
case 624:
case 3627:
case 3218:
case 956:
case 3406:
case 745:
case 2595:
case 472:
case 1237:
case 2500:
case 1078:
case 2992:
case 3871:
case 143:
case 2065:
case 279:
case 457:
case 1348:
case 3336:
case 1642:
case 3903:
case 412:
case 2071:
case 953:
case 2250:
case 3311:
case 3748:
case 2993:
case 2626:
case 824:
case 3505:
case 3219:
case 2496:
case 3060:
case 869:
case 3148:
case 3902:
case 2766:
case 515:
case 1830:
case 3082:
case 63:
case 807:
case 3737:
case 3480:
case 3319:
case 2103:
case 155:
case 694:
case 89:
case 1393:
case 3414:
case 3192:
case 575:
case 2350:
case 3793:
case 1407:
case 3879:
case 1428:
case 3083:
case 3355:
case 1248:
case 120:
case 2267:
case 466:
case 2691:
case 161:
case 2079:
case 1392:
case 2702:
case 3057:
case 2224:
case 1337:
case 1698:
case 2241:
case 1924:
case 1719:
case 1496:
case 3318:
case 634:
case 3919:
case 2136:
case 967:
case 69:
case 3741:
case 2643:
case 718:
case 3612:
case 3202:
case 3167:
case 2950:
case 1250:
case 2293:
case 2736:
case 1993:
case 756:
case 1860:
case 83:
case 4059:
case 607:
case 1626:
case 3141:
case 2056:
case 179:
case 2711:
case 3552:
case 3613:
case 1429:
case 1071:
case 3203:
case 2237:
case 1595:
case 1500:
case 463:
case 1341:
case 243:
case 506:
case 4015:
case 3266:
case 2111:
case 3958:
case 1740:
case 456:
case 2591:
case 151:
case 3359:
case 1004:
case 1115:
case 382:
case 2384:
case 1039:
case 478:
case 3847:
case 2061:
case 571:
case 1715:
case 2489:
case 2310:
case 3251:
case 4018:
case 1068:
case 202:
case 3454:
case 1140:
case 3861:
case 2047:
case 3472:
case 165:
case 2686:
case 480:
case 8:
case 848:
case 763:
case 2817:
case 3501:
case 3340:
case 2870:
case 3017:
case 3513:
case 3831:
case 3652:
case 2542:
case 1038:
case 1425:
case 1277:
case 3959:
case 3358:
case 1823:
case 2977:
case 4019:
case 453:
case 1695:
case 569:
case 2488:
case 3653:
case 1158:
case 3512:
case 2543:
case 1776:
case 912:
case 2016:
case 3915:
case 1822:
case 3687:
case 4055:
case 1526:
case 766:
case 2151:
case 3940:
case 1758:
case 3674:
case 972:
case 4080:
case 2570:
case 1289:
case 1027:
case 2120:
case 104:
case 1008:
case 2388:
case 2989:
case 450:
case 1630:
case 137:
case 2720:
case 1594:
case 532:
case 3973:
case 1381:
case 2001:
case 1064:
case 4014:
case 377:
case 2683:
case 3781:
case 1898:
case 638:
case 3091:
case 425:
case 3547:
case 3575:
case 3972:
case 2891:
case 486:
case 3125:
case 2389:
case 1009:
case 3516:
case 2988:
case 10:
case 1288:
case 2410:
case 3043:
case 2012:
case 1660:
case 2445:
case 1981:
case 987:
case 3373:
case 197:
case 698:
case 483:
case 1773:
case 721:
case 3042:
case 3415:
case 1523:
case 931:
case 1754:
case 1173:
case 3232:
case 3297:
case 2106:
case 84:
case 644:
case 2163:
case 3579:
case 362:
case 2985:
case 1285:
case 528:
case 1441:
case 2944:
case 2582:
case 2921:
case 47:
case 2448:
case 185:
case 1467:
case 2207:
case 2162:
case 1530:
case 1928:
case 1907:
case 995:
case 421:
case 2052:
case 3314:
case 844:
case 3728:
case 589:
case 2646:
case 3852:
case 3578:
case 3380:
case 3107:
case 1996:
case 3128:
case 3419:
case 1492:
case 3887:
case 2321:
case 293:
case 2132:
case 474:
case 2344:
case 1560:
case 3616:
case 2385:
case 1114:
case 1005:
case 500:
case 1307:
case 2087:
case 935:
case 3853:
case 1180:
case 2797:
case 236:
case 3455:
case 1622:
case 3407:
case 1879:
case 2303:
case 1083:
case 1236:
case 3119:
case 3428:
case 1355:
case 3248:
case 320:
case 798:
case 361:
case 660:
case 3392:
case 900:
case 1193:
case 3337:
case 67:
case 2433:
case 814:
case 3924:
case 1792:
case 3830:
case 2149:
case 1082:
case 2218:
case 2627:
case 1480:
case 1737:
case 264:
case 2030:
case 3393:
case 2497:
case 2911:
case 199:
case 3755:
case 1601:
case 2749:
case 229:
case 2255:
case 2463:
case 738:
case 3367:
case 3249:
case 2865:
case 1613:
case 3071:
case 3429:
case 1552:
case 1203:
case 3595:
case 288:
case 1856:
case 3718:
case 81:
case 3341:
case 3699:
case 2406:
case 3937:
case 1266:
case 821:
case 3992:
case 928:
case 3496:
case 1919:
case 1724:
case 2505:
case 26:
case 1741:
case 2148:
case 1553:
case 2060:
case 1167:
case 2748:
case 1574:
case 139:
case 1587:
case 3993:
case 1141:
case 3626:
case 2184:
case 1315:
case 2508:
case 686:
case 4024:
case 2145:
case 2177:
case 4041:
case 3894:
case 2777:
case 3759:
case 2564:
case 2094:
case 2110:
case 650:
case 1473:
case 1359:
case 1847:
case 1875:
case 3715:
case 1251:
case 1976:
case 2839:
case 1454:
case 2276:
case 1653:
case 3158:
case 3776:
case 2509:
case 2534:
case 2215:
case 1915:
case 2605:
case 2420:
case 498:
case 683:
case 1674:
case 1816:
case 3758:
case 886:
case 2022:
case 3284:
case 3425:
case 3038:
case 3277:
case 2259:
case 722:
case 3695:
case 3210:
case 2023:
case 744:
case 2320:
case 2539:
case 2504:
case 572:
case 1725:
case 1781:
case 4028:
case 1091:
case 1679:
case 1575:
case 557:
case 1547:
case 2098:
case 512:
case 2788:
case 2272:
case 969:
case 1476:
case 618:
case 2254:
case 3027:
case 304:
case 2451:
case 2864:
case 656:
case 3325:
case 853:
case 609:
case 3381:
case 678:
case 268:
case 1440:
case 448:
case 1042:
case 2189:
case 4:
case 541:
case 1415:
case 1372:
case 1531:
case 1813:
case 2665:
case 1678:
case 3754:
case 3009:
case 3034:
case 794:
case 3288:
case 3772:
case 73:
case 856:
case 1043:
case 878:
case 653:
case 3660:
case 818:
case 1459:
case 3522:
case 28:
case 3925:
case 92:
case 1812:
case 397:
case 2026:
case 1796:
case 1086:
case 3441:
case 3285:
case 2306:
case 748:
case 863:
case 385:
case 3329:
case 666:
case 3530:
case 326:
case 3907:
case 213:
case 2411:
case 149:
case 1232:
case 2997:
case 2214:
case 2535:
case 1297:
case 1661:
case 2280:
case 1418:
case 1980:
case 273:
case 1579:
case 162:
case 494:
case 1647:
case 1675:
case 567:
case 323:
case 1887:
case 1874:
case 3780:
case 1616:
case 3090:
case 1206:
case 3307:
case 1853:
case 2403:
case 3328:
case 1455:
case 1263:
case 2963:
case 2805:
case 3493:
case 975:
case 1707:
case 276:
case 2397:
case 1728:
case 3800:
case 1556:
case 2144:
case 4025:
case 2332:
case 2565:
case 1852:
case 49:
case 2669:
case 434:
case 2744:
case 1578:
case 1262:
case 915:
case 2962:
case 2785:
case 3996:
case 3623:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749074402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,];
var gg_b = "1749074402/";

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
