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
case 2612:
case 590:
case 431:
case 3537:
case 3230:
case 3953:
case 3347:
case 1093:
case 2327:
case 3381:
case 1857:
case 2435:
case 2196:
case 896:
case 1954:
case 122:
case 3503:
case 1596:
case 692:
case 1587:
case 3094:
case 797:
case 1568:
case 1228:
case 1010:
case 2371:
case 2050:
case 2392:
case 1969:
case 1018:
case 1717:
case 2127:
case 698:
case 3985:
case 569:
case 2058:
case 3413:
case 3462:
case 205:
case 680:
case 936:
case 3377:
case 3199:
case 455:
case 2531:
case 323:
case 2009:
case 3490:
case 488:
case 1414:
case 4031:
case 2975:
case 1445:
case 2171:
case 2469:
case 905:
case 2387:
case 743:
case 236:
case 2396:
case 2341:
case 794:
case 490:
case 3238:
case 845:
case 3848:
case 373:
case 2193:
case 1593:
case 2828:
case 1459:
case 3861:
case 3738:
case 282:
case 135:
case 536:
case 231:
case 384:
case 1150:
case 2550:
case 3463:
case 1685:
case 3594:
case 1217:
case 1720:
case 106:
case 1096:
case 3003:
case 982:
case 416:
case 2698:
case 1408:
case 505:
case 151:
case 516:
case 1780:
case 2964:
case 255:
case 3251:
case 990:
case 2690:
case 1919:
case 1158:
case 3669:
case 2118:
case 1027:
case 3730:
case 3416:
case 290:
case 1071:
case 2031:
case 2867:
case 2509:
case 16:
case 2820:
case 1350:
case 3171:
case 3975:
case 3368:
case 697:
case 127:
case 1600:
case 573:
case 3531:
case 3454:
case 2238:
case 2811:
case 3396:
case 336:
case 2321:
case 1851:
case 584:
case 3469:
case 2147:
case 3616:
case 3058:
case 1240:
case 2985:
case 1453:
case 923:
case 2181:
case 3127:
case 487:
case 3160:
case 2199:
case 2002:
case 2805:
case 1998:
case 3304:
case 3187:
case 1261:
case 2503:
case 316:
case 3196:
case 1103:
case 643:
case 1711:
case 3435:
case 865:
case 3141:
case 3914:
case 2619:
case 3392:
case 2230:
case 3104:
case 484:
case 780:
case 1962:
case 4037:
case 2399:
case 2177:
case 1577:
case 3663:
case 473:
case 3360:
case 2498:
case 1608:
case 3327:
case 3817:
case 1770:
case 1912:
case 390:
case 3613:
case 3662:
case 1205:
case 2952:
case 59:
case 3509:
case 3867:
case 1394:
case 3310:
case 423:
case 1614:
case 174:
case 355:
case 3964:
case 1645:
case 2654:
case 1761:
case 1102:
case 1099:
case 1081:
case 3118:
case 183:
case 3959:
case 1748:
case 1047:
case 287:
case 763:
case 3558:
case 1306:
case 2594:
case 973:
case 1194:
case 68:
case 4094:
case 3550:
case 3698:
case 2870:
case 1830:
case 2003:
case 2506:
case 3318:
case 49:
case 177:
case 2848:
case 3900:
case 4006:
case 1077:
case 284:
case 1302:
case 331:
case 449:
case 3880:
case 382:
case 2861:
case 2037:
case 2241:
case 3997:
case 3624:
case 3986:
case 354:
case 2644:
case 521:
case 576:
case 2580:
case 252:
case 2615:
case 112:
case 2718:
case 1128:
case 3806:
case 4028:
case 333:
case 3548:
case 2929:
case 3277:
case 2601:
case 1936:
case 3922:
case 870:
case 1623:
case 3570:
case 2432:
case 1472:
case 2942:
case 3130:
case 2204:
case 971:
case 926:
case 2850:
case 1320:
case 1367:
case 1489:
case 313:
case 1818:
case 3465:
case 2674:
case 842:
case 958:
case 3982:
case 2858:
case 1683:
case 285:
case 600:
case 1429:
case 3979:
case 2710:
case 3281:
case 2567:
case 2227:
case 1442:
case 2972:
case 258:
case 2809:
case 2520:
case 1120:
case 3684:
case 2195:
case 3633:
case 3247:
case 4020:
case 75:
case 3926:
case 4088:
case 2989:
case 502:
case 2588:
case 1188:
case 1557:
case 1626:
case 1984:
case 3747:
case 1933:
case 4017:
case 1250:
case 1443:
case 2973:
case 558:
case 2727:
case 3781:
case 3061:
case 1804:
case 471:
case 304:
case 3983:
case 1682:
case 2771:
case 1731:
case 2792:
case 1896:
case 3351:
case 2639:
case 585:
case 3923:
case 3636:
case 2433:
case 650:
case 307:
case 1317:
case 2357:
case 552:
case 276:
case 3474:
case 571:
case 3721:
case 2787:
case 695:
case 864:
case 1686:
case 2407:
case 125:
case 1924:
case 3040:
case 1649:
case 2768:
case 2831:
case 2067:
case 2020:
case 2926:
case 2540:
case 957:
case 3991:
case 3436:
case 3195:
case 3260:
case 3520:
case 1673:
case 913:
case 1794:
case 3227:
case 4040:
case 2281:
case 3567:
case 2299:
case 3588:
case 1370:
case 2330:
case 1051:
case 257:
case 117:
case 2607:
case 3674:
case 1348:
case 2465:
case 213:
case 1538:
case 2138:
case 134:
case 1178:
case 385:
case 1237:
case 1643:
case 3976:
case 4070:
case 3204:
case 1530:
case 954:
case 3432:
case 2570:
case 1170:
case 2922:
case 2277:
case 3850:
case 82:
case 65:
case 3296:
case 3615:
case 352:
case 3580:
case 2221:
case 3287:
case 2561:
case 1965:
case 3644:
case 371:
case 700:
case 404:
case 1702:
case 4061:
case 2986:
case 847:
case 2624:
case 2997:
case 1148:
case 3929:
case 746:
case 233:
case 2439:
case 2806:
case 3268:
case 1479:
case 3718:
case 3017:
case 4011:
case 3407:
case 3741:
case 1434:
case 1551:
case 2721:
case 3088:
case 321:
case 2474:
case 376:
case 862:
case 1111:
case 2511:
case 3020:
case 3067:
case 3831:
case 2040:
case 741:
case 1629:
case 2078:
case 1105:
case 2505:
case 2777:
case 3433:
case 2923:
case 1676:
case 4005:
case 3943:
case 1038:
case 103:
case 457:
case 87:
case 413:
case 1847:
case 513:
case 1974:
case 3771:
case 2983:
case 2070:
case 795:
case 1821:
case 1672:
case 3210:
case 2781:
case 433:
case 3517:
case 3760:
case 3973:
case 1691:
case 2048:
case 2632:
case 204:
case 3080:
case 454:
case 1305:
case 750:
case 2799:
case 2061:
case 2668:
case 3958:
case 1066:
case 1797:
case 1839:
case 3564:
case 3224:
case 395:
case 1255:
case 874:
case 1786:
case 2902:
case 3621:
case 561:
case 2879:
case 1406:
case 3909:
case 3846:
case 3891:
case 702:
case 2604:
case 1494:
case 966:
case 1152:
case 2739:
case 721:
case 1013:
case 1062:
case 2053:
case 2692:
case 1402:
case 1631:
case 2906:
case 1782:
case 708:
case 3207:
case 3829:
case 3500:
case 877:
case 1090:
case 461:
case 2363:
case 3876:
case 3681:
case 2994:
case 2660:
case 2116:
case 3647:
case 3233:
case 3732:
case 519:
case 2362:
case 84:
case 3064:
case 1353:
case 1598:
case 2823:
case 1801:
case 3232:
case 1566:
case 2166:
case 899:
case 219:
case 3784:
case 13:
case 3733:
case 2477:
case 1437:
case 1981:
case 2585:
case 1325:
case 2239:
case 1063:
case 771:
case 300:
case 1734:
case 919:
case 3575:
case 3441:
case 346:
case 3496:
case 1403:
case 613:
case 3135:
case 3369:
case 2774:
case 758:
case 40:
case 3000:
case 1609:
case 11:
case 3873:
case 239:
case 2366:
case 2937:
case 2398:
case 2553:
case 961:
case 2481:
case 4053:
case 2701:
case 1562:
case 2113:
case 2162:
case 2834:
case 1658:
case 633:
case 1249:
case 1:
case 1874:
case 2715:
case 2903:
case 2525:
case 2265:
case 3492:
case 1125:
case 2744:
case 1921:
case 1755:
case 3514:
case 4025:
case 1590:
case 2190:
case 1297:
case 3724:
case 654:
case 1409:
case 3025:
case 2876:
case 130:
case 1054:
case 806:
case 2045:
case 840:
case 2732:
case 2950:
case 1069:
case 1746:
case 878:
case 1273:
case 1772:
case 1910:
case 2681:
case 3053:
case 835:
case 2418:
case 3886:
case 3897:
case 1458:
case 500:
case 3739:
case 1359:
case 1100:
case 2500:
case 2829:
case 3906:
case 2319:
case 30:
case 3274:
case 2508:
case 1108:
case 2075:
case 1832:
case 3826:
case 2891:
case 3316:
case 2909:
case 86:
case 2872:
case 1776:
case 1243:
case 1637:
case 704:
case 2889:
case 3112:
case 3163:
case 250:
case 995:
case 2736:
case 3882:
case 608:
case 3668:
case 1159:
case 4064:
case 3215:
case 1603:
case 872:
case 2621:
case 676:
case 3902:
case 851:
case 1164:
case 815:
case 2564:
case 757:
case 1968:
case 1375:
case 713:
case 1807:
case 1229:
case 2169:
case 3834:
case 2545:
case 1145:
case 1941:
case 3190:
case 2514:
case 4014:
case 3744:
case 1602:
case 822:
case 3903:
case 1996:
case 856:
case 2000:
case 441:
case 3162:
case 3113:
case 2236:
case 3447:
case 3481:
case 1904:
case 3553:
case 1242:
case 1276:
case 2460:
case 3239:
case 685:
case 1314:
case 3052:
case 1345:
case 541:
case 3421:
case 2487:
case 2135:
case 733:
case 2496:
case 2931:
case 1606:
case 3693:
case 4075:
case 1971:
case 2707:
case 2575:
case 1175:
case 2008:
case 900:
case 2064:
case 1289:
case 495:
case 3362:
case 2404:
case 1694:
case 1272:
case 658:
case 1927:
case 946:
case 1246:
case 1291:
case 2784:
case 319:
case 1019:
case 2232:
case 17:
case 3384:
case 1866:
case 2263:
case 2523:
case 3457:
case 1898:
case 1039:
case 2101:
case 1501:
case 2905:
case 2762:
case 1252:
case 2079:
case 3630:
case 429:
case 3072:
case 3307:
case 1334:
case 3046:
case 1383:
case 3091:
case 3875:
case 1155:
case 2555:
case 782:
case 1951:
case 594:
case 1680:
case 2115:
case 731:
case 162:
case 3754:
case 1515:
case 1544:
case 4055:
case 2144:
case 1725:
case 2798:
case 443:
case 1813:
case 1065:
case 494:
case 168:
case 28:
case 1620:
case 529:
case 788:
case 279:
case 3029:
case 2216:
case 3184:
case 2022:
case 3814:
case 684:
case 2315:
case 711:
case 673:
case 4034:
case 4083:
case 979:
case 597:
case 3107:
case 1386:
case 3043:
case 1938:
case 716:
case 1182:
case 1349:
case 817:
case 297:
case 4082:
case 623:
case 3336:
case 2852:
case 3988:
case 1044:
case 2298:
case 3591:
case 3808:
case 3132:
case 579:
case 1470:
case 3967:
case 2430:
case 3572:
case 1756:
case 3546:
case 58:
case 3920:
case 1617:
case 3719:
case 1478:
case 3269:
case 2948:
case 837:
case 1149:
case 3928:
case 1382:
case 243:
case 2961:
case 1197:
case 2597:
case 1379:
case 2586:
case 814:
case 294:
case 1186:
case 3651:
case 1816:
case 1326:
case 12:
case 1074:
case 1253:
case 3542:
case 4022:
case 1122:
case 3495:
case 2522:
case 2763:
case 2638:
case 2076:
case 2042:
case 886:
case 1854:
case 3315:
case 2814:
case 3022:
case 1507:
case 2107:
case 1775:
case 3583:
case 1869:
case 3534:
case 3451:
case 3174:
case 263:
case 1343:
case 3086:
case 3097:
case 492:
case 1533:
case 4073:
case 2184:
case 2029:
case 669:
case 3766:
case 1957:
case 963:
case 3049:
case 38:
case 2917:
case 2875:
case 773:
case 2219:
case 1648:
case 1259:
case 2307:
case 1835:
case 1661:
case 611:
case 784:
case 592:
case 2089:
case 1745:
case 2124:
case 3555:
case 655:
case 2630:
case 3079:
case 1143:
case 3762:
case 3905:
case 2457:
case 1670:
case 3523:
case 3856:
case 1708:
case 1346:
case 3712:
case 170:
case 4042:
case 3522:
case 4076:
case 3213:
case 2136:
case 1176:
case 992:
case 1389:
case 1142:
case 2928:
case 1759:
case 4029:
case 2800:
case 1084:
case 2529:
case 1129:
case 1033:
case 723:
case 3290:
case 3586:
case 875:
case 1764:
case 2254:
case 2980:
case 3339:
case 3961:
case 616:
case 1189:
case 1024:
case 749:
case 3852:
case 2336:
case 2920:
case 1146:
case 298:
case 818:
case 2546:
case 2572:
case 3430:
case 2967:
case 4072:
case 3526:
case 79:
case 3266:
case 3940:
case 2808:
case 2591:
case 3716:
case 1995:
case 3365:
case 832:
case 3139:
case 1428:
case 3579:
case 881:
case 998:
case 1480:
case 2235:
case 142:
case 1329:
case 2859:
case 1275:
case 3582:
case 2667:
case 1049:
case 2256:
case 3584:
case 1216:
case 3533:
case 3957:
case 76:
case 2862:
case 1086:
case 2323:
case 1853:
case 2688:
case 2065:
case 1174:
case 2574:
case 593:
case 2411:
case 3775:
case 3869:
case 1451:
case 3200:
case 2183:
case 4074:
case 42:
case 1583:
case 367:
case 751:
case 2890:
case 772:
case 715:
case 2355:
case 1825:
case 3854:
case 2501:
case 1101:
case 706:
case 1762:
case 1713:
case 1905:
case 1523:
case 2123:
case 320:
case 2039:
case 1079:
case 3143:
case 2252:
case 1885:
case 27:
case 444:
case 52:
case 3373:
case 807:
case 289:
case 778:
case 3208:
case 3524:
case 3264:
case 735:
case 2725:
case 2544:
case 2680:
case 1911:
case 262:
case 1115:
case 3259:
case 2628:
case 97:
case 3032:
case 1374:
case 3648:
case 1339:
case 2565:
case 1961:
case 143:
case 2186:
case 3214:
case 1597:
case 2379:
case 3764:
case 3245:
case 833:
case 3084:
case 3129:
case 2382:
case 92:
case 1438:
case 3759:
case 3420:
case 2752:
case 3142:
case 2930:
case 370:
case 1712:
case 2440:
case 1970:
case 947:
case 3536:
case 3605:
case 1213:
case 2122:
case 3007:
case 589:
case 3708:
case 728:
case 3346:
case 1083:
case 1856:
case 197:
case 857:
case 2182:
case 2349:
case 627:
case 342:
case 3480:
case 2461:
case 293:
case 3329:
case 3428:
case 2179:
case 1579:
case 722:
case 1365:
case 2001:
case 2539:
case 1139:
case 1657:
case 2470:
case 699:
case 3995:
case 3191:
case 2617:
case 568:
case 2756:
case 3172:
case 2285:
case 1430:
case 993:
case 1852:
case 2044:
case 2863:
case 3376:
case 1754:
case 876:
case 3544:
case 821:
case 3725:
case 920:
case 615:
case 2745:
case 2264:
case 1091:
case 1875:
case 1219:
case 1307:
case 3628:
case 777:
case 2835:
case 2259:
case 3383:
case 548:
case 3039:
case 1457:
case 570:
case 220:
case 3501:
case 442:
case 3866:
case 1384:
case 37:
case 66:
case 267:
case 3134:
case 2869:
case 1107:
case 2775:
case 470:
case 774:
case 2854:
case 635:
case 2036:
case 1814:
case 2678:
case 448:
case 3890:
case 2640:
case 2533:
case 1029:
case 2584:
case 640:
case 1184:
case 4033:
case 1573:
case 368:
case 4084:
case 3785:
case 3667:
case 3065:
case 606:
case 3688:
case 802:
case 2343:
case 3813:
case 628:
case 2172:
case 1967:
case 3617:
case 1546:
case 858:
case 198:
case 1591:
case 2995:
case 3470:
case 3863:
case 180:
case 2024:
case 1589:
case 2342:
case 2189:
case 3015:
case 3322:
case 1988:
case 760:
case 1336:
case 2329:
case 3461:
case 2480:
case 2819:
case 3349:
case 3182:
case 344:
case 567:
case 1864:
case 3938:
case 420:
case 3179:
case 2428:
case 1495:
case 3122:
case 2605:
case 1136:
case 2536:
case 520:
case 74:
case 3930:
case 1542:
case 2389:
case 2142:
case 4036:
case 2391:
case 2488:
case 32:
case 799:
case 3816:
case 2708:
case 2007:
case 3379:
case 564:
case 970:
case 3186:
case 347:
case 656:
case 3225:
case 871:
case 622:
case 826:
case 1254:
case 852:
case 1980:
case 2611:
case 948:
case 1073:
case 727:
case 3149:
case 1928:
case 1269:
case 873:
case 1274:
case 2234:
case 3359:
case 2283:
case 2782:
case 345:
case 1671:
case 2013:
case 1886:
case 3458:
case 1053:
case 725:
case 4016:
case 1660:
case 3910:
case 1627:
case 2156:
case 3308:
case 559:
case 2516:
case 53:
case 1363:
case 330:
case 2255:
case 786:
case 2797:
case 2839:
case 2406:
case 1696:
case 3603:
case 166:
case 391:
case 1085:
case 5:
case 3918:
case 887:
case 1882:
case 1201:
case 2722:
case 3776:
case 2152:
case 3243:
case 2494:
case 3742:
case 4063:
case 1604:
case 51:
case 3035:
case 1826:
case 2356:
case 3904:
case 3242:
case 1553:
case 1481:
case 3743:
case 4013:
case 3276:
case 965:
case 2977:
case 2222:
case 1113:
case 2562:
case 2723:
case 3884:
case 139:
case 9:
case 21:
case 1499:
case 2125:
case 3602:
case 161:
case 732:
case 2921:
case 4090:
case 3987:
case 3996:
case 1715:
case 2297:
case 781:
case 3941:
case 3145:
case 265:
case 3114:
case 2286:
case 2755:
case 2590:
case 3807:
case 3229:
case 2016:
case 1618:
case 637:
case 3968:
case 91:
case 2947:
case 2650:
case 3019:
case 2226:
case 119:
case 2566:
case 3960:
case 1362:
case 1313:
case 2999:
case 2801:
case 2353:
case 2598:
case 3289:
case 1823:
case 617:
case 93:
case 3971:
case 823:
case 3606:
case 1693:
case 3314:
case 1052:
case 775:
case 2844:
case 1390:
case 2012:
case 2325:
case 712:
case 2742:
case 2637:
case 3152:
case 2450:
case 1677:
case 210:
case 890:
case 2832:
case 1508:
case 1872:
case 2035:
case 1846:
case 1909:
case 291:
case 3406:
case 1564:
case 855:
case 3839:
case 195:
case 625:
case 3255:
case 309:
case 2729:
case 1559:
case 2918:
case 2159:
case 3749:
case 2791:
case 1233:
case 2069:
case 3726:
case 2772:
case 3156:
case 2273:
case 230:
case 2409:
case 2836:
case 3352:
case 1014:
case 2789:
case 496:
case 245:
case 3283:
case 1319:
case 686:
case 1418:
case 882:
case 2458:
case 3013:
case 3062:
case 1135:
case 3403:
case 1496:
case 1487:
case 3734:
case 1441:
case 2971:
case 1707:
case 3282:
case 2175:
case 1575:
case 737:
case 632:
case 3325:
case 1354:
case 3012:
case 3063:
case 3279:
case 3815:
case 681:
case 3844:
case 3437:
case 2773:
case 2694:
case 618:
case 359:
case 3226:
case 2019:
case 3947:
case 33:
case 2289:
case 3353:
case 805:
case 491:
case 1843:
case 3590:
case 3755:
case 3286:
case 2114:
case 2145:
case 1724:
case 1545:
case 430:
case 1471:
case 2941:
case 3297:
case 2554:
case 1154:
case 2996:
case 591:
case 612:
case 3125:
case 2968:
case 3249:
case 717:
case 3874:
case 2569:
case 2229:
case 1335:
case 753:
case 2807:
case 3658:
case 510:
case 3562:
case 3977:
case 2276:
case 1460:
case 996:
case 1427:
case 2242:
case 3153:
case 3609:
case 3361:
case 3449:
case 334:
case 1674:
case 3348:
case 2683:
case 317:
case 1858:
case 880:
case 932:
case 2188:
case 1588:
case 425:
case 981:
case 4095:
case 1946:
case 2476:
case 1520:
case 1227:
case 1972:
case 2932:
case 3140:
case 71:
case 1991:
case 3479:
case 1268:
case 1718:
case 1929:
case 2758:
case 2057:
case 314:
case 2655:
case 525:
case 1241:
case 1580:
case 212:
case 126:
case 1296:
case 152:
case 1615:
case 3965:
case 3702:
case 696:
case 171:
case 3161:
case 1287:
case 759:
case 3340:
case 73:
case 2367:
case 2489:
case 3426:
case 3170:
case 486:
case 2491:
case 1601:
case 912:
case 3643:
case 1976:
case 1204:
case 2472:
case 3530:
case 2317:
case 1357:
case 3881:
case 303:
case 3642:
case 432:
case 3038:
case 1943:
case 2473:
case 925:
case 2622:
case 1484:
case 2871:
case 2095:
case 3629:
case 418:
case 1020:
case 2892:
case 108:
case 1088:
case 3944:
case 3703:
case 176:
case 1741:
case 575:
case 3434:
case 102:
case 2804:
case 3305:
case 630:
case 3877:
case 2250:
case 1210:
case 4057:
case 3294:
case 3672:
case 1973:
case 2117:
case 1760:
case 581:
case 286:
case 3030:
case 532:
case 2841:
case 438:
case 709:
case 1792:
case 3974:
case 1293:
case 2868:
case 3320:
case 338:
case 3367:
case 61:
case 3709:
case 1130:
case 2643:
case 1922:
case 1277:
case 3936:
case 2170:
case 3623:
case 2426:
case 2148:
case 6:
case 1806:
case 2479:
case 3128:
case 1561:
case 843:
case 2965:
case 2378:
case 312:
case 3180:
case 1624:
case 1986:
case 665:
case 2370:
case 1011:
case 3188:
case 2051:
case 1330:
case 1247:
case 3595:
case 917:
case 3932:
case 3120:
case 3476:
case 2673:
case 1138:
case 2538:
case 234:
case 4038:
case 1578:
case 1607:
case 3328:
case 1982:
case 217:
case 897:
case 2486:
case 157:
case 3683:
case 3634:
case 1465:
case 113:
case 2706:
case 1070:
case 534:
case 2821:
case 1444:
case 553:
case 2974:
case 2455:
case 1934:
case 3682:
case 1799:
case 710:
case 1061:
case 3443:
case 2672:
case 1781:
case 879:
case 2423:
case 1632:
case 1401:
case 1048:
case 537:
case 2483:
case 3686:
case 2915:
case 1721:
case 203:
case 417:
case 3209:
case 2881:
case 107:
case 730:
case 3622:
case 2901:
case 2737:
case 2676:
case 2038:
case 451:
case 3998:
case 1304:
case 415:
case 3599:
case 201:
case 2527:
case 2267:
case 1127:
case 2656:
case 2560:
case 578:
case 1616:
case 1295:
case 4060:
case 3547:
case 1757:
case 72:
case 136:
case 1396:
case 3851:
case 1469:
case 535:
case 747:
case 642:
case 1009:
case 1531:
case 2131:
case 1454:
case 846:
case 4071:
case 2935:
case 1368:
case 1171:
case 2571:
case 3600:
case 327:
case 46:
case 2414:
case 4092:
case 2093:
case 1817:
case 1360:
case 1327:
case 3577:
case 670:
case 3962:
case 360:
case 3485:
case 648:
case 956:
case 3137:
case 440:
case 2568:
case 1371:
case 2331:
case 793:
case 478:
case 2969:
case 3248:
case 2541:
case 3664:
case 406:
case 1914:
case 4087:
case 3990:
case 1187:
case 551:
case 3521:
case 3261:
case 572:
case 2596:
case 2954:
case 222:
case 3047:
case 3748:
case 2158:
case 1393:
case 2919:
case 2027:
case 2060:
case 1118:
case 2518:
case 556:
case 272:
case 2625:
case 3099:
case 111:
case 3761:
case 374:
case 401:
case 2400:
case 3645:
case 895:
case 215:
case 1964:
case 1310:
case 1908:
case 26:
case 1509:
case 2092:
case 188:
case 1031:
case 972:
case 2653:
case 951:
case 850:
case 1662:
case 1880:
case 2459:
case 3778:
case 762:
case 131:
case 3675:
case 2358:
case 2593:
case 3106:
case 1828:
case 2087:
case 935:
case 501:
case 3021:
case 2096:
case 2408:
case 422:
case 4010:
case 169:
case 1795:
case 2150:
case 3452:
case 278:
case 528:
case 2217:
case 2767:
case 1110:
case 2068:
case 3969:
case 742:
case 3331:
case 3010:
case 3568:
case 1094:
case 583:
case 3954:
case 356:
case 2711:
case 3587:
case 2261:
case 1121:
case 2521:
case 861:
case 574:
case 2990:
case 4021:
case 1751:
case 960:
case 224:
case 2664:
case 3475:
case 3541:
case 1498:
case 1347:
case 19:
case 1006:
case 839:
case 62:
case 3652:
case 1537:
case 4077:
case 2485:
case 3504:
case 149:
case 260:
case 2962:
case 1399:
case 2705:
case 2577:
case 1177:
case 2278:
case 2303:
case 3414:
case 1490:
case 999:
case 2600:
case 3571:
case 3935:
case 693:
case 3592:
case 3288:
case 301:
case 2599:
case 2337:
case 299:
case 819:
case 927:
case 4081:
case 1413:
case 483:
case 3220:
case 3717:
case 3018:
case 2581:
case 3267:
case 3041:
case 3408:
case 2830:
case 1003:
case 424:
case 3788:
case 2021:
case 54:
case 3685:
case 1594:
case 3510:
case 3217:
case 3720:
case 378:
case 2916:
case 1412:
case 599:
case 184:
case 1738:
case 1037:
case 1861:
case 3004:
case 335:
case 764:
case 80:
case 3593:
case 2675:
case 67:
case 983:
case 3092:
case 3109:
case 427:
case 3071:
case 1416:
case 974:
case 2770:
case 560:
case 2963:
case 3653:
case 1730:
case 3728:
case 767:
case 3158:
case 1669:
case 315:
case 2645:
case 1878:
case 274:
case 44:
case 2761:
case 2099:
case 2838:
case 662:
case 351:
case 3625:
case 3780:
case 2211:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759564802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,];
var gg_b = "1759564802/";

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
