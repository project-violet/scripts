// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 261:
case 3371:
case 2195:
case 1454:
case 590:
case 648:
case 1631:
case 2279:
case 2678:
case 3520:
case 3843:
case 193:
case 2766:
case 135:
case 724:
case 4036:
case 2239:
case 3026:
case 1976:
case 1704:
case 222:
case 1303:
case 877:
case 3881:
case 1315:
case 3007:
case 2929:
case 1201:
case 1172:
case 919:
case 3523:
case 1179:
case 453:
case 2995:
case 508:
case 2747:
case 3394:
case 2270:
case 2470:
case 3381:
case 2501:
case 3480:
case 4081:
case 3207:
case 292:
case 950:
case 374:
case 2650:
case 384:
case 4038:
case 2021:
case 313:
case 975:
case 2546:
case 1668:
case 2833:
case 326:
case 845:
case 266:
case 757:
case 2629:
case 3886:
case 3316:
case 3712:
case 3688:
case 2780:
case 2233:
case 3447:
case 972:
case 2008:
case 3227:
case 1236:
case 1532:
case 345:
case 100:
case 2748:
case 1207:
case 2955:
case 2927:
case 2532:
case 3103:
case 3399:
case 3903:
case 1605:
case 1708:
case 3037:
case 3181:
case 2471:
case 4095:
case 2243:
case 3650:
case 3380:
case 2511:
case 568:
case 2909:
case 1736:
case 1029:
case 3433:
case 3396:
case 890:
case 3308:
case 1496:
case 3673:
case 1420:
case 2199:
case 498:
case 3786:
case 19:
case 3613:
case 2083:
case 1504:
case 1648:
case 1177:
case 2236:
case 2776:
case 3672:
case 3861:
case 2398:
case 219:
case 589:
case 2942:
case 1431:
case 2866:
case 340:
case 3841:
case 2437:
case 1705:
case 3214:
case 1188:
case 2124:
case 2839:
case 868:
case 3929:
case 2649:
case 3348:
case 4009:
case 285:
case 276:
case 4063:
case 2400:
case 1022:
case 3577:
case 663:
case 917:
case 839:
case 318:
case 2535:
case 1848:
case 692:
case 185:
case 1296:
case 3696:
case 3783:
case 1749:
case 459:
case 1323:
case 2664:
case 2042:
case 1498:
case 3264:
case 1745:
case 553:
case 2028:
case 1706:
case 2383:
case 3196:
case 1287:
case 2699:
case 3057:
case 2619:
case 1491:
case 3920:
case 3154:
case 3200:
case 1474:
case 3346:
case 3617:
case 814:
case 160:
case 2157:
case 1199:
case 2945:
case 265:
case 3299:
case 2475:
case 3565:
case 2277:
case 3484:
case 3273:
case 2320:
case 3681:
case 1477:
case 3224:
case 321:
case 3674:
case 2723:
case 1835:
case 3416:
case 751:
case 195:
case 1993:
case 2764:
case 3204:
case 2492:
case 3148:
case 1661:
case 1372:
case 3578:
case 1399:
case 434:
case 1463:
case 1111:
case 284:
case 2908:
case 1765:
case 4051:
case 2201:
case 250:
case 1622:
case 1012:
case 2907:
case 722:
case 3091:
case 3315:
case 1476:
case 2544:
case 3241:
case 268:
case 2215:
case 3601:
case 3623:
case 172:
case 20:
case 545:
case 2023:
case 3890:
case 3826:
case 143:
case 408:
case 3904:
case 2771:
case 552:
case 1059:
case 1803:
case 2841:
case 641:
case 1610:
case 2933:
case 3363:
case 2261:
case 973:
case 6:
case 373:
case 1970:
case 1129:
case 3482:
case 1133:
case 3583:
case 3177:
case 1905:
case 2536:
case 1973:
case 431:
case 930:
case 2958:
case 1556:
case 2809:
case 1042:
case 352:
case 3197:
case 99:
case 851:
case 53:
case 1555:
case 1162:
case 3208:
case 3919:
case 516:
case 1145:
case 341:
case 447:
case 3219:
case 239:
case 1302:
case 86:
case 2137:
case 2326:
case 4016:
case 3856:
case 2870:
case 3498:
case 2740:
case 3438:
case 3319:
case 1018:
case 1253:
case 2770:
case 2592:
case 1579:
case 455:
case 812:
case 360:
case 3160:
case 1598:
case 181:
case 2051:
case 1060:
case 3632:
case 1531:
case 3406:
case 1251:
case 2795:
case 1215:
case 1271:
case 331:
case 2783:
case 3149:
case 2634:
case 4050:
case 2767:
case 3511:
case 1772:
case 741:
case 762:
case 998:
case 1660:
case 1990:
case 2849:
case 2070:
case 3732:
case 2107:
case 2989:
case 684:
case 1533:
case 1176:
case 3785:
case 3980:
case 1333:
case 3900:
case 2245:
case 2116:
case 1365:
case 414:
case 3525:
case 2440:
case 2520:
case 1612:
case 3958:
case 680:
case 795:
case 3314:
case 2887:
case 3983:
case 1747:
case 248:
case 947:
case 3950:
case 1837:
case 978:
case 2974:
case 2762:
case 2680:
case 804:
case 2805:
case 1786:
case 3391:
case 141:
case 474:
case 2987:
case 2547:
case 3985:
case 312:
case 598:
case 1031:
case 1801:
case 4040:
case 3151:
case 3453:
case 749:
case 188:
case 1657:
case 2775:
case 746:
case 573:
case 3959:
case 3425:
case 858:
case 1115:
case 652:
case 2817:
case 727:
case 3719:
case 2674:
case 79:
case 1032:
case 1716:
case 3832:
case 101:
case 2147:
case 653:
case 3239:
case 2741:
case 2518:
case 251:
case 2578:
case 778:
case 2069:
case 1082:
case 3401:
case 211:
case 320:
case 1713:
case 3095:
case 3634:
case 3774:
case 393:
case 604:
case 358:
case 1811:
case 3629:
case 1824:
case 1619:
case 2159:
case 726:
case 3895:
case 1400:
case 835:
case 3002:
case 3215:
case 1011:
case 1345:
case 901:
case 63:
case 3839:
case 706:
case 3848:
case 3853:
case 2797:
case 2065:
case 3810:
case 1033:
case 798:
case 1637:
case 3090:
case 3633:
case 1846:
case 640:
case 2509:
case 2502:
case 2024:
case 51:
case 2626:
case 3935:
case 1979:
case 1717:
case 3751:
case 2506:
case 3698:
case 1393:
case 8:
case 3954:
case 315:
case 3605:
case 3648:
case 2081:
case 813:
case 243:
case 131:
case 3597:
case 3176:
case 2389:
case 780:
case 4078:
case 1916:
case 974:
case 3355:
case 444:
case 452:
case 2165:
case 95:
case 146:
case 2700:
case 527:
case 559:
case 1884:
case 3730:
case 980:
case 1224:
case 4060:
case 1212:
case 3992:
case 283:
case 1392:
case 3622:
case 3561:
case 2893:
case 3192:
case 3943:
case 2685:
case 76:
case 1322:
case 1406:
case 3913:
case 1868:
case 1730:
case 3842:
case 4057:
case 3326:
case 391:
case 3173:
case 3358:
case 3099:
case 3569:
case 3997:
case 3085:
case 3905:
case 111:
case 1608:
case 2395:
case 1920:
case 3727:
case 1639:
case 1695:
case 535:
case 627:
case 281:
case 4013:
case 1500:
case 3321:
case 2053:
case 3651:
case 3060:
case 3644:
case 2170:
case 1690:
case 2565:
case 944:
case 2414:
case 2994:
case 1987:
case 3949:
case 2452:
case 1530:
case 462:
case 736:
case 2006:
case 1040:
case 1195:
case 3862:
case 957:
case 3699:
case 288:
case 2941:
case 44:
case 1441:
case 4030:
case 1368:
case 1229:
case 1724:
case 3040:
case 732:
case 1737:
case 855:
case 390:
case 1526:
case 2978:
case 1611:
case 1985:
case 3580:
case 3654:
case 2253:
case 2542:
case 1191:
case 1143:
case 716:
case 3526:
case 82:
case 2742:
case 290:
case 1839:
case 1309:
case 1014:
case 3289:
case 3567:
case 1950:
case 2523:
case 3464:
case 105:
case 1795:
case 1620:
case 1879:
case 3132:
case 3528:
case 1994:
case 2728:
case 1779:
case 2242:
case 3953:
case 1464:
case 2867:
case 1896:
case 550:
case 3190:
case 3529:
case 2781:
case 3828:
case 1429:
case 2598:
case 2976:
case 133:
case 3384:
case 2614:
case 1560:
case 4044:
case 2025:
case 1542:
case 2946:
case 1358:
case 1867:
case 3093:
case 2222:
case 850:
case 3021:
case 2997:
case 956:
case 3479:
case 1986:
case 1369:
case 1558:
case 3068:
case 1632:
case 1570:
case 1264:
case 3225:
case 2561:
case 3005:
case 534:
case 1752:
case 3942:
case 1983:
case 2022:
case 187:
case 1335:
case 2179:
case 1357:
case 2034:
case 3962:
case 1794:
case 336:
case 3466:
case 2110:
case 2692:
case 3255:
case 2332:
case 3001:
case 506:
case 3272:
case 289:
case 938:
case 2993:
case 2141:
case 1154:
case 856:
case 3558:
case 822:
case 1743:
case 1797:
case 3570:
case 1707:
case 2265:
case 4014:
case 3451:
case 73:
case 637:
case 1548:
case 1823:
case 2428:
case 1768:
case 954:
case 3064:
case 2732:
case 1120:
case 3649:
case 3587:
case 3686:
case 2696:
case 2840:
case 2102:
case 2204:
case 2085:
case 3456:
case 1260:
case 2133:
case 889:
case 1997:
case 2957:
case 1972:
case 613:
case 2184:
case 3398:
case 50:
case 2433:
case 127:
case 933:
case 1784:
case 1092:
case 2057:
case 662:
case 2498:
case 3615:
case 2202:
case 747:
case 1819:
case 1157:
case 1424:
case 25:
case 3892:
case 1850:
case 3359:
case 1294:
case 4094:
case 864:
case 785:
case 3329:
case 3889:
case 4058:
case 1853:
case 3503:
case 1855:
case 2966:
case 1482:
case 381:
case 1677:
case 3731:
case 2282:
case 3815:
case 171:
case 3603:
case 1710:
case 1274:
case 3682:
case 3293:
case 1667:
case 2772:
case 1156:
case 1568:
case 2707:
case 1936:
case 334:
case 512:
case 3237:
case 773:
case 208:
case 424:
case 3761:
case 3804:
case 1026:
case 1663:
case 2305:
case 1790:
case 1216:
case 3547:
case 2553:
case 3140:
case 3702:
case 1340:
case 1966:
case 1266:
case 2099:
case 807:
case 651:
case 2731:
case 833:
case 2769:
case 2468:
case 3513:
case 2975:
case 1962:
case 2347:
case 1618:
case 1300:
case 3079:
case 3855:
case 2323:
case 3492:
case 1856:
case 470:
case 630:
case 1582:
case 1949:
case 439:
case 65:
case 1907:
case 2337:
case 2126:
case 1826:
case 3303:
case 2486:
case 620:
case 2937:
case 2824:
case 3738:
case 937:
case 2056:
case 857:
case 1780:
case 1079:
case 2878:
case 2286:
case 1227:
case 509:
case 1002:
case 3150:
case 197:
case 2399:
case 745:
case 1349:
case 1523:
case 3970:
case 3404:
case 1256:
case 2801:
case 2205:
case 4070:
case 3922:
case 1898:
case 548:
case 1734:
case 2722:
case 685:
case 2980:
case 202:
case 1665:
case 309:
case 328:
case 3645:
case 819:
case 112:
case 3286:
case 468:
case 4068:
case 3519:
case 228:
case 3304:
case 2881:
case 210:
case 1650:
case 1829:
case 595:
case 2671:
case 1017:
case 2901:
case 3556:
case 3267:
case 3708:
case 1049:
case 2615:
case 1964:
case 3463:
case 1541:
case 713:
case 299:
case 691:
case 2510:
case 1297:
case 148:
case 3157:
case 2378:
case 1573:
case 2220:
case 3618:
case 3790:
case 2068:
case 3557:
case 3070:
case 1459:
case 4074:
case 3115:
case 1692:
case 47:
case 3695:
case 681:
case 1462:
case 3045:
case 2712:
case 927:
case 4004:
case 2467:
case 168:
case 2888:
case 3986:
case 649:
case 715:
case 1228:
case 2622:
case 2673:
case 1455:
case 2890:
case 177:
case 1883:
case 2689:
case 581:
case 1332:
case 3213:
case 77:
case 2821:
case 407:
case 768:
case 1263:
case 2434:
case 2049:
case 3341:
case 4:
case 1178:
case 2078:
case 1685:
case 574:
case 369:
case 71:
case 3182:
case 2895:
case 1953:
case 1326:
case 908:
case 1718:
case 1871:
case 3088:
case 2655:
case 1379:
case 659:
case 214:
case 756:
case 3290:
case 3375:
case 2899:
case 758:
case 734:
case 2605:
case 3281:
case 225:
case 1147:
case 3637:
case 1202:
case 2636:
case 2884:
case 3818:
case 21:
case 1544:
case 1091:
case 3571:
case 1947:
case 154:
case 1653:
case 558:
case 130:
case 2405:
case 2297:
case 2344:
case 3370:
case 1245:
case 3771:
case 946:
case 579:
case 3552:
case 3797:
case 1039:
case 867:
case 3432:
case 2174:
case 4021:
case 294:
case 2388:
case 3276:
case 674:
case 2421:
case 118:
case 3402:
case 165:
case 3073:
case 2589:
case 464:
case 1208:
case 3023:
case 1408:
case 3638:
case 1817:
case 1085:
case 1233:
case 1262:
case 2883:
case 203:
case 2072:
case 140:
case 3887:
case 2037:
case 2145:
case 583:
case 2198:
case 2916:
case 3800:
case 1647:
case 1875:
case 2618:
case 91:
case 3223:
case 2928:
case 521:
case 1268:
case 823:
case 1974:
case 801:
case 1493:
case 3972:
case 3948:
case 733:
case 4047:
case 3865:
case 996:
case 2003:
case 3937:
case 1418:
case 2381:
case 1074:
case 2244:
case 186:
case 3961:
case 638:
case 3133:
case 1394:
case 3896:
case 3987:
case 3689:
case 906:
case 3916:
case 1581:
case 246:
case 2620:
case 3691:
case 4017:
case 2139:
case 3545:
case 1507:
case 982:
case 2848:
case 1652:
case 3576:
case 1881:
case 2442:
case 1800:
case 2171:
case 2639:
case 1735:
case 602:
case 2996:
case 170:
case 3288:
case 842:
case 361:
case 389:
case 2670:
case 3864:
case 2611:
case 3012:
case 3927:
case 608:
case 1906:
case 1888:
case 2094:
case 2447:
case 3860:
case 3756:
case 2792:
case 2087:
case 4054:
case 2178:
case 1766:
case 1391:
case 2451:
case 2702:
case 249:
case 2148:
case 1402:
case 2959:
case 2348:
case 1680:
case 533:
case 671:
case 270:
case 1443:
case 4084:
case 3038:
case 611:
case 2855:
case 2009:
case 753:
case 2514:
case 2676:
case 2363:
case 472:
case 3053:
case 3854:
case 3458:
case 200:
case 3971:
case 2623:
case 2695:
case 2095:
case 1693:
case 2773:
case 623:
case 42:
case 2350:
case 3249:
case 258:
case 2154:
case 2930:
case 2760:
case 1684:
case 2832:
case 4071:
case 3801:
case 3483:
case 1614:
case 60:
case 190:
case 4082:
case 1337:
case 3536:
case 2186:
case 3514:
case 2092:
case 3640:
case 2197:
case 159:
case 3899:
case 4089:
case 2338:
case 2241:
case 2790:
case 704:
case 712:
case 1589:
case 3061:
case 4002:
case 1238:
case 3666:
case 134:
case 2322:
case 3824:
case 3305:
case 3619:
case 3123:
case 4020:
case 237:
case 1295:
case 45:
case 991:
case 78:
case 46:
case 2004:
case 1643:
case 3188:
case 3282:
case 3690:
case 1480:
case 2830:
case 1630:
case 2528:
case 2524:
case 1047:
case 3137:
case 3912:
case 496:
case 3762:
case 3441:
case 871:
case 2291:
case 2146:
case 687:
case 969:
case 49:
case 207:
case 925:
case 3963:
case 2876:
case 1552:
case 743:
case 3773:
case 83:
case 2296:
case 2720:
case 2508:
case 2213:
case 2329:
case 660:
case 2288:
case 1093:
case 2240:
case 3369:
case 4028:
case 3164:
case 346:
case 2280:
case 1104:
case 2209:
case 3162:
case 4048:
case 3413:
case 2071:
case 792:
case 3743:
case 3657:
case 824:
case 0:
case 2646:
case 2715:
case 3409:
case 3973:
case 959:
case 3936:
case 3417:
case 3310:
case 2155:
case 12:
case 3400:
case 255:
case 1433:
case 2231:
case 1159:
case 840:
case 1190:
case 700:
case 667:
case 985:
case 2058:
case 2175:
case 3294:
case 774:
case 2316:
case 3089:
case 1250:
case 932:
case 1247:
case 217:
case 2324:
case 1426:
case 2694:
case 3256:
case 514:
case 1877:
case 912:
case 198:
case 940:
case 2345:
case 2312:
case 1278:
case 3573:
case 3833:
case 40:
case 3444:
case 2113:
case 1280:
case 3418:
case 1845:
case 1324:
case 1529:
case 4090:
case 1375:
case 2301:
case 789:
case 3957:
case 542:
case 530:
case 1918:
case 3692:
case 610:
case 396:
case 262:
case 2300:
case 891:
case 2038:
case 754:
case 2607:
case 3434:
case 2122:
case 3268:
case 3581:
case 3011:
case 1782:
case 731:
case 1321:
case 794:
case 1466:
case 2691:
case 2422:
case 2880:
case 3560:
case 1561:
case 1932:
case 3092:
case 1550:
case 2681:
case 1354:
case 567:
case 1537:
case 2588:
case 2407:
case 1428:
case 1516:
case 916:
case 1636:
case 2943:
case 1231:
case 1125:
case 204:
case 2633:
case 3136:
case 3575:
case 3497:
case 3339:
case 3407:
case 215:
case 2825:
case 3030:
case 682:
case 3572:
case 3687:
case 1110:
case 216:
case 1971:
case 3724:
case 3218:
case 3553:
case 3988:
case 3538:
case 3297:
case 3419:
case 2101:
case 848:
case 443:
case 1206:
case 2786:
case 1615:
case 2449:
case 1763:
case 3470:
case 1567:
case 2831:
case 3253:
case 615:
case 3055:
case 924:
case 2713:
case 39:
case 2359:
case 3100:
case 2012:
case 1678:
case 1407:
case 1006:
case 873:
case 277:
case 1565:
case 1131:
case 3835:
case 2868:
case 2461:
case 3693:
case 278:
case 2181:
case 2369:
case 254:
case 1330:
case 2055:
case 1761:
case 3977:
case 3025:
case 1239:
case 3670:
case 3647:
case 1984:
case 1203:
case 2756:
case 1629:
case 1362:
case 3740:
case 1960:
case 3515:
case 787:
case 429:
case 4039:
case 2026:
case 3193:
case 241:
case 1045:
case 990:
case 3279:
case 942:
case 3631:
case 569:
case 3439:
case 586:
case 3496:
case 1553:
case 1450:
case 4000:
case 965:
case 2134:
case 4093:
case 803:
case 800:
case 245:
case 1089:
case 2429:
case 628:
case 3928:
case 914:
case 934:
case 1121:
case 3763:
case 1671:
case 411:
case 2431:
case 2982:
case 3588:
case 1857:
case 2539:
case 3323:
case 2341:
case 688:
case 2304:
case 104:
case 3221:
case 1158:
case 714:
case 2416:
case 463:
case 3586:
case 2923:
case 1741:
case 3554:
case 4075:
case 3368:
case 15:
case 57:
case 584:
case 2164:
case 1543:
case 2837:
case 923:
case 54:
case 3999:
case 2464:
case 782:
case 1764:
case 2285:
case 2035:
case 2704:
case 376:
case 830:
case 3408:
case 155:
case 2392:
case 2454:
case 1350:
case 2924:
case 3744:
case 2365:
case 3504:
case 3747:
case 3772:
case 3549:
case 412:
case 1651:
case 1452:
case 865:
case 1712:
case 3251:
case 2211:
case 2521:
case 1799:
case 2886:
case 3354:
case 422:
case 52:
case 1020:
case 1246:
case 3233:
case 3749:
case 4079:
case 2590:
case 3003:
case 703:
case 2846:
case 1395:
case 2190:
case 1834:
case 1167:
case 3938:
case 2967:
case 841:
case 1289:
case 486:
case 1585:
case 2572:
case 614:
case 1862:
case 699:
case 227:
case 3551:
case 1144:
case 2415:
case 4083:
case 1183:
case 3423:
case 1895:
case 1380:
case 88:
case 3882:
case 3426:
case 3360:
case 3405:
case 3171:
case 3390:
case 2934:
case 1722:
case 797:
case 1607:
case 3364:
case 943:
case 3101:
case 1390:
case 2097:
case 1941:
case 3677:
case 3152:
case 206:
case 3327:
case 3481:
case 3728:
case 1087:
case 1908:
case 3235:
case 231:
case 3226:
case 68:
case 116:
case 4059:
case 2248:
case 1317:
case 2807:
case 3254:
case 2998:
case 2230:
case 247:
case 280:
case 2011:
case 2086:
case 3901:
case 3373:
case 3262:
case 397:
case 1624:
case 1915:
case 1774:
case 1472:
case 28:
case 147:
case 962:
case 410:
case 2665:
case 94:
case 3261:
case 2457:
case 775:
case 1635:
case 3868:
case 2192:
case 3543:
case 3415:
case 885:
case 1137:
case 2827:
case 1279:
case 399:
case 3535:
case 3027:
case 3967:
case 1152:
case 2577:
case 3621:
case 2275:
case 2212:
case 267:
case 860:
case 2425:
case 2317:
case 38:
case 3077:
case 70:
case 693:
case 2476:
case 1914:
case 2100:
case 3793:
case 3388:
case 2208:
case 1211:
case 1123:
case 2787:
case 117:
case 1919:
case 1921:
case 818:
case 3324:
case 888:
case 2922:
case 4043:
case 2043:
case 2505:
case 562:
case 2013:
case 2533:
case 1381:
case 2260:
case 3457:
case 465:
case 259:
case 3925:
case 3270:
case 1978:
case 4049:
case 3122:
case 903:
case 3834:
case 2163:
case 85:
case 1682:
case 3947:
case 2417:
case 2019:
case 1422:
case 3735:
case 2657:
case 1139:
case 4088:
case 3620:
case 3097:
case 2309:
case 3653:
case 1071:
case 2393:
case 2575:
case 717:
case 3951:
case 3791:
case 1041:
case 3625:
case 2376:
case 3163:
case 3764:
case 3058:
case 3016:
case 1617:
case 2196:
case 1331:
case 3334:
case 2194:
case 370:
case 3389:
case 1939:
case 670:
case 4025:
case 596:
case 1709:
case 1670:
case 2333:
case 1490:
case 1522:
case 1427:
case 869:
case 2794:
case 32:
case 167:
case 2730:
case 3720:
case 2048:
case 2066:
case 3705:
case 2749:
case 2597:
case 405:
case 1058:
case 1818:
case 3966:
case 3662:
case 473:
case 174:
case 2254:
case 3096:
case 3344:
case 995:
case 3117:
case 3847:
case 1732:
case 2491:
case 3379:
case 4073:
case 14:
case 1265:
case 1258:
case 1982:
case 675:
case 2394:
case 1130:
case 866:
case 1064:
case 2714:
case 2873:
case 2835:
case 2390:
case 2453:
case 2703:
case 3591:
case 3494:
case 1518:
case 646:
case 3106:
case 2406:
case 3452:
case 1141:
case 3599:
case 547:
case 9:
case 419:
case 3198:
case 920:
case 2914:
case 2262:
case 3550:
case 913:
case 902:
case 264:
case 2466:
case 2435:
case 2777:
case 1827:
case 2754:
case 2408:
case 442:
case 3863:
case 1056:
case 3884:
case 554:
case 2318:
case 2118:
case 1902:
case 1311:
case 729:
case 669:
case 3501:
case 269:
case 626:
case 3245:
case 979:
case 2310:
case 2269:
case 499:
case 3754:
case 304:
case 1471:
case 2661:
case 2064:
case 770:
case 1572:
case 2610:
case 3004:
case 1112:
case 2860:
case 256:
case 3737:
case 771:
case 1955:
case 252:
case 2191:
case 1810:
case 2474:
case 2015:
case 1891:
case 2813:
case 357:
case 2778:
case 2939:
case 2379:
case 556:
case 1755:
case 2044:
case 192:
case 2541:
case 1584:
case 3965:
case 1171:
case 1453:
case 1613:
case 291:
case 1969:
case 272:
case 2755:
case 1417:
case 1816:
case 1086:
case 3534:
case 92:
case 3510:
case 2339:
case 821:
case 3729:
case 3778:
case 1003:
case 828:
case 2096:
case 1198:
case 2641:
case 3421:
case 3472:
case 3802:
case 2129:
case 3386:
case 1569:
case 386:
case 2525:
case 1878:
case 520:
case 3517:
case 478:
case 689:
case 1184:
case 1226:
case 761:
case 3222:
case 3178:
case 759:
case 1715:
case 2039:
case 2759:
case 1004:
case 2160:
case 3185:
case 781:
case 293:
case 2287:
case 2594:
case 3020:
case 2667:
case 236:
case 3598:
case 1217:
case 1291:
case 539:
case 2551:
case 1592:
case 90:
case 3978:
case 3825:
case 296:
case 2054:
case 2570:
case 1124:
case 3990:
case 3357:
case 3908:
case 3996:
case 3641:
case 1996:
case 1451:
case 3630:
case 697:
case 2330:
case 2360:
case 1820:
case 1952:
case 518:
case 3231:
case 929:
case 3989:
case 1252:
case 3488:
case 1785:
case 1037:
case 3455:
case 2093:
case 3338:
case 1731:
case 1927:
case 2412:
case 1929:
case 1669:
case 3211:
case 3748:
case 3216:
case 1804:
case 3710:
case 489:
case 2465:
case 3113:
case 3812:
case 2500:
case 433:
case 3138:
case 2321:
case 2654:
case 1479:
case 3000:
case 2472:
case 3422:
case 2526:
case 115:
case 634:
case 3611:
case 1221:
case 3807:
case 2361:
case 3280:
case 2744:
case 1546:
case 3851:
case 2335:
case 3201:
case 4052:
case 3343:
case 1396:
case 1467:
case 2443:
case 2117:
case 1008:
case 282:
case 1025:
case 1024:
case 1241:
case 2293:
case 62:
case 1933:
case 2949:
case 3059:
case 1339:
case 1284:
case 2903:
case 3111:
case 1844:
case 3008:
case 2106:
case 876:
case 2818:
case 4069:
case 2729:
case 1759:
case 3931:
case 2302:
case 16:
case 748:
case 2251:
case 3894:
case 1319:
case 220:
case 97:
case 2273:
case 3784:
case 2550:
case 984:
case 2638:
case 3332:
case 1689:
case 1138:
case 643:
case 2608:
case 1044:
case 738:
case 1034:
case 2252:
case 1847:
case 2352:
case 1578:
case 363:
case 1577:
case 1981:
case 2123:
case 2751:
case 17:
case 3244:
case 2105:
case 382:
case 1876:
case 1640:
case 1658:
case 1016:
case 2582:
case 1499:
case 3056:
case 2921:
case 2968:
case 2267:
case 2263:
case 2029:
case 2947:
case 853:
case 1813:
case 1308:
case 2298:
case 1108:
case 1922:
case 2745:
case 524:
case 2739:
case 3678:
case 4035:
case 2319:
case 538:
case 1232:
case 1052:
case 3994:
case 1688:
case 432:
case 332:
case 750:
case 606:
case 1185:
case 1696:
case 409:
case 811:
case 1681:
case 1870:
case 1506:
case 1347:
case 235:
case 3168:
case 438:
case 3448:
case 3858:
case 2543:
case 1760:
case 2545:
case 2000:
case 500:
case 2060:
case 4003:
case 2936:
case 1564:
case 2612:
case 2420:
case 931:
case 1061:
case 3322:
case 2920:
case 2366:
case 2758:
case 1438:
case 1165:
case 895:
case 1642:
case 3486:
case 3725:
case 3199:
case 2782:
case 3946:
case 1925:
case 2162:
case 694:
case 3984:
case 161:
case 3050:
case 1070:
case 3923:
case 3128:
case 3114:
case 3102:
case 1828:
case 3377:
case 1204:
case 3283:
case 458:
case 229:
case 1773:
case 1495:
case 4087:
case 3794:
case 764:
case 2973:
case 3240:
case 3867:
case 1535:
case 3596:
case 1691:
case 1364:
case 18:
case 673:
case 3469:
case 710:
case 3639:
case 1508:
case 2599:
case 656:
case 2822:
case 2727:
case 3229:
case 2237:
case 209:
case 878:
case 2602:
case 576:
case 2306:
case 3508:
case 3969:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1644696001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,];
var gg_b = "1644696001/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
