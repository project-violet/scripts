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
case 3723:
case 1068:
case 3233:
case 3054:
case 2792:
case 961:
case 2509:
case 742:
case 1529:
case 1685:
case 3700:
case 2738:
case 177:
case 3675:
case 2175:
case 2124:
case 1139:
case 3624:
case 3337:
case 1104:
case 3249:
case 2218:
case 3486:
case 568:
case 775:
case 1587:
case 905:
case 3640:
case 3453:
case 3860:
case 457:
case 2325:
case 1797:
case 3713:
case 1305:
case 3995:
case 3971:
case 1143:
case 1519:
case 3930:
case 1981:
case 2426:
case 3211:
case 1947:
case 186:
case 3745:
case 164:
case 553:
case 2852:
case 1391:
case 1375:
case 918:
case 2304:
case 1541:
case 1535:
case 2632:
case 2247:
case 3132:
case 2579:
case 72:
case 1314:
case 1590:
case 537:
case 272:
case 3288:
case 2942:
case 2416:
case 3294:
case 1174:
case 3605:
case 223:
case 3184:
case 2684:
case 1278:
case 3770:
case 2814:
case 1250:
case 1764:
case 1:
case 1659:
case 2269:
case 674:
case 2196:
case 892:
case 56:
case 2449:
case 3418:
case 236:
case 1471:
case 806:
case 1430:
case 1019:
case 37:
case 1352:
case 1986:
case 1839:
case 1804:
case 955:
case 2433:
case 3267:
case 343:
case 3359:
case 3216:
case 3832:
case 1041:
case 2494:
case 400:
case 3012:
case 3898:
case 3884:
case 827:
case 728:
case 3906:
case 1825:
case 1874:
case 2805:
case 325:
case 2751:
case 116:
case 2765:
case 3022:
case 91:
case 1815:
case 2093:
case 2152:
case 988:
case 2079:
case 3736:
case 1090:
case 3226:
case 2689:
case 2778:
case 1387:
case 3701:
case 3299:
case 3377:
case 3166:
case 1319:
case 1256:
case 2846:
case 836:
case 1505:
case 1747:
case 411:
case 2525:
case 3945:
case 1283:
case 1607:
case 292:
case 354:
case 1329:
case 2742:
case 190:
case 3127:
case 412:
case 1612:
case 3537:
case 2983:
case 608:
case 3641:
case 2141:
case 121:
case 453:
case 2382:
case 398:
case 1390:
case 615:
case 557:
case 4086:
case 197:
case 4053:
case 3464:
case 2297:
case 3619:
case 3148:
case 3923:
case 2648:
case 2393:
case 3244:
case 1718:
case 3322:
case 1134:
case 3629:
case 169:
case 2708:
case 3220:
case 1728:
case 14:
case 3730:
case 3063:
case 3059:
case 2504:
case 1591:
case 1575:
case 1524:
case 2539:
case 1292:
case 3585:
case 533:
case 1005:
case 2025:
case 3762:
case 60:
case 1445:
case 2074:
case 935:
case 2841:
case 3155:
case 2655:
case 1251:
case 2835:
case 1879:
case 658:
case 2890:
case 2473:
case 3889:
case 304:
case 481:
case 3802:
case 1431:
case 340:
case 679:
case 3866:
case 544:
case 4047:
case 1893:
case 3646:
case 1368:
case 1423:
case 823:
case 694:
case 4028:
case 4081:
case 1834:
case 1809:
case 507:
case 148:
case 3958:
case 2420:
case 1014:
case 1040:
case 663:
case 1964:
case 347:
case 2004:
case 1075:
case 2410:
case 1024:
case 685:
case 3776:
case 3085:
case 1769:
case 714:
case 46:
case 2264:
case 871:
case 1596:
case 3848:
case 2750:
case 3668:
case 3563:
case 1346:
case 2168:
case 713:
case 288:
case 2800:
case 1820:
case 3892:
case 2434:
case 2049:
case 1954:
case 349:
case 752:
case 2823:
case 1803:
case 509:
case 36:
case 3968:
case 21:
case 3028:
case 664:
case 1763:
case 686:
case 751:
case 57:
case 3658:
case 2158:
case 1487:
case 1576:
case 1844:
case 3586:
case 2094:
case 1441:
case 2088:
case 303:
case 4037:
case 3636:
case 1562:
case 2651:
case 3407:
case 3165:
case 404:
case 936:
case 1506:
case 381:
case 2493:
case 2567:
case 3422:
case 1899:
case 2831:
case 1358:
case 3856:
case 677:
case 3883:
case 2479:
case 1435:
case 2961:
case 2113:
case 1697:
case 3518:
case 3613:
case 2399:
case 199:
case 1331:
case 1468:
case 616:
case 559:
case 1110:
case 578:
case 765:
case 2972:
case 1144:
case 2373:
case 3714:
case 4059:
case 2858:
case 218:
case 368:
case 3600:
case 3053:
case 2638:
case 3138:
case 2533:
case 3987:
case 945:
case 167:
case 498:
case 3791:
case 3209:
case 1977:
case 3623:
case 3528:
case 2123:
case 3581:
case 701:
case 2692:
case 1272:
case 1595:
case 1345:
case 262:
case 1062:
case 1313:
case 3397:
case 3547:
case 1199:
case 160:
case 2798:
case 2784:
case 1912:
case 1289:
case 439:
case 2170:
case 2222:
case 3183:
case 2588:
case 205:
case 2521:
case 3941:
case 1202:
case 2310:
case 1173:
case 3293:
case 1217:
case 3156:
case 2656:
case 1266:
case 138:
case 2511:
case 1300:
case 2836:
case 6:
case 337:
case 1227:
case 2207:
case 1323:
case 261:
case 2303:
case 3865:
case 2474:
case 3369:
case 1116:
case 1045:
case 88:
case 3257:
case 731:
case 4022:
case 3746:
case 3952:
case 3386:
case 1894:
case 3878:
case 1811:
case 2073:
case 1536:
case 326:
case 2761:
case 3437:
case 540:
case 1070:
case 504:
case 4012:
case 2099:
case 1031:
case 3080:
case 1669:
case 2259:
case 1754:
case 47:
case 1849:
case 2003:
case 2650:
case 1260:
case 3768:
case 1686:
case 3564:
case 1440:
case 2020:
case 2176:
case 108:
case 2263:
case 1000:
case 1833:
case 3485:
case 2960:
case 1491:
case 1959:
case 2326:
case 409:
case 1963:
case 956:
case 1306:
case 2830:
case 1362:
case 710:
case 1013:
case 2895:
case 1452:
case 2932:
case 185:
case 3215:
case 1111:
case 3142:
case 2727:
case 3905:
case 1395:
case 1371:
case 2984:
case 2998:
case 3328:
case 3381:
case 2806:
case 2766:
case 1570:
case 554:
case 1232:
case 1647:
case 3580:
case 2702:
case 81:
case 1722:
case 1867:
case 2789:
case 2573:
case 2678:
case 2457:
case 163:
case 2101:
case 3601:
case 3274:
case 357:
case 598:
case 3940:
case 158:
case 1500:
case 3204:
case 2195:
case 3671:
case 179:
case 2503:
case 992:
case 1628:
case 1523:
case 2130:
case 2285:
case 3630:
case 3719:
case 3463:
case 3850:
case 459:
case 10:
case 434:
case 1496:
case 776:
case 1618:
case 3597:
case 920:
case 1985:
case 2876:
case 3243:
case 3787:
case 855:
case 3991:
case 2510:
case 478:
case 1301:
case 3924:
case 2544:
case 2394:
case 1777:
case 2322:
case 1749:
case 716:
case 3992:
case 2244:
case 3393:
case 1317:
case 602:
case 3648:
case 1366:
case 3297:
case 1177:
case 3379:
case 2464:
case 1920:
case 3938:
case 1223:
case 2585:
case 2203:
case 1733:
case 2172:
case 1910:
case 3504:
case 2059:
case 2220:
case 1609:
case 119:
case 2913:
case 601:
case 306:
case 2102:
case 3617:
case 1598:
case 1693:
case 4016:
case 1721:
case 1794:
case 1788:
case 1532:
case 1679:
case 3280:
case 2635:
case 524:
case 933:
case 2189:
case 1270:
case 3190:
case 957:
case 1973:
case 3057:
case 1372:
case 2861:
case 3141:
case 7:
case 2641:
case 3983:
case 809:
case 462:
case 239:
case 4026:
case 2931:
case 3742:
case 254:
case 1465:
case 392:
case 2872:
case 4033:
case 247:
case 926:
case 1438:
case 2958:
case 12:
case 29:
case 2563:
case 2668:
case 1258:
case 41:
case 764:
case 2497:
case 2776:
case 535:
case 1560:
case 1877:
case 3004:
case 488:
case 2559:
case 175:
case 2155:
case 3661:
case 2161:
case 3841:
case 3074:
case 2827:
case 1807:
case 1084:
case 1812:
case 141:
case 859:
case 834:
case 240:
case 3499:
case 1767:
case 2480:
case 2354:
case 3965:
case 3951:
case 907:
case 3890:
case 1483:
case 3304:
case 1137:
case 345:
case 1994:
case 968:
case 2507:
case 114:
case 1527:
case 562:
case 2211:
case 371:
case 3426:
case 930:
case 3343:
case 1566:
case 3593:
case 2184:
case 3698:
case 446:
case 1502:
case 2731:
case 561:
case 1799:
case 3105:
case 2294:
case 2288:
case 1674:
case 3416:
case 3942:
case 847:
case 687:
case 3756:
case 748:
case 424:
case 1773:
case 2132:
case 3247:
case 3632:
case 1055:
case 3783:
case 1604:
case 3124:
case 1572:
case 3175:
case 1271:
case 3191:
case 2675:
case 1720:
case 2700:
case 3582:
case 3228:
case 937:
case 1949:
case 259:
case 3509:
case 3792:
case 911:
case 2233:
case 680:
case 912:
case 1398:
case 3908:
case 2971:
case 2995:
case 3374:
case 2713:
case 3325:
case 953:
case 529:
case 2486:
case 2577:
case 769:
case 631:
case 3805:
case 1027:
case 2884:
case 2363:
case 1926:
case 2898:
case 2012:
case 3494:
case 2832:
case 3421:
case 2359:
case 243:
case 617:
case 1478:
case 555:
case 1360:
case 2736:
case 797:
case 949:
case 632:
case 1066:
case 1967:
case 3765:
case 3751:
case 225:
case 2418:
case 3449:
case 209:
case 2696:
case 854:
case 3196:
case 1276:
case 839:
case 3253:
case 3269:
case 435:
case 3660:
case 721:
case 2160:
case 3082:
case 4010:
case 3814:
case 903:
case 2976:
case 1885:
case 3891:
case 2077:
case 773:
case 2428:
case 27:
case 2481:
case 1408:
case 4003:
case 1153:
case 837:
case 2676:
case 1038:
case 2564:
case 3443:
case 2768:
case 436:
case 3650:
case 2150:
case 1818:
case 3367:
case 1092:
case 3259:
case 1169:
case 2097:
case 3895:
case 1881:
case 4034:
case 812:
case 4009:
case 2808:
case 335:
case 3044:
case 2485:
case 853:
case 2353:
case 1432:
case 3801:
case 767:
case 2952:
case 183:
case 1484:
case 2257:
case 99:
case 3425:
case 196:
case 628:
case 2369:
case 3474:
case 1616:
case 1565:
case 3162:
case 1551:
case 2842:
case 200:
case 3099:
case 2606:
case 1626:
case 1083:
case 1957:
case 947:
case 2630:
case 1181:
case 642:
case 1128:
case 3503:
case 2108:
case 3608:
case 1291:
case 1709:
case 2695:
case 2671:
case 3195:
case 1224:
case 2729:
case 1782:
case 2940:
case 3520:
case 2914:
case 1633:
case 3772:
case 257:
case 2064:
case 3394:
case 3544:
case 2924:
case 1939:
case 2975:
case 1853:
case 2787:
case 3876:
case 675:
case 881:
case 641:
case 1869:
case 2850:
case 2719:
case 3806:
case 3998:
case 2905:
case 3727:
case 591:
case 3642:
case 1974:
case 2142:
case 3237:
case 520:
case 1611:
case 3333:
case 2741:
case 1621:
case 62:
case 1694:
case 2274:
case 1779:
case 2735:
case 445:
case 3678:
case 3789:
case 2790:
case 1556:
case 3349:
case 2318:
case 1065:
case 1051:
case 152:
case 86:
case 471:
case 3702:
case 1147:
case 3599:
case 250:
case 592:
case 4015:
case 1427:
case 2047:
case 3845:
case 176:
case 3665:
case 2151:
case 1078:
case 203:
case 355:
case 3021:
case 3094:
case 2364:
case 3479:
case 2856:
case 1489:
case 857:
case 3831:
case 1880:
case 1042:
case 3567:
case 282:
case 4074:
case 456:
case 3493:
case 4025:
case 1466:
case 909:
case 925:
case 3409:
case 3049:
case 3434:
case 1351:
case 2892:
case 4039:
case 2838:
case 3800:
case 4004:
case 763:
case 2477:
case 1164:
case 3158:
case 2553:
case 2658:
case 943:
case 1897:
case 4043:
case 2796:
case 1550:
case 1448:
case 614:
case 2081:
case 2028:
case 4057:
case 2156:
case 545:
case 2293:
case 3344:
case 3310:
case 253:
case 3521:
case 3588:
case 2183:
case 3683:
case 3594:
case 3222:
case 3170:
case 75:
case 3798:
case 492:
case 2631:
case 1180:
case 2705:
case 3927:
case 2547:
case 2279:
case 110:
case 2397:
case 1774:
case 1725:
case 2645:
case 1241:
case 3902:
case 1392:
case 1993:
case 406:
case 934:
case 361:
case 959:
case 1461:
case 1455:
case 978:
case 3320:
case 1338:
case 2990:
case 1219:
case 3858:
case 3373:
case 2714:
case 715:
case 800:
case 684:
case 2454:
case 3399:
case 230:
case 2613:
case 1197:
case 3549:
case 2518:
case 1934:
case 2929:
case 3113:
case 3692:
case 38:
case 1050:
case 3123:
case 3948:
case 2623:
case 1704:
case 2086:
case 2234:
case 1739:
case 117:
case 329:
case 2775:
case 2987:
case 3100:
case 268:
case 695:
case 2230:
case 3104:
case 3139:
case 2572:
case 1624:
case 1675:
case 2271:
case 1691:
case 682:
case 3068:
case 1723:
case 599:
case 3529:
case 134:
case 159:
case 40:
case 1971:
case 681:
case 841:
case 1469:
case 1713:
case 1930:
case 2548:
case 3143:
case 3928:
case 3519:
case 2744:
case 4058:
case 2332:
case 2859:
case 1577:
case 1453:
case 1860:
case 603:
case 463:
case 4036:
case 2921:
case 2988:
case 2137:
case 1901:
case 3391:
case 393:
case 3406:
case 2615:
case 3462:
case 214:
case 386:
case 3780:
case 2502:
case 2201:
case 2799:
case 3174:
case 3125:
case 66:
case 1770:
case 574:
case 1198:
case 1132:
case 538:
case 3535:
case 82:
case 3857:
case 485:
case 3590:
case 2911:
case 2773:
case 3314:
case 980:
case 3029:
case 1418:
case 45:
case 1554:
case 792:
case 3659:
case 3:
case 2072:
case 408:
case 3986:
case 3839:
case 3352:
case 3953:
case 653:
case 1976:
case 3087:
case 2885:
case 3471:
case 3969:
case 17:
case 1481:
case 2408:
case 1906:
case 3396:
case 4031:
case 2926:
case 819:
case 1884:
case 1012:
case 727:
case 1962:
case 828:
case 4070:
case 3825:
case 2027:
case 415:
case 1832:
case 2657:
case 3157:
case 143:
case 3035:
case 2262:
case 1652:
case 2089:
case 3090:
case 2206:
case 284:
case 316:
case 2442:
case 2916:
case 125:
case 2066:
case 630:
case 2017:
case 1273:
case 3256:
case 3319:
case 3622:
case 3387:
case 1690:
case 322:
case 2679:
case 1299:
case 2231:
case 373:
case 1635:
case 2372:
case 1861:
case 2245:
case 321:
case 607:
case 3436:
case 1931:
case 3980:
case 139:
case 390:
case 3329:
case 2451:
case 3607:
case 2465:
case 2107:
case 2112:
case 594:
case 866:
case 1148:
case 1619:
case 644:
case 1923:
case 884:
case 2749:
case 2854:
case 1210:
case 2302:
case 1244:
case 2920:
case 1687:
case 1900:
case 2389:
case 198:
case 3390:
case 467:
case 4076:
case 2213:
case 3524:
case 2910:
case 3575:
case 1059:
case 1203:
case 2733:
case 2060:
case 1771:
case 369:
case 1795:
case 2609:
case 951:
case 50:
case 2327:
case 3134:
case 1913:
case 1629:
case 2634:
case 1307:
case 1730:
case 1312:
case 3728:
case 34:
case 2200:
case 1220:
case 633:
case 1155:
case 1161:
case 3265:
case 2098:
case 1706:
case 2812:
case 2726:
case 241:
case 1762:
case 3005:
case 2807:
case 2822:
case 1354:
case 1802:
case 242:
case 3893:
case 1817:
case 3368:
case 1866:
case 2456:
case 657:
case 515:
case 3882:
case 2438:
case 965:
case 3400:
case 3964:
case 650:
case 4095:
case 723:
case 4030:
case 3834:
case 2154:
case 901:
case 3654:
case 3413:
case 1668:
case 3346:
case 1563:
case 771:
case 814:
case 1848:
case 996:
case 3024:
case 3091:
case 1559:
case 983:
case 1018:
case 2365:
case 16:
case 1968:
case 3803:
case 2472:
case 287:
case 4024:
case 1838:
case 3576:
case 995:
case 1658:
case 2268:
case 3844:
case 1477:
case 3810:
case 3759:
case 724:
case 448:
case 2164:
case 1796:
case 3419:
case 1081:
case 3763:
case 3095:
case 2897:
case 3071:
case 746:
case 1047:
case 1407:
case 3261:
case 1151:
case 3255:
case 3562:
case 33:
case 1946:
case 103:
case 1752:
case 2078:
case 678:
case 659:
case 2880:
case 2402:
case 182:
case 2644:
case 3144:
case 2610:
case 2864:
case 2219:
case 577:
case 3248:
case 2356:
case 1740:
case 44:
case 3697:
case 1518:
case 2197:
case 3370:
case 469:
case 2743:
case 2287:
case 802:
case 896:
case 2603:
case 2050:
case 1581:
case 3530:
case 231:
case 1623:
case 1528:
case 1919:
case 1069:
case 3345:
case 801:
case 3120:
case 2620:
case 3076:
case 1053:
case 2229:
case 2739:
case 217:
case 3501:
case 735:
case 3202:
case 421:
case 2673:
case 1279:
case 3199:
case 360:
case 2774:
case 3313:
case 1397:
case 490:
case 586:
case 3006:
case 564:
case 570:
case 3922:
case 374:
case 1865:
case 2392:
case 2338:
case 338:
case 473:
case 2455:
case 2979:
case 1935:
case 137:
case 3821:
case 4090:
case 2432:
case 3888:
case 3894:
case 1386:
case 729:
case 4035:
case 817:
case 1878:
case 3376:
case 718:
case 2667:
case 3405:
case 296:
case 2616:
case 3045:
case 3116:
case 1746:
case 2350:
case 1606:
case 989:
case 3126:
case 2626:
case 2565:
case 144:
case 2252:
case 2551:
case 202:
case 3031:
case 1080:
case 4041:
case 2056:
case 315:
case 265:
case 2083:
case 92:
case 548:
case 3686:
case 4087:
case 3000:
case 3653:
case 308:
case 3414:
case 2296:
case 3440:
case 3849:
case 2818:
case 3754:
case 2169:
case 1768:
case 3260:
case 761:
case 942:
case 1150:
case 639:
case 4029:
case 3306:
case 2881:
case 2828:
case 1996:
case 3963:
case 1097:
case 3362:
case 762:
case 4:
case 1485:
case 3833:
case 705:
case 3395:
case 1905:
case 3707:
case 2925:
case 3545:
case 69:
case 3330:
case 1328:
case 470:
case 3712:
case 2308:
case 385:
case 1215:
case 2611:
case 522:
case 3298:
case 1178:
case 3284:
case 493:
case 3121:
case 1274:
case 3937:
case 3188:
case 2205:
case 213:
case 2793:
case 71:
case 2915:
case 3722:
case 1318:
case 394:
case 1580:
case 4046:
case 1671:
case 1695:
case 379:
case 2592:
case 1239:
case 2342:
case 2734:
case 3681:
case 2943:
case 3523:
case 1108:
case 640:
case 157:
case 3500:
case 3058:
case 1940:
case 3133:
case 2460:
case 1787:
case 2378:
case 1243:
case 2904:
case 1459:
case 3301:
case 1924:
case 2886:
case 133:
case 1991:
case 2214:
case 876:
case 3496:
case 2240:
case 569:
case 1463:
case 2649:
case 3149:
case 1597:
case 54:
case 2869:
case 297:
case 2335:
case 2677:
case 2458:
case 2390:
case 2514:
case 1938:
case 1187:
case 3920:
case 1992:
case 725:
case 431:
case 4050:
case 3749:
case 1119:
case 1648:
case 1543:
case 3903:
case 816:
case 1393:
case 3317:
case 1708:
case 3200:
case 2728:
case 24:
case 3634:
case 2997:
case 1129:
case 2134:
case 2109:
case 3060:
case 3733:
case 985:
case 2182:
case 743:
case 2575:
case 2591:
case 1672:
case 2524:
case 1280:
case 273:
case 3231:
case 1135:
case 3532:
case 222:
case 3270:
case 1689:
case 1778:
case 2387:
case 2747:
case 2505:
case 1525:
case 1574:
case 3122:
case 2283:
case 2622:
case 1666:
case 3348:
case 191:
case 2256:
case 1617:
case 77:
case 3584:
case 552:
case 2612:
case 979:
case 3465:
case 192:
case 2607:
case 3451:
case 1334:
case 290:
case 1627:
case 3999:
case 2436:
case 3711:
case 1983:
case 1141:
case 3245:
case 958:
case 3372:
case 1829:
case 2834:
case 4008:
case 389:
case 870:
case 1403:
case 1420:
case 2014:
case 915:
case 3438:
case 2882:
case 3560:
case 893:
case 2753:
case 2786:
case 2075:
case 3877:
case 1410:
case 2024:
case 1750:
case 864:
case 1819:
case 2596:
case 1168:
case 646:
case 2413:
case 2769:
case 1025:
case 2445:
case 341:
case 3726:
case 3236:
case 3812:
case 596:
case 2552:
case 2251:
case 1655:
case 375:
case 1890:
case 565:
case 1835:
case 2470:
case 1146:
case 2893:
case 759:
case 2431:
case 734:
case 1499:
case 3767:
case 3822:
case 286:
case 264:
case 2115:
case 2046:
case 2406:
case 2375:
case 293:
case 1852:
case 1339:
case 2324:
case 145:
case 2541:
case 3921:
case 413:
case 967:
case 2314:
case 3773:
case 2340:
case 1756:
case 1783:
case 2857:
case 3055:
case 1684:
case 3517:
case 1698:
case 999:
case 1343:
case 2125:
case 2174:
case 1416:
case 270:
case 3201:
case 1105:
case 3502:
case 2780:
case 123:
case 704:
case 3949:
case 2529:
case 2068:
case 532:
case 3295:
case 3271:
case 3639:
case 2139:
case 1124:
case 2104:
case 1281:
case 3720:
case 2208:
case 3933:
case 2476:
case 517:
case 3710:
case 3744:
case 1908:
case 3384:
case 3863:
case 3643:
case 2143:
case 2305:
case 3657:
case 2041:
case 1488:
case 3478:
case 2825:
case 2874:
case 1805:
case 869:
case 3926:
case 2396:
case 576:
case 580:
case 3066:
case 3442:
case 366:
case 1765:
case 216:
case 384:
case 401:
case 3206:
case 798:
case 483:
case 897:
case 3089:
case 3561:
case 3262:
case 3837:
case 2035:
case 1079:
case 821:
case 3159:
case 1660:
case 1449:
case 661:
case 2029:
case 1034:
case 890:
case 1253:
case 2568:
case 3163:
case 2663:
case 2843:
case 1196:
case 3276:
case 3408:
case 2430:
case 2019:
case 136:
case 2495:
case 93:
case 2087:
case 822:
case 873:
case 2352:
case 1875:
case 1824:
case 2986:
case 2804:
case 1650:
case 1003:
case 2023:
case 2669:
case 1367:
case 2849:
case 3296:
case 1020:
case 208:
case 2558:
case 2653:
case 838:
case 52:
case 2475:
case 2959:
case 4072:
case 620:
case 712:
case 691:
case 1871:
case 860:
case 25:
case 1326:
case 2306:
case 3484:
case 484:
case 4002:
case 2116:
case 2045:
case 3847:
case 3616:
case 1425:
case 4066:
case 2167:
case 768:
case 575:
case 383:
case 1801:
case 948:
case 3957:
case 215:
case 3056:
case 1073:
case 2811:
case 2536:
case 1162:
case 302:
case 4027:
case 2070:
case 3626:
case 899:
case 2126:
case 1311:
case 2500:
case 2523:
case 3128:
case 1130:
case 3734:
case 3291:
case 1171:
case 279:
case 3869:
case 528:
case 2513:
case 519:
case 656:
case 20:
case 781:
case 2496:
case 3214:
case 3886:
case 1544:
case 2301:
case 703:
case 3904:
case 2985:
case 3378:
case 3460:
case 3853:
case 3611:
case 124:
case 285:
case 1998:
case 2712:
case 351:
case 2330:
case 146:
case 2545:
case 3925:
case 3974:
case 1237:
case 1727:
case 1862:
case 2371:
case 94:
case 2647:
case 2816:
case 1599:
case 2531:
case 294:
case 1349:
case 2867:
case 3065:
case 1766:
case 1717:
case 3793:
case 1457:
case 313:
case 3205:
case 1101:
case 2188:
case 2937:
case 3694:
case 2194:
case 2121:
case 2284:
case 2298:
case 1136:
case 733:
case 1094:
case 2441:
case 1021:
case 80:
case 441:
case 380:
case 3880:
case 3417:
case 1493:
case 858:
case 2435:
case 1011:
case 9:
case 2873:
case 2358:
case 475:
case 188:
case 2336:
case 1482:
case 863:
case 894:
case 2803:
case 11:
case 750:
case 3351:
case 3365:
case 2071:
case 3897:
case 2763:
case 3550:
case 489:
case 3164:
case 2810:
case 3268:
case 885:
case 2576:
case 1784:
case 1798:
case 2289:
case 3290:
case 3725:
case 2907:
case 3774:
case 260:
case 1927:
case 1131:
case 85:
case 2217:
case 2173:
case 1683:
case 1594:
case 1222:
case 1521:
case 1344:
case 1732:
case 808:
case 2737:
case 3461:
case 1207:
case 977:
case 1212:
case 1836:
case 2300:
case 1989:
case 3338:
case 1320:
case 1145:
case 1016:
case 3241:
case 2922:
case 2323:
case 3993:
case 2370:
case 419:
case 700:
case 1277:
case 3197:
case 2331:
case 299:
case 815:
case 3356:
case 3219:
case 726:
case 2144:
case 1972:
case 317:
case 3229:
case 2977:
case 2785:
case 118:
case 993:
case 1100:
case 1638:
case 3620:
case 2272:
case 2571:
case 2595:
case 2345:
case 1123:
case 331:
case 2103:
case 3508:
case 3050:
case 3603:
case 964:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759377601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,];
var gg_b = "1759377601/";

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
